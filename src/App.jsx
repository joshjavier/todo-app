import { useState } from 'react';
import SvgSprite from './components/SvgSprite';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Complete online JavaScript course', done: true },
    { id: 2, text: 'Jog around the park 3x' },
    { id: 3, text: '10 minutes meditation' },
    { id: 4, text: 'Read for 1 hour' },
    { id: 5, text: 'Pick up groceries' },
    { id: 6, text: 'Complete Todo App on Frontend Mentor' },
  ]);

  const activeTodos = todos.filter((todo) => !todo.done);

  const toggleStatus = (id) => {
    setTodos((todos) =>
      todos.map((todo) => {
        return todo.id === id ? { ...todo, done: !todo.done } : todo;
      }),
    );
  };

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos((todos) => todos.filter((todo) => !todo.done));
  };

  return (
    <>
      <SvgSprite />
      <div className="relative px-6 py-12 space-y-10">
        <img
          src="/images/bg-mobile-light.jpg"
          alt=""
          className="w-full absolute -z-10 inset-x-0 top-0"
        />

        <header className="text-white">
          <h1 className="font-bold text-2xl tracking-widest">TODO</h1>
        </header>

        <div className="space-y-4">
          <div className="rounded-frame px-5 py-[14px] flex gap-3 items-center focus-within:ring">
            <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
              <use href="#checkboxOutline" fill="white" stroke="black" />
            </svg>
            <input
              type="text"
              placeholder="Create a new todo..."
              aria-label="Create a new todo item"
              className="w-full bg-transparent placeholder:text-dark-grayish-blue outline-none"
            />
          </div>
          <div className="rounded-frame">
            <ul>
              {todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  toggleStatus={toggleStatus}
                  removeTodo={removeTodo}
                />
              ))}
            </ul>
            <div className="px-5 pt-4 pb-5 flex justify-between text-dark-grayish-blue">
              <p>
                {activeTodos.length ? `${activeTodos.length} items left` : ''}
              </p>
              <button
                className="hover:text-very-dark-grayish-blue"
                onClick={() => clearCompleted()}
              >
                Clear Completed
              </button>
            </div>
          </div>
          <div className="rounded-frame text-sm text-dark-grayish-blue font-bold px-6 py-[15px] flex gap-x-[18px] justify-center">
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
          </div>
        </div>

        <div>Drag and drop to reorder list</div>
      </div>
    </>
  );
}

export default App;
