import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { get } from 'react-native/Libraries/Utilities/PixelRatio'
import { useDispatch, useSelector } from 'react-redux'
import { CustomButton, Headers, Select } from '../../components/atoms'
import { getDataAntrianIbu, getDataPoliIbu } from '../../redux/action'
import { API_HOST, getData, showMessage } from '../../utils'
import useForm from '../../utils/useForm'

const Antrian = ({navigation}) => {

    const dispatch = useDispatch();
    const[form,setForm] = useForm({
        nama_poli : '',
        id_ibu : id_ibu,
        status: 'MENUNGGU',
        no_antrian: antrianIbu,
    });

    const{antrianIbu} = useSelector(state => state.antrianReducer)
    const{dataBiodata} = useSelector(state => state.poliibuReducer);
    const [token, setToken] = useState('');

     const id_ibu = dataBiodata.id_ibu

    const data = {
        nama_poli : form.nama_poli,
        id_ibu: id_ibu,
        status: 'MENUNGGU',
        no_antrian: antrianIbu
    }


   


    useEffect(() => {
        dispatch(getDataAntrianIbu());
        dispatch(getDataPoliIbu())
        getData('token').then(res => {
            setToken(res.value);
    });
    },[])



    const onSubmit = () =>{ 
        if(form.nama_poli === "Poli Ibu")
        {   
            axios.post(`${API_HOST.url}/input-antrian-ibu`, data ,{
                headers:{
                    Authorization: token
                }
            }).then(resData => {
                console.log(resData)
            }).catch(err => {
                console.log(err.message)
            })

            showMessage(`Berhasil Membuat Antrian Dengan No Antrian ${antrianIbu}`, 'success');
            navigation.reset({index: 0, routes:[{name: 'MainApp'}]})

        }
    }
    return (
        <View style={styles.container}>
            <Headers title="Antrian" subTitle="Pesan No Antrian Poli" onBack={() => navigation.reset({index: 0, routes:[{name:'MainApp'}]})} />
            <View style={styles.content}>
                <Select label="Poli Tujuan" value={form.nama_poli} onSelectChange={(value) => setForm('nama_poli',value)} />
            </View>

            <View style={{ marginBottom:20, paddingHorizontal: 15 }}>
                <CustomButton text="Pesan" onPress={onSubmit} />
            </View>
            
        </View>
    )
}

export default Antrian

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
    content:{
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 25
    }
})