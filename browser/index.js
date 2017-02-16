'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AllPuppies from './AllPuppies';
import AllPuppiesContainer from './AllPuppiesContainer';
import SinglePuppyContainer from './SinglePuppyContainer';
import store from './store'
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
 import {fetchPuppies, fetchPuppy } from './action-creators';

const onPuppiesEnter = function() {
	store.dispatch(fetchPuppies())
}

const onPuppyEnter = function(nextRouterState) {
	const puppyId = nextRouterState.params.puppyId
	store.dispatch(fetchPuppy(puppyId))
}


function Root() {
	return (
	<Provider store={store}>
    	<Router history={hashHistory}>
      		<Route path="/">
  				<Route path="puppies" component={AllPuppiesContainer} onEnter={onPuppiesEnter} />
  				<Route path="puppies/:puppyId" component={SinglePuppyContainer} onEnter={onPuppyEnter} />
  				<IndexRoute component={AllPuppiesContainer} onEnter={onPuppiesEnter}  />
			</Route>
    	</Router>
  	</Provider>
  	)
}


ReactDOM.render(
  <Root />,
  document.getElementById('app')
);









// ReactDOM.render(
//   <div className="container flexbox-container">
//     <div className="jumbotron">
//     <Provider store={store} >
//       <AllPuppiesContainer/>
//     </Provider>
//     </div>
//   </div>,
//   document.getElementById('app')
// );