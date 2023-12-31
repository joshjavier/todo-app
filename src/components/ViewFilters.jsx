function ViewFilters({ currentView, handleViewChange }) {
  const views = ['All', 'Active', 'Completed'];

  return (
    <fieldset className="font-bold flex gap-x-[18px] justify-center">
      {views.map((view) => (
        <label key={view} className="relative">
          <input
            type="radio"
            value={view}
            checked={currentView === view}
            onChange={handleViewChange}
            className="peer absolute cursor-pointer w-full h-full opacity-0"
          />
          <span className="peer-checked:text-bright-blue peer-[&:hover:not(:checked)]:text-very-dark-grayish-blue dark:peer-[&:hover:not(:checked)]:text-very-light-grayish-blue peer-focus-visible:ring peer-focus-visible:ring-amber-400">
            {view}
          </span>
        </label>
      ))}
    </fieldset>
  );
}

export default ViewFilters;
