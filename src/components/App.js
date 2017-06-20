import React, {Component} from 'react';
import MyDrawer from './drawer';
import MyAppBar from './appBar';
import ResultsList from './resultsList';
import MySnackBar from './mySnackBar';
import SwipeableViews from 'react-swipeable-views';
import {connect} from 'react-redux';
import MapView from './mapView';
import {nextView, previousView} from "./../actions/ViewActions"
class App extends Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
            <div>
                <MyDrawer/>
                <SwipeableViews
                    index={this.props.index}
                    disabled={true}
                    enableMouseEvents={false}
                >
                    <div>
                        <MyAppBar/>
                        <ResultsList/>
                        <MySnackBar/>
                    </div>
                    <div>
                        <MapView/>
                    </div>
                </SwipeableViews>
            </div>
        );
    }

}
function mapStateToProps(store) {
return {
    index: store.viewReducer.index
}
}

export default connect(mapStateToProps)(App);