import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
 // all form vars should be here
    state ={
      title:''
  }
  // just making sure the input box reflects changes
  onChange = (e) => this.setState({ [e.target.name]: e.target.value});

  // submitting and resetting the input box to empty
  onSubmit = (e) =>{
      e.preventDefault();
      this.props.addTodo(this.state.title);
      this.setState({title: ''});
  }
  render() {
    return (
        <form onSubmit = {this.onSubmit} style={{ display:'flex'}}>
            <input
             type="text"
             name="title" 
             style = {{ flex: '10', padding: '5px'}}
             placeholder="Add Todo..."
             value = {this.state.title}
             onChange = {this.onChange}
            />
            <input
             type="submit" 
             value ="Submit" 
             className="btn"
             style={{flex: '1'}}/>
        </form>
    )
  }
}

AddTodo.propTypes ={
  addTodo: PropTypes.func.isRequired,
}

export default AddTodo
