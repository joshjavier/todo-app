function App() {
  return (
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
        <div className="rounded-frame px-5 py-[14px] flex gap-3 focus-within:ring">
          <svg
            viewBox="0 0 20 20"
            className="w-5 h-5 fill-none stroke-2 stroke-very-light-grayish-blue"
          >
            <defs>
              <clipPath id="insideCircleOnly">
                <circle cx={10} cy={10} r={10} />
              </clipPath>
            </defs>
            <circle cx={10} cy={10} r={10} clipPath="url(#insideCircleOnly)" />
          </svg>
          <input
            type="text"
            placeholder="Create a new todo..."
            className="w-full bg-transparent placeholder:text-dark-grayish-blue outline-none"
          />
        </div>
        <div className="rounded-frame">
          <ul>
            <li>
              <label>
                <input type="checkbox" name="todo" checked />
                Complete online JavaScript course
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="todo" />
                Jog around the park 3x
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="todo" />
                10 minutes meditation
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="todo" />
                Read for 1 hour
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="todo" />
                Pick up groceries
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="todo" />
                Complete Todo App on Frontend Mentor
              </label>
            </li>
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
  );
}

export default App;
