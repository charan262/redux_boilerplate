import React,{Component} from 'react';
import {connect} from 'react-redux';
import Smallcircle from '../components/Smallcircle'
class ItemsList extends Component{
    renderIt(){
        return this.props.items.map((item)=>{
            return(
                <div className="rectangle">
                    <p className="heading">{item.id}</p>
                    <svg  width={300} height={100}>
                        <circle cx={50} cy={50} r={40} stroke='green' strokeWidth={3} fill="none"/>
                        <text fill="red" fontSize={20} fontFamily="Verdana" x={34} y={44}>25</text>
                        <line x1={30} y1={50} x2={70} y2={50} stroke="blue" strokeWidth={3}/>
                        <text fill="red" fontSize={20} fontFamily="Verdana" x={34} y={70}>25</text>
                    </svg><hr/>
                    <Smallcircle/>Tasks Due : {item.tasks}<hr/>
                    <Smallcircle/>At Risk: {item.risk}<hr/>
                    <Smallcircle/>On  Target/Under Review: {item.review}

                </div>
            )
        })
    }
    render(){
        return(
            <ul>
                {this.renderIt()}
            </ul>
        )
    }
}
function mapStateToProps(state){
    return {
        items: state.items
    }
}
export default connect(mapStateToProps)(ItemsList);