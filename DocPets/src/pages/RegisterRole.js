import React from 'react';
import { Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';

import STYLE from '../../src/components/StyleCard';
import COLOR from '../../src/components/ColorCard';

const RegisterRole = ({navigation}) => {
  return (
    <View style={STYLE.container}>
      <ImageBackground style={STYLE.bg} source={require("../assets/background.png")}>

        <View style={{flexDirection: "row", marginBottom: 400}}>
          <TouchableOpacity
            onPress={() => {navigation.push('Register Clinic')}}>
            <Image style={STYLE.buttonImage}
              source={require("../assets/clinic-selected.png")}/>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {navigation.push('Register')}}>
            <Image style={STYLE.buttonImage}
              source={require("../assets/user-selected.png")}/>
          </TouchableOpacity>
        </View>

      </ImageBackground>
    </View>
  );
};

export default RegisterRole;
