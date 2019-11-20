import React from "react";
import Swapi from "../../services/swapi";
import Spinner from "../spinner/spinner";
import "./person-details.css";


export default class PersonDetails extends React.Component{
    state = {
        person:null        
    };
    swapi = new Swapi();

    updatePerson = ()=>{
        const {personId} = this.props;
        if(!personId){
            return ;
        }
        this.swapi.getPerson(personId)
        .then((person)=>{
            this.setState({person})
        });
    };

    componentDidMount(){
        this.updatePerson()
    }
    componentDidUpdate(prevProps){
        if (this.props.personId !== prevProps.personId){
            this.updatePerson();
        }

    }
    componentWillUnmount(){
        this.setState({
            person:null
        })
    }
    renderPerson(person){
        return (<React.Fragment>
            <div className="col-md-6">
                <img 
                    alt="planet" 
                    src={`https://starwars-visualguide.com/assets/img/characters/${person.id}.jpg`} 
                    className="img-thumbnail col-md-* w-100"
                />
            </div>
            
            <div className="col-md-6">
                <h4>Name: {person.name}</h4>
                <ul className="list-group">
                    <li className="list-group-item list-group-item-action">Gender: {person.gender}</li>
                    <li className="list-group-item list-group-item-action">Birth Year: {person.birthOfYear}</li>
                    <li className="list-group-item list-group-item-action">Eye Color: {person.eyeColor}</li>            
                </ul>
            </div>
        </React.Fragment>);
    }

    render (){
        const {person} = this.state;
        let content = null;
        if (!person){content = <div>Select Character to See Info!</div>}
        else{
            content = this.renderPerson(person);
        }
        return (
        <div className="card col-md-6 d-flex flex-row p-2 person-details">
            {content}
        </div>
        );
    }
    
};
