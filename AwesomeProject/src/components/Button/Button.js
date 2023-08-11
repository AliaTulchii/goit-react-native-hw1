import { Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const Button = ({onPress, text, type="PRIMARY"}) => {
  return (
    <Pressable
        onPress={onPress}
        style={[styles.container, styles[`container_${type}`]]}
    >
        <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '70%',
        height: 50,
        borderRadius: 25,
        paddingTop: 15,
        marginVertical: 10,
    },

    container_PRIMARY: {
        backgroundColor: '#008080',
    },

    container_TERTIARY: {
        width: 80,
        marginLeft: 5,
        paddingTop: 9,
    },

    text: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: "#fff",
    },

    text_TERTIARY: {
        color: 'gray',
        textDecorationLine: 'underline',
    }
})

export default Button;