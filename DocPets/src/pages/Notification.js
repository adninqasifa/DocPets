import React from 'react'
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import {widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

import ChatCard from '../components/ChatCard';

import STYLE from '../../src/components/StyleCard';
import COLOR from '../../src/components/ColorCard';

const Notification = (props) => {
  return (
    <View>
      <View style={STYLE.header}>
        <Image style={STYLE.headerLeft} source={require('../assets/docpets2.png')}/>
        <Text style={STYLE.textHeader}>Notification</Text>
      </View>

      <ScrollView style={{height: 530}}>

        <Text style={STYLE.subJudul}>My Appointment</Text>

        <View style={STYLE.appointment}>
          <View style={STYLE.appointmentTanggal}>
            <Text style={STYLE.tgl}>02 Feb</Text>
          </View>
          <View>
            <Text style={{color: COLOR.textButton}}>Bandung</Text>
            <Text style={STYLE.klinik}>Klinik Peliharaan Sejati</Text>
            <Text style={STYLE.tentang}>Opening Hours: 10.00-16.00</Text>
          </View>
        </View>

        <Text style={STYLE.subJudul}>History</Text>
        <View style={STYLE.cardItemHard}>
          <Image
            style={STYLE.gambarKlinik}
            source={require('../assets/klinik/klinik.png')}>
          </Image>
          <View style={{flex:1}}>
            <Text style={{color: COLOR.textButton}}>Bandung</Text>
            <Text style={STYLE.klinik}>Klinik Peliharaan Sejati</Text>
            <Text style={STYLE.tentang}>Description:</Text>
            <Text>Rumah Sakit hewan terbaik yang lengkap untuk hewan peliharaan anda</Text>
            <Text style={STYLE.tentang}>Facilities:</Text>
            <Text>toilet,whiskas gratis</Text>
            <Text style={STYLE.tentang}>Opening Hours: 10.00-16.00</Text>
          </View>
        </View>
        <View style={STYLE.cardItemHard}>
          <Image
            style={STYLE.gambarKlinik}
            source={require('../assets/klinik/ragunan.jpg')}>
          </Image>
          <View style={{flex:1}}>
            <Text style={{color: COLOR.textButton}}>Jakarta</Text>
            <Text style={STYLE.klinik}>RSH Ragunan</Text>
            <Text style={STYLE.tentang}>Description:</Text>
            <Text>Rumah Sakit hewan terbaik yang lengkap untuk hewan peliharaan anda</Text>
            <Text style={STYLE.tentang}>Facilities:</Text>
            <Text>general checkup, surgery, daycare, lab checking, ugd, vaksin, apotek, kremasi</Text>
            <Text style={STYLE.tentang}>Opening Hours: 10.00-16.00</Text>
          </View>
        </View>
        <View style={STYLE.cardItemHard}>
          <Image
            style={STYLE.gambarKlinik}
            source={require('../assets/klinik/warassatwa.jpg')}>
          </Image>
          <View style={{flex:1}}>
            <Text style={{color: COLOR.textButton }}>Surabaya</Text>
            <Text style={STYLE.klinik}>Klinik Hewan Waras Satwa</Text>
            <Text style={STYLE.tentang}>Description:</Text>
            <Text>Pemeriksaan kesehatan Pemeriksaan lab Ultrasonografi Permeriksaan darah Vaksinasi Perawatan intensif Rawat inap</Text>
            <Text style={STYLE.tentang}>Facilities:</Text>
            <Text>Layanan kesehatan hewan, makanan hewan</Text>
            <Text style={STYLE.tentang}>Opening Hours: 10.00-16.00</Text>
          </View>
        </View>

      </ScrollView>

    </View>
  )
}

export default Notification;

// For apk Mobile <ScrollView style={{height: 660}}> // 530
