import React from 'react'
import { Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    } from 'react-native-responsive-screen';

import STYLE from '../../src/components/StyleCard';
import COLOR from '../../src/components/ColorCard';

export default function ChatComponent(props){
  return(
    <View>
      <TouchableOpacity style={STYLE.chatcard} onPress={()=> props.navigation.navigate('ChatScreen')}>
        <Image
          source={require('../assets/klinik/klinik.png')}
          style={{width: '20%', height: null, aspectRatio: 1, borderRadius: 50}}/>
        <View style={{marginLeft: 10}}>
          <Text style={{fontSize: hp('3%'), fontWeight: 'bold'}}>Klinik Peliharaan Sejati</Text>
          <Text>Selamat Siang Dok.</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}
