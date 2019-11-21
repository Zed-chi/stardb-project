import React from "react";
import Spinner from "../spinner/spinner";
import "./item-details.css";
import ErrorBoundry from "../error-boundry/error-boundry";

const Record = ({item, field, label})=>{
    return (
        <li 
            className="list-group-item list-group-item-action"
            >
            <span>{label}</span> : <span>{item[field]}</span>            
        </li>
    );
}

class ItemDetails extends React.Component{
    state = {
        item:null,
        children: this.props.children 
    };

    updateItem = ()=>{
        const {id, getData, getImgUrl} = this.props;
        if(!id){
            return <Spinner/>;
        }
        getData(id)
        .then((item)=>{
            this.setState({
                item,
                image:getImgUrl(item),
                test:true
            });
        });
    };

    componentDidMount(){
        this.updateItem();
    }

    componentDidUpdate(prevProps){
        if (this.props.id !== prevProps.id){
            this.updateItem();
        }
    }

    componentWillUnmount(){
        this.setState({
            item:null
        })
    }

    renderItem(item, image){
        console.log(item, image);
        return (
            <React.Fragment>
                <div className="col-md-6">
                    <img 
                        alt="item" 
                        src={image} 
                        className="img-thumbnail col-md-* w-100"
                    />
                </div>
                
                <div className="col-md-6">
                    <h5>{item.name}</h5>
                    <ul className="list-group">                        
                       {
                        React.Children.map(
                           this.props.children, 
                           (c)=>{
                               return React.cloneElement(c, {item});                               
                            }
                        )
                        }
                    </ul>
                </div>
            </React.Fragment>
        );
    }

    render (){
        
        const {item, image} = this.state;
        let content = null;
        //debugger;
        if (!item){content = <Spinner/>}
        else{
            content = this.renderItem(item, image);
        }
        return (
        <ErrorBoundry>            
            {content}           
        </ErrorBoundry>
        );
    }
    
};


export {Record, ItemDetails};