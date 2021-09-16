import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Headers } from '../../components/atoms'
import { getDataNoAntrian, getDataPoliIbu, getDataProfile } from '../../redux/action'
import { getData } from '../../utils'

const NoAntrian = ({navigation}) => {

    const dispatch = useDispatch()



    const[token,setToken] = useState('')
    const{dataBiodata} = useSelector(state => state.poliibuReducer);
    const{noAntrian} = useSelector(state => state.antrianReducer)

    const id_ibu = dataBiodata.id_ibu;

    const renderButton = () => {
        if(noAntrian.length < 1)
        {
            return(
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Antrian')}>
                    <Text style={{ fontFamily: 'Poppins-SemiBold', color: 'white', textAlign: 'center' }}>Buat Antrian</Text>
                </TouchableOpacity>
            )
            
        }
    }

    useEffect(() => {
        getData('token').then(resToken => {
            setToken(resToken.value)
        })
        dispatch(getDataPoliIbu())
        dispatch(getDataNoAntrian(id_ibu))
    },[])

    

    return (
        <View style={styles.container}>
            <Headers title="No Antrian" subTitle="Lihat No Antrian" onBack={() => navigation.reset({index: 0, routes:[{name: 'MainApp'}]})} />
            <View style={styles.content}>
                {renderButton()}
                <View style={{ justifyContent: 'center', flex: 1 }}>
                <Text style={styles.text}>No Antrian Yang Aktif</Text>
                {noAntrian.map(item => {
                    return (
                        <View key={item.id}>
                            <Text style={styles.desc}>{item.no_antrian}</Text>
                        </View>
                    )
                })}
            </View>
        </View>
        </View>
    )
}

export default NoAntrian

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
    content:{
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 25
    },
    text:{
        fontSize: 18,
        textAlign: 'center',
        fontFamily: 'Poppins-SemiBold',
        marginBottom: 25
    },
    desc:{
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'Poppins-SemiBold',
        marginBottom: 25
    },
    button:{
        padding: 9,
        backgroundColor: '#493657',
        width: 120,
        borderRadius: 10
    }
})
