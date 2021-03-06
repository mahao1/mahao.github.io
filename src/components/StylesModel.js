import React,{Component} from 'react';
import {connect} from 'react-redux';
import asyncAction from '../middlewave/asyncAction';

class StylesModel extends Component{
  componentDidMount(){
    let url = '/src/data/styles_model.json';
    this.props.getData(url,'ADD_STYLES_MODEL');
  }
  componentWillUnmount(){
    this.props.clear();
  }
  render(){
    let {styles_model} = this.props;
    let arr = [];
    for(var i in styles_model){
      arr.push(styles_model[i])
    }
    return (
      <div className="model"> 
        {
          arr.map((item,index)=>{
            return (
              <div className="container" key={index}>
                {
                  item.styles_model.map((item,index)=>{
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
    styles_model: state.stylesModel
  }
};

let mapDispatchToProps = (dispatch)=>{
  return {
    getData: (url,type)=>{
      dispatch(asyncAction(dispatch,url,type));
    },
    clear: ()=>{
      dispatch({
        type:'REMOVE_STYLES_MODEL'
      })
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StylesModel);
