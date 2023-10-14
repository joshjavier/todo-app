function DeleteButton({ todo, removeTodo }) {
  return (
    <button
      aria-label={`Delete ${todo.text}`}
      onClick={() => removeTodo(todo.id)}
      className="sm:invisible group-hover:visible group-focus-within:visible"
    >
      <svg viewBox="0 0 12 12" width="1em" height="1em" aria-hidden="true">
        <use href="#cross" />
      </svg>
    </button>
  );
}

export default DeleteButton;
