import './CustomCheckbox.css';

function CustomCheckbox({ checked = false, toggleChecked }) {
  return (
    <>
      <input
        type="checkbox"
        checked={checked}
        onChange={toggleChecked}
        className="absolute w-5 h-5 opacity-0 peer cursor-pointer"
      />
      <svg
        viewBox="0 0 20 20"
        width="20"
        height="20"
        className="peer-focus-visible:ring rounded-full"
        aria-hidden="true"
      >
        <use href="#checkboxOutline" fill="white" stroke="black" />
        <use href="#checkboxFill" fill="url(#checkboxBg)" />
        <use href="#checkboxCheckmark" stroke="white" strokeWidth="2" />
      </svg>
    </>
  );
}

export default CustomCheckbox;
