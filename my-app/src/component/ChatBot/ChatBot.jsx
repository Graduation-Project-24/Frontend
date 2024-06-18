import React from 'react'
import './ChatBot.css'
import { RiRobot2Fill } from "react-icons/ri";


function ChatBot() {
  return <>
    <div className="chatbot d-flex flex-column justify-content-center align-items-center">
        <RiRobot2Fill className='fs-2 mb-2'/>
        <h6>Need Help?!</h6>
    </div>
  </>
}

export default ChatBot