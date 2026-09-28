import { useState } from "react";

function TodoForm({ addTodo }) {

  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!task.trim()) {
      return;
    }

    addTodo(
      task.trim(),
      date,
      priority
    );

    setTask("");
    setDate("");
    setPriority("Medium");
  };

  return (

    <form
      className="todo-form"
      onSubmit={handleSubmit}
    >

      <input
        type="text"
        placeholder="What do you want to accomplish?"
        value={task}
        onChange={(e) =>
          setTask(e.target.value)
        }
      />

      <input
        type="date"
        value={date}
        onChange={(e) =>
          setDate(e.target.value)
        }
      />

      <select
        value={priority}
        onChange={(e) =>
          setPriority(e.target.value)
        }
      >
        <option value="Low">
          Low
        </option>

        <option value="Medium">
          Medium
        </option>

        <option value="High">
          High
        </option>

      </select>

      <button type="submit">
        + Add
      </button>

    </form>
  );
}

export default TodoForm;