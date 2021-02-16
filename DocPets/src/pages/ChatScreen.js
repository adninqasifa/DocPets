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
// With socket.io

// import React, { Component } from "react";
// import { TextInput, ScrollView, Text, View, TouchableOpacity } from "react-native";
// import {widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
//   } from 'react-native-responsive-screen';
// import Icon from 'react-native-vector-icons/Ionicons';
// import io from "socket.io-client";
//
// import STYLE from '../../src/components/StyleCard';
// import COLOR from '../../src/components/ColorCard';
//
// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       chatMessage: "",
//       chatMessages: []
//     };
//   }
//
//   componentDidMount() {
//     this.socket = io("http://192.168.1.5:3000");
//     this.socket.on("chat message", msg => {
//       this.setState({ chatMessages: [...this.state.chatMessages, msg] });
//     });
//   }
//
//   submitChatMessage() {
//     console.log(this.state.chatMessage);
//     this.socket.emit("chat message", this.state.chatMessage);
//     this.setState({ chatMessage: "" });
//   }
//
//   render() {
//     const chatMessages = this.state.chatMessages.map(chatMessage  => (
//       <Text style={STYLE.chatan} key={chatMessage}>{chatMessage}</Text>
//     ));
//
//     return (
//       <View>
//         <View style={STYLE.headerArrow}>
//           <TouchableOpacity onPress={()=> this.props.navigation.navigate('Messenger')}>
//             <Icon name='arrow-back' style={STYLE.iconArrowBack}/>
//           </TouchableOpacity>
//           <Text style={STYLE.textHeader}>
//             Kembali
//           </Text>
//         </View>
//
//         <ScrollView style={{height: hp('78%')}}>
//           <View style={STYLE.chatMessages}>{chatMessages}</View>
//         </ScrollView>
//
//         <View style={STYLE.chat}>
//           <TextInput
//             style={STYLE.inputChat}
//             placeholder="Type a message"
//             autoCorrect={false}
//             value={this.state.chatMessage}
//             onChangeText={chatMessage => {
//             this.setState({ chatMessage });
//           }}
//           />
//           <TouchableOpacity onPress={() => this.submitChatMessage()}>
//             <Icon name='send' style={STYLE.send}/>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }
// }

////////////////////////////////////////////////////////////////////////////////
