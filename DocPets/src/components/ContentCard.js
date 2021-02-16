import React from 'react';
import { View, Text, ScrollView, Image, Button,TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

import STYLE from '../../src/components/StyleCard';
import COLOR from '../../src/components/ColorCard';

export default function ContentCard(props) {
  return (
    <ScrollView>
    <View style={STYLE.container}>
      <View style={STYLE.cardItem}>
        <Image
          style={STYLE.gambarKlinik}
          source={{
          uri:props.image
        }}>
        </Image>
        <View style={{width:wp('55%')}}>
          <Text style={{color:"#5A4B48"}}>{props.lokasi}</Text>
          <Text style={STYLE.klinik}>{props.clinicName}</Text>
          <Text style={STYLE.tentang}>Description:</Text>
          <Text>{props.tentang}</Text>
          <Text style={STYLE.tentang}>Facilities:</Text>
          <Text>{props.fasilitas}</Text>
          <Text style={STYLE.tentang}>Opening Hours: 10.00-16.00</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={STYLE.buttonCard}
          onPress={() => props.navigation.navigate('ReservationScreen', props.id)}>
          <Text style={STYLE.buttonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>

    </ScrollView>
  );
}
