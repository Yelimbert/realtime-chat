import React from "react";

function Chat({ socket, username, room }) {
    return(
        <div>
            <div className="chat-header">
                <p>Live chat</p>
            </div>
            <div className="chat-body"></div>
            <div className="chat-footer">
                <input type="text" placeholder="Type a message..."/>
                <button></button>
            </div>
        </div>
    )
}

export default Chat;