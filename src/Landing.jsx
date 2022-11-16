import SearchBar from './SearchBar';
import RandomCocktails from './RandomCocktails';

export default function Search() {
  return (
    <div className="large-search-bar-container">
      <SearchBar size="large" />
      <h2>Or try</h2>
      <RandomCocktails length="4" />
    </div>
  );
}
