import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './searchBar.css'

function SearchBar(){
    const [searchText, setSearchText] = useState('');
    const [filter, setFilter] = useState('All');

    const handleSearch = () => {
    // Implement your search functionality here
    console.log('Searching for:', searchText, 'with filter:', filter);
    };

    const handleFilterChange = (event) => {
     setFilter(event.target.value);
    };
    return(
        <div className='searchBar'>
          <div className="filter-dropdown">
            <select value={filter} onChange={handleFilterChange} className='select_filter'>
              <option value="All">All</option>
              <option value="Option1">Option 1</option>
              <option value="Option2">Option 2</option>
              {/* Add more filter options here */}
            </select>
          </div>
          <div className="search-input-container">
            <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search SalesForce"
            className="search-input"
            />
            <button className="search-button" onClick={handleSearch}>
            <FaSearch />
            </button>
          </div>

        </div>
    )
}
export default SearchBar