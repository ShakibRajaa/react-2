import React from "react";

function HeaderLeft(){
    return(
        <div className="headerLeft">
            <h1 style={{fontSize:"2.5rem"}}>An inspiring design delivered to your inbox every morning</h1>
            <p style={{fontSize:"1.5rem",width:"35rem",fontWeight:"500"}}>Our team scouts the internet for the best designs, illustrations and art and delivers a truly inspiring one every day to your inbox</p>
            <b style={{fontSize:"1.5rem"}}>Show me how it looks</b>
            <br/>
            <input className="inputHeader" placeholder="Your e-mail address"></input>
            <button className="buttonHeader">Register Now</button>
            <p style={{paddingLeft:"2rem",color:"white"}}>Free - No Spam - No Data Sharing </p>
            <br/>
        </div>
    );
    
}
export default HeaderLeft;