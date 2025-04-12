import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'react-bootstrap';
import { FaTimes, FaMinus } from 'react-icons/fa';
import ChatModel from '../utils/chatModel';
import chatData from '../data/chatData';
import '../styles/Chat.css';

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [model, setModel] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    initializeModel();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const initializeModel = async () => {
    try {
      setIsLoading(true);
      const chatModel = new ChatModel();
      await chatModel.loadModel();
      await chatModel.train(chatData);
      setModel(chatModel);
      setMessages([{
        text: "Hello! I'm Argha's AI assistant. How can I help you today?",
        sender: 'bot'
      }]);
    } catch (error) {
      console.error('Error initializing model:', error);
      setMessages([{
        text: "I'm sorry, I'm having trouble initializing. Please try again later.",
        sender: 'bot'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim() || !model) return;

    const userMessage = inputMessage.trim();
    setInputMessage('');
    setMessages(prev => [...prev, { text: userMessage, sender: 'user' }]);

    try {
      const response = await model.predictAnswer(userMessage);
      setMessages(prev => [...prev, { text: response, sender: 'bot' }]);
    } catch (error) {
      console.error('Error getting response:', error);
      setMessages(prev => [...prev, {
        text: "I'm sorry, I encountered an error. Please try again.",
        sender: 'bot'
      }]);
    }
  };

  return (
    <div className={`chat-container ${isOpen ? 'open' : ''} ${isMinimized ? 'minimized' : ''}`}>
      {!isOpen && (
        <Button
          variant="primary"
          className="chat-toggle-btn"
          onClick={() => setIsOpen(true)}
        >
          Chat with AI
        </Button>
      )}
      
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h5>Chat with AI</h5>
            <div className="chat-controls">
              <Button
                variant="link"
                className="chat-control-btn"
                onClick={() => setIsMinimized(!isMinimized)}
              >
                <FaMinus />
              </Button>
              <Button
                variant="link"
                className="chat-control-btn"
                onClick={() => setIsOpen(false)}
              >
                <FaTimes />
              </Button>
            </div>
          </div>
          
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
              >
                {message.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          <form onSubmit={handleSendMessage} className="chat-input-form">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
              disabled={isLoading}
              className="chat-input"
            />
            <Button
              type="submit"
              variant="primary"
              disabled={isLoading || !inputMessage.trim()}
              className="send-button"
            >
              Send
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chat; 