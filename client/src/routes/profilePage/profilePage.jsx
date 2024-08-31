import "./profilePage.css"
import { Link, useNavigate } from "react-router-dom";
import Chat from "../../components/chat/Chat";
import List from "../../components/List/List";
import apiRequest from "../../lib/apiRequest";
import { useRecoilValue } from "recoil";
import { useAuth } from "../../store/hooks/useAuth";
import { currentUserAtom } from "../../store/atom/atom";
import { useEffect } from "react";


const ProfilePage = () => {

    const navigate = useNavigate()
    const currentUser = useRecoilValue(currentUserAtom)
    const updateUser = useAuth()

    const handleLogout = async () => {

        try {
            await apiRequest.post("/auth/logout")
            updateUser(null)
            navigate('/')
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div className="profilepage">
            <div className="details">
                <div className="wrapp">
                    <div className="titleeee">
                        <h1>User Information</h1>
                        <Link to='/profile/update'>
                        <button>Update Profile</button>
                        </Link>
                    </div>
                    <div className="inform">
                        <span>
                        Avatar:
                        <img
                            src={ "/noavatar.jpg"}
                        />
                        </span>
                        <span>
                        Username: <b>{currentUser.username}</b>
                        </span>
                        <span>
                        E-mail: <b>{currentUser.email}</b>
                        </span>
                        <button onClick={handleLogout}>Logout</button>
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