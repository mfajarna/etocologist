import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { DummyImage1 } from '../../assets'
import { FloatingButton, Headers } from '../../components/atoms'
import { getDataProfile, getDataUsg } from '../../redux/action/profile'



let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const Uploadusg = ({navigation}) => {

    const dispatch = useDispatch();
     dispatch({type:'SET_STATUS_UPLOAD', value: false})
    useEffect(() => {
        dispatch(getDataProfile())
        dispatch(getDataUsg(id_ibu));
    },[])

    const{dataProfile,dataUsg} = useSelector(state => state.profileReducer);

    const id_ibu = dataProfile.id;

    const formatedDate = new Date(dataProfile.created_at).toDateString();

    return (
        <View style={styles.container}>
            <Headers title="Upload Photo" subTitle="Upload Photo USG" onBack={() => navigation.reset({index: 0, routes:[{name: 'MainApp'}]})} />
            <View style={styles.content}>
            <FloatingButton onPress={() => navigation.navigate('UploadPhoto', id_ibu)}/>
            <ScrollView>
                <View style={styles.galery}>
                    {dataUsg.map(item => {
                        return(
                    <View key={item.id}>
                        <Image source={{ uri: item.photoPath }} style={{ 
                            height: deviceHeight/3,
                            width: deviceWidth/3-1,
                            borderRadius: 10,
                            margin: 5,
                        }} /> 
                    <Text style={styles.text}>{item.title}</Text>
                     <Text style={styles.desc}>Waktu Upload: {formatedDate}</Text>
                    </View>
                        )
                    })}
                </View>
            </ScrollView>
            </View>
        </View>
    )
}

export default Uploadusg

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
    content:{
        flex: 1,
            paddingHorizontal: 25
    },
    galery:{
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    text:{
        fontFamily: 'Poppins-SemiBold',
        color :'#493657',
        textAlign: 'center',
        maxWidth: 150
    },
    desc:{
        fontSize: 12,
        marginBottom: 10,
        fontFamily: 'Poppins-Light',
        color :'#493657',
        textAlign: 'center',
        alignContent: 'center',
        maxWidth: 100
    }
})

