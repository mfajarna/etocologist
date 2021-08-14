import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

const {width, height} = Dimensions.get('window');

const CarouselItem = ({item}) => {
    
    return (
        <View style={styles.cardView}>
            <View style={styles.image}>
                 {item.image}
            </View>
            <View style={styles.textView}>
                <Text style={styles.title}>{item.title}</Text>
            </View>
        </View>
    )
}

export default CarouselItem

const styles = StyleSheet.create({
    cardView:{
        flex:1,
        width: width - 40,
        paddingTop : 50,
        marginHorizontal: 20,
        borderRadius: 10
    },
    textView:{
        margin: 10,
        paddingVertical: 20,
        left: 5
    },
    image:{
        alignItems: 'center',
        marginBottom: 41
    },
    title: {
        fontFamily: 'Poppins-Medium',
        fontSize: 15,
        color: '#493657',
        textAlign:'center',
    }
})
