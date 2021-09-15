import React from 'react'
import { StyleSheet, Text, View} from 'react-native'
import FiturContent from '../ContentFitur'
import Gap from '../../../utils/Gap'
import { useNavigation } from '@react-navigation/native'

const DefaultModalContent = ({onPress}) => {

    const navigation = useNavigation();

    return (
        <View style={styles.content}>
            <Text style={styles.title}>Layanan E-Tocologist</Text>
            <View style={styles.fiturAtas}>
                <FiturContent label="Poli Anak" onPress={() => navigation.navigate('PoliAnak')}/>
                <FiturContent label="Poli Ibu" onPress={() => navigation.navigate('PoliIbu')}/>
                <FiturContent label="Poli Massas"/>
            </View>
            <Gap height={10} />
            <View style={styles.fiturAtas}>
                <FiturContent label="Kesehatan"/>
                <FiturContent label="Find Us" onPress={() => navigation.navigate('FindUs')}/>
                <FiturContent label="Upload Usg" onPress={() => navigation.reset({index: 0, routes:[{name: 'Uploadusg'}]})}/>
            </View>
        </View>
    )
}

export default DefaultModalContent

const styles = StyleSheet.create({
     content: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 9,
        borderColor: 'rgba(0, 0, 0, 0.1)',
      
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
  fiturAtas:{
    flexDirection: 'row'
  },
  title:{
      fontSize: 15,
      fontFamily: 'Poppins-SemiBold',
      color: '#493657',
      marginBottom: 10
  }
})
