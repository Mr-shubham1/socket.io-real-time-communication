import React, { useEffect } from 'react'
import Message from './Message'
import useGetmessages from '../hooks/useGetmessages';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setMessages } from '../redux/messageSlice';
const Chatbox = () => {
  useGetmessages();
  const dispatch = useDispatch();
  const {messages} = useSelector(store=>store.message);
  useEffect(()=>{
    return ()=>{
      dispatch(setMessages(null));
    }
  },[])
  // console.log(messages);
  return (
    <div className='flex-1 pt-2 overflow-auto scrollbar-thin scrollbar-thumb-white/40 scrollbar-track-transparent scroll-smooth'>
      
     {
      messages?.map((message)=>{
        return <Message key={message?._id} message={message}/>
      })
     }
      
    </div>
  )
}

export default Chatbox
