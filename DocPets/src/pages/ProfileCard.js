import React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Avatar } from "react-native-elements";
import STYLE from '../../src/components/StyleCard';
import COLOR from '../../src/components/ColorCard';
import { connect } from 'react-redux';
import { GET_PROFILE } from '../store/types/index';


function ProfileCard(props){
    const [data,setData] = useState([])
    const [booking,setBooking] = useState([])
    
    useEffect(() => {
        props.getProfile();
        setBooking(props.notification)
        setData(props.animal)
    }, [props.animal])


    return(
        <View style={styles.profile}>
            <View style={styles.biodata}>
                {/* <View style={styles.poto}>
                    
                </View> */}
                <View style={styles.detail}>

                    <View style={[{flex: 1}, STYLE.flexUp]}>
                        <View style={STYLE.flexLeft}>
                            <Avatar
                            size="large"
                            rounded 
                            icon={{ name: 'person'}} 
                            overlayContainerStyle={{backgroundColor: COLOR.gray}}
                            activeOpacity={0.7}
                            showEditButton= "true"
                            />
                        </View>
                        <View style={STYLE.flexCenter} >
                            <Text 
                            numberOfLines={2}
                            style={{fontSize: hp('3%'), fontWeight: 'bold', color: COLOR.black}}>aaabbb</Text>
                            <Text style={{ color: COLOR.black}}>111111119</Text>
                        </View>
                        <View style={STYLE.flexRight} >
                            <TouchableOpacity  
                            //onPress={() => {navigation.push('EditProfile')}}
                            >
                            <Icon name='build' style={{fontSize: hp('3%'), color: COLOR.black}}/>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* </View> */}
                    {/* <TouchableOpacity style={styles.edit} 
                     onPress={() => props.navigation.navigate('EditProfile')}>
                        <Icon name='pencil' style={{fontSize: hp('3%')}}/>
                    </TouchableOpacity> */}
                </View>
            </View>
            <View style={styles.logo}>
                <View style={styles.hewan}>
                    <Icon name='pets'
                    style={{fontSize: hp('4%'), color: COLOR.black}}/>
                    <Text style={{fontSize: hp('2%'), color: COLOR.black}}>{data.length} Pets</Text>
                </View>
                <View style={styles.history}>
                    <Icon name='date-range'
                    style={{fontSize: hp('4%'), color: COLOR.black}}/>
                    <Text style={{fontSize: hp('2%'), color: COLOR.black}}>{booking.length} Times</Text>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    profile: {
        marginHorizontal: wp('5%'),
        alignContent: 'center', 
        elevation: 2,
        paddingVertical: hp('3%')
    },
    biodata: {
        flexDirection: "row",
        marginBottom: hp('2%'),
    },
    poto: {
        flex: 0.25,
    },
    detail: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        marginLeft: wp('3%')
    }, 
    edit: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: wp('20%')
    },
    umur: {
        alignItems: 'center',
        marginLeft: wp('5%')
    },
    hewan: {
        alignItems: 'center'
    },
    history: {
        alignItems: 'center',
        marginRight: wp('5%')
    }
})

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
// profile
//     biodata
//         poto
//         detail
//         button
//     logo
//         umur
//         hewan
//         history

/* ada masalah di jumlah nomor hp (karakter terbatas sampe di 10), 
terus di bagian awal gabisa dimasukin 0,
base urlnya bisa diganti yang tidak menggunakan IP,
cek dokumentasi bagian profile, ada kesalahan dalam dokumentasi profile,
*/