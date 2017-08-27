import React,{Component} from 'react';
import {connect} from 'react-redux';
import asyncAction from '../middlewave/asyncAction';

class HomeWelcome extends Component{
  componentDidMount(){
    let url = '/src/data/home_welcome.json';
    this.props.getData(url,'ADD_HOME_WELCOME');
  }
  componentWillUnmount(){
    this.props.clear();
  }
  render(){
    // console.log(this.props.home_welcome);
    let {home_welcome} = this.props;
    let arr = [];
    for(var item in home_welcome){
      arr.push(home_welcome[item]);
    }
    return (
      <div className="welcome">
        {
          arr.map((item,index)=>{
            return (
              <div className="container" key={index}>
                <h2>{item.title}</h2>
                <h4>{item.sub_title}</h4>
                <p>{item.detail}</p>
              </div>
            );
          })
        }
      </div>
    );
  }
}

//负责把store 状态抓取，返回给组件,必须返回值
let mapStateToProps = (state)=>{
  return {
    home_welcome: state.homeWelcome
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
        type:'REMOVE_HOME_WELCOME'
      });
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeWelcome);

