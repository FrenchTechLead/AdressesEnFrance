import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import {connect} from 'react-redux';


class MyDrawer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            drawerWidth: window.innerWidth - 60,
        };
        this.updateWidth = this.updateWidth.bind(this);
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateWidth);
    }

    updateWidth() {
        this.setState({drawerWidth: window.innerWidth - 60});
    }

    render() {
        return (
            <Drawer
                width={this.state.drawerWidth}
                openSecondary={this.props.openSecondary}
                open={this.props.isOpen}
            >


                <List>
                    <ListItem
                        primaryText="Développée par Akram MECHERI"
                    />
                    <ListItem>
                    <p>J'ai développé cette app un weekend juste afin d'apprendre à utiliser React avec Redux et Cordova, le résultat n'est pas mal du tout.</p>
                    </ListItem>
                    <ListItem>
                        <p>Cette Appli utilise google static maps et la base d'adresses national disponible à l'adresse suivante: <code>https://api-adresse.data.gouv.fr</code></p>
                    </ListItem>
                    <ListItem >
                        <p>Le code source de cette app est disponible sur mon Github <code>@Meshredded</code></p>
                    </ListItem>
                </List>

            </Drawer>
        );
    }
}

function mapStateToProps(store) {
    return {isOpen: store.drawerReducer.isOpen,openSecondary:store.drawerReducer.openSecondary}
}

export default connect(mapStateToProps)(MyDrawer);