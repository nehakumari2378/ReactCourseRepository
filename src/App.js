import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';


//*******************Function based component*********************
const app = props => {

  const [personsState, setPersonsState]= useState({
    person: [
      {name: 'Rai', age: 28},
      {name:'Neha', age:27}
    ]
  });
  
  const [otherState, setOtherState] = useState('Some other state');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    setPersonsState({
      person: [
        {name: 'Rai2', age: 28},
        {name:'Neha', age:27}
      ]
    });
  };

    return (
      <div className="App">
        <h1>Hi I am react app</h1>
        {/* <Person name="Neha" age="27"/>
        <Person name="Rai" age="28">Hobbies: Reading</Person> */}

        <button onClick={switchNameHandler}>Switch name</button>
        <Person name={personsState.person[0].name} age={personsState.person[0].age}/>
        <Person name={personsState.person[1].name} age={personsState.person[1].age}>Hobbies: Reading</Person>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now'));
  
}

export default app;





//*****************Class based component******************
// class App extends Component {

//   state= {
//     person: [
//       {name: 'Rai', age: 28},
//       {name:'Neha', age:27}
//     ]
//   }

//   switchNameHandler = () => {
//     //console.log('Was clicked!!')
//     //DOn't do this:  this.state.person[0].name = 'Rai2';
//     this.setState({
//       person: [
//         {name: 'Rai2', age: 28},
//         {name:'Neha', age:27}
//       ]
//     })
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>Hi I am react app</h1>
//         {/* <Person name="Neha" age="27"/>
//         <Person name="Rai" age="28">Hobbies: Reading</Person> */}

//         <button onClick={this.switchNameHandler}>Switch name</button>
//         <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
//         <Person name={this.state.person[1].name} age={this.state.person[1].age}>Hobbies: Reading</Person>
//       </div>
//     );
//     //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now'));
//   }
// }

// export default App;
