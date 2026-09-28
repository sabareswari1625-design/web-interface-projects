import { useState } from "react";
import TodoItem from "./TodoItem";

function Calendar({
  todos,
  toggleTodo,
  deleteTodo
}) {

  const [currentDate, setCurrentDate] =
    useState(new Date());

  const year =
    currentDate.getFullYear();

  const month =
    currentDate.getMonth();

  const firstDay =
    new Date(
      year,
      month,
      1
    ).getDay();

  const daysInMonth =
    new Date(
      year,
      month + 1,
      0
    ).getDate();

  const previousMonth = () => {

    setCurrentDate(
      new Date(
        year,
        month - 1,
        1
      )
    );

  };

  const nextMonth = () => {

    setCurrentDate(
      new Date(
        year,
        month + 1,
        1
      )
    );

  };

  const getDateString = (day) => {

    return `${year}-${String(
      month + 1
    ).padStart(2, "0")}-${String(
      day
    ).padStart(2, "0")}`;

  };

  const today =
    new Date()
      .toISOString()
      .split("T")[0];

  return (

    <main className="main-content">

      <div className="page-header">

        <div>

          <span className="section-label">
            ORGANIZE
          </span>

          <h1>
            Calendar
          </h1>

          <p>
            Visualize your tasks across the month.
          </p>

        </div>

      </div>

      <div className="calendar-card">

        <div className="calendar-header">

          <button
            onClick={previousMonth}
          >
            ←
          </button>

          <h2>
            {currentDate.toLocaleDateString(
              "en-US",
              {
                month: "long",
                year: "numeric"
              }
            )}
          </h2>

          <button
            onClick={nextMonth}
          >
            →
          </button>

        </div>

        <div className="calendar-weekdays">

          {[
            "SUN",
            "MON",
            "TUE",
            "WED",
            "THU",
            "FRI",
            "SAT"
          ].map(day => (

            <div key={day}>
              {day}
            </div>

          ))}

        </div>

        <div className="calendar-grid">

          {Array.from({
            length: firstDay
          }).map((_, index) => (

            <div
              className="calendar-empty"
              key={`empty-${index}`}
            />

          ))}

          {Array.from({
            length: daysInMonth
          }).map((_, index) => {

            const day = index + 1;

            const dateString =
              getDateString(day);

            const dayTasks =
              todos.filter(
                todo =>
                  todo.dueDate ===
                  dateString
              );

            return (

              <div
                className={
                  `calendar-day ${
                    dateString === today
                      ? "today"
                      : ""
                  }`
                }
                key={dateString}
              >

                <div className="calendar-date">
                  {day}
                </div>

                <div className="calendar-tasks">

                  {dayTasks
                    .slice(0, 3)
                    .map(todo => (

                      <div
                        className={
                          `calendar-task ${
                            todo.completed
                              ? "done"
                              : ""
                          }`
                        }
                        key={todo.id}
                        onClick={() =>
                          toggleTodo(todo.id)
                        }
                      >
                        {todo.text}
                      </div>

                    ))}

                  {dayTasks.length > 3 && (

                    <small>
                      +{dayTasks.length - 3}
                      {" "}more
                    </small>

                  )}

                </div>

              </div>

            );

          })}

        </div>

      </div>

    </main>
  );
}

export default Calendar;