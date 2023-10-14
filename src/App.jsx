import { useState } from 'react';
import { nanoid } from 'nanoid';
import SvgSprite from './components/SvgSprite';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';
import ViewFilters from './components/ViewFilters';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Complete online JavaScript course', done: true },
    { id: 2, text: 'Jog around the park 3x' },
    { id: 3, text: '10 minutes meditation' },
    { id: 4, text: 'Read for 1 hour' },
    { id: 5, text: 'Pick up groceries' },
    { id: 6, text: 'Complete Todo App on Frontend Mentor' },
  ]);
  const [view, setView] = useState('All');

  const activeTodos = todos.filter((todo) => !todo.done);
  const completedTodos = todos.filter((todo) => todo.done);
  const shownTodos =
    view === 'Active'
      ? activeTodos
      : view === 'Completed'
      ? completedTodos
      : todos;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    addTodo(formData.get('todo'));
    form.reset();
  };

  const toggleStatus = (id) => {
    setTodos((todos) =>
      todos.map((todo) => {
        return todo.id === id ? { ...todo, done: !todo.done } : todo;
      }),
    );
  };

  const addTodo = (text) => {
    const id = nanoid();
    const newTodo = { id, text };
    setTodos((todos) => [...todos, newTodo]);
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

        <header className="wrapper text-white">
          <h1 className="font-bold text-2xl tracking-widest">TODO</h1>
        </header>

        <div className="wrapper space-y-4">
          <TodoInput handleSubmit={handleSubmit} />
          <div className="frame">
            <ul>
              {shownTodos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  toggleStatus={toggleStatus}
                  removeTodo={removeTodo}
                />
              ))}
            </ul>
            <div className="px-5 pt-4 pb-5 flex justify-between text-dark-grayish-blue border-t border-very-light-grayish-blue">
              <p>
                {activeTodos.length > 1
                  ? `${activeTodos.length} items left`
                  : activeTodos.length === 1
                  ? `1 item left`
                  : ''}
              </p>
              <button
                className="hover:text-very-dark-grayish-blue"
                onClick={() => clearCompleted()}
                hidden={completedTodos.length === 0}
              >
                Clear Completed
              </button>
            </div>
          </div>
          <ViewFilters
            currentView={view}
            handleViewChange={(event) => setView(event.target.value)}
          />
        </div>

        <div className="text-center text-sm text-dark-grayish-blue">
          Drag and drop to reorder list
        </div>
      </div>
    </>
  );
}

export default App;
