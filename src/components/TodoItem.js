import React, { Component } from 'react';
import PropTypes from 'prop-types';

// do rce-tab in new js file to auto generate
export class TodoItem extends Component {
// dynamic styling, render's return div has a style which runs this method to choose
// appropriate styling for the item before rendering it 
    getStyle = () => {
    return {
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

//marks completed items
// because we're not using a statemanager (redux), cant easily change completed state
// in App.js, when we mark the completed item
// bind lets it take arguments to the upper level
  render() {
    // unpacking the todo into values
    const { id, title} = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
            <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {''}
            {title}
            <button onClick ={ this.props.delTodo.bind(this, id)}
            style={btnStyle}>x</button>
        </p>
      </div>
    )
  }
}

// just says this has a prop called todos (like vars)
// should be same name as class
TodoItem.propTypes ={
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
