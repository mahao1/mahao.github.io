import React,{Component} from 'react';
import {connect} from 'react-redux';
import asyncAction from '../middlewave/asyncAction';

class FashionModel extends Component{
  componentDidMount(){
    let url = '/src/data/fashion_model.json';
    this.props.getData(url,'ADD_FASHION_MODEL');
  }
  componentWillUnmount(){
    this.props.clear();
  }
  render(){
    let {fashion_model} = this.props;
    let arr = [];
    for(var i in fashion_model){
      arr.push(fashion_model[i]);
    }
    return (
      <div className="fashion">
        {
          arr.map((item,index)=>{
            return (
              <div className="container" key={index}>
                <h3>{item.title}</h3>
                {
                  item.model_top.map((item,index)=>{
                    return (
                      <div className="col-md-4 tips-left" key={index}>
                        <a href="jacascript:;">
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
                <div className="clearfix"> </div>
                <div className="f-tp">
                  <img className="img-responsive" src={item.img} alt=""/>
                </div>
                <div className="f-btm">
                  {
                    item.model_bottom.map((item,index)=>{
                      return (
                        <div className="col-md-3 tips-left1" key={index}>
                          <a href="jacascript:;">
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
    fashion_model: state.fashionModel
  }
};

let mapDispatchToProps = (dispatch)=>{
  return {
    getData: (url,type)=>{
      dispatch(asyncAction(dispatch,url,type))
    },
    clear: ()=>{
      dispatch({
        type: 'REMOVE_FASHION_MODEL'
      })
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FashionModel);
