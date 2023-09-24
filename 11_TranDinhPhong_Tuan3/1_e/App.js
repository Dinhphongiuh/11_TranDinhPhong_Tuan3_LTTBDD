  import { StatusBar } from 'expo-status-bar';
  import * as React from 'react';
  import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Modal, Button } from 'react-native';
  import { LinearGradient } from 'expo-linear-gradient';
  // import { TextInput } from 'react-native-web';
  import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons

  export default function App() {
    const [isPasswordVisible, setPasswordVisible] = React.useState(false);
    const [gender, setGender] = React.useState('');

    return (
      <LinearGradient
        colors={['#d8efde', '#d8efde']}
        style={styles.container}
      >
        <Text style={styles.textReg}>REGISTER</Text>
        <View style={styles.regContainer}>
          <TextInput
            style={[styles.input, styles.inputPad]}
            placeholder='Name'
          ></TextInput>
          <TextInput
            style={[styles.input, styles.inputPad]}
            keyboardType='numeric'
            placeholder='Phone'
          ></TextInput>
          <TextInput
            style={[styles.input, styles.inputPad]}
            placeholder='Email'
            keyboardType='email-address'
          ></TextInput>
          <View style={[styles.passContainer, styles.input, styles.inputPad]}>
            <TextInput
              style={[styles.input]}
              placeholder='Password'
              secureTextEntry={!isPasswordVisible}
            ></TextInput>
            <TouchableOpacity
              onPress={()=>setPasswordVisible(!isPasswordVisible)}
              style={styles.eyeIcon}
            >
              <Icon
                name={isPasswordVisible ? 'eye':'eye-slash'}
                size={20}
                color={'black'}
              ></Icon>
            </TouchableOpacity>
          </View>
          <TextInput
            style={[styles.input, styles.inputPad]}
            placeholder='Birthday'
          ></TextInput>
          {/* radio */}
          <View style={[styles.radioBtnContainer, styles.inputPad]}>
            {['Male', 'Female'].map(choose => (
              <View key={choose} style={styles.setGender}>
                <TouchableOpacity style={styles.outter}
                  onPress={()=>setGender(choose)}
                >
                  {gender === choose && <View style={styles.inner}></View>}
                </TouchableOpacity>
                <Text>{choose}</Text>
              </View>
            ))}
          </View>
        </View>

        <TouchableOpacity
          style={styles.regBtn}
        >
          <Text style={styles.textBtn}>REGISTER</Text>
        </TouchableOpacity>
        <Text style={styles.textFood}>When you agree to terms and conditions</Text>
      </LinearGradient>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    textReg:{
      fontWeight: 'bold',
      fontSize: 30,
      marginTop: '10%',
    },
    regContainer:{
      width: '80%',
    },
    input:{
      backgroundColor: '#c9e0d0',
      width: '93%',
      height: 45,
      padding: 5,
    },
    passContainer:{
      width: '100%',
      flexDirection: 'row',
      backgroundColor: '#c9e0d0',
      alignItems: 'center',
    },
    eyeIcon:{
      
    },
    inputPad:{
      marginBottom: 20,
    },
    radioBtnContainer: {
      flexDirection: 'row',
    },
    inner:{
      width: 15,
      height: 15,
      backgroundColor: 'gray',
      borderRadius: 10,
    },
    outter:{
      width: 25,
      height: 25,
      borderWidth: 2,
      borderRadius: 15,
       alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10,
    },
    setGender:
    {
      marginHorizontal: 15,
      flexDirection: 'row',
    },
    regBtn:{
      backgroundColor: '#c34e3b',
      width: '80%',
      height: 45,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textBtn:{
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 20,
    },
    textFood:{
      fontWeight: '400',
      marginBottom: '10%',
    }
  });
