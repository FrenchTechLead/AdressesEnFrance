import {combineReducers} from 'redux';
import drawerReducer from "./DrawerReducer";
import searchReducer from './SearchReducers';
import snackBarReducer from './SnackBarReducers';
import viewReducer from './ViewReducer';

export default combineReducers({
    drawerReducer,
    searchReducer,
    snackBarReducer,
    viewReducer
})