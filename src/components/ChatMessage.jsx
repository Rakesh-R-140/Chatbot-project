import robotprofileimage from '../assets/robot.png'
import userprofileimage from '../assets/user.png'
import '../Chatmessage.css'

export default function ChatMessage({ message, sender, time }) {

    const formattedTime = new Date(time).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
    });

    return (
        <div className='message-div'>

            <div className={sender === 'user' ? 'user-div' : 'robot-div'}>

                {sender === 'robot' && <img className='robot-pic' src={robotprofileimage} />}

                <div>
                    <div className={sender === 'user' ? 'user-message' : 'robot-message'}>{message}</div>


                    <div style={{
                        fontSize: "11px",
                        color: "gray",
                        marginLeft: "12px"
                    }}>
                        {formattedTime}
                    </div>
                </div>

                {sender === 'user' && <img className='user-pic' src={userprofileimage} />}
            </div>

        </div>
    );
}