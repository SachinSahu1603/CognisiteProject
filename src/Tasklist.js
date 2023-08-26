import React, { useState } from "react";

function TaskForm() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  return (
    <div className="taskparent">
      <div className="task-form-container">
        <h2 className="task-form-heading">Task List</h2>
        <div className="task-input-container">
          <input
            className="task-input"
            type="text"
            placeholder="Enter a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button className="task-add-button" onClick={handleAddTask}>
            Add Task
          </button>
        </div>
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className="task-list-item">
              {task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskForm;
