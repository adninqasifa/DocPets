import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const pageSatu = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: "#FFFFFF"}}>Hello world! Guys</Text>
    </View>
  );
};

export default pageSatu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343434',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
