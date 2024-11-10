export const fetchRecipesByIngredient = async (ingredient) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    console.log(1, data);
    return data.meals;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return null;
  }
};

export const fetchRecipesByName = async (name) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    );
    const data = await response.json();
    console.log(2, data);

    return data.meals;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return null;
  }
};

// Fetch recipe details based on ID
export const fetchRecipeDetails = async (id) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await response.json();
    return data.meals[0];
  } catch (error) {
    console.error("Error fetching recipe details:", error);
    return null;
  }
};
