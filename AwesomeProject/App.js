import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
  Platform,
  ImageBackground,
} from 'react-native';
import LoginScreen from './src/screens/LoginScreen/LoginScreen'
import RegistrationScreen from './src/screens/RegistrationScreen/RegistrationScreen';
import CreatePostsScreen from './src/screens/CreatePostsScreen/CreatePostsScreen'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import leaves from './images/leaves.jpg'
import CommentsScreen from './src/screens/CommentsScreen/CommentsScreen';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
import PostsScreen from './src/screens/PostsScreen/PostsScreen';


export default function App() {
  console.log(Platform.OS);

  return (
    <KeyboardAwareScrollView >
      
      <View style={styles.container}>
        {/* <StatusBar style="auto" /> */}
      <ImageBackground source={leaves} style={styles.imgBg}>
      
        {/* <LoginScreen /> */}
        {/* <RegistrationScreen/> */}
        {/* <CreatePostsScreen/> */}
        {/* <CommentsScreen/> */}
        {/* <ProfileScreen/> */}
        <PostsScreen/>
        
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
