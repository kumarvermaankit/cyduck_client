import React from "react";

function AlertBox(props){

return(
    <div className="alert">
    <div className="alertbox">
        <p className="message">{props.message}</p>
        <button className="ok_btn" onClick={props.click}>OK</button>
    </div>
    </div>
)

}

export default AlertBox