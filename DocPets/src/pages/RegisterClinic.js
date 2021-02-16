import React, { useState } from 'react'
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import { connect } from 'react-redux';
import { Avatar } from "react-native-elements";
import Entypo from 'react-native-vector-icons/Entypo'
import Icon from 'react-native-vector-icons/Ionicons'

import {ValidateEmail} from '../helpers/function/auth'
import { registerAction } from '../store/actions/auth'

import STYLE from '../../src/components/StyleCard';
import COLOR from '../../src/components/ColorCard';

function RegisterClinic(props) {
  const [check, setCheck] = useState(true);
  const [checkCP, setCheckCP] = useState(true);
  const [nama, setNama] = useState('Klinik Aaaa');
  const [email, setEmail] = useState('klinikaaaa@gmail.com');
  const [telepon, setTelepon] = useState('0123456001');
  const [password, setPassword] = useState('12345678');
  const [passwordConfirmation, setPasswordConfirmation] = useState('12345678');
  const [gender] = useState('male');
  const [role] = useState('klinik');
  const [message, setMessage] = useState('');

  const registerClinic = () => {
    if (!nama) {
      alert ('Username is Required')
    } else if (!email) {
      alert ('Email is Required')
    } else if (!telepon) {
      alert ('Phone Number is Required')
    } else if (!password) {
      alert ('Password is Required')
    } else {
      setMessage(null);
      props.processRegister ({
        nama,
        email,
        telepon,
        password,
        passwordConfirmation,
        role,
        gender,
      })
    }
  }

  return (
    <View style={STYLE.container}>
      <ImageBackground style={STYLE.imageBackground} source={require("../assets/background.png")}>
        <Image style={{width: 50, height: 50, resizeMode: 'contain'}}
          source={require("../assets/clinic.png")}/>
        <Text style={{color: "#FFFFFF", fontSize: 15, marginVertical: 10}}>Register Page for Clinic</Text>

        <View style={STYLE.imageContainer}>
          <Entypo
            name='user'
            size={25}
            color= 'gray'
            style={{padding: 10}}
          />
          <TextInput
            style={ STYLE.inputText}
            placeholder={'Clinic Name'}
            value={nama}
            onChangeText={(text) => setNama(text)}
          />
        </View>

        <View style={STYLE.imageContainer}>
          <Entypo
            name='mail'
            size={25}
            color='gray'
            style={{padding: 10}}
          />
          <TextInput
            style={STYLE.inputText}
            placeholder={'Email'}
            value={email}
            onChangeText={(text) => {setEmail(text)}}
          />
        </View>

        <View style={STYLE.imageContainer}>
          <Entypo
            name='phone'
            size={25}
            color='gray'
            style={{padding: 10}}
          />
          <TextInput
            style={STYLE.inputText}
            placeholder={'Phone Number'}
            keyboardType= 'numeric'
            value={telepon}
            onChangeText={(text) => {setTelepon(text)}}
          />
        </View>

        <View style={STYLE.imageContainer}>
          <Entypo
            name='key'
            size={25}
            color='gray'
            style={{padding: 10}}
          />
          <TextInput
            style={STYLE.inputText}
            placeholder={'Password'}
            value={password}
            onChangeText={(text) => {setPassword(text)}}
            secureTextEntry={check}
          />
          <TouchableOpacity
            onPress={() => setCheck(!check)}
            style={STYLE.eyeCheck}>
            <Icon name='eye' size={25} color='gray'/>
          </TouchableOpacity>
        </View>

        <View style={STYLE.imageContainer}>
          <Entypo
            name='key'
            size={25}
            color='gray'
            style={{padding: 10}}
          />
          <TextInput
            style={STYLE.inputText}
            placeholder={'Confirm Password'}
            value={passwordConfirmation}
            onChangeText={(text) => {setPasswordConfirmation(text)}}
            secureTextEntry={checkCP}
          />
          <TouchableOpacity
            onPress={() => setCheckCP(!checkCP)}
            style={STYLE.eyeCheck}>
            <Icon name='eye' size={25} color='gray'/>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={STYLE.button}
          onPress={() => registerClinic()}>
          <Text style={STYLE.buttonText}>REGISTER</Text>
        </TouchableOpacity>
        <View style={STYLE.bawah}>
          <Text style={STYLE.textShadow}>Already have an account?</Text>
          <Text style={{color: '#FDE84D', fontSize: 15}} onPress={() => props.navigation.navigate('Login')}> Login</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    processRegister: (data) => dispatch(registerAction(data))
})

export default connect( mapStateToProps, mapDispatchToProps)(RegisterClinic)
