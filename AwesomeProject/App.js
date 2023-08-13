import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
  Platform,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { NavigationContainer } from '@react-navigation/native';
import { useRoute } from './router';






export default function App() {
  console.log(Platform.OS);
  const routing = useRoute(null)
  return (
    
    <NavigationContainer> 
    {routing}    
    </NavigationContainer>
    

    // <KeyboardAwareScrollView >
      
    //   <View style={styles.container}>
    //     {/* <StatusBar style="auto" /> */}
    //   <ImageBackground source={leaves} style={styles.imgBg}>
      
          
            /* <LoginScreen /> */
            /* <RegistrationScreen/> */
    //     {/* <CreatePostsScreen/> */}
    //     {/* <CommentsScreen/> */}
    //     {/* <ProfileScreen/> */}
    //     {/* <PostsScreen/> */}
        
    //   </ImageBackground>     
      
    // </View>
    
    // </KeyboardAwareScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fbfc',
  },
  
});
