import React from "react";
import "./item-list.css";
import Spinner from "../spinner/spinner";


export default class ItemList extends React.Component{
    
    state = {
        itemList:[]
    }

    componentDidMount(){
        const {getData} = this.props;
        getData()
        .then((itemList)=>{
            this.setState({
                itemList
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
