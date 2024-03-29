import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id:uuid.v4(),
        title: "Take out the trash",
        completed: false
      },
      {
        id:uuid.v4(),
        title: "Dinner with wifey",
        completed: false
      },
      {
        id:uuid.v4(),
        title: "Meeting with B0ss",
        completed: false
      },


    ]


  }
  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  // Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !==id)]})
  }

  AddTodo = (title) => {
    const newTodo = {
      id:uuid.v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }
  render() {
    
    return (
      <div className="App">
      <div className = "container">
      <Header />
      <AddTodo AddTodo= {this.AddTodo}/>
        <Todos todos= {this.state.todos} markComplete= {this.markComplete} delTodo={this.delTodo}/>
      </div>
      </div>
    );
  }
}

export default App;
