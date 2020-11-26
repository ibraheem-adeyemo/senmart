import { combineReducers } from 'redux';
import { loginReducer } from '../../Stores/Reducers/Login.reducer';

export const rootReducer = combineReducers({
    loginReducer
})

export type ApplicationState = ReturnType<typeof rootReducer>