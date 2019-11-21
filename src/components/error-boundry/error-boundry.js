import React from "react";
import ErrorSplash from "../error-splash/error-splash";


export default class ErrorBoundry extends React.Component{
    state = {
        hasError:false,
    } 
    componentDidCatch(){
        this.setState({
            hasError:true,
        })
    }
    render(){
        if (this.state.hasError){
            return <ErrorSplash/>;
        } 
        return this.props.children
    }
}