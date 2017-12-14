import { combineReducers } from 'redux';
import PeopleReducer from './reducer_people';
import BoudoirReducer from './reducer_boudoir';
import DiaryReducer from './reducer_diary';
import ActiveImage from './reducer_active_image';

const rootReducer = combineReducers({
  peopleImages: PeopleReducer,
  boudoirImages: BoudoirReducer,
  diaryImages: DiaryReducer,
  activeImage: ActiveImage
});

export default rootReducer;
