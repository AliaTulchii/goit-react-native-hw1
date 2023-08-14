import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons'; 
import React, {useState} from 'react';
import CustomInput from '../../../components/CustomInput/CustomInput';
import applelovers from '../../../../images/applelovers.jpg';
import group from '../../../../images/group.png';

const CommentsScreen = () => {

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
            <View style={styles.loginBox}>
                    
            <View style={styles.headBox}>
                <TouchableOpacity style={styles.arrowStyles} activeOpacity={0.8}  >
                    <AntDesign name="left" size={24} color="teal" />
                </TouchableOpacity>
                <Text style={styles.title}>Comments</Text>
            </View>

            <View style={styles.lineMainStyle}/>        
            
            <View>
            <Image
                source={applelovers}
                style={styles.imgPublic}
            />
            </View>
            
            <View>
            <Image
                source={group}
                style={styles.imgGroup}
            />
            </View>
            
            
            
            <View style={styles.commentsBox}>
            <CustomInput
            placeholder="Comment..."
            />
            <TouchableOpacity style={styles.buttonImage} activeOpacity={0.8} >
            <Ionicons name="ios-arrow-up" size={24} color="teal" />
            </TouchableOpacity>
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
    
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#008080',
        marginBottom: 10,
        marginLeft: 95,
    },
    imgPublic: {
        position: 'relative',
        width: 343,
        height: 240,
        borderRadius: 8,
        marginBottom: 10,
    },
    
    commentsBox: {
        position:"relative",
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        width: '90%',
        height: 40,
        backgroundColor: '#fff',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 10,
    },
    buttonImage: {
        position: 'absolute',
        left: '90%',
        backgroundColor: '#58aaaa3c',
        borderRadius: 50,
    },   

});

export default CommentsScreen