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

    renderPerson(person){
        return (<React.Fragment>
            <img alt="planet" src={`https://starwars-visualguide.com/assets/img/characters/${person.id}.jpg`} className="img-fluid img-thumbnail"/>
            <div>
                <h4>Name: {person.name}</h4>
                <ul>
                    <li>Gender: {person.gender}</li>
                    <li>Birth Year: {person.birthOfYear}</li>
                    <li>Eye Color: {person.eyeColor}</li>            
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
        <div>
            {content}
        </div>
        );
    }
    
};
