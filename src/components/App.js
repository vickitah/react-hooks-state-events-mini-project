import React, { useState } from "react";
import TaskList from "./TaskList";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import { TASKS, CATEGORIES } from "../data";

function App() {
  // State for tasks and selected category
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Handle deleting a task
  function handleDeleteTask(deletedTaskText) {
    const updatedTasks = tasks.filter((task) => task.text !== deletedTaskText);
    setTasks(updatedTasks);
  }

  // Handle category selection
  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  // Handle adding a new task
  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  // Filter tasks based on selected category
  const filteredTasks = tasks.filter((task) => {
    if (selectedCategory === "All") return true;
    return task.category === selectedCategory;
  });

  return (
    <div className="App">
      <h2>My tasks</h2>
      {/* Pass props to components */}
      <CategoryFilter 
        categories={CATEGORIES} 
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange} 
      />
      <NewTaskForm 
        categories={CATEGORIES} 
        onTaskFormSubmit={handleAddTask} 
      />
      <TaskList 
        tasks={filteredTasks} 
        onDeleteTask={handleDeleteTask} 
      />
    </div>
  );
}

export default App;

