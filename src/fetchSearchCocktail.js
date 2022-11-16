const fetchSearchCocktail = async ({ queryKey }) => {
  const name = queryKey[1];

  const apiRes = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
  );

  if (!apiRes.ok) {
    throw new Error(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name} fetch not ok`
    );
  }

  return apiRes.json();
};

export default fetchSearchCocktail;
