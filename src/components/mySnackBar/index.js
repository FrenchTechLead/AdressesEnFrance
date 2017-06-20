import React, {Component} from 'react';
import {connect} from 'react-redux';
import Snackbar from 'material-ui/Snackbar';
import { closeSnackBar } from './../../actions/SnackBarActions';


class MySnackBar extends Component {

    render() {
        return (
            <Snackbar
                open={this.props.isOpen}
                message={this.props.message}
                autoHideDuration={4000}
                onRequestClose={(e)=>this.props.dispatch(closeSnackBar())}
            />
        );
    }
}

function mapStateToProps(store) {
    return {isOpen: store.snackBarReducer.isOpen, message:store.snackBarReducer.message}
}

export default connect(mapStateToProps)(MySnackBar);