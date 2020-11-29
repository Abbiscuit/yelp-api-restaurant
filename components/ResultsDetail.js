import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: result.image_url ? result.image_url : 'no image' }}
        style={styles.image}
      />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.name}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

export default ResultsDetail;

const styles = StyleSheet.create({
  container: {
    marginLeft: 16,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
  },
  name: {
    fontWeight: '600',
  },
});
