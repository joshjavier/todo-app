import CustomCheckbox from './CustomCheckbox';
import DeleteButton from './DeleteButton';

function TodoItem({ todo, toggleStatus, removeTodo }) {
  return (
    <li className="flex justify-between items-center gap-3 px-5 py-4 border-b border-very-light-grayish-blue">
      <label className="flex items-center gap-3">
        <CustomCheckbox
          checked={todo.done}
          toggleChecked={() => toggleStatus(todo.id)}
        />
        <span className="peer-checked:line-through peer-checked:text-light-grayish-blue">
          {todo.text}
        </span>
      </label>
      <DeleteButton todo={todo} removeTodo={removeTodo} />
    </li>
  );
}

export default TodoItem;
