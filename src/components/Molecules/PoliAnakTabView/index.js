import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native'
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import { useDispatch, useSelector } from 'react-redux';
import { getDataPoliIbu, getDataProsesKehamilan } from '../../../redux/action';
import { Gap } from '../../../utils'
import { ItemValue } from '../../../components/Molecules';


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

    const navigation = useNavigation()
    const dispatch = useDispatch();
    const{dataBiodata} = useSelector(state => state.poliibuReducer);
    useEffect(() => {
      dispatch(getDataPoliIbu());
    },[])

      
    return(
        <View style={{paddingTop: 8, paddingHorizontal: 24}}>
             <View style={{ paddingHorizontal: 25 }}>
                   <Text style={styles.text}>Biodata Anak</Text>

                   <Gap height={10} />
                   <ItemValue label="Nama" value={data.nama}/>
                   <ItemValue label="Tanggal Lahir" value={data.tanggal_lahir}/>   
                   <ItemValue label="Tempat Lahir" value={data.tempat_lahir}/>   
                   <ItemValue label="Jenis Kelamin" value={data.jenis_kelamin}/>  
                   <Gap height={15} />
                   <Text style={styles.text}>Biodata Orang Tua</Text>
                   <Gap height={10} />
                   <ItemValue label="Nama Ibu" value={data.ibu.nama}/>
                   <ItemValue label="Nama Ayah" value={data.ibu.nama_suami}/>
                </View>
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
             <Text>A</Text>
          </View>
        </ScrollView>
      )
}

const initialLayout = {width: Dimensions.get('window').width};



const PoliAnakTabView = () => {

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: ' Biodata Anak'},
    {key: 'second', title: 'Monitoring Anak'},
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

export default PoliAnakTabView

const styles = StyleSheet.create({})
