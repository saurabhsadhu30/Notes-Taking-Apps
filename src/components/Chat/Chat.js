import React from 'react'
import chats from './Chat.module.css';
import arrowbtn from '../../assets/Vector (6).png'
import arrow from '../../assets/arrow.png';


function Chat({ text, setText, sendMessage, pickGroup, handleBackClick }) {

    const EnterPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendMessage(text);
        }
    }

    return (
        <div className={chats.usersection} >
            {pickGroup ? (
                <>
                    <div className={chats.group}  >
                        <img src={arrow} onClick={handleBackClick} alt="" />
                        <div className={chats.group_logo} style={{ backgroundColor: pickGroup.profilecolor }}>{pickGroup.groupname.slice(0, 2).toUpperCase()}</div>
                        <p>{pickGroup.groupname}</p>
                    </div>
                    <div className={chats.middlediv}>
                        {pickGroup.messages.map((element) => {
                            return <div className={chats.messages} key={element.id} >
                                <div className={chats.messagetimes}>
                                    <p>{element.time}</p>
                                    <p>{element.date}</p>
                                </div>
                                <p>{element.content}</p>
                            </div>
                        })}
                    </div>
                    <div className={chats.bottomdiv}>
                        <textarea onKeyUp={EnterPress} name="" id="" cols="30" rows="10" placeholder='Enter your text here......' onChange={(e) => setText(e.target.value)} value={text}  ></textarea>
                        <img src={arrowbtn} alt="" onClick={() => sendMessage(text)} />
                    </div>
                </>
            ) : (
                <p>Select a group to start chatting</p>
            )}
        </div>
    )
}

export default Chat