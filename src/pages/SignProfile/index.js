import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { CustomButton, CustomTextInput } from '../../components/atoms'
import { Gap } from '../../utils'
import { Select } from '../../components/atoms'

const SignProfile = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign up profile</Text>
            <Text style={styles.desc}>Sign up untuk menikmati berbagai
                layanan kami
            </Text>
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                <Gap height={25} />
                <CustomTextInput label="Nama Lengkap" placeholder="Masukan Nama Lengkap" />
                <Gap height={12} />
                <CustomTextInput label="Umur" placeholder="Masukan Umur" keyboardType="numeric" />
                <Gap height={12} />
                <CustomTextInput label="Alamat" placeholder="Masukan Alamat" />
                <Gap height={12} />
                <Select label="Jenis Kelamin" />
                <Gap height={12} />
                <CustomTextInput label="No Handphone" placeholder="Masukan No Handphone" keyboardType="numeric" />
                <Gap height={30} />
                
                </ScrollView>
                <View style={styles.bottom}>
                    <CustomButton text="Sign up now" onPress={() => navigation.replace('SuccessLogin')} />
                </View>
            </View>
        </View>
    )
}

export default SignProfile

const styles = StyleSheet.create({
    container:{
        flex:1,
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
    content:{
        flex:1,
    },
    bottom:{
        marginBottom: 10
    }
})
