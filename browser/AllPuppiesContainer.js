import { connect } from 'react-redux';
import AllPuppies from './AllPuppies';
import { loadPuppies, fetchPuppies } from './action-creators';


function mapStateToProps (state) {
  return {
    allPuppies: state.allPuppies || []
  };
}

// const mapDispatchToProps = function (dispatch) {
//   return {
//     onLoadPuppies: function () {
//       dispatch(fetchPuppies())
//     }
//   };
// };

const AllPuppiesContainer = connect(
  mapStateToProps
  //,mapDispatchToProps
)(AllPuppies);

export default AllPuppiesContainer;