import React,{Component} from 'react';
import AboutAbout from './AboutAbout';

class About extends Component{
  render(){
    return (
      <div className="About">
        {/*banner*/}
        <div className="banner-1">
          <div className="container">
            <h2>ABOUT</h2>
          </div>
        </div>
        {/*about*/}
        <AboutAbout></AboutAbout>
      </div>
    );
  }
}
export default About;