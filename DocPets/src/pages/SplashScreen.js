import React, {useEffect} from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';

import STYLE from '../../src/components/StyleCard';
import COLOR from '../../src/components/ColorCard';

function SplashScreen({ navigation }) {
  useEffect(() =>{
    setTimeout(()=> {
        navigation.replace('Welcome')
    }, 3000); // 3 Detik
  }, [navigation])
  return (
    <View style={{flex: 1}}>
      <ImageBackground style={STYLE.bgSplash} source={require("../assets/background.png")}>
        <Image style={{width: 150, height: 150, marginTop: 50, resizeMode: 'contain'}}
          source={require("../assets/docpets2.png")}/>
      </ImageBackground>
    </View>
  )
};

export default SplashScreen;
