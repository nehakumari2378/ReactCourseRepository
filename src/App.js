import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


//*****************Class based component******************
class App extends Component {

  state= {
    person: [
      {name: 'Rai', age: 28},
      {name:'Neha', age:27}
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked!!')
    //DOn't do this:  this.state.person[0].name = 'Rai2';
    this.setState({
      person: [
        {name: newName, age: 28},
        {name:'Neha', age:27}
      ]
    })
  }

  onChangedHandler = (event) => {
    this.setState({
      person: [
        {name: event.target.value, age: 28},
        {name:'Neha', age:27}
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi I am react app</h1>
        {/* <Person name="Neha" age="27"/>
        <Person name="Rai" age="28">Hobbies: Reading</Person> */}
        
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Switch name</button>

        { this.state.showPersons === true ?
          <div>
            <Person 
              name={this.state.person[0].name} 
              age={this.state.person[0].age}
              changed={this.onChangedHandler}/>
            <Person 
              name={this.state.person[1].name} 
              age={this.state.person[1].age} 
              click={this.switchNameHandler.bind(this, 'Rai2!!')}>Hobbies: Reading</Person>
          </div> : null
          }
        
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now'));
  }
}

export default App;



//*******************Function based component*********************
// const app = props => {

//   const [personsState, setPersonsState]= useState({
//     person: [
//       {name: 'Rai', age: 28},
//       {name:'Neha', age:27}
//     ]
//   });
  
//   const [otherState, setOtherState] = useState('Some other state');

//   console.log(personsState, otherState);

//   const switchNameHandler = () => {
//     setPersonsState({
//       person: [
//         {name: 'Rai2', age: 28},
//         {name:'Neha', age:27}
//       ]
//     });
//   };

//     return (
//       <div className="App">
//         <h1>Hi I am react app</h1>
//         {/* <Person name="Neha" age="27"/>
//         <Person name="Rai" age="28">Hobbies: Reading</Person> */}

//         <button onClick={switchNameHandler}>Switch name</button>
//         <Person name={personsState.person[0].name} age={personsState.person[0].age}/>
//         <Person name={personsState.person[1].name} age={personsState.person[1].age}>Hobbies: Reading</Person>
//       </div>
//     );
//     //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now'));
  
// }

// export default app;




