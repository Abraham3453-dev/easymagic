import { createStore, combineReducers } from 'redux';
import sessionReducer from './reducers/sessionReducer';

const rootReducer = combineReducers({
    session: sessionReducer,
});

const AppStore = () => {
    return createStore(rootReducer);
};

export default AppStore;