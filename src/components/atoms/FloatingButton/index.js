import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const FloatingButton = ({onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>Upload Photo</Text>
        </TouchableOpacity>
    )
}

export default FloatingButton

const styles = StyleSheet.create({
    container:{
        padding: 9,
        backgroundColor: '#493657',
        width: 120,
        borderRadius: 10
    },
    text:{
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Poppins-Regular'
    }
})
