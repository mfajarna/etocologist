import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Ic_poli_anak } from '../../../assets'

const ProfileAnak = ({onPress,nama,tgl_lahir,jenis_kelamin}) => {

     const formatedDate = new Date(tgl_lahir).toDateString();

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={{ justifyContent: 'center' }}>
                <Ic_poli_anak />
            </View>
            <View style={{ marginLeft: 10 }}>
                <Text style={styles.text}>Nama Anak</Text>
                <Text style={styles.desc}>Tanggal Lahir  </Text>
                <Text style={styles.desc}>Jenis Kelamin  </Text>
            </View>
            <View style={{ marginLeft: 10 }}>
                <Text style={styles.text}>{nama}</Text>
                <Text style={styles.desc}>{formatedDate}</Text>
                <Text style={styles.desc}>{jenis_kelamin}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ProfileAnak

const styles = StyleSheet.create({
    container:{
        paddingVertical: 9,
        paddingHorizontal: 15,
        backgroundColor: '#F0D9FF',
        flexDirection: 'row',
        borderRadius: 10,
        marginBottom: 10,

        shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,

            elevation: 9,
        },
        text:{
            fontFamily: 'Poppins-SemiBold',
            fontSize: 14
        },
        desc:{
            fontFamily: 'Poppins-Regular',
            fontSize: 12
        }
})
