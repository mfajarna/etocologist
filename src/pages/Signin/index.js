import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View , Image} from 'react-native'
import { Ic_google, Ic_logo, Il_google } from '../../assets'
import { CustomButton, CustomTextInput } from '../../components/atoms'
import {Gap} from '../../utils'

const Signin = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign in</Text>
            <Text style={styles.desc}>Sign in untuk menikmati berbagai
                layanan kami
            </Text>
            <Gap height={60} />
            <CustomTextInput label="Email" placeholder="Masukan Email" />
            <Gap height={12}/>
            <CustomTextInput label="Password" placeholder="Masukan Password" />
            <Gap height={40}/>
            <CustomButton text="Sign in" />
            <Gap height={12}/>
            <TouchableOpacity onPress={() => navigation.replace('SignUp')}>
                <Text style={styles.signup}>Sign up now</Text>
            </TouchableOpacity>
            <Gap height={45} />
            <View style={styles.footer}>
                <Text style={styles.signup}>Or sign in with</Text>
                <Gap height={2} />
                <View style={styles.google}>
                    <Ic_google />
                    <Text style={styles.textGoogle}>Google</Text>
                </View>
            </View>
        </View>
    )
}

export default Signin

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 33,
        paddingTop: 35
    },
    title:{
        fontFamily: 'Poppins-SemiBold',
        fontSize: 22,
        color: '#493657',
        
    },
    desc:{
        fontFamily: 'Poppins-Medium',
        fontSize: 13,
        color: '#A7A7A7',
        maxWidth: 250
    },
    signup:{
        fontFamily: 'Poppins-SemiBold',
        fontSize: 13,
        color: '#493657'
    },
    footer:{
        alignItems: 'center'
    },
    google:{
        flexDirection: 'row'
    },
    textGoogle:{
        fontSize: 16,
        fontFamily: 'Poppins-Medium',
        marginLeft: 5,
        marginTop: -2
    }
})
