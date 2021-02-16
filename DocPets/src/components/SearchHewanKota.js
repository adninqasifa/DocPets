import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { View, TouchableOpacity, ScrollView, Image, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import { Icon } from 'react-native-vector-icons/Ionicons';
import axios from 'axios'

import STYLE from '../../src/components/StyleCard';
import COLOR from '../../src/components/ColorCard';

export default function SearchCard(props) {
  const [pet, setPetSearch]= useState()
  const [nameSearch, setNameSearch]= useState('')
  const [locationSearch, setLocationSearch]= useState('')
  const [klinik, setKlinik]= useState([])
  const [allKlinik, setAllKlinik]= useState([])

  const klinikSearchList = useSelector((state) => state.clinicSearch.listClinicSearch);
  //console.log("ini bromo", klinikSearchList);

  useEffect(() => {
    //props.search('')
    setKlinik(klinikSearchList)
    // setKlinik([
    //   { id:1,
    //     nama: "Klinik Peliharaan Sejati",
    //     lokasi: "batam",
    //     foto: require('../assets/hewan/cat.png'),
    //     tentang: "lorem Ipsum",
    //     fasilitas: "lorem Ipsum",
    //   }
    // ])
  }, [])

  const location = [
    'Jakarta',
    'batam',
    'mataram',
    'jawa',
    'Semarang'
  ]

  return (
    <View style={STYLE.containerCenter}>

      <ScrollView
        directionalLockEnabled={false}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {location.map((item,index) => (
          <TouchableOpacity
            key={index}
            style={STYLE.buttonKota}
            onPress={() => {
              axios ({
                method: 'POST',
                url: 'https://doctorpets.tk:3002/klinik/search',
              })
                .then(({data}) => {
                let searchClinicFor = data.result.filter((el) => el.lokasi.toLowerCase().includes(item))
                setKlinik(searchClinicFor)
              })

              let searchClinicFor = allKlinik.filter((el) => el.lokasi.toLowerCase().includes(item))
              setKlinik(searchClinicFor)
            }}>
            <Text style={{fontSize:hp('2%')}}>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

//style={{width:wp('14%'),height:hp('8%'), marginHorizontal: wp('5%'),borderRadius:50}}/>

// onPress={() => {
//   setLocationSearch(item)
//   props.searchCity(item)
// }}>
