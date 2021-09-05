import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const RiwayatKehamilan = ({title, value}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.desc}>{value}</Text>
        </View>
    )
}

export default RiwayatKehamilan

const styles = StyleSheet.create({
    container:{
        marginTop: 15,
        backgroundColor: '#F0D9FF',
        padding: 10,
        height: 120,
        width: 115,
        borderRadius: 10,
        marginRight: 10
    },
    title:{
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold',
        textAlign: 'center'
    },
    desc:{
        fontSize: 13,
        fontFamily: 'Poppins-Regular',
        textAlign: 'center',
        marginTop: 10
    }
})
