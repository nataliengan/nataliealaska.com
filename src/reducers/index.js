import { combineReducers } from 'redux';
import peopleReducer from './reducer_people';
import boudoirReducer from './reducer_boudoir';
import diaryReducer from './reducer_diary';
import selectedImageReducer from './reducer_selected_image';

const rootReducer = combineReducers({
  peopleImages: peopleReducer,
  boudoirImages: boudoirReducer,
  diaryImages: diaryReducer,
  selectedImage: selectedImageReducer
});

export default rootReducer;
