import React from "react";
import "./spinner.css";

const Spinner = () => {    
    return (
        <div className="justify-content-center card w-100 d-flex flex-row random-planet">     
    <div className="lds-ripple">
        <div></div>
        <div></div>
    </div></div>);
};

export default Spinner;