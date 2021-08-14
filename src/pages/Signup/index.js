import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Gap, showMessage } from '../../utils'
import ImagePicker from 'react-native-image-picker';
import { useDispatch } from 'react-redux';
import { CustomButton, CustomTextInput } from '../../components/atoms';


const Signup = ({navigation}) => {
    const [photo, setPhoto] = useState('');
    const dispatch = useDispatch();
    
    const addPhoto = () => {
        ImagePicker.launchImageLibrary(
            {
                quality: 1,
                maxWidth: 700,
                maxHeight: 500
            },
            (response) => {
             console.log('Response = ', response);

             if(response.didCancel || response.error)
             {  
                showMessage('Anda Tidak Memilih Photo');
                console.log('Anda tidak memilih photo');
             }else{
                const source = {uri: response.uri}
                const dataImage = {
                uri: response.uri,
                type: response.type,
                name: response.fileName
                };

                 setPhoto(source);
                 showMessage('Berhasil Memilih Photo','success');
                 dispatch({type:'SET_PHOTO', value: dataImage});
                 dispatch({type:'SET_UPLOAD_STATUS', value: true})
             }
            }
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign up</Text>
            <Text style={styles.desc}>Sign up untuk menikmati berbagai
                layanan kami
            </Text>
            <Gap height={35} />
            <View style={styles.photo}>
            <TouchableOpacity onPress={addPhoto}>
                <View style={styles.borderPhoto}>
                    {photo ? <Image source={photo} style={styles.photoImage} /> : <View style={styles.photoContainer}>
                        <Text style={styles.addPhoto}>Add Photo</Text>
                    </View>}
                </View>
            </TouchableOpacity>
            <Gap height={35}/>
            </View>
            <CustomTextInput label="Email" placeholder="Masukan Email Anda" />
            <Gap height={10}/>
            <CustomTextInput label="Password" placeholder="Masukan Password Anda" />
            <Gap height={10}/>
            <CustomTextInput label="Confirmation Password" placeholder="Masukan Kembali Password Anda" />
            <Gap height={30}/>
            <CustomButton text="Selanjutnya" font={12} />
        </View>
    )
}

export default Signup

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
    photo: {
        alignItems: 'center',
        marginTop: -10,
        marginBottom: 5,
  },
    borderPhoto: {
        borderWidth: 1,
        borderColor: '#8D92A3',
        width: 100,
        height: 100,
        borderStyle: 'dashed',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
  },
    photoImage:{
        width: 80,
        height: 80,
        borderRadius: 80,
  },
    photoContainer: {
        width: 80,
        height: 80,
        borderRadius: 80,
        backgroundColor: '#EDE5F3',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
  },
    addPhoto: {
        fontSize: 14,
        fontFamily: 'Poppins-Light',
        color: '#8D92A3',
        textAlign: 'center',
  },
})
