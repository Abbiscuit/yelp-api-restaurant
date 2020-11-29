import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import yelp from '../api/yelp';

import SearchBar from '../components/SearchBar';

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = React.useState('');
  const [results, setResults] = React.useState([]);
  const [errorMessage, setErrorMessage] = React.useState('');

  /* helper */
  const searchApi = async searchTerm => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: tesearchTermrm,
          location: 'tokyo',
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };

  React.useEffect(() => {
    searchApi('pasta');
  }, []);

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
