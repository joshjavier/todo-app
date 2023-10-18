function ThemeSwitcher({ theme, toggle }) {
  return (
    <button
      onClick={toggle}
      className="block rounded-full focus:outline-none focus-visible:ring focus-visible:ring-amber-400"
    >
      <svg
        viewBox="0 0 20 20"
        width="20"
        height="20"
        fill="white"
        aria-hidden="true"
        className="sm:w-[26px] sm:h-[26px]"
      >
        {theme === 'dark' ? (
          <use href="#icon-sun" />
        ) : (
          <use href="#icon-moon" />
        )}
      </svg>
      <span className="sr-only">
        {theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      </span>
    </button>
  );
}

export default ThemeSwitcher;
