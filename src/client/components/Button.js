import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
      super(props);
    }
    
    render() {
      const {text} = this.props;
      
      return (
        <div className="View">
          <a href="#" className={`Button`}>
            <span>{text}</span>
          </a>
        </div>
      )
    }
  }

  export default Button;