import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity,
    ImageBackground,
} from 'react-native'
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import Button from '../../components/Button/Button';
import { Feather } from '@expo/vector-icons'; 
import jobs from '../../../images/jobs.png';
import hide from '../../../images/hide.png';
import view from '../../../images/view.png';
import leaves from '../../../images/leaves.jpg'


const initialState = {
    login: '',
    email: '',
    password: '',
}

const RegistrationScreen = ({navigation}) => {
    const [state, setState] = useState(initialState);
    const [useremail, setUseremail]  = useState('');
    const [password, setPassword] = useState('');  
    const [passwordHide, setPasswordHide] = useState(true);


    const onRegisterPressed = () => {
        console.warn("Registration", state);
        console.log(state);
        setState(initialState);
        navigation.navigate('Home')
    }

    const setPasswordVisibility = () => {
        
        setPasswordHide(!passwordHide);       
        
    }



    return (
            
        <View style={styles.root}>
            <ImageBackground source={leaves} style={styles.imgBg}>
            <View style={styles.loginBox}>
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
            value={state.login}
            secureTextEntry={false}   
            onChangeText={(value) => setState((prevState) => ({ ...prevState, login: value }))}        
            />
            </View>
            
            <View style={styles.passwordBox}>
            <CustomInput
            placeholder="Email"
            value={state.email}
            onChangeText={(value) => setState((prevState) => ({ ...prevState, email: value }))}
            secureTextEntry={false}
            />
            </View>
            
            

            <View style={styles.passwordBox}>
            <CustomInput
            placeholder="Password"
            value={state.password}
            onChangeText={(value) => setState((prevState) => ({ ...prevState, password: value }))}
            secureTextEntry={passwordHide}
            />
            <TouchableOpacity activeOpacity={0.8}  onPress={setPasswordVisibility}>
            <Image source={passwordHide ? hide : view} style={styles.buttonImage} />
            </TouchableOpacity>
            </View>
            
            
            <Button
                onPress={onRegisterPressed}
                text="Register"
            />

            <View style={styles.qaBlock}>
            <Text style={styles.textLogin}>
                Already have an account?            
            </Text>
            <TouchableOpacity activeOpacity={0.8}>
                <Button
                onPress={()=>navigation.navigate('Login')}
                text="Login"
                type="TERTIARY"
                />
            </TouchableOpacity>
            </View>

            </View>
            
            </ImageBackground>  
    </View>
    
    
  )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        // backgroundColor: 'transparent',
    },
    loginBox: {
        width: '100%',
        height: '80%',
        marginTop: 300,
        paddingTop: 60,
        backgroundColor: '#f9fbfc',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        alignItems: 'center',
    },
    image: {
        position: 'absolute',
        zIndex: 7,
        top: -80,
        backgroundColor: '#fff',
        width: 120,
        height: 120,
        borderRadius: 16,
    },
    icon: {
        position: 'absolute',
        zIndex: 10,
        right: 115,
        top: 5,
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

    qaBlock: {
        width: '80%',
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: 100
    },

    textLogin: {
        width: 190,
        fontSize: 15,
        textAlign: 'center',
        color: 'gray',
        fontWeight: 'bold',
    },
    buttonImage: {
        width: 24,
        height: 24,
        marginLeft: -40,
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