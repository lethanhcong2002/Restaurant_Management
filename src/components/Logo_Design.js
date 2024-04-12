/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image} from 'react-native';

function Logo_Design() {
  return (
    <View className="justify-center items-center bg-white w-full fixed shadow-2xl shadow-[#f4a503]">
      <Image
        source={require('../asset/logo.png')}
        className="w-28 h-28"
        style={{resizeMode: 'contain'}}
      />
    </View>
  );
}

export default Logo_Design;
