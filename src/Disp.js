import React from 'react'; 
class Disp extends React.Component  {
    constructor(){
        super();
        this.state = {
            value: ''
        }
    }
  render() {
    return (
         
            <span id="displayTxt" contentEditable="true">{this.props.answer}</span>
       
    );
  }
}



export default Disp;
