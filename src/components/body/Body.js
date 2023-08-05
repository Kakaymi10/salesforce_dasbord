import React from "react";
import './Body.css'
import Leftblock from "./leftBlock/LeftBlock";
import Central from "./centralBlock/central";

function Body(){
    return(
        <div className="body">
            <div className="left-block">
                <Leftblock />
            </div>
            <div className="central-block">
                <Central />
            </div>
            <div className="right-block">

            </div>
        </div>
    )
}
export default Body