const fetchRandomCocktail = async () => {
  const apiRes = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/random.php`
  );

  if (!apiRes.ok) {
    throw new Error(
      `https://www.thecocktaildb.com/api/json/v1/1/random.php fetch not ok`
    );
  }

  return apiRes.json();
};

export default fetchRandomCocktail;
