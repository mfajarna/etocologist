import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Headers } from '../../components/atoms'
import { PoliIbuTabView } from '../../components/Molecules'

const PoliIbu = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Headers title="Poli Ibu" subTitle="Menu Poli Ibu" onBack={() => navigation.reset({index: 0, routes:[{name: 'MainApp'}]})} />

            <View style={styles.content}>
                <PoliIbuTabView />
            </View>
        </View>
    )
}

export default PoliIbu

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
    content:{
        flex: 1,
        backgroundColor: 'white'
    }
})
