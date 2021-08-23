import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Picker} from '@react-native-picker/picker';

const Select = ({label, value, onSelectChange, type}) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.input}>
                <Picker
                        selectedValue={value}
                        onValueChange={(itemValue) => onSelectChange(itemValue) }>
                        <Picker.Item label="-- Pilih Jenis Kelamin --" value="" style={styles.item} />
                        <Picker.Item label="Laki-Laki" value="L" style={styles.item} />
                        <Picker.Item label="Perempuan" value="P" style={styles.item} />
                </Picker>
             </View>
        </View>
    )
}

export default Select

const styles = StyleSheet.create({
    label: {
        fontSize: 15,
        marginBottom: 12,
        fontFamily: 'Poppins-SemiBold',
        color: '#493657',
     },
    input: {
        backgroundColor: '#ECECEC',
        borderRadius: 8,
        padding: 1,
        color: 'black',
        fontFamily: 'Poppins-Light'
  },
  item:{
        color: 'black',
        fontFamily: 'Poppins-Light',
        fontSize: 15,
  }
})
