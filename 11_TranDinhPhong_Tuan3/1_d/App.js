import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
// import { TextInput } from 'react-native-web';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons

export default function App() {
  const [isPasswordVisible, setPasswordVisible] = React.useState(false);

  return (
    <LinearGradient
      colors={['#d8efde', '#d8efde']}
      style={styles.container}
    >
      <Text style={styles.textLG}>LOGIN</Text>
      <TextInput
        style={styles.inputEM}
        placeholder='Email'
        keyboardType='email-address'
      ></TextInput>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputPass}
          placeholder='Password'
          secureTextEntry={!isPasswordVisible}
        >
        </TextInput>
        <TouchableOpacity
            onPress={() => setPasswordVisible(!isPasswordVisible)}
            style={styles.eyeIcon}
          >
            <Icon
              name={isPasswordVisible ? 'eye':'eye-slash'}
              size={20}
              color={'black'}
            >
            </Icon>
          </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.btnLog}
        onPress={()=>{}}
      >
        <Text style={styles.textbtn}>LOGIN</Text>
      </TouchableOpacity>
      <View style={styles.container2}>
        <Text style={styles.text2}>When you agree to terms and conditions</Text>
        <TouchableOpacity
          style={styles.forgotPass}
          onPress={()=>{}}
        >
          <Text style={styles.forgotPassText}>For got your password?</Text>
        </TouchableOpacity>
        <Text style={styles.text2}>Or login with</Text>
      </View>
      <View style={styles.logOtherContainer}>
        <TouchableOpacity style={styles.fbLog}>
          <Icon
            name='facebook-f'
            color={'#fff'}
            size={20}
          >
          </Icon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.zLog}>
          <Icon
            name='instagram'
            color={'#fff'}
            size={20}
          >
          </Icon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.googleLog}>
          <Icon
            name='google'
            // color={'#fff'}
            size={20}
          >
          </Icon>
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
  textLG:{
    fontWeight: 'bold',
    fontSize: 35,
    marginTop: '10%',
  },
  inputEM:{
    backgroundColor: '#c9e0d0',
    padding: 10,
    width: '80%',
    marginBottom: -30,
  },
  passwordContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#c9e0d0',
    width: '80%'
  },  
  inputPass:{
    flex: 1,
    backgroundColor: '#c9e0d0',
    // backgroundColor: 'red',
    padding: 10,
    width: '80%',
  },
  eyeIcon:{
    padding: 10,
  },
  btnLog:{
    width: '80%',
    backgroundColor: '#c34e3b',
    height: '8%',
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 10,
    marginBottom: -50,
  },
  textbtn:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24,
  },
  text2:{
    fontWeight: '500',
    textAlign: 'center',
    paddingBottom: 15,
    paddingTop: 15,
  },
  forgotPassText:{
    color: '#5D25FA',
    fontWeight: '500',
    textAlign: 'center',
  },
  container2:{
    marginBottom: -40,
  },
  logOtherContainer:
  {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10%',
  },
  fbLog:{
    backgroundColor: '#275a8d',
    width: '26.6%',
    height: 45,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  zLog:{
    backgroundColor: '#0F8EE0',
    width: '26.6%',
    height: 45,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleLog:{
    borderColor: 'blue',
    borderWidth: 1,
    width: '26.6%',
    height: 45,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
