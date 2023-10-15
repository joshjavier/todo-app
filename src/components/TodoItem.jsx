import CustomCheckbox from './CustomCheckbox';
import DeleteButton from './DeleteButton';
import './TodoItem.css';

function TodoItem({ todo, toggleStatus, removeTodo }) {
  return (
    <li className="text-todo group flex justify-between items-center gap-x-3 sm:gap-x-6 px-5 py-4 sm:px-6 sm:py-5">
      <label className="flex items-center gap-x-3 sm:gap-x-6">
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
