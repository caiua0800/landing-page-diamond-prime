import React, { useState, useEffect, useRef } from 'react';
import './Chat.css';

const Chat = () => {
    const [messages, setMessages] = useState([
        // Mensagem de boas-vindas inicial (opcional, mas fica bom)
        { text: 'Olá! Sou a IA da Diamond Prime. Como posso te ajudar hoje?', sender: 'ai' }
    ]);
    const [input, setInput] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const getChatSession = () => {
        let sid = localStorage.getItem('golden_chat_sid');
        if (!sid) {
            sid = 'guest_' + Math.random().toString(36).substring(2, 15) + Date.now();
            localStorage.setItem('golden_chat_sid', sid);
        }
        return sid;
    };

    const sendToAI = async (userMessage) => {
        try {
            const response = await fetch('https://verticalaidaniel.softwarehousecaiuademello.com.br/api/chat/web', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: userMessage,
                    sessionId: getChatSession(),
                    userId: null,
                    origin: 'website'
                })
            });
            const data = await response.json();
            return data.response; 
        } catch (error) {
            console.error("Erro ao chamar a IA:", error);
            return "Desculpe, ocorreu um erro na conexão.";
        }
    };

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = { text: input, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setLoading(true);

        const aiResponse = await sendToAI(input);
        
        setMessages(prev => [...prev, { text: aiResponse, sender: 'ai' }]);
        setLoading(false);
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, loading]);

    return (
        <div className={`chat-wrapper ${isOpen ? 'open' : ''}`}>
            <button className="chat-toggle" onClick={() => setIsOpen(!isOpen)}>
                <span className="toggle-icon">{isOpen ? '✕' : '💬'}</span>
            </button>
            
            <div className="chat-container">
                <div className="chat-header">
                    <div className="header-status"></div>
                    Atendimento Diamond Prime
                </div>
                <div className="chat-messages">
                    {messages.map((msg, index) => (
                        <div key={index} className={`message-row ${msg.sender}`}>
                            {/* Simulação de Avatar */}
                            <div className="avatar">{msg.sender === 'ai' ? '🤖' : '👤'}</div>
                            <div className="message-bubble">
                                <div dangerouslySetInnerHTML={{ __html: msg.text }} />
                            </div>
                        </div>
                    ))}
                    
                    {loading && (
                         <div className="message-row ai loading">
                            <div className="avatar">🤖</div>
                            <div className="message-bubble typing-indicator">
                                <span></span><span></span><span></span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
                <form className="chat-input" onSubmit={handleSend}>
                    <input 
                        type="text" 
                        value={input} 
                        onChange={(e) => setInput(e.target.value)} 
                        placeholder="Digite sua mensagem..."
                    />
                    <button type="submit">
                        {/* Ícone de enviar (seta simples com CSS) */}
                        <div className="send-icon">➤</div>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Chat;