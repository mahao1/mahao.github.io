import React,{Component} from 'react';
import {connect} from 'react-redux';

import Header from './Header';
import Footer from './Footer';
import Loading from './Loading';

class App extends Component{
  render(){
    let {bLoading} = this.props;
    return (
      <div title="App">
        {bLoading?<Loading/>:''}
        <Header></Header>
        {this.props.children}
        <Footer></Footer>
      </div>
    );
  }
}
//负责把store 状态抓取，返回给组件,必须返回值
let mapStateToProps = (state)=>{
  return {
    bLoading: state.bLoading
  }
};

//负责把吧组件的action请求，发给store,必须返回值
let mapDispatchToProps = (dispatch)=>{
  return {
    showLoading:()=>{
      dispatch({
        type:'SHOW_LOADING'
      })
    },
    hideLoading:()=>{
      dispatch({
        type:'HIDE_LOADING'
      })
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);