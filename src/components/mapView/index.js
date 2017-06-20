import React, {Component} from 'react';
import {connect} from 'react-redux';
import Slider from 'material-ui/Slider';
import {previousView} from './../../actions/ViewActions';
import FlatButton from 'material-ui/FlatButton';

class MapView extends Component {
    constructor(props){
        super(props);
        this.state = {zoom:17,h:window.innerHeight,w:window.innerWidth };
        document.addEventListener("backbutton", ()=>{
            this.props.dispatch(previousView());
        }, false);
        window.addEventListener('resize', ()=>{
            this.setState({h:window.innerHeight,w:window.innerWidth});
        });
    }


    render() {
        if(this.props.index === 1){
            var maxHeight = this.state.h;
            var maxWidth = this.state.w;
            var coorString =this.props.coordinates[1]+","+this.props.coordinates[0];
            var static_link = "https://maps.googleapis.com/maps/api/staticmap?center="+
                coorString+"&markers=color:blue%7Clabel:A%7C" + coorString+
                "&size="+Math.floor(maxWidth)+"x"+Math.floor(maxHeight)+
                "&key=AIzaSyDCL2DyuEdSb0QsqQ5gDpyFyZpBm6JaJrU"+"&zoom=";
            var link = static_link+this.state.zoom;

            return <div style={{backgroundImage:"url("+link+")", backgroundSize:this.state.w+"px"+" "+this.state.h+"px"}}>
                <Slider
                    defaultValue={this.state.zoom}
                    min={5}
                    max={24}
                    axis="y"
                    step={1}
                    onChange={(e,v)=>this.setState({zoom:v})}
                    style={{margin:0, height:this.state.h}}
                    sliderStyle={{margin:0,float:"right"}}
                />
            </div>
        }else{
            return<div></div>;
        }


    }
}

function mapStateToProps(store) {
    return {
        coordinates: store.viewReducer.coordinates, index: store.viewReducer.index
    }
}

export default connect(mapStateToProps)(MapView);