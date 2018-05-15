import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import dashboardReducer from '../components/dashboard';
import loginReducer from '../components/login';
import loadingReducer from './middleware/loadingReducer';

export default combineReducers({
    loading: loadingReducer,
    routing: routerReducer,
    dashboard: dashboardReducer,
    user: loginReducer,
    form: formReducer
});
