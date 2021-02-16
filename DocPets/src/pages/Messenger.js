// With Firebase and Cloud Firestore

import React, { useState, useEffect, useCallback } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { StyleSheet, TextInput, View, YellowBox, Button } from 'react-native'
import * as firebase from 'firebase'
//import * as firebase from '@react-native-firebase/app'
import 'firebase/firestore'
//import firestore from '@react-native-firebase/firestore';

const firebaseConfig = {
  //Your firebase config here
  apiKey: "AIzaSyDO2-SfyxPYPrDmq6e4ehwzTw2f_IlJvts",
  authDomain: "docpets-8902a.firebaseapp.com",
  projectId: "docpets-8902a",
  storageBucket: "docpets-8902a.appspot.com",
  messagingSenderId: "1040049899157",
  appId: "1:1040049899157:web:46da49f0cadceb6ab53d9c"
}

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
}

YellowBox.ignoreWarnings(['Setting a timer for a long period of time'])

const db = firebase.firestore()
const chatsRef = db.collection('chats')

export default function ChatScreen() {
    const [user, setUser] = useState(null)
    const [name, setName] = useState('')
    const [messages, setMessages] = useState([])

    useEffect(() => {
        readUser()
        const unsubscribe = chatsRef.onSnapshot((querySnapshot) => {
            const messagesFirestore = querySnapshot
                .docChanges()
                .filter(({ type }) => type === 'added')
                .map(({ doc }) => {
                    const message = doc.data()
                    //createdAt is firebase.firestore.Timestamp instance
                    //https://firebase.google.com/docs/reference/js/firebase.firestore.Timestamp
                    return { ...message, createdAt: message.createdAt.toDate() }
                })
                .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
            appendMessages(messagesFirestore)
        })
        return () => unsubscribe()
    }, [])

    const appendMessages = useCallback(
        (messages) => {
            setMessages((previousMessages) => GiftedChat.append(previousMessages, messages))
        },
        [messages]
    )

    async function readUser() {
        const user = await AsyncStorage.getItem('user')
        if (user) {
            setUser(JSON.parse(user))
        }
    }
    async function handlePress() {
        const _id = Math.random().toString(36).substring(7)
        const user = { _id, name }
        await AsyncStorage.setItem('user', JSON.stringify(user))
        setUser(user)
    }
    async function handleSend(messages) {
        const writes = messages.map((m) => chatsRef.add(m))
        await Promise.all(writes)
    }

    if (!user) {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder="Enter your name" value={name} onChangeText={setName} />
                <Button onPress={handlePress} title="Enter the chat" />
            </View>
        )
    }
    return <GiftedChat messages={messages} user={user} onSend={handleSend} />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  input: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    padding: 15,
    marginBottom: 20,
    borderColor: 'gray',
  },
})

////////////////////////////////////////////////////////////////////////////////

// import React from 'react'
// import { Text, View, StyleSheet, ScrollView, Image, ImageBackground } from 'react-native';
// import {Avatar, Accessory} from 'react-native-elements';
// import {widthPercentageToDP as wp,
//     heightPercentageToDP as hp,
//     } from 'react-native-responsive-screen';
//
// import ChatCard from '../components/ChatCard';
//
// import STYLE from '../../src/components/StyleCard';
// import COLOR from '../../src/components/ColorCard';
//
// export default function Messenger(props) {
//   return (
//     <ImageBackground
//       source={require("../assets/background.png")}
//       style={{flex: 1}}>
//       <View style={STYLE.overlay}>
//
//         <View style={STYLE.header}>
//           <Image style={STYLE.headerLeft} source={require('../assets/docpets2.png')}/>
//           <Text style={STYLE.textHeader}>Messenger</Text>
//         </View>
//         <ScrollView>
//             <ChatCard navigation={props.navigation}/>
//             <ChatCard navigation={props.navigation}/>
//             <ChatCard navigation={props.navigation}/>
//             <ChatCard navigation={props.navigation}/>
//         </ScrollView>
//
//       </View>
//     </ImageBackground>
//   )
// }
