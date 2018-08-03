import { combineReducers } from 'redux';

// ------- Reducer Imports ------- //

import { thingReducer as things } from './thing';
import { apiReducer as api } from './api';

const rootReducer = combineReducers({
  things,
  api
});

export default rootReducer;

// export default () => configureStore(rootReducer, rootSaga);
