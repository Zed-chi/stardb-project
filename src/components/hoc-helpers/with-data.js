import React from "react";
import Spinner from "../spinner/spinner";
import ErrorBoundry from "../error-boundry/error-boundry";


const withData = (View, getData)=>{
    return class extends React.Component{
            
        state = {
            data:[]
        }

        componentDidMount(){
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
            return <ErrorBoundry>
                <View {...this.props} data={data}/>
            </ErrorBoundry>
            
        }
    };
};

export default withData;
