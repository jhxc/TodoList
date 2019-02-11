import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import About from './components/pages/About';
import axios from 'axios';
import './App.css';


class App extends Component {
  // state is just some objects, the todos array is an array of todo objects with 3 prop
  state={
    todos: []
  }

  //runs when app starts, contacts the json api server
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({todos: res.data}));
  }

  //Toggle completed
  markComplete = (id) =>{
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
     }) })
  }

  //Delete Todo ... is a spread, just copies whole thing, then filters out the id
  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]}))
    
  }

  //Add Todo
  addTodo = (title) =>{
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({todos:
      [...this.state.todos, res.data]}));
  }

  render() {
    return (
      // looks like html but is actually jsx. logo goes here too
      // use the <name/> tag to bring in other components
      
      // now we pass the todos from this state (t.s) into the todos.js as a prop
      // this.whatever are methods but no ()

      // wrap everthing in a router to goto other pages
      <Router>
        <div className="App">
        <div className="container">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo = {this.addTodo}/>
             <Todos todos={this.state.todos} markComplete = {this.markComplete}
             delTodo = {this.delTodo}/>
            </React.Fragment>
          )} />  
          <Route path="/about" component ={About}/>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
