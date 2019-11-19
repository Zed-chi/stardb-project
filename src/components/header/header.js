import React from "react";
import "./header.css";

const Header = () =>{
    return (<div className="align-items-center header w-100 d-flex justify-content-between">
        <span className="w-50" className="flex-fill">Star DB</span>
        <ul className="flex-fill nav-pills w-50 d-flex nav justify-content-between nav-justified">
            <li className="nav-item">
                <a href="/">people</a>
            </li>
            <li className="nav-item">
                <a href="/">planets</a>
            </li>
            <li className="nav-item">
                <a href="/">starships</a>
            </li>                        
        </ul>
    </div>);
};

export default Header;