import React from 'react'
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native'
import { DummyEdukasi } from '../../assets'
import { Headers } from '../../components/atoms'
import { Gap } from '../../utils'

const Edukasi = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Headers title="Edukasi Covid" subTitle="Konten Edukasi Covid" onBack={() => navigation.goBack()} />
            <ImageBackground source={DummyEdukasi} style={styles.cover}>
            </ImageBackground>
            
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Panduan Bagi Masyarakat Pencegahan dan Isolasi Mandiri Bagi Ibu Hamil, Bersalin, Nifas, dan Bayi Baru Lahir Dengan COVID-19.</Text>
                <Text style={styles.desc}>• Ibu hamil, bersalin, nifas juga berisiko
                    terinfeksi COVID-19. Jika mereka terinfeksi,
                    kondisinya akan lebih parah dibandingkan
                    kelompok lainnya.</Text>
                <Text style={styles.desc}>
                   • Risiko menjadi lebih serius jika ada penyakit
                    penyerta (kegemukan, darah tinggi, kencing
                    manis) atau kondisi penyulit lainnya.
                </Text>
                <Gap height={20} />
                 <Text style={styles.title}>PENCEGAHAN PENULARAN COVID-19
                    BAGI IBU HAMIL DAN NIFAS</Text>

                <Text style={styles.desc}>Patuhi Protokol Kesehatan 6M</Text>
                <Text>• Memakai masker</Text>
                <Text>• Mencuci tangan dengan sabun dan air mengalir</Text>
                <Text>• Menjaga jarak</Text>
                <Text>• Menjauhi kerumunan</Text>
                <Text>• Membatasi mobilitas</Text>
                <Text>• Menghindari makan bersama</Text>

                <Gap height={10} />
                <Text>Sumber : https://covid19.go.id/edukasi/masyarakat-umum/panduan-bagi-masyarakat-pencegahan-dan-isolasi-mandiri-bagi-ibu-hamil-bersalin-nifas-dan-bayi-baru-lahir-dengan-covid-19</Text>
                <Gap height={20} />
                </ScrollView>
            </View>
            
        </View>
    )
}

export default Edukasi

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
    cover: {
    height: 280,
    paddingTop: 26,
    paddingLeft: 23,
  },
    content: {
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        marginTop: -40,
        backgroundColor: 'white',
        paddingTop: 25,
        paddingHorizontal: 16,
        flex: 1,
  },
  title: {
      fontFamily: 'Poppins-SemiBold',
      textAlign: 'center',
      marginBottom: 10
  },
  desc: {
    fontFamily: 'Poppins-Regular'
    }   

})
