import React, { useState, useEffect } from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux'
import { Avatar } from "react-native-elements";
import {widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

import {logoutAction} from '../store/actions/auth'
import ProfileCard from '../components/ProfileCard';

import STYLE from '../../src/components/StyleCard';
import COLOR from '../../src/components/ColorCard';

function Profile (props) {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(props.animal)
  }, [props.animal])

  return (
    <View style={{ flex: 1}}>
      <View style={STYLE.header}>
        <Image style={STYLE.headerLeft} source={require('../assets/docpets2.png')}/>
        <Text style={STYLE.textHeader}>Profile</Text>
      </View>

      <View style={[{flex:1}, STYLE.elementsContainer]}>
        <View style={[{flex:1}, STYLE.flex1, STYLE.boxWithShadow]}>
          <ProfileCard navigation={props.navigation}/>
          <View style={[{flex:1}, STYLE.flexDown]} />
        </View>

        <View style={{flex: 2}}>
          <TouchableOpacity
            style={STYLE.button}
            onPress={() => props.logout()}>
            <Text style={STYLE.buttonText}>LOG OUT</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  animal: state.getAnimal.data
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
