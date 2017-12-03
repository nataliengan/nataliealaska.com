import { combineReducers } from 'redux';
import peopleReducer from './reducer_people';
import boudoirReducer from './reducer_boudoir';

const rootReducer = combineReducers({
  peopleImages: peopleReducer,
  boudoirImages: boudoirReducer,
  diaryImages: diaryReducer,
  selectedImage: selectedImageReducer
});

export default rootReducer;
