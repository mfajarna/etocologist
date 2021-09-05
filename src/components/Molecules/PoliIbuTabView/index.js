import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native'
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import { useDispatch, useSelector } from 'react-redux';
import { getDataPoliIbu, getDataProsesKehamilan } from '../../../redux/action';
import ProfileKesehatan from '../ProfileKesehatan';
import RiwayatKonsultasi from '../RiwayatKonsultasi';


const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#493657',
      height: 3,
      alignItems: 'space-around',
    }}
    style={{
      backgroundColor: 'white',
      evelation: 0,
      shadowOpacity: 0,
      borderBottomColor: '#F2F2F2',
      borderBottomWidth: 1,
    }}
    contentContainerStyle={{
      justifyContent: 'space-around',
    }}
    tabStyle={{elevation: 0}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          color: focused ? '#493657' : '#8D92A3',
          fontFamily: 'Poppins-Regular',
        }}>
        {route.title}
      </Text>
    )}
  />
);


const monitoringKesehatan = () => {

  
    const dispatch = useDispatch();
    const{dataBiodata} = useSelector(state => state.poliibuReducer);
    useEffect(() => {
      dispatch(getDataPoliIbu());
    },[])
    const render = () => {
    if(dataBiodata.length < 1)
    {
      
    }else{
       
        return(
          <ProfileKesehatan
            nama={dataBiodata.ibu.nama}
            umur={dataBiodata.ibu.umur}
            tinggi={dataBiodata.riwayat.tinggi_badan}
            gpa={dataBiodata.riwayat.gpa}
            jarak_kehamilan={dataBiodata.riwayat.jarak_kehamilan}
            siklus_haid={dataBiodata.riwayat.siklus_haid}
            kb={dataBiodata.riwayat.kb_sebelum_hamil}
            riwayat_penyakit={dataBiodata.riwayat.riwayat_penyakit}
          />
        )
      }
    }

      
    return(
        <View style={{paddingTop: 8, paddingHorizontal: 24}}>
            {render()}
        </View>
    )
}

const riwayatKonsultasi = () => {

    const dispatch = useDispatch();
    const{dataProsesKehamilan} = useSelector(state => state.poliibuReducer);
    useEffect(() => {
      dispatch(getDataProsesKehamilan());
    },[])
      
      return(
        <ScrollView>
          <View style={{paddingTop: 8, paddingHorizontal: 24}}>
              {dataProsesKehamilan.map(item => {
                return(
                    <RiwayatKonsultasi key={item.id} tanggal={item.tanggal} bb={item.bb} umur={item.umur_kehamilan} /> 
                  )
              })} 
          </View>
        </ScrollView>
      )
}

const initialLayout = {width: Dimensions.get('window').width};



const PoliIbuTabView = () => {

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: ' Biodata Ibu'},
    {key: 'second', title: 'Riwayat Konsultasi'},
  ]);

  const renderScene = SceneMap({
    first: monitoringKesehatan,
    second: riwayatKonsultasi,
  });

    return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={{backgroundColor: 'white'}}
    />
    )
}

export default PoliIbuTabView

const styles = StyleSheet.create({})
