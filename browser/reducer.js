import {RECEIVE_PUPPIES} from './constants'
import {SELECT_CURRENT_PUPPY} from './constants'
import { combineReducers } from 'redux';






function allPuppiesReducer(state = [], action) {
	switch (action.type) {
		case RECEIVE_PUPPIES: return action.receivedPuppies;
		default: 
			return state;
	}
}

function selectedPuppyReducer(state = {}, action) {
	switch (action.type) {
		case SELECT_CURRENT_PUPPY: return action.currentPuppy;
		default: 
			return state;
	}
}


export default combineReducers({
  allPuppies: allPuppiesReducer,
  currentPuppy: selectedPuppyReducer
});

