import { useState } from 'react'
import { Chatbot } from 'supersimpledev';
import '../Chatinput.css'

import loadingpicture from '../assets/Trail loading.gif'
import sendIcon from '../assets/send-icon.png'
import clearIcon from '../assets/clean-icon.png'


export function ChatInput({ chatmessages, setmessages }) {

    const [inputText, setinputText] = useState('')
    function sendinputText(event) {
        setinputText(event.target.value)

    }

    function eventhands(event) {
        const keysonBoard = event.key
        if (keysonBoard === 'Enter') {
            addedMessage()
        }
        if (keysonBoard === 'Escape') {
            setinputText('')
        }


    }

    async function addedMessage() {



        const UserResponse = [
            ...chatmessages,
            {
                message: inputText,
                sender: 'user',
                time: Date.now(),
                id: crypto.randomUUID()
            }
        ];



        // show user message immediately
        setmessages(UserResponse);


        setmessages([
            ...UserResponse,
            {
                message: (
                    <img
                        src={loadingpicture}
                        className="loading-img"
                    />
                ),
                sender: 'robot',
                time: Date.now(),
                id: crypto.randomUUID()
            }
        ]);

        setinputText('');

        // ✅ WAIT 2 seconds
        await delay(2000);

        const response = Chatbot.getResponse(inputText);


        // add robot message after waiting
        setmessages([
            ...UserResponse,
            {
                message: response,
                sender: 'robot',
                time: Date.now(),
                id: crypto.randomUUID()
            }
        ]);



        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
    }

    function clearMessages() {
        setmessages([]);
        localStorage.setItem('message', JSON.stringify([]));
    }
    return (
        <div className='input-box-div'>
            <  input className='input-box' onKeyDown={eventhands} onChange={sendinputText} value={inputText} placeholder="send message to ChatBot" />
            <div className='btns-box' > <button className="send-btn" onClick={addedMessage}  > <img className="send-icon" src={sendIcon} /></button>
                <button className="clear-btn" onClick={clearMessages}>
                    <img className="clear-icon" src={clearIcon} />
                </button></div>


        </div>
    )
}