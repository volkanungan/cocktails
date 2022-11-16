import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSadCry } from '@fortawesome/free-regular-svg-icons';

export default function SearchResults({ cocktails, searchQuery }) {
  if (!cocktails) {
    return (
      <div className="search-results-container no-results">
        <FontAwesomeIcon icon={faFaceSadCry} className="no-results-icon" />
        <h3>
          Sorry, we have no cocktails for <i>{searchQuery}</i>
        </h3>
      </div>
    );
  }
  return (
    <div className="search-results-container">
      <ul className="cocktail-list">
        {cocktails.map((cocktail) => {
          return (
            <li key={cocktail.idDrink}>
              <Link to={`/cocktail/${cocktail.idDrink}`}>
                <img
                  src={cocktail.strDrinkThumb}
                  alt={`${cocktail.strDrink} thumbnail`}
                  className="cocktail-thumbnail"
                ></img>
              </Link>
              <Link to={`/cocktail/${cocktail.idDrink}`}>
                <p>{cocktail.strDrink}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
