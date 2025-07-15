import React, { useState } from 'react';
import './ChatBox.css'

function ChatBox() {
    const [messages, setMessages] = useState<string[]>([]);
    const [input, setInput] = useState('');

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            setMessages([...messages, input]);
            setInput('');
        }
    };

    return (
        <div className="chat-box-border">
            <form onSubmit={handleSend} style={{ display: 'flex' }}>
                <input
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    style={{ flex: 1, marginRight: 8 }}
                    placeholder="Type a message..."
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default ChatBox