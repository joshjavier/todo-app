function DeleteButton({ todo, removeTodo }) {
  return (
    <button
      aria-label={`Delete ${todo.text}`}
      onClick={() => removeTodo(todo.id)}
    >
      <svg viewBox="0 0 12 12" width="12" height="12" aria-hidden="true">
        <use href="#cross" />
      </svg>
    </button>
  );
}

export default DeleteButton;
