import AsyncStorage from '@react-native-async-storage/async-storage'

export async function getHeaders(){
  const token = await AsyncStorage.getItem('APP_AUTH_TOKEN')
  return {
    'Content-Type' : 'application/json',
    Authorization: 'Bearer ' + token,
  }
}

export async function getAccountId() {
  return await AsyncStorage.getItem('APP_ACCOUNT_ID');
}

export async function saveToken(token) {
  AsyncStorage.setItem('APP_AUTH_TOKEN', token);
}

export async function saveAccountId(id) {
  AsyncStorage.setItem('APP_ACCOUNT_ID', String(id));
}

export async function removeToken(token) {
  AsyncStorage.removeItem('APP_AUTH_TOKEN');
}

export async function removeAccountId(id) {
  AsyncStorage.removeItem('APP_ACCOUNT_ID');
}

export function ValidateEmail(mail) {
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
    return (true)
  }
  return (false)
}
