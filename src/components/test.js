/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';

import {BottomNavigation} from 'react-native-paper';
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';
function test() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'home', title: 'home', focusedIcon: 'heart'},
    {key: 'menu', title: 'home', focusedIcon: 'heart'},
    {key: 'cart', title: 'home', focusedIcon: 'heart'},
    {key: 'profile', title: 'home', focusedIcon: 'heart'},
  ]);
  const renderScreen = BottomNavigation.SceneMap({
    home: HomeScreen,
    menu: MenuScreen,
    cart: CartScreen,
    profile: ProfileScreen,
  });
  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={i => setIndex(i)}
      renderScene={renderScreen}
    />
  );
}

export default test;
