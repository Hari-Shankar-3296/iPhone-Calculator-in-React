import React ,{Component} from 'react';
import ButtonDiv from './buttonDiv';
import Disp from './Disp';
import { createStore } from 'redux';

const hist = createStore(continer);

function continer(sta = [] , action) {
  switch(action.type){
    case 'newValue':
      return [...sta, action.text];
    default:
      return sta;
  }
}
class App extends React.Component {
  constructor(){
    super();
    
    this.state = {
      value: ''
    }
    this.afterClick=this.afterClick.bind(this);
  }
  afterClick(e) {
      if(e.target.value === '='){
        this.setState({value: eval(this.state.value)})
        hist.dispatch({ type : 'newValue' , text: this.state.value });
      }
      else if(e.target.nodeName==='SPAN'){
        this.setState({value: e.target.textContent});
        
      }
      else if(e.target.value === 'AC'){
        this.setState({value: ''})
      }
      else if(e.target.nodeName === 'BUTTON'){
          console.log('clicking');
          this.setState({value: this.state.value + e.target.value});
      }
     
    }
  
  
  render() {
    return (
      <div onClick={this.afterClick.bind(this)}>
      
        <div id="phone">
          <div id="sensor"></div>
          <div id="selfieCam"></div>
          <div id="speaker"></div> 
          <div id="calculator" >
              
              <div id="display"><Disp onChange={this.afterclick} answer={this.state.value}/></div>
              <ButtonDiv />
              

          </div> 
        
            <button id="home"></button>
        
        </div>
        <h3 ><font color="white">History</font></h3> 
        {hist.getState().map(n => <span color='white'> {n} </span>)}
      </div>
    );
  }
}





 
export default App;
