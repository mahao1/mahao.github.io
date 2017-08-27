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
