import React,{Component} from 'react';
import StylesModel from './StylesModel';
import StylesStyle from './StylesStyle';

class Styles extends Component{
  render(){
    return (
      <div className="Styles">
        {/*banner*/}
        <div className="banner-1">
          <div className="container">
            <h2>STYLE</h2>
          </div>
        </div>
        {/*model*/}
        <StylesModel></StylesModel>
        {/*style*/}
        <StylesStyle></StylesStyle>
      </div>
    );
  }
}
export default Styles;