import React from "react";
//import Spinner from "../spinner/spinner";

const Row = ({left, right})=>{
    return (
        <div className="d-flex flex-row p-2">
            <div className="card col-md-6 p-2 d-flex flex-row">
                {left}
            </div>
            <div className="card col-md-6 p-2 d-flex flex-row">
                {right}
            </div>        
        </div>
    );
};

export default Row;