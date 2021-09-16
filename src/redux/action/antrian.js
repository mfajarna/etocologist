import axios from "axios";
import { API_HOST, getData } from "../../utils";


export const getDataAntrianIbu = () => dispatch => {
    getData('token').then(resToken => {
            axios.get(`${API_HOST.url}/getantrianibu`,{
            headers:{
                Authorization: resToken.value
            }
        })
        .then(res => {
           dispatch({type: 'SET_ANTRIAN_IBU', value: res.data.data});
    
        }).catch(err => {
            console.log(err.message)
        })
    })
    
}

export const getDataNoAntrian = (id) => dispatch => {
    getData('token').then(resToken => {
            axios.get(`${API_HOST.url}/get-no-antrian-ibu?id_ibu=${id}`,{
            headers:{
                Authorization: resToken.value
            }
        })
        .then(res => {
           dispatch({type: 'SET_NO_ANTRIAN', value: res.data.data});
    
        }).catch(err => {
            console.log(err.message)
        })
    })
    
}