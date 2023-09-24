import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Hello</Text>
    //   <StatusBar style="auto" />
    // </View>

    <LinearGradient
      colors={['#cff4f7', '#cff4f7', '#cff4f7','#cff4f7','#cff4f7','#cff4f7','#cff4f7','#cff4f7', '#04ccf9']}
      style={styles.container}
    >
      <Image
        source={require('./assets/Ellipse1circle.png')}
        style={styles.cir}
      ></Image>
      <Text style={styles.text1}>GROW {'\n'}YOUR BUSINESS</Text>
      <Text style={styles.text2}>We will help you to grow your business using{'\n'} online server</Text>
      <View style={styles.btnn}>
          <TouchableOpacity style={styles.btn} onPress={() => { /* Xử lý khi nút được nhấn */ }}>
                <Text style={styles.btnText}>LOGIN</Text>
          </TouchableOpacity>
              
          <TouchableOpacity style={styles.btn} onPress={() => { /* Xử lý khi nút được nhấn */ }}>
                <Text style={styles.btnText}>SIGN UP</Text>
          </TouchableOpacity>
      </View>
      <Text style={styles.text3}>HOW WE WORK?</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  cir:{
    width: 142,
    height: 142,
    marginTop: '19%',
  },
  text1:{
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  text2:{
    textAlign: 'center',
    fontWeight: 'bold',
  },
  btnn:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: '-4%',
  },
  btn:{
    backgroundColor: '#e3c000',
    width: 125,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText:{
    fontWeight: 'bold',
    fontSize: 20,
  },
  text3:{
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: '10%',
  }
});
