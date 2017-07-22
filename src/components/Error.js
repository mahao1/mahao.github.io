import React from 'react';
import '../assets/css/error.css';

class Error extends React.Component{
  render(){
    return (
      <div className="error">
        您访问的页面不存在！
      </div>
    );
  }
}
export default Error;