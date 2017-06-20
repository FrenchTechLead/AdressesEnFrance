import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import {connect} from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import { openSnackBar } from './../../actions/SnackBarActions';
import { refresh } from './../../actions/SreachActions';
import Warning from 'material-ui/svg-icons/alert/warning';
import {nextView} from './../../actions/ViewActions';

class ResultsList extends Component {

    render() {
        let list = [];
        let features = this.props.features;
        for(let i = 0; i< features.length ; i++){
            list.push(
                <ListItem
                    key={i}
                    primaryText={features[i].properties.label}
                    onTouchTap={()=>this.props.dispatch(nextView(features[i].geometry.coordinates))}
                />);
        }

        if(this.props.error){
            this.props.dispatch(openSnackBar(this.props.error.message));
            this.props.dispatch(refresh());
        }


        // fetching view
        if(this.props.fetching)
            return (<div style={{marginTop:"80px", textAlign:"center"}}>
                    <CircularProgress size={80} thickness={5} />
                    </div>);



        // fetched view
        if(this.props.fetched && !this.props.fetching ){
            if(list.length === 0)
                list.push(<ListItem key={0} leftIcon={<Warning />} primaryText="Adresse introuvable !"/>);
            return (
                <List>
                    {list}
                </List>
            );
        }
        return<div></div>;

    }
}

function mapStateToProps(store) {
    return {
        features: store.searchReducer.features,
        fetching: store.searchReducer.fetching,
        fetched: store.searchReducer.fetched,
        error:   store.searchReducer.error,
        isOpen: store.snackBarReducer.isOpen,
        message:store.snackBarReducer.message
    }
}

export default connect(mapStateToProps)(ResultsList);