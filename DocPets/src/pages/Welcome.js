import React from 'react';
import { Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';

import STYLE from '../../src/components/StyleCard';
import COLOR from '../../src/components/ColorCard';

const Welcome = ({navigation}) => {
  return (
    <View style={{flex: 1}}>

        <ImageBackground style={STYLE.bg} source={require("../assets/background.png")}>
          {/*<Logo width={50} height={50} />*/}
          <Image style={{width: 150, height: 150, marginBottom: 265, resizeMode: 'contain'}}
            source={require("../assets/docpets2.png")}/>
          <TouchableOpacity
            style={STYLE.button}
            onPress={() => {navigation.push('Login')}}>
            <Text style={STYLE.buttonText}>LOG IN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={STYLE.button}
            onPress={() => {navigation.push('Register Role')}}>
            <Text style={STYLE.buttonText}>Register</Text>
          </TouchableOpacity>
        </ImageBackground>

    </View>
  );
};

export default Welcome;
