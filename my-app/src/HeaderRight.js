import React from "react";
import Vector from './Vector.svg';

function HeaderRight(){
    return(
        <div className="headerRight">
            <img style={{height:"25rem",width:"25rem", marginLeft:"10rem"}} src={Vector} alt="Vector"/>
        </div>
    );
    
}
export default HeaderRight;