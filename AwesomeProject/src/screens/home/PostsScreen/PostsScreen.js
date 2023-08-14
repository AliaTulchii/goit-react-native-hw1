import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {  Octicons, FontAwesome, MaterialIcons} from '@expo/vector-icons'; 
import React, {useState} from 'react';
import jobs from '../../../../images/jobs.png';
import first from '../../../../images/firstiphone.webp';
import mac from '../../../../images/mac.webp';
import ipad from '../../../../images/ipad.webp'

const PostsScreen = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <View style={styles.loginBox}>
                    
          <View style={styles.headBox}>
            <Text style={styles.title}>Posts</Text>
            <TouchableOpacity style={styles.logoutStyles} activeOpacity={0.8} >
                <MaterialIcons
                    onPress={()=> navigation.navigate('ROUTES.LOGIN')}
                    name="exit-to-app"
                    size={24} color="teal" />
            </TouchableOpacity>
          </View>

          <View style={styles.lineMainStyle}/>        
          
          <View style={styles.userBlock}>
          <Image
                source={jobs}
                style={styles.imgUser}
            />
          <View>
              <Text style={styles.userName}>Steve Jobs</Text>
              <Text>sjobs@gmail.com</Text>
              
          </View>
          </View>

          <View style={styles.contentBlock}>
          <View>
            <Image
                source={first}
                style={styles.imgPublic}
            />
                        
            <Text style={styles.textStyle}>
                First iphone
            </Text>
                
                <View style={styles.detailsOrient}>
                    <View style={styles.details}>
                    <View style={styles.detail}>
                        <FontAwesome style={styles.iconsSt} name="comment-o" size={20} color="teal" />
                        <Text>0</Text>
                    </View>
                    
                    </View>

                    <View style={styles.location}>
                        <Octicons style={styles.iconsSt} name="location" size={24} color="#00808076" />
                        <Text style={styles.text}>New-York, USA</Text>
                    </View>
                </View>
            </View>

            <View>
            <Image
                source={mac}
                style={styles.imgPublic}
            />
                        
            <Text style={styles.textStyle}>
                Macbook
            </Text>
                
                <View style={styles.detailsOrient}>
                    <View style={styles.details}>
                    <View style={styles.detail}>
                        <FontAwesome style={styles.iconsSt} name="comment-o" size={20} color="teal" />
                        <Text>0</Text>
                    </View>
                  
                    </View>

                    <View style={styles.location}>
                        <Octicons style={styles.iconsSt} name="location" size={24} color="#00808076" />
                        <Text style={styles.text}>California, USA</Text>
                    </View>
                </View>
            </View>

            <View>
            <Image
                source={ipad}
                style={styles.imgPublic}
            />
                        
            <Text style={styles.textStyle}>
                Apple Ipad
            </Text>
                
                <View style={styles.detailsOrient}>
                    <View style={styles.details}>
                    <View style={styles.detail}>
                        <FontAwesome style={styles.iconsSt} name="comment-o" size={20} color="teal" />
                        <Text>0</Text>
                    </View>
                    
                    </View>

                    <View style={styles.location}>
                        <Octicons style={styles.iconsSt} name="location" size={24} color="#00808076" />
                        <Text style={styles.text}>Miami, USA</Text>
                    </View>
                </View>
            </View>
          </View>


        </View>
        
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
      alignItems: 'center',
  },
  loginBox: {
      width: '100%',
      marginTop: 0,
      paddingTop: 60,
      backgroundColor: '#f9fbfc',
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      alignItems: 'center',
  },
  headBox: {
      width: '90%',
      paddingTop: 15,
      paddingBottom:15,
      display: "flex",
      flexDirection: 'row',
  },
  
  lineMainStyle: {
      height: 1,
      width: '100%',
      backgroundColor: 'teal',
      marginBottom: 30,
  },
  logoutStyles: {
    marginLeft: 'auto'
  },
  title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#008080',
      marginBottom: 10,
      marginLeft: '42%',
  },
  userBlock: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  imgUser: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 8,
  },
  userName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#008080',
    
  },
  imgPublic: {
    position: 'relative',
    width: 343,
    height: 240,
    borderRadius: 8,
    marginBottom: 10,
},
textStyle: {
    height: 30,
    paddingLeft: 15,
    justifyContent: 'center',
    alignItems:'center',
    color: 'gray',
    fontWeight: 'bold',
},
text: {
    justifyContent: 'center',
    alignItems:'center',
    color: 'gray',
    textDecorationLine: 'underline'
},
detailsOrient: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 40,
},
details: {
    display: 'flex',
    flexDirection: 'row',
},
detail: {
    width: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
},
location: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    marginLeft: 'auto'
},
iconsSt: {
    marginRight:8
}


  

});

export default PostsScreen