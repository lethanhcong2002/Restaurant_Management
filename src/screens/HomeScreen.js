import React from 'react';
import {View, SafeAreaView, Text, ScrollView} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Slider_Icon from '../components/Slider_Icon';
import Logo from '../components/Logo_Design';

const icons = [
  {icon: 'home', value: '1'},
  {icon: 'home', value: '2'},
  {icon: 'home', value: '3'},
  {icon: 'home', value: '4'},
  {icon: 'home', value: '5'},
];

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Logo />
      <ScrollView>
        <View className="py-4 ">
          <Text className="px-4 pb-4 text-xl font-bold">
            Loại món được yêu thích nhất
          </Text>
          <GestureHandlerRootView>
            <Slider_Icon data={icons} />
          </GestureHandlerRootView>
        </View>
        <View className="py-4 text-black px-4">
          <Text className="text-xl font-bold">Thịnh hành nhất</Text>
        </View>
        <View className="py-4 text-black px-4">
          <Text className="text-xl font-bold">Mới nhất</Text>
        </View>
        <View className="py-4 text-black px-4">
          <Text className="text-xl font-bold">Tin tức</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
