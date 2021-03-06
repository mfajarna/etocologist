import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ItemValue = ({label, value, valueColor = '#020202', type}) => {
    return (
    <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
      
        <Text style={styles.value(valueColor)}>{value}</Text>
    </View>
    )
}

export default ItemValue

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
    marginBottom: 3,
  },
 value: color => ({
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: color,
    width: 200,
    textAlign: 'right',
  }),
})
