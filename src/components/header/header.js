import React from "react";
import SearchBar from "./searchBar";
import HeaderIcons from "./headerIcons";
import UnderHeader from "./UnderHeader";
import './Header.css';

function Header(){
    return(
      <div className="header">
        <div className='up_header'>
          <div className='logo'>
            <h3>Uhuza</h3>
          </div>
          <SearchBar />
          <HeaderIcons />
        </div>
        <UnderHeader className='downHeader'/>
      
      </div>
    )

}
export default Header