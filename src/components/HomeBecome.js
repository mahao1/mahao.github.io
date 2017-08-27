import React,{Component} from 'react';
import {connect} from 'react-redux';
import asyncAction from '../middlewave/asyncAction';

class HomeBecome extends Component{
  componentDidMount(){
    let url = '/src/data/home_become.json';
    this.props.getData(url,'ADD_HOME_BECOME');
  }
  componentWillUnmount(){
    this.props.clear();
  }
  render(){
    let {home_become} = this.props;
    let arr = [];
    for(var item in home_become){
      arr.push(home_become[item]);
    }
    return (
      <div className="become">
        {
          arr.map((item,index)=>{
            return (
              <div className="container" key={index}>
                <h3>{item.title}</h3>
                <div className="col-md-7 become-left">
                {item.content.map((item,index)=>{
                  return (
                    <p key={index}>
                      <span className="bec">{item.id} . </span>
                      {item.become}
                    </p>
                  );
                })}
                </div>
                
                <div className="col-md-5 become-right">
                  <img className="img-responsive" src={item.img} alt=""/>
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
//负责把store 状态抓取，返回给组件,必须返回值
let mapStateToProps = (state)=>{
  return {
    home_become: state.homeBecome
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
        type:'REMOVE_HOME_BECOME'
      });
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeBecome);
