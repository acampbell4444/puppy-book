import React from 'react';
import { Link } from 'react-router'

export default class AllPuppies extends React.Component {

  // componentDidMount () {
  //   console.log('this',this)
  //   this.props.onLoadPuppies()
  // }
 
 render() {
    const allPuppies = this.props.allPuppies
    return (
      <div className="container flexbox-container">
        <div className="jumbotron">
          <ul className='list-unstyled'>   
             {
              allPuppies.map(puppy=><li key={puppy.id}><Link to={`puppies/${puppy.id}`}>{puppy.name}</Link></li>)

             }
          </ul>
        </div>
      </div>
    )
  }
  
}



    // <div>
    //     <ul className="list-unstyled">
    //       <li><a href="#">PUPPY NAME GOES HERE</a></li>
    //       <li><a href="#">PUPPY NAME GOES HERE</a></li>
    //       <li><a href="#">PUPPY NAME GOES HERE</a></li>
    //     </ul>
    //   </div>