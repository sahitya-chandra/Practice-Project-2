import Chat from "../../components/chat/Chat";
import List from "../../components/List/List";
import "./profilePage.css"

const ProfilePage = () => {


    return (
        <div className="profilepage">
            <div className="details">
                <div className="wrapp">
                    <div className="titleeee">
                        <h1>User Information</h1>
                        <button>Update Profile</button>
                    </div>
                    <div className="inform">
                        <span>
                        Avatar:
                        <img
                            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt=""
                        />
                        </span>
                        <span>
                        Username: <b>John Doe</b>
                        </span>
                        <span>
                        E-mail: <b>john@gmail.com</b>
                        </span>
                    </div>
                    <div className="titleeee">
                        <h1>My List</h1>
                        <button>Create New Post</button>
                    </div>
                    <List />
                    <div className="titleeee">
                        <h1>Saved List</h1>
                    </div>
                    <List />
                </div>
            </div>
            <div className="chatContainer">
                <div className="wrapp">
                    <Chat />
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;