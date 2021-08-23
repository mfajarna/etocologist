import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Il_sukses } from '../../assets'
import { CustomButton } from '../../components/atoms'

const SuccessLogin = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containerImage}>
                <Image source={Il_sukses} style={styles.image} />
            </View>
            <Text style={styles.title}>Yeay, Completed!</Text>
            <Text style={styles.desc}>Sekarang anda dapat menikmati berbagai layanan kami secara langsung!</Text>
            <CustomButton text="Dashboard" />
        </View>
    )
}

export default SuccessLogin

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white',
        paddingHorizontal: 33,
        paddingTop: 35
    },
    image:{
        width: 249,
        height: 308
    },
    containerImage:{
        alignItems: 'center',
        marginTop: 40
    },
    title:{
        fontFamily: 'Poppins-Medium',
        fontSize: 19,
        color: '#493657',
        textAlign: 'center',
        marginTop: 10
    },
    desc:{
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
        color: '#A7A7A7',
        textAlign: 'center',
        marginBottom: 50
    }
})
