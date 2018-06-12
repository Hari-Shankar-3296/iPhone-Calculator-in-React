import React from 'react';

class ButtonDiv extends React.Component  {
  
    
 
  
  render() {
    return (<div id ="clickWorker">      
              {ListItems}
            </div>
    );
  }
  
}
const eachButton = ['AC','X2','%','/',7,8,9,'+',4,5,6,'-',1,2,3,'*',0,'.','='];
const ListItems = eachButton.map((arr) =>
        (arr===0) ? <button className="button btnZ" value={arr}>{arr}</button> : 
                  ((arr === 'AC'||arr === 'X2'||arr === '%') ? <button className="button btnDG" value={arr}>{arr}</button> :
                    ( (arr === '/'||arr === '+'||arr === '-'||arr === '*'||arr === '=') ? <button className = "button btnO"  value={arr}> {arr} </button> :    
                     <button className="button btnG" value={arr}>{arr} </button>
                    ) 
                  )
);

// function afterClick(e) {
//   this.setState({value: e.target.value})
//   console.log(this.state.value);
// }


export default ButtonDiv;
