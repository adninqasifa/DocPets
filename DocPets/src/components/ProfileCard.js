import React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { Avatar } from "react-native-elements";
import {widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { GET_PROFILE } from '../store/types/index';

import STYLE from '../../src/components/StyleCard';
import COLOR from '../../src/components/ColorCard';

function ProfileCard(props){
  const [data,setData] = useState([])
  const [booking,setBooking] = useState([])

  useEffect(() => {
    props.getProfile();
    setBooking(props.notification)
    setData(props.animal)
  }, [props.animal])

  return(
    <View style={STYLE.profile}>

      <View style={STYLE.biodata}>
        <View style={STYLE.detail}>

          <View style={[{flex: 1}, STYLE.flexUp]}>
            <View style={STYLE.flexLeft}>
            <Image
                style={{width: 70, height: 70}}
                source={require('../../src/assets/profile.png')} />
              {/* <Avatar
              size="large"
              rounded
              icon={{ name: 'person'}}
              overlayContainerStyle={{backgroundColor: COLOR.gray}}
              activeOpacity={0.7}
              showEditButton= "true"
            /> */}
            </View>
            <View style={STYLE.flexCenter}>
              <Text
              numberOfLines={2}
              style={{fontSize: hp('3%'), fontWeight: 'bold', color: COLOR.black}}>Ultra Milk</Text>
              <Text style={{ color: COLOR.black}}>01234567</Text>
            </View>
            <View style={STYLE.flexRight}>
              <TouchableOpacity
                onPress={() => {props.navigation.navigate('EditProfile')}}>
              <Icon name='build' style={{fontSize: hp('3%'), color: COLOR.black}}/>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </View>

      <View style={STYLE.logoPetDate}>
        <View style={{alignItems: 'center'}}>
          <Icon name='pets'
          style={{fontSize: hp('4%'), color: COLOR.black}}/>
          <Text style={{fontSize: hp('2%'), color: COLOR.black}}>{data.length} Pets</Text>
        </View>
        <View style={STYLE.history}>
          <Icon name='date-range'
          style={{fontSize: hp('4%'), color: COLOR.black}}/>
          <Text style={{fontSize: hp('2%'), color: COLOR.black}}>{booking.length} Times</Text>
        </View>
      </View>

    </View>
  )
}

const mapStateToProps = (state) => ({
  profile: state.profile.data[0],
  animal: state.getAnimal.data,
  notification: state.getBooking.data
})

const mapDispatchToProps = (dispatch) => ({
  getProfile: () => dispatch({type:GET_PROFILE}),
  getBook: ()=> dispatch(getBooking())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCard)

////////////////////////////////////////////////////////////////////////////////

// import React, { useEffect, useState } from 'react';
// import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
// import { connect } from 'react-redux';
// import { Avatar } from "react-native-elements";
// import {widthPercentageToDP as wp,
//     heightPercentageToDP as hp,
//     } from 'react-native-responsive-screen';
// import Icon from 'react-native-vector-icons/MaterialIcons';
//
// import { GET_PROFILE } from '../store/types/index';
//
// import STYLE from '../../src/components/StyleCard';
// import COLOR from '../../src/components/ColorCard';
//
// function ProfileCard(props){
//   const [data,setData] = useState([])
//   const [booking,setBooking] = useState([])
//
//   useEffect(() => {
//     props.getProfile();
//     setBooking(props.notification)
//     setData(props.animal)
//   }, [props.animal])
//
//   return(
//     <View style={STYLE.profile}>
//
//       <View style={STYLE.biodata}>
//         <View style={STYLE.detail}>
//
//           <View style={[{flex: 1}, STYLE.flexUp]}>
//             <View style={STYLE.flexLeft}>
//               <Avatar
//               size="large"
//               rounded
//               icon={{ name: 'person'}}
//               overlayContainerStyle={{backgroundColor: COLOR.gray}}
//               activeOpacity={0.7}
//               showEditButton= "true"
//             />
//             </View>
//             <View style={STYLE.flexCenter}>
//               <Text
//               numberOfLines={2}
//               style={{fontSize: hp('3%'), fontWeight: 'bold', color: COLOR.black}}>Ultra Milk</Text>
//               <Text style={{ color: COLOR.black}}>01234567</Text>
//             </View>
//             <View style={STYLE.flexRight}>
//               <TouchableOpacity
//                 onPress={() => {props.navigation.navigate('EditProfile')}}>
//               <Icon name='build' style={{fontSize: hp('3%'), color: COLOR.black}}/>
//               </TouchableOpacity>
//             </View>
//           </View>
//
//         </View>
//       </View>
//
//       <View style={STYLE.logoPetDate}>
//         <View style={{alignItems: 'center'}}>
//           <Icon name='pets'
//           style={{fontSize: hp('4%'), color: COLOR.black}}/>
//           <Text style={{fontSize: hp('2%'), color: COLOR.black}}>{data.length} Pets</Text>
//         </View>
//         <View style={STYLE.history}>
//           <Icon name='date-range'
//           style={{fontSize: hp('4%'), color: COLOR.black}}/>
//           <Text style={{fontSize: hp('2%'), color: COLOR.black}}>{booking.length} Times</Text>
//         </View>
//       </View>
//
//     </View>
//   )
// }
//
// const mapStateToProps = (state) => ({
//   profile: state.profile.data[0],
//   animal: state.getAnimal.data,
//   notification: state.getBooking.data
// })
//
// const mapDispatchToProps = (dispatch) => ({
//   getProfile: () => dispatch({type:GET_PROFILE}),
//   getBook: ()=> dispatch(getBooking())
// })
//
// export default connect(mapStateToProps, mapDispatchToProps)(ProfileCard)
