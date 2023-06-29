import {
    View,
    Text,
    Image,
    StyleSheet,
    useWindowDimensions,
    ScrollView,
    ImageBackground,
    KeyboardAvoidingView,
    TouchableOpacity
} from 'react-native'
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import Button from '../../components/Button/Button';
import hide from '../../../images/hide.png';
import view from '../../../images/view.png';

const LoginScreen = () => {
    const { height } = useWindowDimensions();
    
    const { useremail, setUseremail } = useState('');
    const { password, setPassword } = useState('');
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
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
            <View style={styles.loginBox}>
            <Text style={styles.title}>Sign in</Text>

            <View style={styles.passwordBox}>
            <CustomInput
            placeholder="Enter your email"
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
                text="Login"
            />

            <Text style={styles.textLogin}>
            Don't have an account?
            <TouchableOpacity activeOpacity={0.8}>
            <Button
                text=" Create one"
                type="TERTIARY"
            />
            </TouchableOpacity>
           
            </Text>
                
            
            
        </View>
            
        
    </View>
    </ScrollView>
    
  )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        // backgroundColor: 'transparent',
    },
    loginBox: {
        width: '100%',
        marginTop: 300,
        paddingTop: 30,
        backgroundColor: '#f9fbfc',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        alignItems: 'center',
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

});

export default LoginScreen