import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
  state = {
    todoList: []
  }


  render() {

    return (
      <div className="container">
        <div className="jumbotron jumbotron-fluid py-2">
          <div className="container">
            <h1 className="display-4">Todo List</h1>
          </div>
        </div>

        <form className="mb-3" onSubmit={this.handleSubmit}>
          <div class="input-group mb-3">
            <input type="text" name="todoTask" className="form-control" placeholder="Please enter your task" autoComplete="off"></input>
            <div class="input-group-append">
              <button class="btn btn-outline-success" type="submit" id="button-addon2">Add</button>
            </div>
          </div>
        </form>

      <ul className="list-group">
        {
          this.state.todoList.map(
            (item, index) =>{
              return <li className="list-group-item" key={index}>
                {item}
                <button className="btn btn-sm btn-outline-danger float-right" onClick={(event) => {this.deleteToDoTask(event, index)}}>Delete</button>
              </li>
            }
          )
        }
      </ul>
      </div>
    );
  }


  handleSubmit = (event) => {
    var taskDesc = event.target.elements.todoTask.value;
    if (taskDesc.length > 0) {
      this.setState({
        todoList: [...this.state.todoList, taskDesc]
      })
      event.target.reset();
    }
    event.preventDefault();
  }

  deleteToDoTask = (event, index) =>{
    var taskArray = [...this.state.todoList]
    taskArray.splice(index, 1)
    this.setState({todoList:taskArray})
  }
}



export default App;
