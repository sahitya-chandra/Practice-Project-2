import { useState } from 'react';
import './SearchBar.css'

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

    return (
        <div className='searchBar'>
            <div className="type">
                {types.map((type, index)=> (
                    <button key={index} onClick={()=>switchType(type)} className={query.type === type?"active":""}>{type}</button>
                ))}
            </div>
            <form>
                <input type="text" name='location' placeholder='City Location' />
                <input 
                    type="text" 
                    name='min price' 
                    min={0} 
                    max={10000000} 
                    placeholder='Max Price' 
                />
                <input 
                    type="text" 
                    name='min price' 
                    min={0} 
                    max={10000000} 
                    placeholder='Min Price' 
                />
                <button>
                    <img src="/search.png" alt="" />
                </button>
            </form>
        </div>
    )
}


export default SearchBar;