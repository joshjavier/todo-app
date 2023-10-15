import { useState } from 'react';
import { nanoid } from 'nanoid';
import SvgSprite from './components/SvgSprite';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';
import ViewFilters from './components/ViewFilters';
import EmptyState from './components/EmptyState';

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

      {/* Background */}
      <img
        srcSet="/images/bg-mobile-light.jpg 375w, /images/bg-desktop-light.jpg 1440w"
        src="/images/bg-mobile-light.jpg"
        alt=""
        width="375"
        height="200"
        className="w-full absolute -z-10 object-cover h-[200px] sm:h-[300px]"
      />

      <div className="px-6 py-12 sm:py-[70px] space-y-10">
        <header className="wrapper text-white">
          <h1 className="font-bold text-[27px] tracking-[9.5px] sm:text-[40px] sm:tracking-[15px]">
            TODO
          </h1>
        </header>

        <div className="wrapper space-y-4">
          <TodoInput handleSubmit={handleSubmit} />
          <div className="frame min-h-[370px] sm:min-h-[442px] max-h-[50vh] sm:max-h-[60vh] flex flex-col">
            {todos.length > 0 ? (
              <ul className="overflow-y-scroll">
                {shownTodos.map((todo) => (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleStatus={toggleStatus}
                    removeTodo={removeTodo}
                  />
                ))}
              </ul>
            ) : (
              <EmptyState />
            )}
            <div className="text-xs sm:text-[14px] mt-auto px-5 sm:px-6 pt-4 pb-5 grid grid-flow-col auto-cols-fr text-dark-grayish-blue border-t border-very-light-grayish-blue">
              <p>
                {activeTodos.length > 1
                  ? `${activeTodos.length} items left`
                  : activeTodos.length === 1
                  ? `1 item left`
                  : ''}
              </p>
              <div className="hidden sm:block justify-self-center">
                <ViewFilters
                  currentView={view}
                  handleViewChange={(event) => setView(event.target.value)}
                />
              </div>
              <button
                className="hover:text-very-dark-grayish-blue disabled:invisible justify-self-end"
                onClick={() => clearCompleted()}
                disabled={completedTodos.length === 0}
              >
                Clear Completed
              </button>
            </div>
          </div>
          <div className="frame text-sm px-6 py-[15px] sm:hidden">
            <ViewFilters
              currentView={view}
              handleViewChange={(event) => setView(event.target.value)}
            />
          </div>
        </div>

        <div className="text-center text-sm text-dark-grayish-blue">
          Drag and drop to reorder list
        </div>
      </div>
    </>
  );
}

export default App;
