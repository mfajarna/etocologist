import axios from "axios";
import { API_HOST, getData } from "../../utils";



export const getDataAnak = () => dispatch => {
    getData('token').then(resToken =>{
        axios.get(`${API_HOST.url}/anak`, {
            headers:{
                Authorization: resToken.value
            }
        }).then(res => {
             dispatch({type: 'SET_ANAK', value: res.data.data.data});
        })
    }).catch(err => {
        console.log(err.message)
    })
}