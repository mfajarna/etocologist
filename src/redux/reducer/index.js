import {combineReducers} from 'redux';
import { photoReducer } from './auth';
import { globalReducer } from './global';
import { polianakReducer } from './polianak';
import { poliibuReducer } from './poliibu';
import { profileReducer } from './profile';
import { uploadPhotoUsgReducer } from './photo';

const reducer = combineReducers({
    photoReducer,
    globalReducer,
    profileReducer,
    poliibuReducer,
    polianakReducer,
    uploadPhotoUsgReducer
})

export default reducer;