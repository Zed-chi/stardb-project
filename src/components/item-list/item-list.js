import React from "react";
import "./item-list.css";
import Spinner from "../spinner/spinner";


class ItemList extends React.Component{

    renderItems = (itemList)=> {
        return itemList.map((item)=>{
            const {id} = item;
            const name = this.props.renderItem(item);
            return (<li 
                    key={id}
                    onClick={()=> this.props.onItemSelected(id)}
                    className="list-group-item list-group-item-action"
                >
                    {name}
                </li>);
            }
        );  
    };

    render(){
        const {data} = this.props;
        const content = this.renderItems(data);
        return (
            <div className="col-md-6 card p-2">
                <ul className="list-group">
                   {content} 
                </ul>
            </div>
        );
    }
};


const withData = (View, getData)=>{
    return class extends Component{
            
        state = {
            data:[]
        }

        componentDidMount(){
            const {getData} = this.props;
            getData()
            .then((data)=>{
                this.setState({
                    data
                })
            })
        }

        render(){
            const {data} = this.state;
            if (!data){
                return <Spinner/>;
            }
            return <View {...this.props} data={data}/>;
        }
    };
};


export default withData(ItemList);