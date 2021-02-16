import COLOR from './ColorCard';
import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    } from 'react-native-responsive-screen'

const STYLE = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    flex:1,
    backgroundColor:'rgba(255,255,255,0.9)',
  },
  bg: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  bgSplash: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  searchbar: {
    borderRadius: 5,
    borderWidth: 1,
    margin: 10,
    paddingLeft: 20,
  },

  // FOR HEADER
  header: {
    flexDirection:"row",
    backgroundColor: COLOR.background,
    alignItems: 'center',
    // marginBottom: 20,
  },
  headerLeft:{
    flex: 1,
    height: 30,
    width: 30,
    position: 'absolute',
    marginLeft: wp('3%'),
  },
  headerArrow: {
    backgroundColor: COLOR.background,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 10,
    marginBottom: 20,
  },
  textHeader: {
    flex: 4,
    color: COLOR.white,
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
  },
  iconArrow: {
    flex: 1,
    fontSize: 30,
    color: COLOR.white,
    textAlign: 'center',
    marginTop: wp('1%'),
  },

  buttonImage: {
    width: 70,
    height: 70,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  subJudul: {
    color: COLOR.textButton,
    fontWeight: 'bold',
    marginHorizontal: 10,
    fontSize: 20,
    marginTop: 15,
  },
  appointment: {
    flexDirection: "row",
    borderColor: COLOR.background,
    borderWidth: 3,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  appointmentTanggal: {
    backgroundColor: COLOR.background,
    justifyContent: "center",
    marginVertical: 10,
    marginHorizontal: 10,
  },
  tgl: {
    fontFamily:"Roboto",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
    color: "black",
    marginHorizontal: 5,
    marginVertical: 5,
  },
  klinik: {
    color: "red",
    fontFamily:"Roboto",
    fontWeight:"bold",
    fontSize: wp('5%'),
  },
  tentang: {
    fontFamily:"Roboto",
    fontSize: wp('4%'),
    fontWeight: "bold",
    marginTop: 5,
    color: "black",
  },
  cardItemHard: {
    flexDirection:"row",
    borderColor: COLOR.background,
    borderWidth: 3,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  gambarKlinik: {
    height:hp('20%'),
    width:wp('35%'),
    borderRadius: 10,
    marginRight: wp('3%')
  },

  // FOR BUTTON
  button: {
    width: 300,
    backgroundColor: COLOR.primary,
    borderRadius: 5,
    marginVertical: 10,
    paddingVertical: 12,
  },
  buttonText: {
    fontSize: 16,
    color: COLOR.textButton,
    textAlign: 'center',
    fontWeight: 'bold',
    marginHorizontal: 5,
  },
  inputText: {
    marginTop: 5,
    marginBottom: 5,
    width: 250,
    height: 50,
    color: COLOR.gray,
  },
  detailContent:{
    marginLeft:wp('5%'),
    marginTop:hp('2%'),
    marginBottom:hp('2%')
  },
  klinik:{
    color: "red",
    fontFamily:"Roboto",
    fontWeight:"bold",
    fontSize:hp('3.5%'),
  },
  waktu:{
    fontFamily:"Roboto",
    fontSize:hp('2.5%'),
    fontWeight:"bold",
    color: COLOR.textButton,
  },
  gambarDokter: {
    borderRadius: 60,
    height: 70,
    width: 70,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  dokter: {
    fontSize: 16,
    color: COLOR.textButton,
    marginHorizontal: 10,
  },
  namaDokter: {
    fontSize: 18,
    color: COLOR.textButton,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  borderAbu: {
    flexDirection: "row",
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 3,
    alignSelf: "center",
    marginVertical: 5,
  },
  pilihan: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  hewanText: {
    fontSize: 16,
    color: COLOR.textButton,
    textAlign: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  unselected: {
    flexDirection: 'row',
    marginVertical: 15,
    marginHorizontal: 15,
    height: 40,
    backgroundColor: '#E0E9F5',
    alignItems: 'center',
  },
  selected: {
    flexDirection: 'row',
    marginVertical: 15,
    marginHorizontal: 15,
    height: 40,
    backgroundColor: COLOR.primary,
    alignItems: 'center',
  },
  unselectedHewan: {
    marginVertical: 10,
    marginHorizontal: 10,
    height: 80,
    backgroundColor: '#E0E9F5',
    alignItems: 'center',
  },
  selectedHewan: {
    marginVertical: 10,
    marginHorizontal: 10,
    height: 80,
    backgroundColor: COLOR.primary,
    alignItems: 'center',
  },
  unselectedDokter: {
    flexDirection: 'row',
    marginVertical: 5,
    height: 80,
    backgroundColor: '#E0E9F5',
    alignSelf: 'center',
  },
  selectedDokter: {
    flexDirection: 'row',
    marginVertical: 5,
    height: 80,
    backgroundColor: COLOR.primary,
    alignSelf: 'center',
  },
  unselectedPet: {
    flexDirection: 'row',
    marginVertical: 5,
    height: 45,
    backgroundColor: '#E0E9F5',
    alignSelf: 'center',
  },
  selectedPet: {
    flexDirection: 'row',
    marginVertical: 5,
    height: 45,
    backgroundColor: COLOR.primary,
    alignSelf: 'center',
  },
  inputPet: {
    marginVertical: 5,
    marginHorizontal: 5,
    width: 400,
    height: 50,
    borderWidth: 3,
    borderRadius: 5,
    color: '#343434',
    backgroundColor: '#E5E5E5',
    padding: 10,
  },
  cardItem:{
    flexDirection:"row",
    marginHorizontal: wp('5%'),
    //backgroundColor: "red",
  },
  gambarKlinik:{
    height:hp('20%'),
    width:wp('35%'),
    borderRadius:10,
    marginRight: wp('3%')
  },
  klinik:{
    color: "red",
    fontFamily:"Roboto",
    fontWeight:"bold",
    fontSize: wp('5%'),
  },
  tentang:{
    fontFamily:"Roboto",
    fontSize: wp('4%'),
    fontWeight: "bold",
    marginTop: 5,
  },
  buttonCard: {
    width: 370,
    backgroundColor: COLOR.primary,
    borderRadius: 5,
    marginVertical: 10,
    paddingVertical: 10,
  },
  containerCenter:{
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor:'red',
  },
  buttonKota:{
    backgroundColor: COLOR.primary,
    flexDirection: 'row',
    width: 130,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 2,
  },
  chatcard: {
    flexDirection: 'row',
    marginHorizontal: wp('5%'),
    paddingVertical: hp('2%'),
  },
  logoPetDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp('20%')
  },
  history: {
    alignItems: 'center',
    marginRight: wp('5%')
  },
  chatan: {
    color: COLOR.textButton,
    padding: 15,
    backgroundColor: COLOR.primary,
    borderRadius: 5,
    marginTop: 10,
    fontSize: 20,
  },
  iconArrowBack: {
    fontSize: 20,
    color: COLOR.white,
    paddingTop: 3,
    paddingRight:10
  },
  chatMessages: {
    alignItems: 'flex-end',
    width: 400,
  },
  chat: {
    flexDirection: 'row',
    alignContent: 'space-between',
    justifyContent: 'space-between',
    backgroundColor: '#F1F1F1',
    borderTopWidth: 1,
  },
  inputChat: {
    paddingLeft: wp('10%'),
    paddingVertical: hp('2%'),
    width: wp('80%'),
    backgroundColor: '#F1F1F1',
  },
  send: {
    paddingVertical: hp('2%'),
    fontSize: hp('4%'),
    paddingRight: wp('5%'),
    backgroundColor: '#F1F1F1'
  },
  buttonLokasi:{
    backgroundColor: COLOR.primary,
    flexDirection: 'row',
    width: 130,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 2,
  },
  modalBooking: {
    backgroundColor: COLOR.background,
    margin: 20,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },

  imageBackground: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.white,
    // borderWidth: 3,
    borderRadius: 5,
    // borderColor: '#000000',
    height: 50,
    margin: 10,
  },
    profileditContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLOR.white,
      borderWidth: 2,
      borderRadius: 5,
      borderColor: 'gray',
      height: 50,
      margin: 10,
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
    },
  eyeCheck: {
    position: 'absolute',
    right: wp('3%'),
    top: hp('1.3%')
  },
  bawah: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  headerStyle: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: '100',
    marginVertical: 20,
    color: COLOR.white,
  },

  //FOR PROFILE ELEMENTS
  profileContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex1: {
    width: wp('90%'),
    backgroundColor: COLOR.white,
    borderRadius: 5,
    marginTop: wp('3%'),
  },
  flexUp: {
   // backgroundColor: '#EE2C38',
    paddingHorizontal:10 ,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
  },

  // profile flexbox
  flexLeft: {
    width: wp('21%'),
    height: hp('10.4%'),
    //backgroundColor: COLOR.white,
  },
  flexCenter: {
    width: wp('56%'),
    height: hp('10.4%'),
    //backgroundColor: COLOR.gray,
  },
  flexRight: {
    width: wp('7%'),
    height: hp('4%'),
  },

  elementsContainer: {
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxWithShadow: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
  },
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
  detail: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    marginLeft: wp('3%')
  },
  avatar: {
      flex: 0.25,
  },
  radioBorder: {
    borderWidth: 3,
    borderRadius: 5 ,
    borderColor: 'black',
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.white,
    height: 60,
    width: 300,
    margin: 10
  },
  textShadow:{
    color:'#E5E5E5',
    textShadowColor: 'black',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 20,
    fontSize: 15,
  },
  profileText: {
    marginTop:5,
    marginLeft: 10,
    color: COLOR.gray,
  },
});

export default STYLE;
