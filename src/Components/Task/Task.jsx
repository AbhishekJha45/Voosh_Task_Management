import { useState } from "react"
import React from 'react'
import './Task.css'

const Task = () => {
  
    <div>Task</div>
    const [tasks, setTasks] = useState([
      // Example initial tasks
      { id: 1, title: 'Task 1', description: 'Description 1' },
      { id: 2, title: 'Task 2', description: 'Description 2' },
    ]);
    const [showForm, setShowForm] = useState(false);
    const [newTask, setNewTask] = useState({ title: '', description: '' });
  
    const deleteTask = (id) => {
      setTasks(tasks.filter(task => task.id !== id));
    };
  
    const toggleFormVisibility = () => {
      setShowForm(!showForm);
    };
  
    const createTask = () => {
      const newTaskObject = {
        id: tasks.length + 1,
        title: newTask.title,
        description: newTask.description,
      };
      setTasks([...tasks, newTaskObject]);
      setNewTask({ title: '', description: '' });
      setShowForm(false);
    };
  
    return (
      <div className="task-management">
        <h3>Tasks</h3>
        <p>This table lists the tasks with their titles, descriptions, and available actions.</p>
        <table className="table">
          <caption>List of tasks and their details</caption>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(task => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>
                  <button onClick={() => deleteTask(task.id)} className="btn btn-danger">
                    <em>&#10003; mark as completed</em>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  
        <button onClick={toggleFormVisibility} className="btn btn-primary toggle-button">
          <div>{showForm ? 'Close' : 'Add Task'}</div>
        </button>
  
        {showForm && (
          <div className="task-form">
            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                value={newTask.title}
                onChange={e => setNewTask({ ...newTask, title: e.target.value })}
                className="form-control"
                id="title"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                value={newTask.description}
                onChange={e => setNewTask({ ...newTask, description: e.target.value })}
                className="form-control"
                id="description"
              />
            </div>
            <button onClick={createTask} className="btn btn-primary">Create Task</button>
          </div>
        )}
      </div>

  )
}

export default Task