import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { CustomButton, CustomTextInput, Headers } from '../../components/atoms'
import ImagePicker from 'react-native-image-picker';
import { API_HOST, getData, showMessage } from '../../utils';
import useForm from '../../utils/useForm';
import axios from 'axios';

const UploadPhoto = ({navigation, route}) => {
    const [photo,setPhoto] = useState('');
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const id_ibu = route.params;

    const{uploadPhotoUsgReducer} = useSelector(state => state);

    const status = uploadPhotoUsgReducer.isUploadPhoto;


    const[form,setForm] = useForm({
        id_ibu: id_ibu,
        title: '',
    });

    useEffect(() =>{
        getData("token").then(res => {
            setToken(res.value)
        })
    },[])



    const addPhoto = () =>{
        ImagePicker.launchImageLibrary(
            {
                quality: 1,
                width:700,
                height:500
            },
            (response) => {
                console.log('Response', response)

                if(response.didCancel || response.error)
                {
                    showMessage('Anda tidak memilih foto!')
                }else{
                    const source = {uri: response.uri}
                    const dataImage = {
                        uri: response.uri,
                        type: response.type,
                        name: response.fileName
                    };
                    showMessage('Berhasil Memilih Photo', 'success');
                    setPhoto(source);
                    dispatch({type: 'SET_UPLOAD_PHOTO', value: dataImage});
                    dispatch({type:'SET_STATUS_UPLOAD', value: true})
                }
            }
        )
    }

    const onSubmit = () => {
        if(status == false || form.title == '')
        {
            showMessage('Foto atau Deskripsi Tidak Boleh Kosong!')
        }else{
            if(uploadPhotoUsgReducer.isUploadPhoto)
            {
                const photoForUpload = new FormData();
                photoForUpload.append('file', uploadPhotoUsgReducer);
                photoForUpload.append('id_ibu', id_ibu);
                photoForUpload.append('title', form.title)

                axios.post(`${API_HOST.url}/upload-usg`, photoForUpload, {
                    headers:{
                        Authorization: token,
                        'Content-Type':'multipart/form-data',
                    }
                }).then(res => {
                    showMessage('Berhasil Upload Photo','success');
                    navigation.reset({index: 0, routes:[{name: 'Uploadusg'}]})
                }).catch(err => {
                    console.log(err.message)
                })
            }
        }
    }


    return (
        <View style={styles.container}>
            <Headers title="Upload Photo" subTitle="Tambah Foto USG Baru" onBack={() => navigation.reset({index: 0, routes:[{name: 'Uploadusg'}]})} />
            <View style={styles.content}>
                <View style={styles.photoContent}>
                    <TouchableOpacity onPress={addPhoto}>
                        <Text style={styles.photoPembayaran}>+ Add Photo</Text>
                    </TouchableOpacity>
                    {photo ? <Image source={photo} style={styles.photoImage} /> : <View style={styles.photoContainer}>
                        <Text style={styles.addPhoto}></Text>
                        </View>}
                </View>
                <View>
                    <CustomTextInput label="Deskripsi Foto" placeholder="Masukan Deskripsi Foto" value={form.title} onChangeText={value => setForm('title', value)} />
                </View>
                <View style={{ marginBottom: 10 }} >
                    <CustomButton text="Upload Photo" onPress={onSubmit} />
                </View>
            </View>
        </View>
    )
}

export default UploadPhoto

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    content:{
        flex: 1,
        paddingHorizontal: 25,
        justifyContent: 'space-between'
    },
    photoImage:{
        width: 350,
        height: 300,
        borderRadius: 10
     },
    photoContent:{
      backgroundColor: 'white',
      alignItems: "center",
      marginBottom: 15
  },
    photoPembayaran: {
      fontSize: 15,
      fontFamily: 'Poppins-SemiBold',
      color: '#493657',
      padding: 8,
      borderRadius: 5,
      marginVertical: 5,
  },
})
