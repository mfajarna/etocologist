import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Gap from '../../../utils/Gap'

const RiwayatKonsultasi = ({tanggal,umur,bb}) => {

    const formatedDate = new Date(tanggal).toDateString();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Konsultasi Kehamilan</Text>
            <Gap height={10}/>
            <Text style={styles.desc}>{formatedDate}</Text>
            <Text style={styles.desc}>Umur Kehamilan {umur} Minggu</Text>
            <Text style={styles.desc}>Berat Badan {bb} Kg</Text>
        </View>
    )
}

export default RiwayatKonsultasi

const styles = StyleSheet.create({
    container:{
        padding: 8,
        backgroundColor: '#F0D9FF',
        borderRadius: 7,
        marginBottom: 10
    },
    title:{
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold'
    },
    desc:{
        fontSize: 12,
        fontFamily: 'Poppins-Regular'
    }
})
