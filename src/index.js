import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Provider} from 'react-redux';
import store from './store/store';

injectTapEventPlugin();


const MyApp = () => (
    <Provider store={store}>
        <MuiThemeProvider >
            <App />
        </MuiThemeProvider>
    </Provider>
);
ReactDOM.render(
    <MyApp />,
    document.getElementById('root')
);