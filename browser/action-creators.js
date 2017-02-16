import {RECEIVE_PUPPIES} from './constants'
import {SELECT_CURRENT_PUPPY} from './constants'
const speechSynthesis = require('speech-synthesis');

export const loadPuppies = function (puppies) {
  return {
    type: RECEIVE_PUPPIES,
    receivedPuppies: puppies
  };
};

export const loadPuppy = function (puppy) {
  return {
    type: SELECT_CURRENT_PUPPY,
    currentPuppy: puppy
  };
};

export const fetchPuppies = function () {
  return function (dispatch) {
    fetch('/api/puppies')
    .then(function (res) {
      return res.json();
    })
    .then(function (puppies) {
      const action = loadPuppies(puppies);
      dispatch(action);
    })
    .catch(function (err) {
      console.error(err)
    });
  };
};

export const fetchPuppy = function (puppyId) {
  return function (dispatch) {
  	fetch(`/api/puppies/${puppyId}`)
    .then(function (res) {
      return res.json();
    })
    .then(function (puppy) {
      speechSynthesis(puppy.name, 'en-IN');
      const action = loadPuppy(puppy);
      dispatch(action);
    })
    .catch(function (err) {
      console.error(err)
    });

  };
};