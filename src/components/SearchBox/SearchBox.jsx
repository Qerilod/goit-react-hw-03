import s from "./SearchBox.module.css";
const SearchBox = ({ filter, onFilterChange }) => {
  return (
    <input
      className={s.input}
      type="text"
      placeholder="Find name"
      value={filter}
      onChange={(e) => onFilterChange(e.target.value)}
    />
  );
};

export default SearchBox;
