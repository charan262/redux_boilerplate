import React,{Component}from 'react';
import ItemsList from '../containers/data';
export default class App extends Component{
    render(){
        return(
            <div className="rectangle"><ItemsList/></div>
        )
    }
}