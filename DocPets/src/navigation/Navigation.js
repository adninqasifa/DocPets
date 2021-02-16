import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import Home from '../pages/Home';
import Search from '../pages/Search';
import Messenger from '../pages/Messenger';
import Notification from '../pages/Notification';
import Profile from '../pages/Profile';

const Tab = createBottomTabNavigator();

export default function MainNavigator(props) {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home': 'home';
          } else if (route.name === 'Search') {
            iconName = focused ? 'magnifying-glass' : 'magnifying-glass';
          }
          else if (route.name === "Messenger" ) {
            iconName = focused ? 'chat' : 'chat';
          }
          else if (route.name === 'Notification') {
            iconName = focused ? 'notification' : 'notification';
          }
          else if (route.name === 'Profile') {
            iconName = focused ? 'user' : 'user';
          }
          return <Entypo name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#FDE84D',
        inactiveTintColor: '#343434',
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Messenger" component={Messenger} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
