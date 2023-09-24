import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput,Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
// Import FontAwesome icons
import Icon from 'react-native-vector-icons/FontAwesome';


export default function App() {
  return (
    <LinearGradient
      colors={['#cff4f7', '#cff4f7', '#cff4f7','#cff4f7','#cff4f7','#cff4f7','#cff4f7','#cff4f7', '#04ccf9']}
      style={styles.container}
    >
      <Image
        source={require('./assets/Lock.png')}
        style={styles.lockIcon}
      ></Image>
      <Text style={styles.text1}>FORGET{'\n'}PASSWORD</Text>
      <Text style={styles.text2}>Provide your account’s email for which you{'\n'}want to reset your password</Text>
      <View style={styles.inputContainer}>
        <Icon
          name='envelope'
          type='font-awesome'
          size={24}
          color={'gray'}
          style={styles.inputIcon}
        ></Icon>
        <Text style={styles.text3}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder='Gmail'
          placeholderTextColor={"gray"}
          textAlign='right'
        ></TextInput>
      </View>
      <View style={styles.btnn}>
          <TouchableOpacity
            style={styles.btn}
            onPress={()=>{}}
          >
            <Text style={styles.btnText}>NEXT</Text>
          </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  lockIcon:
  {
    marginTop: '20%',
  },
  text1:{
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text2:{
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputContainer:{
    flexDirection: 'row',
    backgroundColor: '#c4c4c4',
    width: '80%',
    height: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  text3:{
    paddingLeft: 10,
  },
  input:{
    flex: 1,
    textAlign: 'right',
  },
  btnn:{
    width: '80%',
    backgroundColor: '#e3c000',
    height: 45,
    marginBottom: '20%',
  },
  btn:{
    // backgroundColor: 'red',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  btnText:{
    fontWeight: 'bold',
  },
});
