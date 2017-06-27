import React,{Component} from 'react';
export default class Smallcircle extends Component{
    render(){
        const style= {leftMargin:"10px"};
        return(
            <svg height={40} style={style}>
                <circle cx={30} cy={30} r={4} stroke="red" strokeWidth={1} fill="yellow"/>
                <circle cx={30} cy={30} r={2}  fill="green"/>
            </svg>
        )
    }
}