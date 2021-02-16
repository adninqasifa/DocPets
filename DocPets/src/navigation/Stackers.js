import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../pages/Login'
import RegisterRole from '../pages/RegisterRole'
import Register from '../pages/Register'
import RegisterClinic from '../pages/RegisterClinic'
import Welcome from '../pages/Welcome';
import Navigation from './Navigation';
import ChatScreen from '../pages/ChatScreen';
import ReservationScreen from '../pages/ReservationScreen'
import { connect } from 'react-redux';

import SplashScreen from '../pages/SplashScreen'
import EditProfile from '../pages/EditProfileScreen';
import TambahHewanScreen from '../pages/TambahHewanScreen';

const Stack = createStackNavigator();

function Stackers(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {props.statusLogin ? (
          <>
          <Stack.Screen
            options={{headerShown: false}}
            name='Main'
            component={Navigation}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name='ChatScreen'
            component={ChatScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name='ReservationScreen'
            component={ReservationScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name='EditProfile'
            component={EditProfile}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name='TambahHewanScreen'
            component={TambahHewanScreen}
          />
          </>
        ) : (
          <>
          
          <Stack.Screen
            options={{headerShown: false}}
            name='SplashScreen'
            component={SplashScreen}
          />

          <Stack.Screen
            options={{headerShown: false}}
            name='Welcome'
            component={Welcome}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name='Login'
            component={Login}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name='Register Role'
            component={RegisterRole}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name='Register'
            component={Register}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name='Register Clinic'
            component={RegisterClinic}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name='Navigation'
            component={Navigation}
          />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const mapStateToProps = (state) => ({
    statusLogin: state.auth.isLoggedIn
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Stackers)
