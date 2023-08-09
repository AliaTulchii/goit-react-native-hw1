import {
    View,
    Text,
    TextInput,
    StyleSheet
} from 'react-native'
import React, { useState } from 'react'


const CustomInput = ({value, onChangeText, placeholder, secureTextEntry}) => {
    const [isFocused, setIsFocused] = useState(false);
   
return (

        <View style={[styles.container, isFocused && {borderWidth: 2, borderColor: 'teal'}]}>
        <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        
        width: '100%',
        height: 40,              

        paddingHorizontal: 10,
        marginVertical: 10,
        paddingTop: 10,
        borderRadius: 5
    },
})

export default CustomInput;