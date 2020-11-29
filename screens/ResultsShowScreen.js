import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation, route }) => {
  const [result, setResult] = useState(null);

  const id = route.params.id;

  console.log(result.location.address1);

  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text>{result.alias}</Text>
      <Text>{result.location.address1}</Text>

      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

export default ResultsShowScreen;

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
});
