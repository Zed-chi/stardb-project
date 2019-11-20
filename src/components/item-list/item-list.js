import React from "react";
import Swapi from "../../services/swapi";
import "./item-list.css";
import Spinner from "../spinner/spinner";


export default class ItemList extends React.Component{
    swapi = new Swapi();
    state = {
        peopleList:[]
    }

    componentDidMount(){
        this.swapi.getAllPeople()
        .then((peopleList)=>{
            this.setState({
                peopleList
            })
        })
    }

    renderItems(peopleList) {
        return peopleList.map(
            ({id, name})=>{
                return (
                    <li 
                        key={id}
                        onClick={()=> this.props.onItemSelected(id)}
                        className="list-group-item list-group-item-action"
                    >
                        {name}
                    </li>);
            }
        );
    }
    


    render(){
        const {peopleList} = this.state;
        const content = !peopleList ? <Spinner/>: this.renderItems(peopleList);
        
        return (
            <div className="col-md-6 card p-2">
                <ul className="list-group">
                   {content} 
                </ul>
            </div>
        );
    }
};
