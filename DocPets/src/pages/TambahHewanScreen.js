import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import {connect} from 'react-redux'
import {widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons'

import {addAnimal, getAnimal} from '../store/actions/animal'

import STYLE from '../../src/components/StyleCard';
import COLOR from '../../src/components/ColorCard';

function TambahHewanScreen(props){
  const [petName, setPetName] = useState('')
  const [animalActive, setAnimalActive] = useState()
  const [genderActive, setGenderActive] = useState()
  const [kelamin, setKelamin]= useState()
  const [species, setSpecies] =useState()

  const kind = [
    {image: require('../assets/hewan/dog.png'), label: "Dog"},
    {image: require('../assets/hewan/cat.png'), label: "Cat"},
    {image: require('../assets/hewan/hamster.png'), label: "Hamster"},
    {image: require('../assets/hewan/rabbit.png'), label: "Rabbit"}
  ]

  const gender = [
    {label: "female", icons: "female"},
    {label: "male", icons: "male"}
  ]

  const submit = () => {
    const data = {
      name: petName,
      image: species,
      gender: kelamin
    }
    props.addanimal(data)
    props.getanimal()
    props.navigation.navigate('Profile')
  }

  return (
    <View>
      <View style={STYLE.headerArrow}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon name='arrow-back' style={STYLE.iconArrow}/>
        </TouchableOpacity>
        <Text style={STYLE.textHeader}>
          Add Pets
        </Text>
      </View>

      <Text style={STYLE.subJudul}>Name of Your Pets</Text>
      <TextInput
        style={STYLE.inputPet}
        placeholder='Name of Your Pets'
        value={petName}
        onChangeText={(text) => {setPetName(text)}}
      />

      <Text style={STYLE.subJudul}>Choose Your Pets</Text>
      <View style={STYLE.pilihan}>
        {kind.map((item, index) => (
          <TouchableOpacity
          style={animalActive === item.image ? STYLE.selectedHewan : STYLE.unselectedHewan}
          onPress={()=> {setAnimalActive(item.image), setSpecies(item.image)}}
          key={index}>
            <Image source={item.image} />
            <Text style={STYLE.buttonText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={STYLE.subJudul}>Choose Your Pet's Gender</Text>
      <View style={STYLE.pilihan}>
        {gender.map((item, index) => (
          <TouchableOpacity
            style={genderActive === item.label ? STYLE.selected: STYLE.unselected}
            onPress={() => {setGenderActive(item.label), setKelamin(item.label)}} key={index}>
              <Icon name={item.icons} size={hp('3%')}/>
              <Text style={STYLE.buttonText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={{alignItems: "center"}}>
        <TouchableOpacity
          style={STYLE.button}
          onPress={() => submit()}>
          <Text style={STYLE.buttonText}>ADD</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    addanimal: (data) => dispatch(addAnimal(data)),
    getanimal: () => dispatch({type: "GET_ANIMAL"})
})

export default connect(mapStateToProps, mapDispatchToProps )(TambahHewanScreen);
