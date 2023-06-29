import {
    View,
    Text,
    TextInput,
    StyleSheet
} from 'react-native'
import React, { useState } from 'react'


const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
    const [isFocused, setIsFocused] = useState(false);
   
    return (
          

    <View style={[styles.container, isFocused && {borderWidth: 2, borderColor: 'teal'}]}>
        <TextInput
            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
            style={styles.input}
            secureTextEntry={secureTextEntry}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        
        width: '70%',
        height: 40,        

        

        paddingHorizontal: 10,
        marginVertical: 10,
        paddingTop: 10,
    },
    input: {
        
    },
})

export default CustomInput;