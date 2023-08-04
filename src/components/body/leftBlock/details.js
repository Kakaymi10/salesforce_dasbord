import React from "react";
import { AiOutlineEdit } from 'react-icons/ai'
import './detail.css'

function Details(props){
    return(
      <div className='container'>
        <label className='label'>{props.label}</label>
        <div className='inputContainer'>
            <input
              type="text"
              className='input'
              />
              <AiOutlineEdit className='pencilIcon' />
        </div>
      </div>

    )
}

export default Details