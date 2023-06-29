import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native'
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import Button from '../../components/Button/Button';
import { Feather } from '@expo/vector-icons'; 
import jobs from '../../../images/jobs.png';
import hide from '../../../images/hide.png';
import view from '../../../images/view.png';

const RegistrationScreen = () => {
    const [useremail, setUseremail]  = useState('');
    const [password, setPassword] = useState('');  
    const [passwordHide, setPasswordHide] = useState(true);


    const onLoginPressed = () => {
        console.warn("Login");
    }

    const onRegisterPressed = () => {
        console.warn("Registration");
    }

    const setPasswordVisibility = () => {
        
        setPasswordHide(!passwordHide);       
        
    }



    return (
            
        <View style={styles.root}>
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
            
            <Text style={styles.title}>Create an acount</Text>

            <View style={styles.passwordBox}>
            <CustomInput
            placeholder="Login"
            value={useremail}
            setValue={setUseremail}
            secureTextEntry={false}                
            />
            </View>
            
            <View style={styles.passwordBox}>
            <CustomInput
            placeholder="Email"
            value={useremail}
            setValue={setUseremail}
            secureTextEntry={false}
            />
            </View>
            
            

            <View style={styles.passwordBox}>
            <CustomInput
            placeholder="Password"
            value={password}
            setValue={setPassword}
            secureTextEntry={passwordHide}
            />
            <TouchableOpacity activeOpacity={0.8}  onPress={setPasswordVisibility}>
            <Image source={passwordHide ? hide : view} style={styles.buttonImage} />
            </TouchableOpacity>
            </View>
            
            
            <Button
                onPress={onLoginPressed}
                text="Register"
            />

            <Text style={styles.textLogin}>
                Already have an account?
                <TouchableOpacity activeOpacity={0.8}>
                <Button
                text="Login"
                type="TERTIARY"
                />
                </TouchableOpacity>
            
            </Text>
            
             
    </View>
    
    
  )
}

const styles = StyleSheet.create({
    root: {
        position: 'relative',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        marginTop: 300,
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

    textLogin: {
        width: '100%',
        height: 20,
        padding: 5,
        textAlign: 'center',
        alignItems:'center',
        color: 'gray',
        fontWeight: 'bold',
    },
    buttonImage: {
        width: 24,
        height: 24,
        marginLeft: 30,
    },
    passwordBox: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        width: '70%',
        height: 40,
        backgroundColor: '#fff',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
    },
    focus: {
        borderColor: 'teal',
    }

});

export default RegistrationScreen;