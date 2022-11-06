import './App.css';
import io from 'socket.io-client';
import { useState } from 'react';
import Chat from './components/Chat';

const socket = io.connect("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const joinRoom = () => {
    if (username !== "" && room !== ""){
      socket.emit("join_room", room);
    };
  }

  return (
    <div className="App">
      <h3>Join a room</h3>
      <input type="text" placeholder="username..." onChange={(event) => {
        setUsername(event.target.value)
      }} />

      <input type="text" placeholder="enter a room..." onChange={(event) => { 
          setRoom(event.target.value)
        }} />
        <button onClick={joinRoom}>Join</button>

        <Chat socket={socket} username={username} room={room} />
    </div>
  );
}

export default App;
