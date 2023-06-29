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
        width: '60%',
        height: 35,
        borderRadius: 16,
        paddingTop: 10,
        marginVertical: 10,
    },

    container_PRIMARY: {
        backgroundColor: '#008080',
    },

    container_TERTIARY: {
        width: '30%',
        marginLeft: 5,
        paddingTop: 0,
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