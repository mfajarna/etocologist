import React, { useEffect, useState } from 'react'
import Modal from 'react-native-modal';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native'
import { Il_cover_dashboard } from '../../assets/illustrations'
import { DefaultModalContent, FiturContent } from '../../components'
import { DummyImage1 } from '../../assets/dummy';
import { Ic_notification } from '../../assets/icons';
import { getData } from '../../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { getDataProfile } from '../../redux/action';

const Dashboard = ({navigation}) => {

    const dispatch = useDispatch();
    const [isModalVisible, setModalVisible] = useState(false);
    const [userProfile, setUserProfile] = useState({});

    const{dataProfile} = useSelector(state => state.profileReducer);
    useEffect(() => {
       
        dispatch(getDataProfile());
        getData('userProfile').then(res => {
            setUserProfile(res);
        })
        getData('user').then(resData => {
            console.log('res data',resData);
        })
    },[])
    
    const toggleModal = () => {
        setModalVisible(!isModalVisible)
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.text}>Hi {userProfile.name}!</Text>
                    <Text style={styles.desc}>Apa kabar hari ini?</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={{ justifyContent: 'center' }}>
                         <Ic_notification />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={DummyImage1} style={styles.imageHeader} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.content}>
                <View style={styles.card}>
                    <Image source={Il_cover_dashboard} style={styles.image} />
                    <View style={styles.coverTextDashboard}>
                        <Text style={styles.textDashboard}>Lindungi keluarga anda </Text>
                        <Text style={styles.textDashboard}>dari bahaya virus covid 19!</Text>
                    </View>
                    <View style={styles.coverButton}>
                        <TouchableOpacity activeOpacity={0.6} style={styles.button}>
                            <Text style={styles.textButton}>Info Covid</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            <View style={styles.layanan}>
                <Text style={styles.textLayanan}>Layanan Kami</Text>
                <View style={styles.fiturContent}>
                    <FiturContent label="Poli Anak" onPress={() => navigation.navigate('PoliAnak')} />
                    <FiturContent label="Poli Ibu"  onPress={() => navigation.navigate('PoliIbu')}/>
                    <FiturContent label="Poli Massas"/>
                    <FiturContent label="Lainnya" onPress={toggleModal}/>
                </View>
            </View>
            </View>
            <Modal
                testID={'modal'}
                isVisible={isModalVisible}
                onSwipeComplete={toggleModal}
                animationIn="zoomInDown"
                animationOut="zoomOutUp"
                animationInTiming={600}
                animationOutTiming={600}
                backdropTransitionInTiming={600}
                backdropTransitionOutTiming={600}
                swipeDirection={['down']}
                onBackdropPress={() => setModalVisible(false)}
                // style={styles.view}
                >
             <DefaultModalContent onPress={toggleModal} /> 
        </Modal>
        </View>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    container: {
        flex :1,
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingTop: 30,
    },
    text:{
        fontFamily: 'Poppins-SemiBold',
        fontSize: 18,
        color: '#493657'
    },
    desc:{
        fontFamily: 'Poppins-Light',
        fontSize: 13,
        color: '#A7A7A7'
    },
    header:{
        marginBottom: 12,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    image:{
        resizeMode: 'cover',
        height: 170,
        width: 'auto'
    },
    content:{
        flex: 1,
    },  
    textDashboard: {
        fontFamily: 'Poppins-Bold',
        fontSize: 13,
        color: 'white'
    },
    card:{
 
    },
    coverTextDashboard:{
        position: 'absolute',
        left: 35,
        top: 30
    },
    button:{
        backgroundColor: '#493657',
        padding: 6,
        borderRadius: 8,
        width: 90
    },
    textButton:{
        fontFamily: 'Poppins-SemiBold',
        color: 'white',
        fontSize: 10,
        textAlign: 'center'
    },
    coverButton:{
        position: 'absolute',
        left: 35,
        top: 112
    },
    layanan: {
        flex: 1,
        paddingTop: 20
    },
    textLayanan:{
        fontFamily: 'Poppins-SemiBold',
        fontSize: 15,
        color: '#493657',
        paddingBottom: 20
    },
    fiturContent:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    view:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageHeader:{
        height: 45,
        width: 45,
        borderRadius: 45,
        marginLeft: 14
    }
})
