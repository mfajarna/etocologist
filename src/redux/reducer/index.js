import {combineReducers} from 'redux';
import { photoReducer } from './auth';
import { globalReducer } from './global';
import { poliibuReducer } from './poliibu';
import { profileReducer } from './profile';

const reducer = combineReducers({
    photoReducer,
    globalReducer,
    profileReducer,
    poliibuReducer
})

export default reducer;