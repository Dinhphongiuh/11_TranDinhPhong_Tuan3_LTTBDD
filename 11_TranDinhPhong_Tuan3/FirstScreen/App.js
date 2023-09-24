import { StatusBar } from 'expo-status-bar';
import { ImageBackground, ScrollView, StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <ImageBackground
        source={require('./assets/Rectangle25.png')}
        style={styles.backgroundImage}
      >
        <Image
            source={require('./assets/Ellipse8.png')}
            style={styles.rec}
          ></Image>

        <Text style={styles.text1}>GROW {'\n'}YOUR BUSINESS</Text>
        <Text style={styles.text2}>We will help you to grow your business using {'\n'} online server</Text>
        {/* <Button title='LOGIN' style={styles.btn}></Button> */}
        <View style={styles.btnn}>
          <TouchableOpacity style={styles.btn} onPress={() => { /* Xử lý khi nút được nhấn */ }}>
            <Text style={styles.btnText}>LOGIN</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.btn} onPress={() => { /* Xử lý khi nút được nhấn */ }}>
            <Text style={styles.btnText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    // height: 700,
    // width: 380,
    height: 690,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  container: {
    flex: 1,
  },
  rec:{
    marginTop: 60,
    height: 140,
    width: 140,
    borderRadius: 15,
  },
  text1:
  {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text2:
  {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: '#e3c000',
    borderRadius: 10,
    padding: 10,
    width: 109,
    height: 38,
    textAlign: 'center',
    fontWeight: '900',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText:{
    fontWeight: 'bold',
  },  
  btnn:{
    width: 280,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  }
});
