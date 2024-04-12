/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import 'react-native-gesture-handler';
import {View, TouchableOpacity, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MenuScreen from '../screens/MenuScreen';
import CartScreen from '../screens/CartScreen';
import ReservationScreen from '../screens/ReservationScreen';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: 'center',
      alignContent: 'center',
    }}
    onPress={onPress}>
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#f5a503',
      }}>
      {children}
    </View>
  </TouchableOpacity>
);

const Tabs = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarActiveTintColor: '#f5a503',
          tabBarInactiveTintColor: 'grey',
          tabBarStyle: {
            height: 60,
            backgroundColor: '#FFF',
          },
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: 'bold',
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <>
                <Icon name="home" size={size} color={color} />
                <Text style={{fontSize: 14, fontWeight: 'bold', color}}>
                  Home
                </Text>
              </>
            ),
          }}
        />
        <Tab.Screen
          name="Menu"
          component={MenuScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <>
                <Icon name="restaurant-menu" size={size} color={color} />
                <Text style={{fontSize: 14, fontWeight: 'bold', color}}>
                  Menu
                </Text>
              </>
            ),
          }}
        />
        <Tab.Screen
          name="Reservation"
          component={ReservationScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icons name="plus" size={45} color="#fff" />
            ),
            tabBarButton: props => <CustomTabBarButton {...props} />,
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <>
                <Icon name="shopping-cart" size={size} color={color} />
                <Text style={{fontSize: 14, fontWeight: 'bold', color}}>
                  Cart
                </Text>
              </>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <>
                <Icon name="info" size={size} color={color} />
                <Text style={{fontSize: 14, fontWeight: 'bold', color}}>
                  Profile
                </Text>
              </>
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Tabs;
