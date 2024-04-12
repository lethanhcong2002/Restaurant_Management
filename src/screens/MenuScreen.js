/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  FlatList,
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Select_Basic from '../components/Select_Basic';

const data = [
  {key: '1', value: 'Jammu & Kashmir'},
  {key: '2', value: 'Gujrat'},
  {key: '3', value: 'Maharashtra'},
  {key: '4', value: 'Goa'},
];

const bodyData = [
  {name: 'a'},
  {name: 'b'},
  {name: 'c'},
  {name: 'd'},
  {name: 'e'},
  {name: 'a'},
  {name: 'b'},
  {name: 'c'},
  {name: 'd'},
  {name: 'e'},
  {name: 'a'},
  {name: 'b'},
  {name: 'c'},
  {name: 'd'},
  {name: 'e'},
  {name: 'a'},
  {name: 'b'},
  {name: 'c'},
  {name: 'd'},
  {name: 'e'},
];

function MenuScreen({onSearch}) {
  const [query, setQuery] = useState('');

  function handleSearch() {
    Alert.alert(query);
  }

  return (
    <View className="flex-1 bg-white flex">
      {/* Search */}
      <View className="flex-row items-center bg-gray-200 rounded-lg px-4 py-2 mx-2 my-2">
        <TextInput
          className="flex-1 p-2 bg-white rounded-lg"
          placeholder="Search..."
          value={query}
          onChangeText={setQuery}
        />
        <TouchableOpacity
          className="bg-[#f5a503] rounded-lg p-2 ml-2"
          onPress={handleSearch}>
          <FontAwesomeIcon name="search" size={20} color="white" />
        </TouchableOpacity>
      </View>
      {/* Body */}
      <View className="mx-2 my-2">
        <Select_Basic data={data} />
      </View>
      <View className="mx-2 my-2">
        <FlatList
          data={bodyData}
          numColumns={2}
          columnWrapperStyle={{gap: 10, paddingHorizontal: 12}}
          contentContainerStyle={{gap: 10, paddingBottom: 12}}
          keyExtractor={(item, idx) => item.name + idx}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <TouchableOpacity className="flex justify-center items-center flex-row bg-[#6b7200] flex-1 h-52 rounded-3xl">
                <Text>{item.name}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
}

export default MenuScreen;
