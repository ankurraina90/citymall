import { combineReducers } from 'redux';
import * as Cats from './actions';

const rootReducer = combineReducers({ cats: Cats.ReduceCats });

export { rootReducer, Cats };
