
import "./HomePage.css"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';


const App = () => {
    const [openDropdowns, setOpenDropdowns] = useState([]);
    const [message, setMessage] = useState('');
    const [textToCopy, setTextToCopy] = useState();
    const [isCopied, setCopied] = useClipboard(textToCopy, {
        successDuration:1000
    });

    const [conversation, setConversation] = useState([]);
    const conversationContainerRef = useRef();

    useEffect(() => {
    // Scroll to the bottom of the conversation when it updates
    if (conversationContainerRef.current) {
      conversationContainerRef.current.scrollTop = conversationContainerRef.current.scrollHeight;
    }
  }, [conversation]);


  const sendMessage = async () => {
    const userMessage = { role: 'user', content: message };
    console.log(userMessage);
    const updatedConversation = [...conversation, userMessage];

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            ...updatedConversation,
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          },
        }
      );

      const assistantResponse = response.data.choices[0].message.content;
      setConversation([...updatedConversation, { role: 'assistant', content: assistantResponse }]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return null
    }

    const toggleDropdown = (dropdownName) => {
        if (openDropdowns.includes(dropdownName)) {
          setOpenDropdowns(openDropdowns.filter((dropdown) => dropdown !== dropdownName));
        } else {
          setOpenDropdowns([...openDropdowns, dropdownName]);
        }
      };

      const clearTextInput = () => {

      };
    return (
        <>
            <div className="container">
            <h3>Ask Money Mentor</h3>
                <br/>
                <p>This web app serves as a user-friendly financial guidance platform, offering personalized solutions to address a spectrum of financial questions. With intuitive tools and expert-curated resources, users can gain insights into budgeting, investing, and managing various financial aspects to make
 informed decisions for their unique financial goals.</p>
                <div className="main-content" onClick={() => {   
                    setTextToCopy(transcript);
                    console.log(transcript);
                    setMessage(transcript);
                    console.log(message);                    }}>
                    {transcript}
                </div>

                <div className="btn-style">

                    <key onClick={startListening}>Record</key>
                    <key onClick={SpeechRecognition.stopListening}>Stop Recording</key>
                    <key onClick={sendMessage}>Send</key>

                </div>
                <div
        style={{
          maxHeight: '300px',
          overflowY: 'auto',
        }}
        ref={conversationContainerRef}
      >
        <div style={{ overflowY: 'scroll', maxHeight: '1000px', border: '1px solid #ccc', padding: '10px', marginLeft: '400px', width: '500px'}}>
  <p>Conversation:</p>
  <ul>
    {conversation.map((msg, index) => (
      <li key={index}>
        {msg.role === 'user' ? 'User: ' : 'Assistant: '}
        {msg.content}
      </li>
    ))}
  </ul>
</div>
    
      </div>
            </div>

            <div className="sidebar">
                <div className="sidebar-content">
                    <h3>Frequently Asked Questions:</h3>
                    <ul>
                        <li onClick={() => toggleDropdown('budgeting')}>
                            <a href="#">Budgeting and Saving </a>
                            {openDropdowns.includes('budgeting') && (
                                <ul>
                                    <li>How do I create a realistic budget?</li>
                                    <li>What are some effective ways to save money?</li>
                                    <li>How much should I be saving per month?</li>
                                </ul>
                            )}
                        </li>
                        <li onClick={() => toggleDropdown('investing')}>
                            <a href="#">Investing </a>
                            {openDropdowns.includes('investing') && (
                                <ul>
                                    <li>What are the best investment options for beginners?</li>
                                    <li>What is the difference between stocks and bonds?</li>
                                    <li>How do I diversify my investment portfolio?</li>
                                </ul>
                            )}
                        </li>
                        <li onClick={() => toggleDropdown('creditScore')}>
                            <a href="#">Credit Score </a>
                            {openDropdowns.includes('creditScore') && (
                                <ul>
                                    <li>How can I improve my credit score?</li>
                                    <li>What factors affect my credit score?</li>
                                    <li>How often should I check my credit report?</li>
                                </ul>
                            )}
                        </li>
                        <li onClick={() => toggleDropdown('insurance')}>
                            <a href="#">Insurance </a>
                            {openDropdowns.includes('insurance') && (
                                <ul>
                                    <li>What types of insurance do I really need?</li>
                                    <li>What is a deductible in health insurance?</li>
                                    <li>What does renters insurance cover?</li>
                                    <li>When should I consider getting long-term care insurance?</li>
                                </ul>
                            )}
                        </li>
                        <li onClick={() => toggleDropdown('taxes')}>
                            <a href="#">Taxes </a>
                            {openDropdowns.includes('taxes') && (
                                <ul>
                                    <li>What tax deductions am I eligible for?</li>
                                    <li>How can I reduce my tax liability?</li>
                                    <li>What is the difference between tax credits and deductions?</li>
                                </ul>
                            )}
                        </li>
                    </ul>
                </div>
            </div>

        </>
    );
};

export default App;