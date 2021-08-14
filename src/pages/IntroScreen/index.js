import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { CustomButton } from '../../components/atoms'
import Carousel from '../../components/Carousel/Carousel'
import { DummyData } from '../../utils/data/data'

const IntroScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View>
                <Carousel data={DummyData} />
            </View>
            <View>        
            </View>
            <View style={styles.button}>
                <CustomButton text="Get Started" onPress={() => navigation.navigate('SignIn')} />
            </View>
        </View>
    )
}

export default IntroScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: 'white'
    },
    button:{
        paddingHorizontal: 35,
        marginBottom: 40
    }
})
