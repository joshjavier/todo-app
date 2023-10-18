function DeleteButton({ todo, removeTodo }) {
  return (
    <button
      aria-label={`Delete ${todo.text}`}
      onClick={() => removeTodo(todo.id)}
      className="sm:invisible group-hover:visible group-focus-within:visible focus:outline-none focus-visible:ring focus-visible:ring-amber-400"
    >
      <svg
        viewBox="0 0 12 12"
        width="1em"
        height="1em"
        aria-hidden="true"
        stroke="currentColor"
        className="dark:stroke-dark-grayish-blue-dark"
      >
        <use href="#icon-cross" />
      </svg>
    </button>
  );
}

export default DeleteButton;
