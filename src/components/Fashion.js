import React,{Component} from 'react';
import FashionModel from './FashionModel';

class Fashion extends Component{
  render(){
    return (
      <div className="Fashion">
        {/*banner*/}
        <div className="banner-1">
          <div className="container">
            <h2>FASHION</h2>
          </div>
        </div>
        {/*model*/}
        <FashionModel></FashionModel>
      </div>
    );
  }
}
export default Fashion;