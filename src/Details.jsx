import './Details.css';
import { useParams } from 'react-router-dom';
import SearchBar from './SearchBar';
import { useQuery } from '@tanstack/react-query';
import fetchCocktailDetails from './fetchCocktailDetails';

export default function Details() {
  const { id } = useParams();

  const results = useQuery(['coocktail-details', id], fetchCocktailDetails);
  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🍸</h2>
      </div>
    );
  }

  const drink = results?.data?.drinks[0];

  const ingredientsList = () => {
    let list = [];
    for (let i = 1; i < 16; i++) {
      if (drink[`strIngredient${i}`] == null) {
        return list;
      }
      list.push({
        ingredient: drink[`strIngredient${i}`],
        measure: drink[`strMeasure${i}`],
        imageUrl:
          'https://www.thecocktaildb.com/images/ingredients/' +
          drink[`strIngredient${i}`] +
          '-Small.png',
      });
    }
    return list;
  };

  const ingredients = ingredientsList();

  return (
    <div>
      <SearchBar />
      <div className="drink-container">
        <img
          src={drink.strDrinkThumb}
          alt={drink.strDrink}
          className="drink-image"
        />
        <div className="drink-card">
          <h1>{drink.strDrink}</h1>
          <div className="ingredients-container">
            <h2>Ingredients</h2>
            <dl>
              {ingredients.map((item) => {
                return (
                  <div class="drink-ingredient">
                    <dt>
                      <img
                        src={item.imageUrl}
                        alt={item.ingredient}
                        className="ingredient-image"
                      />
                      <span>{item.ingredient}</span>
                    </dt>
                    <dd>{item.measure}</dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
        <div className="steps">
          <h2>Steps</h2>
          <ol>
            {drink.strInstructions.split('. ').map((step) => (
              <li>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
