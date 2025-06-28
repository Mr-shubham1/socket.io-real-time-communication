import React from 'react'
import Message from './Message'
import useGetmessages from '../hooks/useGetmessages';
import { useSelector } from 'react-redux';

const Chatbox = () => {
  useGetmessages();
  const {messages} = useSelector(store=>store.message);
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
