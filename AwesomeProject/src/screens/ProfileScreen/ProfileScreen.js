import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    ImageBackground,
    ScrollView
} from 'react-native'
import React from 'react';
import { Feather, MaterialIcons, FontAwesome, AntDesign, Octicons } from '@expo/vector-icons'; 
import jobs from '../../../images/jobs.png';
import first from '../../../images/firstiphone.webp';
import mac from '../../../images/mac.webp';
import ipad from '../../../images/ipad.webp'
import leaves from '../../../images/leaves.jpg'




const ProfileScreen = () => {
    

    return (       
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}> 
        <ImageBackground source={leaves} style={styles.imgBg}>
            <View style={styles.profileBox}>
            <Image
                source={jobs}
                style={styles.image}
            />
            <View  style={styles.icon}>
            <Feather
                name="plus-circle"
                size={24}
                color="teal"
            />
            </View>
            <View style={styles.logout}>
                <MaterialIcons
                    name="exit-to-app"
                    size={24} color="white" />
            </View>
            
            
            <Text style={styles.title}>Steve Jobs</Text>

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
                        <FontAwesome style={styles.iconsSt} name="comment" size={20} color="teal" />
                        <Text>8</Text>
                    </View>
                    <View style={styles.detail}>
                        <AntDesign style={styles.iconsSt} name="like1" size={20} color="teal" />
                        <Text>153</Text>
                    </View>
                    </View>

                    <View style={styles.location}>
                        <Octicons style={styles.iconsSt} name="location" size={24} color="#00808076" />
                        <Text style={styles.text}>USA</Text>
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
                        <FontAwesome style={styles.iconsSt} name="comment" size={20} color="teal" />
                        <Text>3</Text>
                    </View>
                    <View style={styles.detail}>
                        <AntDesign style={styles.iconsSt} name="like1" size={20} color="teal" />
                        <Text>185</Text>
                    </View>
                    </View>

                    <View style={styles.location}>
                        <Octicons style={styles.iconsSt} name="location" size={24} color="#00808076" />
                        <Text style={styles.text}>USA</Text>
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
                        <FontAwesome style={styles.iconsSt} name="comment" size={20} color="teal" />
                        <Text>15</Text>
                    </View>
                    <View style={styles.detail}>
                        <AntDesign style={styles.iconsSt} name="like1" size={20} color="teal" />
                        <Text>200</Text>
                    </View>
                    </View>

                    <View style={styles.location}>
                        <Octicons style={styles.iconsSt} name="location" size={24} color="#00808076" />
                        <Text style={styles.text}>USA</Text>
                    </View>
                </View>
            </View>
            </View>    
            
            </ImageBackground>
             
    </View>
    </ScrollView>
    
  )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
    },

    profileBox: {
        position: 'relative',        
        width: Dimensions.get('window').width,
        marginTop: 200,
        paddinBottom: 100,
        paddingTop: 80,
        paddingHorizontal:20,
        backgroundColor: '#f9fbfc',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        alignItems: 'center',
        // backgroundColor: 'transparent',
    },
    image: {
        position: 'absolute',
        zIndex: 7,
        top: -70,
        backgroundColor: '#fff',
        width: 120,
        height: 120,
        borderRadius: 16,
    },
    icon: {
        position: 'absolute',
        zIndex: 10,
        right: 115,
        top: 15,
        backgroundColor: '#fff',
        borderRadius: 15,
    },
    logout: {
        position: 'absolute',
        top: -140,
        left: '100%',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#008080',
        marginBottom: 10,
    },
    imgBg: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
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

export default ProfileScreen;