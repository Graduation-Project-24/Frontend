import React, { useState } from 'react';
import './ChatBot.css'
import { RiRobot2Fill } from "react-icons/ri";
import { Button, Modal, ModalHeader, ModalBody, Input, Form, FormGroup } from 'reactstrap';
import axios from 'axios';

function ChatBot() {

  const [modal, setModal] = useState(false)
  const [messages, setMessages] = useState([])
  const [userMessage, setUserMessage] = useState('')

  const toggle = () => setModal(!modal)

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (userMessage.trim() === '') return;
  
    const newMessage = {
      text: userMessage,
      sender: 'user',
    };
  
    setMessages(prevMessages => [...prevMessages, newMessage]);
    setUserMessage('');
    console.log(userMessage)

    try {
      // Prepare the API call
      const apiUrl = `https://esmael-saleh-smarkety.hf.space/api/v1/smarkety?question=${encodeURIComponent(userMessage)}`;
  
      // Make the API call
      const response = await axios.get(apiUrl);
  
      // Handle API response
      if (response.data && response.data.response) {
        const botMessage = {
          text: response.data.response,
          sender: 'bot',
        };
        setMessages(prevMessages => [...prevMessages, botMessage]);
      } else {
        throw new Error('Empty response from server');
      }
    } catch (error) {
      console.error('Error fetching response:', error);
      const errorMessage = {
        text: 'Sorry, something went wrong. Please try again later.',
        sender: 'bot',
      };
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    }
  };

  return <>
    <div className="chatbot d-flex flex-column justify-content-center align-items-center">
        <div className="chatbot-button">
          <Button className="fifth-color" onClick={toggle}>
            <RiRobot2Fill className='icon fs-2 mb-2'/>
            <p className='title m-0'>Chat Bot</p>
          </Button>
          <Modal isOpen={modal} toggle={toggle} className="chatbot-modal">
            <ModalHeader toggle={toggle}>Chatbot</ModalHeader>
            <ModalBody>
              <div className="chat-window">
                <div className="chat-messages">
                  {messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`message ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`}
                    >
                      {msg.text}
                    </div>
                  ))}
                </div>
              </div>
              <Form onSubmit={handleSendMessage} className="chat-input-form">
                <FormGroup className="chat-input-group">
                  <Input
                    type="text"
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                    placeholder="Type a message..."
                  />
                  <Button type="submit" color="primary">
                    Send
                  </Button>
                </FormGroup>
              </Form>
            </ModalBody>
          </Modal>
        </div>
    </div>
  </>
}

export default ChatBot