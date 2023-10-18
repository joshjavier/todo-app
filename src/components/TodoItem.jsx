import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import CustomCheckbox from './CustomCheckbox';
import DeleteButton from './DeleteButton';
import './TodoItem.css';

function TodoItem({ todo, id, toggleStatus, removeTodo }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="text-todo group flex justify-between items-center gap-x-3 sm:gap-x-6 px-5 py-4 sm:px-6 sm:py-5"
    >
      <label className="flex items-center gap-x-3 sm:gap-x-6">
        <CustomCheckbox
          checked={todo.done}
          toggleChecked={() => toggleStatus(todo.id)}
        />
        <span className="peer-checked:line-through peer-checked:text-light-grayish-blue dark:peer-checked:text-very-dark-grayish-blue-dark-1">
          {todo.text}
        </span>
      </label>
      <DeleteButton todo={todo} removeTodo={removeTodo} />
    </li>
  );
}

export default TodoItem;
