import React, { useEffect, useState } from "react";

function Chat({ socket, username, room }) {
    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);

    const sendMessage = async () => {
        if (currentMessage !== "") {
            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                time: new Date().toLocaleTimeString(),
            }

            await socket.emit("send_message", messageData);
            setMessageList((list) => [...list, messageData]);
            setCurrentMessage("");
        }
    }

    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessageList((list) => [...list, data])
        });
    }, [socket]);

    return(
        <div className="chat-window">
            <div className="chat-header">
                <p>Live chat</p>
            </div>
            <div className="chat-body">
                {messageList.map((messageContent) => {
                    return <h1 key={messageContent.id}>{messageContent.message}</h1>
                })}
            </div>
            <div className="chat-footer">
                <input type="text" placeholder="Type a message..."
                onChange={(event) => {
                    setCurrentMessage(event.target.value)
                }}/>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default Chat;