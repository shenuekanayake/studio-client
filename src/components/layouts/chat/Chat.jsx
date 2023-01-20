import React, { useState } from 'react'
import io from 'socket.io-client'
import reactSessionApi from 'react-session-api';
import './chat.css'
import Box from './Box';

const socket = io.connect("localhost:5000");

function Chat() {
  const [username, setUsername] = useState(reactSessionApi.get('username'));
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if(username!==''&&room!==''){
      socket.emit("join_room", room);
      setShowChat(true);
    }
  }
  return (
        <div className='chat__frame'>
          {
            !showChat?(
              <div className="joinChatContainer">
                {/* <h3>{username}</h3> */}
                <h3>Join Chat</h3>
                <span>Type Room_2 for general queries</span>
                <input
                  type="text"
                  placeholder="Room ID..."
                  onChange={(event) => {
                    setRoom(event.target.value);
                  }}
                />
                <button onClick={joinRoom}>Join Room</button>
                
              </div>
            ):
            <Box socket={socket} username={username} room={room}/>
          }
        </div>
  )
}

export default Chat