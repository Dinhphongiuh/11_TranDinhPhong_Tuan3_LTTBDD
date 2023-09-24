import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient
      colors={['#cff4f7', '#cff4f7', '#cff4f7','#cff4f7','#cff4f7','#cff4f7','#cff4f7','#cff4f7', '#04ccf9']}
      style={styles.container}
    >
      <Text style={styles.text1}>CODE</Text>
      <Text style={styles.text2}>VERIFICATION</Text>
      <Text style={styles.text2}>Enter ontime password sent on{'\n'}++849092605798</Text>
      <View style={styles.codeContainer}>
        <TextInput
          style={styles.codeInput}
          maxLength={1}
          keyboardType='numeric'
          returnKeyType='done'
        ></TextInput>
        <TextInput
          style={styles.codeInput}
          maxLength={1}
          keyboardType='numeric'
          returnKeyType='done'
        ></TextInput>
        <TextInput
          style={styles.codeInput}
          maxLength={1}
          keyboardType='numeric'
          returnKeyType='done'
        ></TextInput>
        <TextInput
          style={styles.codeInput}
          maxLength={1}
          keyboardType='numeric'
          returnKeyType='done'
        ></TextInput>
        <TextInput
          style={styles.codeInput}
          maxLength={1}
          keyboardType='numeric'
          returnKeyType='done'
        ></TextInput>
        <TextInput
          style={styles.codeInput}
          maxLength={1}
          keyboardType='numeric'
          returnKeyType='done'
        ></TextInput>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {}}
      >
        <Text style={styles.btnText}>VERIFY CODE</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  text1:{
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: '20%',
  },
  text2:{
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  codeContainer:{
    flexDirection: 'row',
  },
  codeInput:{
    borderWidth: 1,
    width: 50,
    height: 50,
    fontSize: 35,
    textAlign: 'center',
    color: 'pink',
  },
  btn:{
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e3c000',
    height: '7%',
    marginBottom: '20%',
  },
  btnText:{
    fontWeight: 'bold',
  }
});
