import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import { useQuery } from '@tanstack/react-query';
import fetchSearchCocktail from './fetchSearchCocktail';
import { useLocation } from 'react-router-dom';

export default function Search() {
  const useQueryParams = () => new URLSearchParams(useLocation().search);

  let queryParams = useQueryParams();
  const searchQuery = queryParams.get('name') ?? '';

  const results = useQuery(['search', searchQuery], fetchSearchCocktail);
  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🍸</h2>
      </div>
    );
  }

  return (
    <div>
      <SearchBar />
      <SearchResults
        cocktails={results?.data?.drinks}
        searchQuery={searchQuery}
      />
    </div>
  );
}
