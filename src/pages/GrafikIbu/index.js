import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { Headers } from '../../components/atoms'
import {
  LineChart,
} from "react-native-chart-kit";
import { useDispatch, useSelector } from 'react-redux';
import { getDataGrafikIbu } from '../../redux/action/poliibu';


const GrafikIbu = ({navigation}) => {

   
    const dispatch = useDispatch();

    const{dataGrafik} = useSelector(state => state.poliibuReducer);

    var array = dataGrafik.map((obj) => {
        return obj.umur_kehamilan
    })

    var array2 = dataGrafik.map((obj) => {
        return obj.bb
    })


    useEffect(() => {
        dispatch(getDataGrafikIbu())
    },[])


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
            <Headers title="Grafik" subTitle="Grafik Kesehatan Ibu" onBack={() => navigation.goBack()} />
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
                    legend: ["Grafik Kesehatan Ibu"]
                    }}
                    yAxisSuffix=" Kg"
                    xAxisLabel =" Minggu "
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

export default GrafikIbu

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
    content:{
        flex:1,
        
    }
})
