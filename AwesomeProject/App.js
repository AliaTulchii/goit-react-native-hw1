import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
  Platform,
} from 'react-native';
import 'react-native-gesture-handler'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigations/AuthNavigator';



export default function App() {
  return (
    
    <NavigationContainer> 
      <AuthNavigator/>
    </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fbfc',
  },
  
});
