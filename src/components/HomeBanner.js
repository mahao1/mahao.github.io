import React,{Component} from 'react';
import '../assets/js/responsiveslides.min';

class HomeBanner extends Component{
  componentDidMount(){
    $(function () {
      $("#slider").responsiveSlides({
        auto: true,
        nav: true,
        speed: 500,
        namespace: "callbacks",
        pager: true,
      })
    });
  }
  render(){
    return (
      <div className="banner">
        <div className="container">
          <div  id="top" className="callbacks_container">
            <ul className="rslides" id="slider">
              <li>
                <div className="banner-text">
                  <h3>NBA季前赛</h3>
                  <p>NBA季前赛是各支球队在NBA常规赛季开始前进行的热身赛，为了让各队磨合阵容，熟悉各自球队的打法，确定各队新赛季的比赛阵容、同时也能增进队员、教练员之间的沟通。</p>
                </div>
              </li>
              <li>
                <div className="banner-text">
                  <h3>NBA常规赛</h3>
                  <p>常规赛是每年的10月末至次年的4月中旬NBA30支球队之间进行的轮回赛，每支球队需要参加82场比赛，30支球队一共进行1230场比赛。常规赛结束后，东、西部联盟常规赛战绩排前八位的球队进入季后赛争夺总冠军。</p>
                </div>
              </li>
              <li>
                <div className="banner-text">
                  <h3>NBA季后赛</h3>
                  <p>NBA季后赛指的是在每年4月中旬NBA常规赛结束后，NBA联盟根据各队82场常规赛战绩，按照NBA联盟排名规则分别排出东部西部的前八名之间进行的，最终获胜者获得NBA总冠军的比赛。</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default HomeBanner;