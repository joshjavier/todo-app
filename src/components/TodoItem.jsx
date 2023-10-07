import { useState } from 'react';
import CustomCheckbox from './CustomCheckbox';
import DeleteButton from './DeleteButton';

function TodoItem({ text, isDone = false }) {
  const [done, setDone] = useState(isDone);

  const handleChange = ({ target }) => setDone(target.checked);

  return (
    <li className="flex justify-between gap-3 px-5 py-[14px] border-b border-very-light-grayish-blue">
      <label className="flex items-center gap-3">
        <CustomCheckbox done={done} handleChange={handleChange} />
        <span className="peer-checked:line-through">{text}</span>
      </label>
      <DeleteButton />
    </li>
  );
}

export default TodoItem;
