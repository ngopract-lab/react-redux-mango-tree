import { combineReducers } from 'redux';

import personReducer from './personReducer';
import treeReducer from './treeReducer';

export default combineReducers({
  tree: treeReducer,
  person: personReducer,
});
