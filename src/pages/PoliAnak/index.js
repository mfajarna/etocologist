import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Headers } from '../../components/atoms'

const PoliAnak = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Headers title="Poli Anak" subTitle="Menu Poli Anak" onBack={() => navigation.reset({index: 0, routes:[{name: 'MainApp'}]})} />
        </View>
    )
}

export default PoliAnak

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})
