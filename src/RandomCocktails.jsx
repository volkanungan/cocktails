import { Link } from 'react-router-dom';
import fetchRandomCocktail from './fetchRandomCocktail';
import { useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import cocktailImage from './assets/cocktail.jpg';

export default function RandomCocktails({ length }) {
  let cocktails = useRef([]);
  for (let i = 0; i < Number(length); i++) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    cocktails.current[i] = useQuery(
      ['random-cocktail', i],
      fetchRandomCocktail
    );
  }

  for (let i = 0; i < cocktails.current.length; i++) {
    if (cocktails.current[i].isLoading) {
      return (
        <div className="random-cocktails-container">
          <ul className="cocktail-list">
            {[...Array(Number(length))].map((i) => (
              <li className="cocktail-card" key={i}>
                <img
                  src={cocktailImage}
                  alt="cocktail thumbnail"
                  className="cocktail-thumbnail cocktail-thumbnail-placeholder"
                />
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }

  return (
    <div className="random-cocktails-container">
      <ul className="cocktail-list">
        {cocktails.current.map((cocktail) => {
          return (
            <Link to={`/cocktail/${cocktail.data.drinks[0].idDrink}`}>
              <li
                key={cocktail.data.drinks[0].idDrink}
                className="cocktail-card"
              >
                <img
                  src={cocktail.data.drinks[0].strDrinkThumb}
                  alt={`${cocktail.data.drinks[0].strDrink} thumbnail`}
                  className="cocktail-thumbnail"
                ></img>

                <p>{cocktail.data.drinks[0].strDrink}</p>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
