import React, { useEffect } from 'react'
import {useDispatch} from "react-redux"
import axios from "axios"
import { setOtherusers } from '../redux/userSlice';
const useGetotherusers = () => {
    const dispatch = useDispatch();
  const getotherusers = async ()=>{
    try {
        axios.defaults.withCredentials = true;
        const res = await axios.get("http://localhost:8080/api/v1/user/");
        // console.log(res);
        // store this data in the store
        if(Array.isArray(res.data)){
            dispatch(setOtherusers(res.data));
        }else{
            dispatch(setOtherusers([]));
        }
        

    } catch (error) {
        console.log(error);
    }
  }
  useEffect(()=>{
    getotherusers();
  },[])
}

export default useGetotherusers

