import React,{Component} from 'react';
import {Link} from 'react-router';

class Header extends Component{
  render(){
    return (
      <div className="header">
        <nav className="navbar navbar-default" role="navigation">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          {/*navbar-header*/}
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><Link to="home" activeClassName="active">Home</Link></li>
              <li><Link to="about" activeClassName="active">About</Link></li>
              <li><Link to="fashion" activeClassName="active">Fashion</Link></li>
              <li><Link to="styles" activeClassName="active">Styles</Link></li>
              <li><Link to="contact" activeClassName="active">Contact</Link></li>
            </ul>
          </div>
          {/*navbar-collapse*/}
        </nav>
        {/*header-bottom*/}
        <div className="header-bottom">
          <div className="container">
            <div className="logo">
              <h1><a href="index.html">BASKETBALL</a></h1>
            </div>
            <div className="ent-r">
              <input type="text" placeholder="Enter your email " required=""/>
              <div className="bt">
                <a href="#"><span className="glyphicon glyphicon-plus-sign " aria-hidden="true"></span></a>
              </div>
              <div className="clearfix"></div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
        {/*header-bottom*/}
      </div>
    );
  }
}
export default Header;
