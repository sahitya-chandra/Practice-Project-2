import { useState } from 'react';
import './SearchBar.css'
import { Link } from 'react-router-dom';

const types = ['buy', "rent"]

const SearchBar = () => {
    const [query, setQuery] = useState({
        type: "buy",
        location: "",
        minPrice: 0,
        maxPrice: 0,
    })

    const switchType = (val) => {
        setQuery((prev)=> ({ ...prev, type:val}))
    }

    const handleChange = e => {
        setQuery((prev)=> ({ ...prev, [e.target.name]: e.target.value}))
    }

    return (
        <div className='searchBar'>
            <div className="type">
                {types.map((type, index)=> (
                    <button key={index} onClick={()=>switchType(type)} className={query.type === type?"active":""}>{type}</button>
                ))}
            </div>
            <form>
                <input type="text" name='city' placeholder='City' onChange={handleChange}/>
                <input 
                    type="text" 
                    name='maxPrice' 
                    min={0} 
                    max={10000000} 
                    placeholder='Max Price' 
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    name='minPrice' 
                    min={0} 
                    max={10000000} 
                    placeholder='Min Price' 
                    onChange={handleChange}
                />
                <Link to={`/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}>
                    <button>
                        <img src="/search.png" alt="" />
                    </button>
                </Link>
            </form>
        </div>
    )
}


export default SearchBar;