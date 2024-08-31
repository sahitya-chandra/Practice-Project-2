import './layout.css'
import { Navigate, Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import { useRecoilValue } from 'recoil';
import { currentUserAtom } from '../../store/atom/atom';



const Layout = () => {

    return (
        <div className="layout">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}

const RequireAuth = () => {
    const currentUser = useRecoilValue(currentUserAtom)

    return (
        !currentUser ? (
            <Navigate to="/login" />

        ):(
            <div className="layout">
                <div className="navbar">
                    <Navbar />
                </div>
                <div className="content">
                    <Outlet />
                </div>
            </div>
        )
    )
}

export {Layout, RequireAuth};