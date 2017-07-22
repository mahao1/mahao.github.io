import React,{Component} from 'react';
import {connect} from 'react-redux';
import asyncAction from '../middlewave/asyncAction';

class StylesStyle extends Component{
  componentDidMount(){
    let url = '/src/data/styles_style.json';
    this.props.getData(url,'ADD_STYLES_STYLE');
  }
  componentWillUnmount(){
    this.props.clear();
  }
  render(){
    let {styles_style} = this.props;
    let arr = [];
    for(var i in styles_style) {
      arr.push(styles_style[i]);
    }
    return (
      <div className="style">
        {/*<div className="container">
          <div className="col-md-7 style-left">
            <h3>THE MOST POPULAR IN THE WORLD OF STYLE</h3>
            <h5>LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ENCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA COMM. </h5>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum </p>
          </div>
          <div className="col-md-5 style-right">
            <h3>OFFERING GREAT IDEAS AND STYLES</h3>
            <ul>
              <li><a href="javascript:;"><span></span>Entire soul, the release simply. </a></li>
              <li><a href="javascript:;"><span></span>I enjoy with my whole the relea.</a></li>
              <li><a href="javascript:;"><span></span>Lorem Ipsum is the release  simp.</a></li>
              <li><a href="javascript:;"><span></span>Sweet mornings of the release.  </a></li>
              <li><a href="javascript:;"><span></span>Entire soul, the release simp.</a></li>
              <li><a href="javascript:;"><span></span>I enjoy with my whole the rel. </a></li>
            </ul>
          </div>
          <div className="clearfix"></div>
        </div>*/}
        {
          arr.map((item,index)=>{
            return (
              <div className="container" key={index}>
                <div className="col-md-7 style-left">
                  <h3>{item.title_l}</h3>
                  <h5>{item.detail}</h5>
                  <p dangerouslySetInnerHTML={{__html:item.content}}></p>
                </div>
                <div className="col-md-5 style-right">
                  <h3>{item.title_r}</h3>
                  <ul>
                    {
                      item.style_list.map((item,index)=>{
                        return (
                          <li key={index}>
                            <a href="javascript:;">
                              <span></span>
                              {item.title}
                            </a>
                          </li>
                        );
                      })
                    }
                  </ul>
                </div>
                <div className="clearfix"></div>
              </div>
            );
          })
        }
      </div>
    );
  }
}
let mapStateToProps = (state)=>{
  return {
    styles_style: state.stylesStyle
  }
};
let mapDispatchToProps = (dispatch)=>{
  return {
    getData: (url,type)=>{
      dispatch(asyncAction(dispatch,url,type))
    },
    clear: ()=>{
      dispatch({
        type:'REMOVE_STYLES_STYLE'
      })
    }
    
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StylesStyle);