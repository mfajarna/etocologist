import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Headers } from '../../components/atoms'
import ProfileAnak from '../../components/Molecules/ProfileAnak'
import { getDataAnak } from '../../redux/action'
import Gap from '../../utils/Gap'

const PoliAnak = ({navigation}) => {

    const dispatch = useDispatch();
    const{dataAnak} = useSelector(state => state.polianakReducer);

    useEffect(() => {
        dispatch(getDataAnak())
    },[])

    return (
        <View style={styles.container}>
            <Headers title="Poli Anak" subTitle="Menu Poli Anak" onBack={() => navigation.reset({index: 0, routes:[{name: 'MainApp'}]})} />

            <View style={styles.content}>
                <Text style={styles.text}>Profile Anak</Text>
                <Gap height={10} />
                {dataAnak.map(item => {
                    return(
                            <ProfileAnak 
                            key={item.id}
                            tgl_lahir = {item.tanggal_lahir}
                            jenis_kelamin = {item.jenis_kelamin}
                            nama={item.nama}
                            onPress={() => navigation.navigate('DetailProfileAnak', item)}
                            />
                            
                        )
                })}
            </View>
        </View>
    )
}

export default PoliAnak

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'white'
    },
    content:{
        backgroundColor:'white',
        paddingHorizontal: 25
    },
    text:{
        fontFamily: 'Poppins-SemiBold',
        fontSize: 15,
        color: '#493657'
    }
})
