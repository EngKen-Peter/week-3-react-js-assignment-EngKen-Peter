import React, { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Task Manager</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="flex-grow border px-2 py-1 rounded"
          placeholder="Enter new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask} className="bg-blue-600 text-white px-3 py-1 rounded">
          Add
        </button>
      </div>

      <div className="flex justify-center gap-4 mb-4">
        {["all", "active", "completed"].map((type) => (
          <button
            key={type}
            className={`px-3 py-1 rounded ${
              filter === type ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setFilter(type)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      <ul className="space-y-2">
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center bg-white p-2 rounded shadow"
          >
            <span
              className={`flex-grow ${
                task.completed ? "line-through text-gray-400" : ""
              }`}
            >
              {task.text}
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => toggleTask(task.id)}
                className="text-green-600"
              >
                {task.completed ? "Undo" : "Done"}
              </button>
              <button
                onClick={() => deleteTask(task.id)}
                className="text-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
