import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { connect, useSelector } from 'react-redux';
import { Avatar } from 'react-native-elements';
import {widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    } from 'react-native-responsive-screen';
import axios from 'axios'

import ContentCard from '../components/ContentCard';
import SearchHewanKota from '../components/SearchHewanKota'

import STYLE from '../../src/components/StyleCard';
import COLOR from '../../src/components/ColorCard';

function Home(props) {
  const [klinik, setKlinik]= useState([])
  const id = props.route.params
  const [data,setdata]=useState([])
  const [search, setSearch] = useState('')
  const [allKlinik, setAllKlinik]= useState([])

  const klinikSearchList = useSelector((state) => state.clinicSearch.listClinicSearch);
  //console.log("ini bromo", klinikSearchList);

  useEffect(() => {
    props.search('')
    //props.getProfile()
    setKlinik(klinikSearchList)
  }, [])

  const location = [
    'All',
    'Jakarta',
    'Bandung',
    'Surabaya',
    'Jogja',
  ]

  return(
    <ImageBackground
      source={require("../assets/background.png")}
      style={{flex: 1}}>
      <View style={STYLE.overlay}>
        {/*
        <View style={{backgroundColor: '#445E6B', marginBottom: 10}}>
          <View style={{flexDirection:"row"}}>
            <Text style={{fontWeight:"bold", paddingRight:"3%"}}>Hi, {props.profile.username}</Text>
            <TouchableOpacity onPress={()=> console.log(props.profile.username)}>
              <Avatar
                rounded
                size="small"
                source={{uri: props.profile.pictureUrl}}>
              </Avatar>
            </TouchableOpacity>
          </View>
        </View>
        */}
        <View>
          <ScrollView
            directionalLockEnabled={false}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <Image source={require('../assets/carousel/bromo.png')} style={{height: 200, width: 400, marginRight: 10, resizeMode: 'stretch'}}/>
            <Image source={require('../assets/carousel/adnin.png')} style={{height: 200, width: 400, marginRight: 10, resizeMode: 'stretch'}}/>
            <Image source={require('../assets/carousel/rora.png')} style={{height: 200, width: 400, marginRight: 10, resizeMode: 'stretch'}}/>
            <Image source={require('../assets/carousel/gilang.png')} style={{height: 200, width: 400, marginRight: 10, resizeMode: 'stretch'}}/>
            <Image source={require('../assets/carousel/syohan.png')} style={{height: 200, width: 400, marginRight: 10, resizeMode: 'stretch'}}/>
            <Image source={require('../assets/carousel/ilham.png')} style={{height: 200, width: 400, marginRight: 10, resizeMode: 'stretch'}}/>
            <Image source={require('../assets/carousel/putri.png')} style={{height: 200, width: 400, marginRight: 10, resizeMode: 'stretch'}}/>
            <Image source={require('../assets/carousel/galuh.png')} style={{height: 200, width: 400, marginRight: 10, resizeMode: 'stretch'}}/>
          </ScrollView>
        </View>

        <View>
          <ScrollView
            directionalLockEnabled={false}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {location.map((item,index) => (
              <TouchableOpacity
                key={index}
                style={STYLE.buttonLokasi}
                onPress={() => {
                  axios ({
                    method: 'POST',
                    url: 'https://doctorpets.tk:3002/klinik/search',
                  })
                    .then(({data}) => {
                    let searchClinicFor = data.result.filter((el) => el.lokasi.toLowerCase().includes(item.toLowerCase()))
                    //console.log(location);
                    console.log("Ini Item", item);
                    if (item == "All") {
                      setKlinik(klinikSearchList)
                    } else {
                      setKlinik(searchClinicFor)
                    }
                  })
                }}>
                <Text style={{fontSize:hp('2%')}}>{item}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <ScrollView style={{height: 80}}>
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
  profile: state.profile.data[0],

  //allKlinik: state.clinic.listClinic,
})

const mapDispatchToProps = (dispatch) => ({
  search:(name)=>dispatch({type:'GET_CLINIC_CARI',payload:name}),
  searchCity:(city)=>dispatch({type:'GET_CLINIC_CITY',payload:city}),
  searchPet:(species)=>dispatch({type:'GET_CLINIC_PET',payload:species}),
  getProfile: () => dispatch({type: 'GET_PROFILE'}),

  //getAllKlinik: () => dispatch({type: 'GET_CLINIC'}),
})

export default connect(mapStateToProps, mapDispatchToProps )(Home);
