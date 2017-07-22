import React,{Component} from 'react';
import {connect} from 'react-redux';
import asyncAction from '../middlewave/asyncAction';

class AboutAbout extends Component{
  componentDidMount(){
    let url = '/src/data/about_about.json';
    this.props.getData(url,'ADD_ABOUT_ABOUT');
  }
  componentWillUnmount(){
    this.props.clear();
  }
  render(){
    let {about_about} = this.props;
    let arr = [];
    for(var i in about_about){
      arr.push(about_about[i])
    }
    return (
      <div className="about">
        {/*<div className="container">
          <h3>LIFESTYLE</h3>
          <div className="col-md-5 about-left">
            <img className="img-responsive" src="/src/assets/images/8.jpg" alt=""/>
          </div>
          <div className="col-md-7 about-right">
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum </p>
            <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum</p>
          </div>
          <div className="clearfix"></div>
          <div className="abt-btm">
            <div className="col-md-7 ab-lft">
              <h3>OUR AGENCY ALL OVER THE WORLD</h3>
              <h5>Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</h5>
              <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker It was popularised in the 1960s with the release of Letraset sheets including versions of Lorem Ipsum.</p>
            </div>
            <div className="col-md-5 ab-rgt">
              <h3>PRESS</h3>
              <p><span className="bec">1 . </span>Lorem Ipsum available, but the  have suffered alteration in some form, by injected humour, or randomised words which don't look. </p>
              <p><span className="bec">2 . </span>Lorem Ipsum available, but the  have suffered alteration in some form, by injected humour, or randomised words which don't look. </p>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>*/}
        {
          arr.map((item,index)=>{
            return (
              <div className="container" key={index}>
                <h3>{item.title}</h3>
                <div className="col-md-5 about-left">
                  <img className="img-responsive" src={item.img} alt=""/>
                </div>
                <div className="col-md-7 about-right">
                  <p>{item.paragraph_one}</p>
                  <p>{item.paragraph_two}</p>
                </div>
                <div className="clearfix"></div>
                <div className="abt-btm">
                  <div className="col-md-7 ab-lft">
                    <h3>{item.ab_lft.title}</h3>
                    <h5>{item.ab_lft.detail}</h5>
                    <p dangerouslySetInnerHTML={{__html:item.ab_lft.content}}></p>
                  </div>
                  <div className="col-md-5 ab-rgt">
                    <h3>{item.ab_rgt.title}</h3>
                    {
                      item.ab_rgt.des.map((item,index)=>{
                        return (
                          <p key={index}>
                            <span className="bec">{item.id} . </span>
                            {item.content}
                          </p>
                        );
                      })
                    }
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }
}
let mapStateToProps =(state)=>{
  return {
    about_about: state.aboutAbout
  }
};
let mapDispatchToProps = (dispatch)=>{
  return {
    getData: (url,type)=>{
      dispatch(asyncAction(dispatch,url,type))
    },
    clear: ()=>{
      dispatch({
        type:'REMOVE_ABOUT_ABOUT'
      })
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutAbout);