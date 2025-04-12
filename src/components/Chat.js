import React, { useState, useEffect, useRef } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { FaRobot, FaTimes, FaMinus, FaPaperPlane } from 'react-icons/fa';
import ChatModel from '../utils/chatModel';
import chatData from '../data/chatData';

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [model, setModel] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const initializeModel = () => {
      try {
        console.log('Initializing chat model...');
        const chatModel = new ChatModel();
        console.log('Chat model created, initializing with data...');
        chatModel.initialize(chatData.questions, chatData.answers);
        console.log('Chat model initialized successfully');
        setModel(chatModel);
        
        // Add welcome message
        setMessages([{
          text: "Hello! I'm your AI assistant. Ask me about my experience, education, skills, or projects.",
          isUser: false
        }]);
      } catch (error) {
        console.error('Error initializing model:', error);
        setMessages([{
          text: "Sorry, I'm having trouble initializing. Please refresh the page and try again.",
          isUser: false
        }]);
      }
    };

    initializeModel();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = {
      text: inputMessage,
      isUser: true
    };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    try {
      if (!model) {
        throw new Error('Chat model not initialized');
      }

      // Get and add bot response
      const botResponse = model.findBestMatch(inputMessage);
      setTimeout(() => {
        setMessages(prev => [...prev, {
          text: botResponse,
          isUser: false
        }]);
      }, 500);
    } catch (error) {
      console.error('Error processing message:', error);
      setMessages(prev => [...prev, {
        text: "I'm sorry, I encountered an error. Please try again.",
        isUser: false
      }]);
    }
  };

  return (
    <div className="chat-container">
      {!isOpen ? (
        <Button
          variant="primary"
          className="chat-button"
          onClick={() => setIsOpen(true)}
        >
          <FaRobot className="me-2" />
          Chat Bot
        </Button>
      ) : (
        <div className={`chat-window ${isMinimized ? 'minimized' : ''}`}>
          <div className="chat-header">
            <div className="chat-title">
              <FaRobot className="me-2" />
              Chat Assistant
            </div>
            <div className="chat-controls">
              <Button
                variant="link"
                className="chat-control-button"
                onClick={() => setIsMinimized(!isMinimized)}
              >
                <FaMinus />
              </Button>
              <Button
                variant="link"
                className="chat-control-button"
                onClick={() => {
                  setIsOpen(false);
                  setIsMinimized(false);
                }}
              >
                <FaTimes />
              </Button>
            </div>
          </div>
          
          {!isMinimized && (
            <>
              <div className="chat-messages">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`message ${message.isUser ? 'user' : 'bot'}`}
                  >
                    {message.text}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
              
              <Form onSubmit={handleSendMessage} className="chat-input">
                <InputGroup>
                  <Form.Control
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Type your message..."
                    disabled={!model}
                  />
                  <Button
                    variant="primary"
                    type="submit"
                    disabled={!inputMessage.trim() || !model}
                  >
                    <FaPaperPlane />
                  </Button>
                </InputGroup>
              </Form>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Chat; 