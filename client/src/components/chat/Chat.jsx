import { useState } from "react";
import"./Chat.css"

const Chat = () => {

    const [chat, setChat] = useState(true);

    return (
        <div className="Chatchat">
            <div className="messa">
                <h1>Messages</h1>
                <div className="message">
                    <img
                        src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                    />
                    <span>John Doe</span>
                    <p>Lorem ipsum dolor sit amet...</p>
                </div>
                <div className="message">
                    <img
                        src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                    />
                    <span>John Doe</span>
                    <p>Lorem ipsum dolor sit amet...</p>
                </div>
                <div className="message">
                    <img
                        src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                    />
                    <span>John Doe</span>
                    <p>Lorem ipsum dolor sit amet...</p>
                </div>
                <div className="message">
                    <img
                        src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                    />
                    <span>John Doe</span>
                    <p>Lorem ipsum dolor sit amet...</p>
                </div>
                <div className="message">
                    <img
                        src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                    />
                    <span>John Doe</span>
                    <p>Lorem ipsum dolor sit amet...</p>
                </div>
                <div className="message">
                    <img
                        src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                    />
                    <span>John Doe</span>
                    <p>Lorem ipsum dolor sit amet...</p>
                </div>
            </div>
            {chat && (
                <div className="chatBox">
                    <div className="toppp">
                        <div className="useeeer">
                        <img
                            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt=""
                        />
                        John Doe
                        </div>
                        <span className="closee" onClick={()=>setChat(null)}>X</span>
                    </div>
                    <div className="centerr">
                        <div className="chatMessage">
                            <p>Lorem ipsum dolor sit amet</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chatMessage own">
                            <p>Lorem ipsum dolor sit amet</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chatMessage">
                            <p>Lorem ipsum dolor sit amet</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chatMessage own">
                            <p>Lorem ipsum dolor sit amet</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chatMessage">
                            <p>Lorem ipsum dolor sit amet</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chatMessage own">
                            <p>Lorem ipsum dolor sit amet</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chatMessage">
                            <p>Lorem ipsum dolor sit amet</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chatMessage own">
                            <p>Lorem ipsum dolor sit amet</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chatMessage">
                            <p>Lorem ipsum dolor sit amet</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chatMessage own">
                            <p>Lorem ipsum dolor sit amet</p>
                            <span>1 hour ago</span>
                        </div>
                    </div>
                    <div className="bottommm">
                        <textarea></textarea>
                        <button>Send</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Chat;