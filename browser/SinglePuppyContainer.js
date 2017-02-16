import { connect } from 'react-redux';
import SinglePuppy from './SinglePuppy';
import { fetchPuppy} from './action-creators';


function mapStateToProps (state) {
  return {
    currentPuppy: state.currentPuppy || {}
  };
}

// const mapDispatchToProps = function (dispatch, oldProps) {
//   return {
//     onLoadPuppy: function () {
//     	const puppyId = oldProps.routeParams.puppyId
//       	dispatch(fetchPuppy(puppyId))
//     }
//   };
// };

const SinglePuppyContainer = connect(
  mapStateToProps
  // ,mapDispatchToProps
)(SinglePuppy);

export default SinglePuppyContainer;