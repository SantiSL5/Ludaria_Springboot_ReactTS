import { combineReducers } from 'redux';

const fetchUserReducer = (state = null, action: any) => {
    switch (action.type) {
        case 'SAVE_USER':
            return action.payload;
        default:
            return state;
    }
};


const rootReducer = combineReducers({
    user: fetchUserReducer,
});

export default rootReducer;