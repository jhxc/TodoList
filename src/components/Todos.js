import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

// now that we have this array of todos need to loop thru and do something
// map works like foreeach
// line 11 todo is passed into TodoItem as a prop (arg) 
class Todos extends Component { 
  render() {
    return this.props.todos.map((todo) => (
        <TodoItem key = {todo.id} todo = {todo} markComplete = {this.props.markComplete}
        delTodo = {this.props.delTodo}/>
    ));
  }
}

// just says this has a prop called todos (like vars)
// should be same name as class
Todos.propTypes ={
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}

export default Todos;
