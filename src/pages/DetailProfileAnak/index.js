import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ButtonChart, Headers } from '../../components/atoms'
import { ItemValue } from '../../components/Molecules';
import { Gap } from '../../utils';

const DetailProfileAnak = ({navigation, route}) => {

    const data = route.params;
    console.log(data)

    return (
        <View style={styles.container}>
            <Headers title="Detail Profile Anak" subTitle="Lihat Detail Profile Anak" onBack={() => navigation.goBack()} />
            <View style={styles.content}>
                <View>
                   <Text style={styles.text}>Biodata Anak</Text>
                   <Gap height={10} />
                   <ItemValue label="Nama" value={data.nama}/>
                   <ItemValue label="Tanggal Lahir" value={data.tanggal_lahir}/>   
                   <ItemValue label="Tempat Lahir" value={data.tempat_lahir}/>   
                   <ItemValue label="Jenis Kelamin" value={data.jenis_kelamin}/>  
                   <Gap height={15} />
                   <Text style={styles.text}>Biodata Orang Tua</Text>
                   <Gap height={10} />
                   <ItemValue label="Nama Ibu" value={data.ibu.nama}/>
                   <ItemValue label="Nama Ayah" value={data.ibu.nama_suami}/>
                   <Gap height={15} />
                   <ButtonChart title="Anak" onPress={() => navigation.navigate('GrafikAnak',data)} />
                </View>
                
            </View>
        </View>
    )
}

export default DetailProfileAnak

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
    content:{
        flex: 1,
        paddingHorizontal: 25
    },
    text:{
        fontFamily: 'Poppins-SemiBold',
        color: '#493657'
    }
})
