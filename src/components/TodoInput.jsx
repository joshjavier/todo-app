function TodoInput({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="text-todo frame relative px-5 py-[14px] sm:px-6 sm:py-5">
        <svg
          viewBox="0 0 20 20"
          width="20"
          height="20"
          aria-hidden="true"
          className="shrink-0 sm:w-6 sm:h-6"
        >
          <use href="#checkboxOutline" fill="white" stroke="black" />
        </svg>
        <input
          type="text"
          name="todo"
          placeholder="Create a new todo…"
          aria-label="Create a new todo…"
          className="absolute rounded-[5px] inset-0 w-full h-full pl-[52px] pr-5 sm:pr-6 sm:pl-[72px] bg-transparent placeholder:text-dark-grayish-blue focus:outline-none focus:ring focus:ring-amber-400"
        />
      </div>
    </form>
  );
}

export default TodoInput;
