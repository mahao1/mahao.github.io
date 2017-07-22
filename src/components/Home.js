import React,{Component} from 'react';
import {Link, hashHistory} from 'react-router';
import HomeBanner from './HomeBanner';
import HomeWelcome from './HomeWelcome';
import HomeTips from './HomeTips';
import HomeBecome from './HomeBecome';
import HomeModel from './HomeModel';

class Home extends Component{
  componentDidMount(){
    hashHistory.replace({pathname:'home'});
  }
  render(){
    return (
      <div className="Home">
        {/*banner*/}
        <HomeBanner></HomeBanner>
        {/*banner*/}
        {/*welcome*/}
        <HomeWelcome></HomeWelcome>
        {/*welcome*/}
        {/*tips*/}
        <HomeTips></HomeTips>
        {/*tips*/}
        {/*become*/}
        <HomeBecome></HomeBecome>
        {/*become*/}
        {/*model*/}
        <HomeModel></HomeModel>
        {/*model*/}
      </div>
    );
  }
}
export default Home;