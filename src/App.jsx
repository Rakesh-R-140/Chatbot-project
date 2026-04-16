import { useState, useEffect, } from 'react'
import ChatInput from "./components/Chatinput";
// import { ChatMessage } from "./components/ChatMessage";
import { Chatbot } from 'supersimpledev';
import ChatMessages from "./components/ChatMessages";
import './App.css'














function App() {

  const [chatmessages, setmessages] = useState(() => {
    return JSON.parse(localStorage.getItem('message')) || []
  });




  useEffect(() => {
    Chatbot.addResponses({
      "Hi there!": "Hello! 👋 Welcome! How can I assist you today?",

      time: () => {
        return "Current time: " + new Date().toLocaleTimeString();
      },
      "Tell me a joke.": "Why don't scientists trust atoms? Because they make up everything! 😄",
      "What is AI?": "AI stands for Artificial Intelligence — it's technology that enables machines to think, learn, and solve problems like humans.",
      "How do I stay productive?": "Try time-blocking your day, taking short breaks, minimizing distractions, and prioritizing your top 3 tasks each morning.",
      "how are you": "I'm doing great! 🤖",
      "What is machine learning?": "Machine learning is a branch of AI where models learn from data to make predictions or decisions without being explicitly programmed.",
      bye: "Goodbye! See you again.",



    });
  }, []);


  useEffect(() => {
    localStorage.setItem('message', JSON.stringify(chatmessages))
  }, [chatmessages])

  return (
    <div className='App-container'>


      <ChatMessages chatmessages={chatmessages} />
      <ChatInput chatmessages={chatmessages} setmessages={setmessages} />
    </div>
  );
}


export default App
