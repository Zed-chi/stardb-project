import React from "react";
import "./item-list.css";
import Spinner from "../spinner/spinner";
import Swapi from "../../services/swapi";
import withData from "../hoc-helpers/with-data";


const ItemList = (props) => {
    const {data, onItemSelected, children: renderItem} = props;
    const items = data.map((item)=>{
        const {id} = item;
        const name = renderItem(item);
        return (<li 
                key={id}
                onClick={()=> onItemSelected(id)}
                className="list-group-item list-group-item-action"
            >
                {name}
            </li>);
        }
    );
    return (
        <div className="col-md-6 card p-2">
            <ul className="list-group">
                {items} 
            </ul>
        </div>
    );
};


const {getAllPeople} = new Swapi();
export default withData(ItemList,getAllPeople);