import React,{Component} from 'react';
import ContactContact from './ContactContact';

class Contact extends Component{
  render(){
    return (
      <div className="Contact">
        {/*banner*/}
        <div className="banner-1">
          <div className="container">
            <h2>CONTACT</h2>
          </div>
        </div>
        {/*contact*/}
        <ContactContact></ContactContact>
      </div>
    );
  }
}
export default Contact;