import {
    View,
    Text,
    Image,
    StyleSheet,
    useWindowDimensions,
    ScrollView,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';
import { AntDesign, Entypo, Octicons, Fontisto } from '@expo/vector-icons'; 
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import Button from '../../components/Button/Button';
import macbook from '../../../images/macbook.jpg'




const CreatePostsScreen = () => {
    const { height } = useWindowDimensions();
    // const [state, setState] = useState(initialState);
    const [passwordHide, setPasswordHide] = useState(true);


    
    const onLoginPressed = () => {
        console.warn("Login");
        // console.log(state);
        // setState(initialState);
        
    }


    const setPasswordVisibility = () => {        
        setPasswordHide(!passwordHide);        
    }


    


    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
            <View style={styles.loginBox}>
                    
            <View style={styles.headBox}>
                <TouchableOpacity style={styles.arrowStyles} activeOpacity={0.8}  onPress={setPasswordVisibility}>
                    <AntDesign name="left" size={24} color="teal" />
                </TouchableOpacity>
                <Text style={styles.title}>Create post</Text>
            </View>

            <View style={styles.lineMainStyle}/>        
            
            <View>
            <Image
                source={macbook}
                style={styles.imgPublic}
            />
            <View style={styles.cameraicon}>
                <Entypo name="camera" size={24} color="black" />
            </View>
                        
            <Text style={styles.textStyle}>
                Add photo
            </Text>
            </View>
           
            
            <View style={styles.contentBox}>
            <CustomInput
            placeholder="Name..."             
            />
            </View>
            
            <View style={styles.lineStyle}/>  
            
            
            <View style={styles.contentBox}>
            <TouchableOpacity activeOpacity={0.8}  onPress={setPasswordVisibility}>
            <Octicons name="location" size={24} color="#00808076" />
            </TouchableOpacity>
            <CustomInput
            placeholder="Location..."
            />            
            </View>
                    
            <View style={styles.lineStyle}/> 
            
            <View style={styles.buttnPub}>
            <Button
                onPress={onLoginPressed}
                text="Publish"
            />        
            </View>
            
                    
            <TouchableOpacity style={styles.trashStyles} activeOpacity={0.8}  onPress={setPasswordVisibility}>
                <Fontisto name="trash" size={24} color="teal" />
            </TouchableOpacity>

            
                
            
            
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
        width: '80%',
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
    lineStyle: {
        height: 1,
        width: '90%',
        backgroundColor: '#00808076',
        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#008080',
        marginBottom: 10,
        marginLeft: 75,
    },
    imgPublic: {
        position: 'relative',
        width: 343,
        height: 240,
        borderRadius: 8,
        marginBottom: 10,
    },
    cameraicon: {
        position: 'absolute',
        left: '38%',
        top: '35%',
        backgroundColor: '#f8fdfd91',
        padding: 20,
        borderRadius: 50,
    },
    textStyle: {
        height: 40,
        paddingLeft: 15,
        justifyContent: 'center',
        alignItems:'center',
        color: 'gray',
        fontWeight: 'bold',
    },
    buttnPub: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        marginBottom: 90,
    },
    contentBox: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginVertical: 0,
        width: '90%',
        height: 40,
        backgroundColor: 'transparent',
        
    },
    trashStyles: {
        paddingTop: 10,
        paddingBottom: 10,
        padding:30,
        backgroundColor: '#58aaaa3c',
        borderRadius: 25,
        marginBottom: 40,
    }

    

});

export default CreatePostsScreen