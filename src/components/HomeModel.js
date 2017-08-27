import React,{Component} from 'react';
import {connect} from 'react-redux';
import asyncAction from '../middlewave/asyncAction';

class HomeModel extends Component{
  componentDidMount(){
    let url = '/src/data/home_model.json';
    this.props.getData(url,'ADD_HOME_MODEL');
  }
  componentWillUnmount(){
    this.props.clear();
  }
  render(){
    let {home_model} = this.props;
    let arr = [];
    for(var i in home_model){
      arr.push(home_model[i]);
    }
    return (
      <div className="model">
        {
          arr.map((item,index)=>{
            return (
              <div className="container" key={index}>
                <h3>{item.title}</h3>
                {
                  item.model.map((item,index)=>{
                    return (
                      <div className="col-md-3 tips-left1" key={index}>
                        <a href="javasctipt:;">
                          <figure className="effect-bubba">
                            <img className="img-responsive" src={item.img} alt=""/>
                            <figcaption>
                              <h4>{item.title}</h4>
                              <p>{item.detail}</p>
                            </figcaption>
                          </figure>
                        </a>
                      </div>
                    );
                  })
                }
              </div>
            );
          })
        }
        <div className="clearfix"></div>
      </div>
    );
  }
}

let mapStateToProps = (state)=>{
  return {
    home_model : state.homeModel
  }
};

let mapDispatchToProps = (dispatch)=>{
  return {
    getData: (url,type)=>{
      dispatch(asyncAction(dispatch,url,type))
    },
    clear:()=>{
      dispatch({
        type:'REMOVE_HOME_MODEL'
      });
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeModel);
