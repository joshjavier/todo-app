import './CustomCheckbox.css';

function CustomCheckbox({ done, handleChange }) {
  return (
    <>
      <input
        type="checkbox"
        checked={done}
        onChange={handleChange}
        className="absolute w-5 h-5 opacity-0 peer cursor-pointer"
      />
      <svg
        viewBox="0 0 20 20"
        width="20"
        height="20"
        className="peer-focus-visible:ring rounded-full"
        aria-hidden="true"
      >
        <use href="#checkboxOutline" />
        <use href="#checkboxFill" />
        <use
          href="#checkboxCheckmark"
          className="fill-none stroke-white stroke-2"
        />
      </svg>
    </>
  );
}

export default CustomCheckbox;
