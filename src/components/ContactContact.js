import React,{Component} from 'react';

class ContactContact extends Component{
  render(){
    return (
      <div className="contact">
        <div className="container">
          <div className="contact-main">
            <div className="contact-top">
              <p>Do you want to know more information about basketball?Please contact us.</p>
            </div>
            <div className="map">
              <img src="http://pic.68ps.com/down/UploadFile/20160414/sc160414_1a.jpg" alt="" style={{width:100+"%"}}/>
            </div>
            <div className="contact-bott">
              <form>
                <input type="text" placeholder="Name" onFocus={this.value = ''}/>
                <input type="text" placeholder="Email" className="email" onFocus={this.value = ''}/>
                <textarea onFocus={this.value = ''} placeholder="Message"></textarea>
                <input type="submit" value="Send"/>
              </form>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ContactContact;