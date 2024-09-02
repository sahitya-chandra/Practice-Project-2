import "./profilePage.css"
import { Await, Link, useLoaderData, useNavigate } from "react-router-dom";
import Chat from "../../components/chat/Chat";
import List from "../../components/List/List";
import apiRequest from "../../lib/apiRequest";
import { useRecoilValue } from "recoil";
import { useAuth } from "../../store/hooks/useAuth";
import { currentUserAtom } from "../../store/atom/atom";
import { Suspense } from "react";


const ProfilePage = () => {

    const data = useLoaderData()

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

    // console.log(currentUser)

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
                        Username: <b>{currentUser.userInfo.username}</b>
                        </span>
                        <span>
                        E-mail: <b>{currentUser.userInfo.email}</b>
                        </span>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                    <div className="titleeee">
                        <h1>My List</h1>
                        <Link to="/add">
                            <button>Create New Post</button>
                        </Link>
                    </div>
                    <Suspense fallback={<p>Loading...</p>}>
                        <Await
                        resolve={data.postResponse}
                        errorElement={<p>Error loading posts!</p>}
                        >
                        {(postResponse) => <List posts={postResponse.data.userPosts}/>}
                        </Await>
                    </Suspense>
                    <div className="titleeee">
                        <h1>Saved List</h1>
                    </div>
                    <Suspense fallback={<p>Loading...</p>}>
                        <Await
                        resolve={data.postResponse}
                        errorElement={<p>Error loading posts!</p>}
                        >
                        {(postResponse) => <List posts={postResponse.data.savedPosts}/>}
                        </Await>
                    </Suspense>
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