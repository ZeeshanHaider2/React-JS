import React, { Component } from "react";
import "./App.css";
import Radium from "radium";
import Person from "./Person/Person";
import { inherits } from "util";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Zeeeshan", age: 39 },
      { id: 2, name: "Martin", age: 32 },
      { id: 3, name: "Junghans", age: 85 }
    ],
    otherState: "Persons other state",
    showPersons: false
  };

  clickHandler = () => {
    //console.log("Was clciked!");
    this.setState({
      persons: [
        { name: "Zeeeshan Haider", age: 39 },
        { name: "Martin", age: 35 },
        { name: "Jens Junghans", age: 85 }
      ]
    });
  };
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };
  deletePersonHandler = personIndex => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      curser: "pointer",
      ":hover": {
        //by using Radium
        backgroundColor: "lightgreen",
        color: "black"
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
      style[":hover"] = {
        //by using radium
        backgroundColor: "salmon",
        color: "black"
      };
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }

    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p className={classes.join(" ")}>This is really working!!!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle{" "}
        </button>
        {persons}
      </div>
    );
  }
}

export default Radium(App);
