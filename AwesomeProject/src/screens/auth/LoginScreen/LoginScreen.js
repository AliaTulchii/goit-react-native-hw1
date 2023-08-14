import {
    View,
    Text,
    Image,
    StyleSheet,
    useWindowDimensions,
    ScrollView,
    TouchableOpacity,
    ImageBackground,

} from 'react-native'
import React, {useState} from 'react';
import CustomInput from '../../../components/CustomInput/CustomInput';
import Button from '../../../components/Button/Button';
import hide from '../../../../images/hide.png';
import view from '../../../../images/view.png';
import leaves from '../../../../images/leaves.jpg'

const initialState = {
    email: '',
    password: '',
}

const LoginScreen = ({ navigation }) => {
    console.log('navigation', navigation);
    const { height } = useWindowDimensions();
    const [state, setState] = useState(initialState);
    const [passwordHide, setPasswordHide] = useState(true);


    
    const onLoginPressed = () => {
        console.warn("Login", state);
        console.log(state);
        setState(initialState);
        navigation.navigate('ROUTES.HOME')
    }


    const setPasswordVisibility = () => {        
        setPasswordHide(!passwordHide);        
    }


    


    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
            <ImageBackground source={leaves} style={styles.imgBg}>

            <View style={styles.loginBox}>
                    
            <Text style={styles.title}>Sign in</Text>

            <View style={styles.passwordBox}>
            <CustomInput
            placeholder="Enter your email"
            value={state.email}
            secureTextEntry={false}
            onChangeText={(value) => setState((prevState) => ({ ...prevState, email: value }))}               
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
                onPress={onLoginPressed}
                text="Login"
            />
            
            <View style={styles.qaBlock}>
            <Text style={styles.textLogin}>
            Don't have an account?           
            </Text>
            <TouchableOpacity activeOpacity={0.8}>
                <Button
                onPress={()=> navigation.navigate('ROUTES.REGISTRATION')}
                text=" Create one"
                type="TERTIARY"
                />
            </TouchableOpacity>
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

    qaBlock: {
        width: '80%',
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:210
    },

    textLogin: {
        width: 160,
        height: 30,
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
    }
    

});

export default LoginScreen