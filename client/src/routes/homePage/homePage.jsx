import { useRecoilValue } from 'recoil';
import SearchBar from '../../components/searchBar/SearchBar';
import './homePage.css'
import { currentUserAtom } from '../../store/atom/atom';

const HomePage = () => {

    const currentUser = useRecoilValue(currentUserAtom)

    return (
        <div className='homepage'>
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className='title'>
                        Find Real Estate & Get Your Dream Place
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et facilis mollitia blanditiis fugit neque corporis excepturi sint saepe nesciunt. Atque in est ratione provident vero ipsum suscipit. Quae, repudiandae commodi.
                    </p>
                    <SearchBar />
                    <div className="boxes">
                        <div className="box">
                            <h1>16+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className="box">
                            <h1>200</h1>
                            <h2>Award Gained</h2>
                        </div>
                        <div className="box">
                            <h1>2000+</h1>
                            <h2>Property Ready</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    )
}

export default HomePage;