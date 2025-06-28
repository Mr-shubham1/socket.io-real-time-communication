import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMessages } from '../redux/messageSlice';

const useGetmessages = () => {
    const {selecteduser} = useSelector(store=>store.user);
    const dispatch = useDispatch();
    const  fetchmessages = async ()=>{
        try {
            axios.defaults.withCredentials = true;
            const res = await axios.get(`http://localhost:8080/api/v1/message/${selecteduser?._id}`);
            // console.log(res);
            if(Array.isArray(res.data)){
                dispatch(setMessages(res.data));
            }else{
                dispatch(setMessages([]));
            }
            
        } catch (error) {
            console.log(error)
        }
    }
  useEffect(()=>{
    fetchmessages();
  },[selecteduser])
}

export default useGetmessages
