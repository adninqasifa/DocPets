import React, { useState } from 'react'
import { View, Image, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { Avatar } from "react-native-elements";
import { Picker } from '@react-native-picker/picker';
import { RadioButton } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo'
import Icon from 'react-native-vector-icons/Ionicons'

import { ValidateEmail } from '../helpers/function/auth'
import { registerAction } from '../store/actions/auth';

import STYLE from '../../src/components/StyleCard';
import COLOR from '../../src/components/ColorCard';

function Register(props) {
  const [check, setCheck] = useState(true);
  const [checkCP, setCheckCP] = useState(true);

  const [nama, setNama] = useState('aaabbb');
  const [email, setEmail] = useState('aaabbb@gmail.com');
  const [telepon, setTelepon] = useState('0123456701');
  const [password, setPassword] = useState('12345678');
  const [passwordConfirmation, setPasswordConfirmation] = useState('12345678');
  const [gender, setGender] = React.useState('female');
  const [role] = useState('user');
  const [message, setMessage] = useState('');

  const register = () => {
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
          source={require("../assets/patient.png")}/>
        <Text style={{color: COLOR.white, fontSize: 15, marginVertical: 10}}>Register Page for Patient</Text>

        <View style={STYLE.imageContainer}>
          <Entypo
            name='user'
            size={25}
            color='gray'
            style={{padding: 10}}
          />
          <TextInput
            style={STYLE.inputText}
            placeholder={'Username'}
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
            keyboardType = 'numeric'
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

        <RadioButton.Group onValueChange={newValue => setGender(newValue)} value={gender}>
          <View style={{flexDirection:"row", alignItems:'center'}, STYLE.radioBorder, STYLE.radioContainer}>
            <View style={{padding:10}}>
              <Text>Female</Text>
              <RadioButton value="female"/>
            </View>
            <View style={{padding:10}}>
              <Text>Male</Text>
              <RadioButton value="male"/>
            </View>
          </View>
        </RadioButton.Group>

        {/*
        <View style={STYLE.imageContainer}>
        <Picker
          selectedValue={gender}
          style={STYLE.inputText}
          onValueChange={(itemValue) => {setGender(itemValue)}}>
          <Picker.Item label="Female" value="female" />
          <Picker.Item label="Male" value="male" />
        </Picker>
        </View>
        */}

        <TouchableOpacity
          style={STYLE.button}
          onPress={() => register()}>
          <Text style={STYLE.buttonText}>REGISTER</Text>
        </TouchableOpacity>
        <View style={STYLE.bawah}>
          <Text style={STYLE.textShadow}>Already have an account?</Text>
          <Text style={{color: COLOR.primary, fontSize: 15}} onPress={() => props.navigation.navigate('Login')}> Login</Text>
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

export default connect( mapStateToProps, mapDispatchToProps)(Register)
