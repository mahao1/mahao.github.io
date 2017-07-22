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
        {/*<div className="container">
          <h3>LOOK THROUGH OUR FASHION</h3>
          <div className="col-md-4 tips-left">
            <a href="jacascript:;">
              <figure className="effect-bubba">
                <img className="img-responsive" src="/src/assets/images/14.jpg" alt=""/>
                <figcaption>
                  <h4>Lorem Ipsum </h4>
                  <p>There are many variations of passages of Lorem Ipsum available.</p>
                </figcaption>
              </figure>
            </a>
          </div>
          <div className="col-md-4 tips-left">
            <a href="jacascript:;">
              <figure className="effect-bubba">
                <img className="img-responsive" src="/src/assets/images/15.jpg" alt=""/>
                <figcaption>
                  <h4>The majority</h4>
                  <p>There are many variations of passages of Lorem Ipsum available.</p>
                </figcaption>
              </figure>
            </a>
          </div>
          <div className="col-md-4 tips-left">
            <a href="jacascript:;">
              <figure className="effect-bubba">
                <img className="img-responsive" src="/src/assets/images/17.jpg" alt=""/>
                <figcaption>
                  <h4>Many desktop</h4>
                  <p>There are many variations of passages of Lorem Ipsum available.</p>
                </figcaption>
              </figure>
            </a>
          </div>
          <div className="clearfix"> </div>
          <div className="f-tp">
            <img className="img-responsive" src="/src/assets/images/3.jpg" alt=""/>
          </div>
          <div className="f-btm">
            <div className="col-md-3 tips-left1">
              <a href="jacascript:;">
                <figure className="effect-bubba">
                  <img className="img-responsive" src="/src/assets/images/4.jpg" alt=""/>
                  <figcaption>
                    <h4>Alessandra</h4>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </figcaption>
                </figure>
              </a>
            </div>
            <div className="col-md-3 tips-left1">
              <a href="jacascript:;">
                <figure className="effect-bubba">
                  <img className="img-responsive" src="/src/assets/images/5.jpg" alt=""/>
                  <figcaption>
                    <h4>Candice</h4>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </figcaption>
                </figure>
              </a>
            </div>
            <div className="col-md-3 tips-left1">
              <a href="jacascript:;">
                <figure className="effect-bubba">
                  <img className="img-responsive" src="/src/assets/images/6.jpg" alt=""/>
                  <figcaption>
                    <h4>Gisele</h4>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </figcaption>
                </figure>
              </a>
            </div>
            <div className="col-md-3 tips-left1">
              <a href="jacascript:;">
                <figure className="effect-bubba">
                  <img className="img-responsive" src="/src/assets/images/7.jpg" alt=""/>
                  <figcaption>
                    <h4>Crawford</h4>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </figcaption>
                </figure>
              </a>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>*/}
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