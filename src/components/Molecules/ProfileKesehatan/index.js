import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { DummyImage1 } from '../../../assets'
import { getDataProfile } from '../../../redux/action'
import { getData } from '../../../utils'
import RiwayatKehamilan from '../RiwayatKehamilan'

const ProfileKesehatan = ({nama,umur,tinggi,gpa,jarak_kehamilan,siklus_haid,kb,riwayat_penyakit}) => {
    
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(getDataProfile());
    // },[])

    // const{dataProfile} = useSelector(state => state.profileReducer);

    return (
        <View>
            <View style={styles.content}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={DummyImage1} />
                </View>
                <View style={styles.desc}>
                    <Text style={styles.text}>{nama}</Text>
                    <Text style={styles.desc}>{umur} Tahun</Text>
                    <Text style={styles.desc}>{tinggi} cm</Text>
                </View>
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>Biodata Kesehatan</Text>
                <View style={styles.indexKesehatan}>
                    <View style={styles.index}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <RiwayatKehamilan title="GPA" value={gpa} />
                            <RiwayatKehamilan title="Jarak Kehamilan" value={jarak_kehamilan} />
                            <RiwayatKehamilan title="Siklus Haid" value={siklus_haid}/>
                            <RiwayatKehamilan title="KB" value={kb}/>
                            <RiwayatKehamilan title="R Penyakit" value={riwayat_penyakit}/>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ProfileKesehatan

const styles = StyleSheet.create({
    content : {
        flexDirection: 'row',
        marginTop: 10
    },
    image:{
        width: 70,
        height: 70,
        borderRadius: 90
    },
    imageContainer: {
        marginRight: 10
    },
    text:{
        fontFamily: 'Poppins-SemiBold',
        fontSize: 15,
        color: '#493657'
    },
    desc:{
        fontFamily: 'Poppins-Regular'
    },
    container:{
        marginTop: 15
    },
    title:{
        fontFamily: 'Poppins-SemiBold',
        fontSize: 13,
        color: '#493657'
    },
    indexKesehatan : {
        flexDirection: 'row'
    },
    index:{
        flexDirection: 'row',
        flex: 1
    }
})
