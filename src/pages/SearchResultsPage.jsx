import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import Loader from "../components/Loader";
import {
  fetchRecipesByIngredient,
  fetchRecipesByName,
} from "../api/fetchRecipes";
import { FaArrowLeftLong } from "react-icons/fa6";

const SearchResultsPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [displayCount, setDisplayCount] = useState(9);
  const [searchTerm, setSearchTerm] = useState("");
  const { search } = useLocation();

  useEffect(() => {
    const fetchRecipeData = async () => {
      const queryParams = new URLSearchParams(search);
      const query = queryParams.get("query");
      const type = queryParams.get("type") || "ingredient"; // default to 'ingredient'

      setSearchTerm(query || "");

      if (!query) {
        setError("Please enter a search term to see results!");
        setLoading(false);
        return;
      }

      setLoading(true);
      setError("");

      try {
        let data;
        if (type === "name") {
          data = await fetchRecipesByName(query);
        } else {
          data = await fetchRecipesByIngredient(query);
        }
        setRecipes(data || []);
      } catch (error) {
        setError("Failed to fetch recipes. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipeData();
  }, [search]);

  const handleShowMore = () => {
    setDisplayCount(displayCount + 9);
  };

  if (loading) return <Loader />;

  if (error) {
    return (
      <div className="text-purple-700 p-5 text-center font-bold text-lg md:text-2xl flex flex-col items-center justify-center gap-10 mt-10 drop-shadow-md h-screen">
        <h2>{error}</h2>
        <img
          src="https://res.cloudinary.com/dmrqwx9x5/image/upload/v1731081941/pngegg_2_a04xpa.png"
          alt="Recipe"
          className="w-[372px]"
        />
      </div>
    );
  }

  return (
    <div className="px-8 py-8 md:py-16 text-center min-h-screen">
      <div className="flex justify-between items-center pb-6 md:pb-12 text-sm sm:text-base md:text-lg font-normal">
        <h3 className="drop-shadow-md">
          {recipes.length > 0
            ? `${recipes.length} results found for `
            : `No results found for `}
          <span className="text-purple-700">{searchTerm}</span>
        </h3>

        <Link to="/">
          <div className="text-sm sm:text-base md:text-lg text-purple-700 hover:text-purple-800 drop-shadow-md flex justify-between items-center gap-1">
            <FaArrowLeftLong />
            <span>Home</span>
          </div>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-8 justify-items-center">
        {recipes.length ? (
          recipes
            .slice(0, displayCount)
            .map((recipe) => <RecipeCard key={recipe.idMeal} recipe={recipe} />)
        ) : (
          <div className="flex justify-center items-center col-span-full">
            <img
              src="https://res.cloudinary.com/dmrqwx9x5/image/upload/v1731081941/pngegg_2_a04xpa.png"
              alt="Recipe"
              className="w-[372px]"
            />
          </div>
        )}
      </div>

      {displayCount < recipes.length && (
        <button
          className="text-purple-700 hover:underline hover:underline-offset-2 mt-10"
          onClick={handleShowMore}
        >
          See more
        </button>
      )}
    </div>
  );
};

export default SearchResultsPage;
