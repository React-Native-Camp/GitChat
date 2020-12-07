import React, {useState} from 'react';
import {Searchbar} from 'react-native-paper';
import style from './style';
const Search = () => {
  const [searchName, setSearchName] = useState('');
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <Searchbar
      placeholder="Find someone to chat with"
      onChangeText={onChangeSearch}
      value={searchName}
      style={style.border}
    />
  );
};

export default Search;
