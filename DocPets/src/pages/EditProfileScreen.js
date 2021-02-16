import React, {useState} from 'react';
import { Text, View, TouchableOpacity, Button, Image, TextInput } from 'react-native';
import {logoutAction} from '../store/actions/auth'
import {connect} from 'react-redux'
import { RadioButton } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import * as ImagePicker from "react-native-image-picker"
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Ionicons'

import STYLE from '../../src/components/StyleCard';
import COLOR from '../../src/components/ColorCard';

const EditProfileScreen = (props) => {
  const [photo, setPhoto] = useState({photo: ""});
  const [gender, setGender] = React.useState('female');

  const handleChoosePhoto = () => {
    const options = {};
    ImagePicker.launchImageLibrary(options, response =>{
      console.log("response", response);
      if(response.uri) {
        setPhoto({photo: response});
      }
    })
  }

  const handleCameraPhoto = () => {
    const options = {};
    ImagePicker.launchCamera(options, response =>{
      console.log("response", response);
      if(response.uri) {
        setPhoto({photo: response});
      }
    })
  }

  return (
    <View style={{flex: 1}}>
      <View style={STYLE.headerArrow}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon name='arrow-back' style={STYLE.iconArrow}/>
        </TouchableOpacity>
        <Text style={STYLE.textHeader}>
          Edit Profile
        </Text>
      </View>

      <View style={STYLE.container}>
        <View style={STYLE.elementsContainer}>
          <View style={[{flex:1}, STYLE.flex1, STYLE.boxWithShadow]}>

            <View style={{marginTop: 10}}>
              {photo && (
                <Image
                  style={{width: 150, height: 150, borderColor: "gray", borderWidth: 5, alignSelf: "center"}}
                  source={{uri: photo.photo.uri}} />
              )}

              <View style={{flexDirection: "row", marginVertical: 5, alignSelf: "center"}}>
                <Entypo style={{marginHorizontal: 5}}
                  name='folder' size={40}
                  onPress={handleChoosePhoto}/>
                <Entypo style={{marginHorizontal: 5}}
                  name='camera' size={40}
                  onPress={handleCameraPhoto}/>
              </View>
            </View>

          </View>
        </View>
      </View>


      {/* UPDATE BASIC INFO */}
      <View style={STYLE.container}>
        <View style={STYLE.elementsContainer}>
          <View style={[{flex:1}, STYLE.flex1, STYLE.boxWithShadow]}>

            <View style={STYLE.profileditContainer}>
              <Entypo
                name='user'
                size={25}
                color='black'
                style={{padding: 10}}
              />
              <TextInput
                style={STYLE.inputText}
                placeholder={'Username'}
                //value={nama}
                //onChangeText={(text) => setNama(text)}
              />
            </View>

            <View style={STYLE.profileditContainer}>
              <Entypo
                name='phone'
                size={25}
                color='black'
                style={{padding: 10}}
              />
              <TextInput
                style={STYLE.inputText}
                placeholder={'Phone Number'}
                //keyboardType = 'numeric'
                //value={telepon}
                //onChangeText={(text) => {setTelepon(text)}}
              />
            </View>

            <View style={{alignSelf: "center"}}>
              <RadioButton.Group onValueChange={newValue => setGender(newValue)} value={gender}>
                <View style={[{flexDirection:"row", alignItems:'center'}], STYLE.radioContainer}>
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
            </View>

          </View>
        </View>
      </View>


      {/* SAVE UPDATE */}
      <View style={{alignSelf: "center"}}>
        <TouchableOpacity
          style={STYLE.button}
          //onPress={() => props.logout()}
          >
          <Text style={STYLE.buttonText}>SAVE</Text>
        </TouchableOpacity>
      </View>

      {/* update profile picture*/}


      {/* update profile picture */}


    </View>
  );
};

const mapStateToProps = (state) => ({
    animal: state.getAnimal.data
})

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logoutAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileScreen)
