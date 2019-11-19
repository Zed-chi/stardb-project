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
            <div>
                <ul>
                   {content} 
                </ul>
            </div>
        );
    }
};
