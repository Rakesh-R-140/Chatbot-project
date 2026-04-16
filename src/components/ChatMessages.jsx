import ChatMessage from "./ChatMessage"
import { useAutoScroll } from "../externalHooks/useAutoScroll"
import "src/ChatMessages.css"
export default function ChatMessages({ chatmessages }) {

    const containerRef = useAutoScroll([chatmessages])

    console.log(containerRef)






    return (<>

        <div className='chatMessages-div' ref={containerRef} >



            {chatmessages.length === 0 ? <p className='welcome-info' > Welcome to the chatbot project! Send a message using the textbox below.</p> : chatmessages.map((chatmessage) => {
                return (
                    <ChatMessage message={chatmessage.message} sender={chatmessage.sender} key={chatmessage.id} time={chatmessage.time} />

                )


            })}
        </div></>)


}