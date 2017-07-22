import React,{Component} from 'react';

class Footer extends Component{
  render(){
    return (
      <div className="footer">
        <div className="container">
          <div className="footer-main">
            {/*<div className="col-md-4 ftr-gd">
              <h3>Follow Us</h3>
              <ul>
                <li><a href="#" className="fa"> </a></li>
                <li><a href="#" className="tw"> </a></li>
                <li><a href="#" className="g"> </a></li>
              </ul>
            </div>*/}
            <div className="col-md-12 ftr-gd">
              <h3>Newsletter</h3>
              <input type="text" placeholder="Enter Your email" onFocus={this.value = ''} />
              <input type="submit" value="Subscribe"/>
            </div>
            {/*<div className="col-md-4 ftr-gd">
              <h3>Address</h3>
              <address>
                795 Folsom Ave, Suite 600<br/>
                San Francisco, CA 94107<br/>
                <abbr title="Phone">P :</abbr> (123) 456-7890
              </address>
            </div>*/}
            <div className="clearfix"> </div>
          </div>
          <div className="copyright">
            <p>© 2017 Trendency . All rights reserved | Design by  <a href="http://w3layouts.com/" target="_blank">W3layouts</a></p>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;