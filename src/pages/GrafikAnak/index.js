import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { Headers } from '../../components/atoms'
import {
  LineChart,
} from "react-native-chart-kit";
import { useDispatch, useSelector } from 'react-redux';
import { getDataGrafikIbu } from '../../redux/action/poliibu';
import { getDataGrafikAnak } from '../../redux/action/polianak';




const GrafikAnak = ({navigation,route}) => {

    const dispatch = useDispatch();
    const{dataGrafikAnak} = useSelector(state => state.polianakReducer);
    const data = route.params;

    const id = data.id
    console.log(dataGrafikAnak)

    
    useEffect(() => {
        dispatch(getDataGrafikAnak(id))
       
    },[])

    var array = dataGrafikAnak.map(item => {
        return item.umur
    })

    var array2 = dataGrafikAnak.map(item => {
        return item.bb
    })


    const screenWidth = Dimensions.get("window").width;
    const chartConfig = {
        backgroundGradientFrom: "#FFFFF",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#FFFF",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(83, 0, 143, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 1,
        useShadowColorFromDataset: false // optional
    };

    return (
        <View style={styles.container}>
            <Headers title="Grafik" subTitle="Grafik Kesehatan Anak" onBack={() => navigation.goBack()} />
            <View style={styles.content}>
                <LineChart
                    width={screenWidth}
                    chartConfig={chartConfig}
                    data={{
                    labels: array,
                        datasets: [
                            {
                            data: array2,
                            color: (opacity = 1) => `rgba(15, 25, 24, ${opacity})`, // optional

                        }
                    ],
                    legend: ["Grafik Kesehatan Anak"]
                    }}
                
                    xAxisLabel =" Minggu "
                    yAxisSuffix = " Kg"
                    bezier
                    verticalLabelRotation={0}
                    height={260}
                    style={{
                        marginVertical: 8,
                        borderRadius: 16,
                        
                    }}
                />
            </View>
        </View>
    )
}

export default GrafikAnak

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
    content:{
        flex:1,
        
    }
})
