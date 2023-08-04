import React from 'react';
import { TiContacts, TiThSmall, TiDeleteOutline, TiShoppingBag } from 'react-icons/ti';
import './underHeader.css'; // Import your CSS file for styling

const UnderHeader = () => {
  return (
    <div className="container-under-header">
      <div className="section">
        <div className="icon">
          <TiThSmall className='tith'/>
        </div>
        <h3 className='ser-console'>Service Console</h3>
      </div>

      
      <div className="section">
      <div className="icon">
        <TiContacts/>
        <p>Case</p>
        </div>
        <div className="side-icon">
        <select className="dropdown">
          <option></option>
          <option>Option 2</option>
          {/* Add more options */}
        </select>
        <TiDeleteOutline />
        </div>
        
      </div>



      <div className="section">
        <div className="icon">
          <TiShoppingBag />
          <p>Andy Young</p>
        </div>
        
        <div className="side-icon">
        <select className="dropdown">
          <option></option>
          <option>Option 2</option>
          {/* Add more options */}
        </select>
        <TiDeleteOutline />
        </div>
      </div>



      <div className="section">
        <div className="icon">
          <TiShoppingBag />
          <p>0000000</p>
        </div>
        <div className="side-icon">
          <select className="dropdown">
          <option></option>
          <option>Option 2</option>
          {/* Add more options */}
        </select>
        <TiDeleteOutline />
        </div>
      </div>
      {/* Repeat the above structure for the remaining sections */}
    </div>
  );
};

export default UnderHeader;
