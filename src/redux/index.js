import { combineReducers } from 'redux';

// ------- Reducer Imports ------- //

import { thingReducer as things } from './ThingRedux';
import { apiReducer as api } from './ApiRedux';

const rootReducer = combineReducers({
  things,
  api
});

export default rootReducer;

// export default () => configureStore(rootReducer, rootSaga);
