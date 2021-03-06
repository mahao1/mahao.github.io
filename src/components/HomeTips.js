import React,{Component} from 'react';
import {connect} from 'react-redux';
import asyncAction from '../middlewave/asyncAction';

class HomeTips extends Component{
  componentDidMount(){
    let url = '/src/data/home_tips.json';
    this.props.getData(url,'ADD_HOME_TIPS');
  }
  componentWillUnmount(){
    this.props.clear();
  }
  render(){
    let {home_tips} = this.props;
    let arr = [];
    for(var item in home_tips){
      arr.push(home_tips[item]);
    }
    return (
      <div className="tips">
        <div className="container">
          {
            arr.map((item,index)=>{
              return (
                <div className="col-md-4 tips-left" key={index}>
                  <h3>{item.title}</h3>
                  <a href="javasctipt:;">
                    <figure className="effect-bubba">
                      <img className="img-responsive" src={item.img} alt=""/>
                      <figcaption>
                        <h4>{item.sub_title}</h4>
                        <p>{item.detail}</p>
                      </figcaption>
                    </figure>
                  </a>
                </div>
              );
            })
          }
          <div className="clearfix"></div>
        </div>
      </div>
    );
  }
}

//负责把store 状态抓取，返回给组件,必须返回值
let mapStateToProps = (state)=>{
  return {
    home_tips: state.homeTips
  }
};

//负责把吧组件的action请求，发给store,必须返回值
let mapDispatchToProps = (dispatch)=>{
  return {
    getData:(url,type)=>{
      dispatch(asyncAction(dispatch,url,type))
    },
    clear:()=>{
      dispatch({
        type:'REMOVE_HOME_TIPS'
      });
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeTips);
