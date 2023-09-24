import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  return (
    <LinearGradient
      colors={['#fff', '#fff']}
      style={styles.container}
    >
      <Image
        source={require('./assets/eyeball-3097971.png')}
      ></Image>

      <View style={styles.containerLogin}>
        <View style={styles.inputContainer}>
          <Icon
            name='user'
            size={25}
            color={'#ccc'}
            style={styles.userIcon}
            
          >

          </Icon>
          <TextInput
            placeholder='Please input user name'
            style={styles.input}
          >
          </TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Icon
            name='lock'
            size={25}
            color={'#ccc'}
            style={styles.userIcon}
          >
          </Icon>
          <TextInput
            placeholder='Please input password'
            textContentType='password'
            secureTextEntry
            style={styles.input}
          >
          </TextInput>
        </View>
      </View>

      <TouchableOpacity style={styles.btnLogin}>
        <Text style={styles.textBtn}>LOGIN</Text>
      </TouchableOpacity>
      <View style={styles.regis}>
        <TouchableOpacity>
          <Text style={styles.text1}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text1}>Forgot Password</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerOrtherLG}>
        <View style={styles.text3}>
          <View style={styles.line}></View>
          <Text style={styles.text2}>Other Login Methods</Text>
          <View style={styles.line}></View>
        </View>
      </View>

      <View style={styles.containerLoginOther}>
        <TouchableOpacity style={styles.group1}>
          <Icon
            name='user-plus'
            size={50}
            color={'#fff'}
          ></Icon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.group2}>
          <Icon
            name='wifi'
            size={50}
            color={'#fff'}
          ></Icon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.group3}>
          <Icon
            name='facebook'
            size={50}
            color={'#fff'}
          ></Icon>
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
  containerLogin:{
  },
  containerLogin:{
    width: '80%',
    // borderBottomColor: '#C4C4C4',
    // borderBottomWidth: 1,
    // flexDirection: 'row',
  },
  inputContainer: {
    flexDirection: 'row',
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 1,
    marginBottom: 30,
  },
  input:{
    width: '90%',
    // backgroundColor: 'red',
    paddingLeft: 10,
    fontSize: 20,
  },
  userIcon:{
    // paddingBottom: 10,
  },
  btnLogin:{
    backgroundColor: '#386FFC',
    width: '80%',
    height: 48,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: -30,
    marginTop: -30,
  },
  textBtn:{
    color: '#ffffff',
    fontWeight: '400',
    fontSize: 18,
  },
  regis:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text1:{
    fontWeight: '400',
    fontSize: 18,
  },
  containerOrtherLG:{
    width: '80%',
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text3:{
    flexDirection: 'row',
  },
  line:{
    flex: 0,
    width: '20%',
    height: 1,
    backgroundColor: '#0E18F5',
    marginTop: 9,
  },
  text2:{
    fontSize: 18,
    fontWeight: '400',
  },
  containerLoginOther:{
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    marginTop: -20,
  },
  group1:{
    borderRadius: 10,
    width: 74,
    height: 74,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3AB4FF',
  },
  group2:{
    borderRadius: 10,
    width: 74,
    height: 74,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4AA47',
  },
  group3:{
    borderRadius: 10,
    width: 74,
    height: 74,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3a579c',
  }
});
