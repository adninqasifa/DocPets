import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, ScrollView, Image, TouchableOpacity, Modal} from 'react-native';
import { connect } from 'react-redux';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

import STYLE from '../../src/components/StyleCard';
import COLOR from '../../src/components/ColorCard';

import Fa from 'react-native-vector-icons/AntDesign';

const ReservationScreen = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalBooking, setModalBooking] = useState(false);
  const [date, setDate] = useState(new Date());

  const [dokterActive, setDokterActive] = useState()
  const [dokter, setDokter]= useState()

  const [jamActive, setJamActive] = useState()
  const [jam, setJam]= useState()

  const vetenary = [
    {image: require('../assets/doc1.png'), label: "Dokter Kucing", label2: "Dr. Alex, SP. Kucing", label3: "online"},
    {image: require('../assets/doc2.jpg'), label: "Dokter Hamster", label2: "Dr. Alizah, SP. Hamster", label3: "online"},
  ]

  const pukul = [
    {label: "10.00 WIB"},
    {label: "12.00 WIB"},
    {label: "14.00 WIB"},
  ]

  const pet = [
    {image: require('../assets/hewan/dog.png'), label: "Ronald / Male"},
    {image: require('../assets/hewan/cat.png'), label: "Reah / Female"},
  ]

  useEffect(() => {
    props.getanimal();
    //props.getProfile();
    //props.clinicdetail(id)
    props.booking()
  }, [])

  return (
    <View>
      <View style={STYLE.header}>
        <Image style={STYLE.headerLeft} source={require('../assets/docpets2.png')}/>
        <Text style={STYLE.textHeader}>Reservation</Text>
      </View>

      <ScrollView style={{height: 580}}>
        {/*
        <View>
          <Image style={{width: wp('100%'), height: hp('35%')}}
            source={{uri: props.clinics.foto}}/>
          <View style={STYLE.detailContent}>
            <Text style={{color: COLOR.textButton}}>{props.clinics.lokasi}</Text>
            <Text style={STYLE.klinik}>{props.clinics.nama}</Text>
            <Text style={STYLE.waktu}>Jam Buka: 10.00-16.00</Text>
          </View>
        </View>
        */}

        <View>
          <Image style={{width: wp('100%'), height: hp('35%')}}
            source={require('../assets/klinik/klinik.png')}/>
          <View style={STYLE.detailContent}>
            <Text style={{color: COLOR.textButton}}>Bandung</Text>
            <Text style={STYLE.klinik}>Klinik Peliharaan Sejati</Text>
            <Text style={STYLE.waktu}>Opening Hours: 10.00-16.00</Text>
          </View>
        </View>

        <Text style={STYLE.subJudul}>Choose Your Vetenarian</Text>
        <View>
          {vetenary.map((item, index) => (
            <TouchableOpacity
              style={dokterActive === item.image ? STYLE.selectedDokter: STYLE.unselectedDokter}
              onPress={() => {setDokterActive(item.image), setDokter(item.image)}} key={index}>
              <Image style={STYLE.gambarDokter} source={item.image} />
              <View>
                <Text style={STYLE.dokter}>{item.label}</Text>
                <Text style={STYLE.namaDokter}>{item.label2}</Text>
                <Text style={{color: "green", marginHorizontal: 10}}>{item.label3}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={{flexDirection: "row"}}>
          <Text style={STYLE.subJudul}>Select Time Visit</Text>
          <TouchableOpacity
            onPress={() => {setModalVisible(true);
            }}>
            <Icon name='calendar' size={20} style={{marginTop: 15, marginHorizontal: 80}}/>
          </TouchableOpacity>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}>
          <View style={STYLE.centeredView}>
            <View style={STYLE.modalView}>
              <DatePicker
                date={date}
                onDateChange={setDate}
                androidVariant={'nativeAndroid'}
                mode={'date'}
                textColor={'white'}
              />
              <TouchableOpacity
                style={{ backgroundColor: COLOR.primary }}
                onPress={() => { setModalVisible(!modalVisible);
                }}>
                <Text>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>


        <View style={STYLE.borderAbu}>
          <Text style={{marginHorizontal: 10, marginVertical: 10, alignSelf: "center"}}>{date.toDateString()}</Text>
        </View>

        <View style={STYLE.pilihan}>
          {pukul.map((item, index) => (
            <TouchableOpacity
              style={jamActive === item.label ? STYLE.selected: STYLE.unselected}
              onPress={() => {setJamActive(item.label), setJam(item.label)}} key={index}>
                <Text style={STYLE.buttonText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={{flexDirection: "row"}}>
          <Text style={STYLE.subJudul}>Pets</Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('TambahHewanScreen')}>
            <Icon name='add' size={20} style={{marginTop: 15, marginHorizontal: 190}}/>
          </TouchableOpacity>
        </View>

        <View>
          {pet.map((item, index) => (
            <TouchableOpacity
              style={dokterActive === item.image ? STYLE.selectedPet: STYLE.unselectedPet}
              onPress={() => {setDokterActive(item.image), setDokter(item.image)}} key={index}>
              <Image source={item.image} />
              <Text style={STYLE.hewanText}>{item.label}</Text>
              <Icon name='close' style={STYLE.hewanText}/>
            </TouchableOpacity>
          ))}
        </View>

        <View style={{alignItems: "center"}}>
          <TouchableOpacity
            //onPress={() => alert('Booking Success')}
            onPress={() => {setModalBooking(true)}}
            style={STYLE.button}>
            <Text style={STYLE.buttonText}>Book Now</Text>
          </TouchableOpacity>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalBooking}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}>
          <View style={STYLE.centeredView}>
            <View style={STYLE.modalBooking}>
              <Fa name='checkcircle' size={100} style={{color: COLOR.primary}}/>
              <Text style={{fontSize: 24, color: COLOR.primary, marginVertical: 10}}>Booking Success</Text>
              <TouchableOpacity
                style={{backgroundColor: COLOR.primary}}
                onPress={() => { setModalBooking(!modalBooking);
                }}>
                <Text style={{marginVertical: 5, marginHorizontal: 5}}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>


      </ScrollView>

    </View>
  );
}

const mapStateToProps = (state) => ({
  animal: state.getAnimal.data,
  clinics: state.getClinicDetail.data[0],
  //clinics: state.clinicSearch.listClinicSearch,
  profile: state.profile.data[0]
})

const mapDispatchToProps = (dispatch) => ({
  getanimal: () => dispatch({type: 'GET_ANIMAL'}),
  //clinicdetail: (id) => dispatch({type: 'GET_CLINIC_DETAIL', payload: id}),
  booking: (payload) => dispatch({type: 'BOOKING' , payload}),
  //getProfile: () => dispatch({type:GET_PROFILE}),
})

export default connect(mapStateToProps, mapDispatchToProps)(ReservationScreen);

// For apk Mobile <ScrollView style={{height: 700}}> // 580
