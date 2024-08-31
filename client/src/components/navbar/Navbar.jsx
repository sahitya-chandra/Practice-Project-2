import { useState } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { currentUserAtom } from '../../store/atom/atom';

const Navbar = () => {

    const currentUser = useRecoilValue(currentUserAtom)

    const [open, setOpen] = useState(false)

    return (
        <nav>
            <div className="left">
                <a href="/" className="logo">
                    <img src="/logo.png" alt="" />
                    <span>LamaEstate</span>
                </a>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Agents</a>
            </div>
            <div className="right">
                {currentUser?(
                    <div className='useeer'>
                        <img src={ "/noavatar.jpg"} />
                        <span>John Doe</span>
                        <Link to="/profile" className="profile">
                            <div className="notification">3</div>
                            <span>Profile</span>
                        </Link>
                    </div>
                ):(
                <>
                    <a href="/login">Sign in</a>
                    <a href="/register" className='button'>Sign up</a>
                </>
                )}
                <div className="menuIcon">
                    <img src="/menu.png" alt="" onClick={()=> (setOpen(prev => !prev))}/>
                </div>
                <div className={open ? "menu active": "menu"}>
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Contact</a>
                    <a href="/">Agents</a>
                    <a href="/">Sign in</a>
                    <a href="/">Sign up</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;