import React from "react";
import { TiShoppingBag } from 'react-icons/ti';
import './LeftBlock.css'
import Details from "./details";
function Leftblock(){
    return(
        <div className="left-compoment">
            <div className="case-details">


              <div className="case-details-header">
                <div className="icon">
                  <TiShoppingBag />
                  <p className="case-details-title">Case Detail</p>
                </div>
                <select className="dropdown">
                  <option></option>
                  <option>Option 2</option>
                  {/* Add more options */}
                </select>
              </div>

              <div className="details">
                <Details label='Case Number'/>
                <Details label='Case Owner'/>
                <Details label='Status'/>
                <Details label='Priority'/>
              </div>
              <Details label='Subject'/>
              <Details label='Description'/>
              
              
            </div>


            <div className='case-details'>
              <div className="case-details-header">
                <div className="icon">
                  <TiShoppingBag />
                  <p className="case-details-title">Contact Details</p>
                </div>
                <select className="dropdown">
                  <option></option>
                  <option>Option 2</option>
                  {/* Add more options */}
                </select>
              </div>
              <Details label='Name'/>
              <div className="details">
                <Details label='Title'/>
                <Details label='Account Name'/>
                <Details label='Email'/>
                <Details label='Phone'/>
              </div>
            </div>


            <div className="case-details">

              <div className="case-details-header parent-detail-header">
                <div className="icon">
                  <TiShoppingBag />
                  <p className="case-details-title">Case for Parent Contact(2)</p>
                </div>
                <select className="dropdown">
                  <option></option>
                  <option>Option 2</option>
                  {/* Add more options */}
                </select>
              </div>

              <div className="">
                <div className="case-details-header">
                  <p className="par-id">0001006</p>
                  <select className="dropdown">
                  <option></option>
                  <option>Option 2</option>
                  {/* Add more options */}
                  </select>
                </div>
                <div class="paragraph-container">
                  <label for="inputField">Subject:</label>
                  <p id="inputField" className="subj">Generator Assembly</p>
                </div>
                <div class="paragraph-container">
                  <label for="inputField">Priority:</label>
                  <p id="inputField">Low</p>
                </div>
                <div class="paragraph-container">
                  <label for="inputField">Date/Time O...:</label>
                  <p id="inputField">6/18/2019 6:13 PM</p>
                </div>
              </div>
              <div className="">
                <div className="case-details-header">
                  <p className="par-id">0001006</p>
                  <select className="dropdown">
                  <option></option>
                  <option>Option 2</option>
                  {/* Add more options */}
                  </select>
                </div>
                <div class="paragraph-container">
                  <label for="inputField">Subject:</label>
                  <p id="inputField" className="subj">Generator Assembly</p>
                </div>
                <div class="paragraph-container">
                  <label for="inputField">Priority:</label>
                  <p id="inputField">Low</p>
                </div>
                <div class="paragraph-container">
                  <label for="inputField">Date/Time O...:</label>
                  <p id="inputField">6/18/2019 6:13 PM</p>
                </div>
              </div>


            </div>
        </div>
    )
}

export default Leftblock