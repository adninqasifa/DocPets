// CODINGAN PENGGUNAAN REDUX SAGA

import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import {connect} from 'react-redux'
// import {useSelector, useDispatch} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo'
import {
  widthPercentageToDP,
  heightPercentageToDP
  } from 'react-native-responsive-screen';

import { loginAction } from '../store/actions/auth';

import STYLE from '../../src/components/StyleCard';
import COLOR from '../../src/components/ColorCard';

function Login(props){
  const [check, setCheck] = useState(true);
  const [email, setEmail] = useState('ultramilk@gmail.com');
  const [password, setPassword] = useState('12345678');
  //const [message, setMessage] = useState(null);

  const login = () => {
    if (!email) {
        alert ('Email is Required')
    } else if (!password) {
        alert ('Password is Required')
    } else {
        props.processLogin({email, password})
    }
  };

  return (
    <TouchableOpacity
    style= {STYLE.container}
    onPress={() => alert('Booking Success')}>
      <ImageBackground style={STYLE.imageBackground} source={require("../assets/background.png")}>
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
            name='key'
            size={25}
            color='gray'
            style={{padding: 10}}
            />
          <TextInput
            style={STYLE.inputText}
            placeholder={'Password'}
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => {setPassword(text)}}
            secureTextEntry={check}
          />
          <TouchableOpacity
            onPress={() => setCheck(!check)}
            style={STYLE.eyeCheck}>
            <Entypo name='eye' size={25} color='gray'/>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={STYLE.button}
          onPress={() => login()}>
          <Text style={STYLE.buttonText}>LOG IN</Text>
        </TouchableOpacity>

        <View style={STYLE.bawah}>
          <Text style={STYLE.textShadow}>Don't have an account?</Text>
          <Text style={{color: '#FDE84D', fontSize: 15}} onPress={() => props.navigation.navigate('Register Role')}> Register</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const mapStateToProps = (state) => ({
    isLoading: state.auth.isLoading
})

const mapDispatchToProps = (dispatch) => ({
    processLogin: (data) => dispatch(loginAction(data))
})

export default connect(mapStateToProps, mapDispatchToProps )(Login);

// USER LOGIN:
// Email: ultramilk@gmail.com
// Password: 12345678

// KLINIK LOGIN:
// Email: bubble@gmail.com
// Password: 12345678


// onPress={() => {navigation.push('Home')}}>
// onPress={() => login()}>

// onPress={() => {
//   axios({
//     method: 'POST',
//     url: 'http://13.250.101.249:3000/user/login',
//     data: {
//       email: email,
//       password: password
//     }
//   })
//     .then(({data}) => {
//       console.log(data)
//       navigation.navigate('Home')
//     })
//     .catch(err => {console.log('ini error di login', err.message)})
// }}

////////////////////////////////////////////////////////////////////////////////
// CODINGAN TANPA REDUX SAGA

// import React, { useState } from 'react';
// import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
// import axios from 'axios'
// import {widthPercentageToDP, heightPercentageToDP} from 'react-native-responsive-screen';
// import Entypo from 'react-native-vector-icons/Entypo'

// const Login = ({navigation}) => {
//   const [check, setCheck] = useState(true);
//   const [email, setEmail] = useState('example@gmail.com')
//   const [password, setPassword] = useState('12345678')

//   // const login = () => {
//   //   if (!email) {
//   //     alert ('Email is Required')
//   //   } else if (!password) {
//   //     alert ('Password is Required')
//   //   } else {
//   //     navigation.navigate('Home')
//   //   }
//   // };

//   return (
//     <View style={styles.container}>
//       <Text style={{color: "#FFFFFF"}}>Login Page</Text>
//       <TextInput
//         style={styles.inputText}
//         placeholder={'  Email'}
//         value={email}
//         onChangeText={(text) => {setEmail(text)}}
//       />

//       <View style={styles.password}>
//         <TextInput
//           style={styles.inputText}
//           placeholder={'  Password'}
//           secureTextEntry={true}
//           value={password}
//           onChangeText={(text) => {setPassword(text)}}
//           secureTextEntry={check}
//         />
//         <TouchableOpacity
//           onPress={() => setCheck(!check)} style={{position: 'absolute', right: widthPercentageToDP('3%'), top: heightPercentageToDP('2%')}}>
//           <Entypo name='eye' size={30}/>
//         </TouchableOpacity>
//       </View>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => {
//           axios({
//             method: 'POST',
//             url: 'http://13.250.101.249:3000/user/login',
//             data: {
//               email: email,
//               password: password
//             }
//           })
//             .then(({data}) => {
//               console.log(data)
//               navigation.navigate('Navigation')
//             })
//             .catch(err => {console.log('ini error di login', err.message)})
//         }}>
//         <Text style={styles.buttonText}>LOG IN</Text>
//       </TouchableOpacity>
//       <View style={styles.bawah}>
//         <Text style={{color: '#E5E5E5', fontSize: 15}}>Don't have an account?</Text>
//         <Text style={{color: '#FDE84D', fontSize: 15}} onPress={() => navigation.push('Register Role')}> Sign Up</Text>
//       </View>
//     </View>
//   );
// };

// export default Login;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#445E6B',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   inputText: {
//     marginTop: 5,
//     marginBottom: 5,
//     width: 300,
//     height: 50,
//     borderWidth: 3,
//     borderRadius: 5,
//     color: '#343434',
//     backgroundColor: '#E5E5E5',
//     padding: 10,
//   },
//   button: {
//     width: 300,
//     backgroundColor: '#FDE84D',
//     borderRadius: 5,
//     marginVertical: 10,
//     paddingVertical: 12,
//   },
//   buttonText: {
//     fontSize: 16,
//     color: '#445E6B',
//     textAlign: 'center',
//   },
//   bawah: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: 'row',
//   },
// });

////////////////////////////////////////////////////////////////////////////////
