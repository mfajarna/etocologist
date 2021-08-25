import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View , Image} from 'react-native'
import { Ic_google, Ic_logo, Il_google } from '../../assets'
import { CustomButton, CustomTextInput } from '../../components/atoms'
import {Gap} from '../../utils'
// import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin'


const Signin = ({navigation}) => {

    const[user,setUser] = useState({})
    const [loggedIn, setloggedIn] = useState(false);
    const [userInfo, setuserInfo] = useState([]);

    // useEffect(() => {
    //     GoogleSignin.configure({
    //         scopes: ['email'],
    //         webClientId: '662718912848-ud6ljsh6a9767e45m2bst6d961dudlhv.apps.googleusercontent.com',
    //         offlineAccess: true,
    //         forceCodeForRefreshToken: true,
    //     })
    // },[])

    // const signIn = async () => {
    //     try{
    //         await GoogleSignin.hasPlayServices();
    //         const {accessToken, idToken} = await GoogleSignin.signIn();
    //         console.log('due____', userInfo);
    //     }catch(err){
    //         console.log('Message____', err.message)
    //         if(err.code === statusCodes.SIGN_IN_CANCELLED){
    //             console.log('User Cancelled Login')
    //         }else if(err.code === statusCodes.IN_PROGRESS){
    //             console.log('Sigin In')
    //         }else if(err.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE){
    //             console.log('Play Service Not Available')
    //         }else{
    //             console.log('Something went wrong')
    //         }
    //     }
    // }

    // const isSignedIn = async () => {
    //     const isSignedIn = await GoogleSignin.isSignedIn();
    //     if(!!isSignedIn){
    //         getCurrentUserInfo()
    //     }else{
    //         console.log('Please Login')
    //     }
    // }

    // const getCurrentUserInfo = async () => {
    //     try{
    //         const userInfo = await GoogleSignin.signInSilently();
    //         console.log('edit____', user);
    //         setUser(userInfo)
    //     }catch(err){
    //         if(err.code === statusCodes.SIGN_IN_REQUIRED)
    //         {
    //             alert('User has not signed in yest');
    //         }else{
    //             alert('Something went wrong')
    //         }
    //     }
    // }

    // const signOut = async () => {
    //     try{
    //         await GoogleSignin.revokeAccess();
    //         await GoogleSignin.signOut();
    //         setloggedIn(false)
    //         setUserInfo([])
    //     }catch(err) {
    //          console.log(err)
    //     }
    // }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign in</Text>
            <Text style={styles.desc}>Sign in untuk menikmati berbagai
                layanan kami
            </Text>
            <Gap height={60} />
            <CustomTextInput label="Email" placeholder="Masukan Email" />
            <Gap height={12}/>
            <CustomTextInput label="Password" placeholder="Masukan Password" />
            <Gap height={40}/>
            <CustomButton text="Sign in" onPress={() => navigation.replace('MainApp')}/>
            <Gap height={12}/>
            <View style={styles.signupMethod}>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.signup}>Sign up now</Text>
                 </TouchableOpacity>
                 
                 <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                     <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.signup}>Sign up with  </Text><Ic_google /><Text style={styles.signupGoogle}> Google</Text>
                     </View>
                 </TouchableOpacity>
            </View>
            <Gap height={45} />
            <View style={styles.footer}>
                <Text style={styles.signup}>Or sign in with</Text>
                <Gap height={2} />
                {/* <View style={styles.google}>
                    <Ic_google />
                    <Text style={styles.textGoogle}>Google</Text>
                </View> */}

                {/* {!user.idToken ? 
                    <GoogleSigninButton
                        style={{ width: 192, height: 48}}
                        size={GoogleSigninButton.Size.Wide}
                        color = {GoogleSigninButton.Color.Dark}
                        onPress={signIn}

                    />  : 
                    <TouchableOpacity>
                        <Text> Signout </Text>
                    </TouchableOpacity>  
            
                } */}

            </View>
        </View>
    )
}

export default Signin

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 33,
        paddingTop: 35
    },
    title:{
        fontFamily: 'Poppins-SemiBold',
        fontSize: 22,
        color: '#493657',
        
    },
    desc:{
        fontFamily: 'Poppins-Medium',
        fontSize: 13,
        color: '#A7A7A7',
        maxWidth: 250
    },
    signup:{
        fontFamily: 'Poppins-SemiBold',
        fontSize: 13,
        color: '#493657'
    },
    footer:{
        alignItems: 'center'
    },
    google:{
        flexDirection: 'row'
    },
    textGoogle:{
        fontSize: 16,
        fontFamily: 'Poppins-Medium',
        marginLeft: 5,
        marginTop: -2
    },
    signupMethod:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    signupGoogle:{
        fontFamily: 'Poppins-SemiBold',
        fontSize: 13,
        color: '#493657',
        
    }
})
