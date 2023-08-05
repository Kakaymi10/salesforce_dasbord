import React from "react";
import './central.css'
import { TiShoppingBag } from 'react-icons/ti';
import {FaPlus} from 'react-icons/fa';

function Central(){
    return(
        <div>
            <div className="central_header">
              <div className="cent_h">
                <TiShoppingBag className="bag"/>
                <div>
                    <p>Case</p>
                    <h5 className="maintain">Mainenace guideline for generator unclear</h5>
                </div>

              </div>
              <div className="cent_h">
                
                <diV className='follow'>
                    < FaPlus />
                    <p>Follow</p>
                </diV>
                <div className="follow">
                    <p>Edit</p>
                    <select className="dropdown">
                        <option></option>
                        <option>Option 2</option>
                        {/* Add more options */}
                    </select>
                </div>
                </div>

            </div>
            <div className="cent-body">
                <div className="cent-body-h">
                  <p className="feed">Feed</p>
                  <p>Details</p>
                </div>
                <div className="cent-b-search">
                  <div className="cent-b-post">
                    <p className="cent-b-post-post">Post</p>
                    <p className="cent-b-post-detail">Details</p>
                  </div>
                  <div className="cent-b-share">
                    <input type="text" placeholder="Share an update" className="body-inp"/>
                    <button className="body-share">Share</button>
                  </div>
                </div>
                <div>
                  <div className="most-recent">
                    <p>Most Recent Activity</p>

                    <select className="dropdown">
                        <option>Most Recent Acticity</option>
                        <option>Option 2</option>
                        {/* Add more options */}
                    </select>
                  </div>
                  <div>

                  </div>
                  
                </div>
                <div>
                  <div className="cent-body-h">
                    <p className="feed">All Updates</p>
                    <p>Call Logs</p>
                    <p>Text posts</p>
                    <p>Status Changes</p>
                  </div>

                </div>
            </div>
        </div>

    )
}
export default Central