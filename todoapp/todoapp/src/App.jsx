import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Daily from "./Daily";
import Weekly from "./Weekly";
import Calendar from "./Calendar";

function App() {

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("taskflow-todos");

    return savedTodos
      ? JSON.parse(savedTodos)
      : [];
  });

  // Save tasks whenever they change
  useEffect(() => {
    localStorage.setItem(
      "taskflow-todos",
      JSON.stringify(todos)
    );
  }, [todos]);

  // Add task
  const addTodo = (text, dueDate, priority) => {

    const newTodo = {
      id: Date.now(),
      text,
      dueDate,
      priority,
      completed: false,
      createdAt: new Date().toISOString()
    };

    setTodos(prev => [
      ...prev,
      newTodo
    ]);
  };

  // Complete task
  const toggleTodo = (id) => {

    setTodos(prev =>
      prev.map(todo =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed
            }
          : todo
      )
    );
  };

  // Delete task
  const deleteTodo = (id) => {

    setTodos(prev =>
      prev.filter(todo => todo.id !== id)
    );
  };

  return (
    <div className="app">

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={
            <Home
              todos={todos}
              addTodo={addTodo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          }
        />

        <Route
          path="/dashboard"
          element={
            <Dashboard
              todos={todos}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          }
        />

        <Route
          path="/daily"
          element={
            <Daily
              todos={todos}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          }
        />

        <Route
          path="/weekly"
          element={
            <Weekly
              todos={todos}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          }
        />

        <Route
          path="/calendar"
          element={
            <Calendar
              todos={todos}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          }
        />

      </Routes>

    </div>
  );
}

export default App;