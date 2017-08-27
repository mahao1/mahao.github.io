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
