import SvgSprite from './components/SvgSprite';
import TodoItem from './components/TodoItem';

function App() {
  const todoItems = [
    { text: 'Complete online JavaScript course', isDone: true },
    { text: 'Jog around the park 3x' },
    { text: '10 minutes meditation' },
    { text: 'Read for 1 hour' },
    { text: 'Pick up groceries' },
    { text: 'Complete Todo App on Frontend Mentor' },
  ];

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
              <use href="#checkboxOutline" />
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
              {todoItems.map((todo) => (
                <TodoItem
                  key={crypto.randomUUID()}
                  text={todo.text}
                  isDone={todo.isDone}
                />
              ))}
            </ul>
            <div>
              <p>5 items left</p>
              <p>Clear Completed</p>
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
