import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Search from 'material-ui/svg-icons/action/search';
import Menu from 'material-ui/svg-icons/navigation/menu';
import TextField from 'material-ui/TextField';
import { openDrawer, closeDrawer } from './../../actions/DrawerActions';
import { search } from './../../actions/SreachActions';
import {connect} from 'react-redux';


class MyAppBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {keyword:""}
        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.runSearch = this.runSearch.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidMount(){
        document.getElementById("addressField").focus();
    }

    toggleDrawer(){
        (this.props.isOpen)?
            this.props.dispatch(closeDrawer()) :
            this.props.dispatch(openDrawer());

    }

    handleKeyPress(e){
        if(e.key === 'Enter'){
            this.runSearch();
        }
    }

    runSearch(){
        if(this.state.keyword.length>3){
            this.props.dispatch(search(this.state.keyword,[]));
        }
    }

    render() {
        let icon = this.props.isOpen ? <NavigationClose /> : <Menu/>;
        return (
            <AppBar
                title={<TextField
                    id="addressField"
                    inputStyle={{color:'white',WebkitTextFillColor:"white"}}
                    hintStyle={{color:'rgba(255, 255, 255, 0.61)'}}
                    hintText="Boulevard, Avenue, Rue ..."
                    onChange={(e,word)=>this.setState({keyword:word})}
                    fullWidth={true}/>}
                iconElementRight={this.state.keyword.length>3 ?<IconButton><Search/></IconButton>:null}
                iconElementLeft={<IconButton>{icon}</IconButton>}
                onLeftIconButtonTouchTap={()=>{this.toggleDrawer()}}
                onRightIconButtonTouchTap={()=>this.runSearch()}
                onKeyPress={(e)=>this.handleKeyPress(e)}
            />
        );
    }
}

function mapStateToProps(store) {
    return {
        isOpen: store.drawerReducer.isOpen,
        keyword: store.searchReducer.keyword
    }
}
export default connect(mapStateToProps)(MyAppBar);