import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
  Platform,
  ImageBackground,
} from 'react-native';
import LoginScreen from './src/screens/LoginScreen/LoginScreen'
import RegistrationScreen from './src/screens/RegistrationScreen/RegistrationScreen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import leaves from './images/leaves.jpg'


export default function App() {
  console.log(Platform.OS);

  return (
    <KeyboardAwareScrollView >
      
      <View style={styles.container}>
        {/* <StatusBar style="auto" /> */}
      <ImageBackground source={leaves} style={styles.imgBg}>
      
        <LoginScreen />
        <RegistrationScreen/>
        
      </ImageBackground>     
      
    </View>
    
    </KeyboardAwareScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fbfc',
  },
  
});
