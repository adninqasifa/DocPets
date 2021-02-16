import React, { useEffect, useState } from 'react';
import { View, Text,StyleSheet,ScrollView, TextInput, ImageBackground } from 'react-native';
import { connect, useSelector } from 'react-redux';
import {widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

import ContentCard from '../components/ContentCard';
import { getClinicDetail } from '../store/actions/clinicDetail';

import STYLE from '../../src/components/StyleCard';
import COLOR from '../../src/components/ColorCard';

function Search(props) {
  const [nameSearch, setNameSearch]= useState('')
  const [klinik, setKlinik]= useState([])
  const id = props.route.params
  const [data,setdata]=useState([])

  const klinikSearchList = useSelector((state) => state.clinicSearch.listClinicSearch);
  //console.log("ini klinikSearchList", klinikSearchList);

  useEffect(() => {
    props.search('')
    setKlinik(klinikSearchList)
  }, [])

  useEffect(() => {
    props.clinics
    //console.log("Ini props.clinics", props.clinics)
  }, [props.clinics])

  return (
    <ImageBackground
      source={require("../assets/background.png")}
      style={{flex: 1}}>
      <View style={STYLE.overlay}>

        <View>
          <TextInput
            placeholder="Search"
            style= {STYLE.searchbar}
            lightTheme default
            placeholderTextColor='black'
            onChangeText={(text) => {
              //let newClinic = [...klinik]
              //let aaaa = klinik.filter((e) => e.nama.includes(text))
              let aaaa = klinik.filter((e)=>e.nama.toLowerCase().includes(text.toLowerCase()))
              //let bbbb = klinik.filter((e) => e.lokasi.includes(text))
              let bbbb = klinik.filter((e)=>e.lokasi.toLowerCase().includes(text.toLowerCase()))
              console.log("ini testing 2", klinik);

              if (text.length == 0) {
                setKlinik(klinikSearchList)
                console.log("hahaha", klinikSearchList);
              } else {
                if (aaaa.length != 0) {
                  setKlinik(aaaa)
                } else {
                  setKlinik(bbbb)
                }
              }
            }}
            //search={(text)=>props.search(text)}
            //searchCity={(lokasi)=>props.searchCity(lokasi)}
            //searchPet={(species)=>props.searchPet(species)}
          />
        </View>
        <ScrollView>
          {klinik.map((item, index)=>(
            <ContentCard
              key={index}
              navigation={props.navigation}
              clinicName={item.nama}
              image={item.foto}
              lokasi={item.lokasi}
              tentang={item.tentang}
              fasilitas={item.fasilitas}
              patient={item.patient}
              id={item.id}/>
          ))}
        </ScrollView>


      </View>
    </ImageBackground>
  );
}

const mapStateToProps = (state) => ({
  clinics:state.clinicSearch.listClinicSearch,
  //clinicsPet:state.clinicSearchPet.listClinicSearch[0],
})

const mapDispatchToProps = (dispatch) => ({
  search:(nama)=>dispatch({type:'GET_CLINIC_CARI', payload: nama}),
  searchCity:(lokasi)=>dispatch({type:'GET_CLINIC_CITY',payload:lokasi}),
  //searchPet:(species)=>dispatch({type:'GET_CLINIC_PET',payload:species}),
})

export default connect(mapStateToProps, mapDispatchToProps )(Search);
