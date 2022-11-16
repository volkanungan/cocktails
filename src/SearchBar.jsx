import { useRef } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css';

export default function SearchBar({ size }) {
  const inputEl = useRef(null);
  const navigate = useNavigate();
  function onSubmit(e) {
    e.preventDefault();

    if (inputEl.current.value.length === 0) {
      return;
    }

    navigate({
      pathname: '/search',
      search: createSearchParams({
        name: inputEl.current.value,
      }).toString(),
    });
  }
  return (
    <form className="search-bar" onSubmit={onSubmit}>
      <input
        ref={inputEl}
        type="text"
        placeholder="Search for cocktails"
        name="cocktail"
      />
      <button type="submit">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </form>
  );
}
