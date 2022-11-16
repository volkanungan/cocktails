const fetchCocktailDetails = async ({ queryKey }) => {
  const id = queryKey[1];

  const apiRes = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );

  if (!apiRes.ok) {
    throw new Error(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id} fetch not ok`
    );
  }

  return apiRes.json();
};

export default fetchCocktailDetails;
