import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRecipeDetails } from "../api/fetchRecipes";
import Loader from "../components/Loader";
import { BsYoutube } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const RecipeDetailPage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setLoading(true); // Set loading to true at the start of fetching
        const data = await fetchRecipeDetails(id);
        setRecipe(data);
      } catch (error) {
        console.error("Failed to fetch recipe details:", error);
      } finally {
        setLoading(false); // Ensure loading is set to false after fetch, whether successful or failed
      }
    };

    fetchDetails();
  }, [id]);

  if (loading) return <Loader />;

  // Splitting  the instructions into multiple paragraphs based on sentence boundaries to provide easy readability and later using .map()

  const instructionsParagraphs = recipe.strInstructions
    ? recipe.strInstructions.split(/(?<=\.)\s+/)
    : [];

  return (
    <div className="p-12">
      <div className="flex justify-between items-center mb-6  text-sm sm:text-base md:text-lg">
        <h2 className=" text-lg md:text-2xl font-bold text-purple-700 drop-shadow-md">
          {recipe.strMeal}
        </h2>
        <button
          onClick={() => navigate(-1)}
          className=" text-purple-700 hover:text-purple-800 drop-shadow-md flex justify-between items-center gap-1"
        >
          <FaArrowLeftLong />
          <span>Go Back</span>
        </button>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-start sm:items-start gap-7 rounded-md mb-8 bg-purple-100 md:w-auto p-2 text-xs sm:text-sm md:text-base">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-[250px] h-full rounded-md"
        />

        <div className="flex flex-col justify-center items-center sm:justify-start sm:items-start gap-2 ">
          <p>
            Category:
            <span className="text-purple-700 ml-1">{recipe.strCategory}</span>
          </p>
          <p>
            Area:
            <span className="text-purple-700 ml-1">{recipe.strArea}</span>
          </p>
          <p>
            Source:
            <span className="text-purple-700 ml-1">
              <a
                href={recipe.strSource}
                target="_blank"
                rel="noopener noreferrer"
                className="overflow-hidden"
              >
                <span className="md:hidden">Link</span>
                <span className="hidden md:inline">
                  {recipe.strSource.slice(0, 35) + "....."}
                </span>
              </a>
            </span>
          </p>

          <a
            href={recipe.strYoutube}
            className="text-red-700 flex justify-center items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsYoutube className="text-xl" />
            <span className="hover:underline hover:underline-offset-2">
              {" "}
              Check recipe on Youtube
            </span>
          </a>
        </div>
      </div>
      <h5 className="my-2 font-semibold ">Ingredients</h5>

      <ul className="text-sm leading-relaxed text-gray-700 p-4">
        {/* created a array to loop over ingredients with their measure ( API is providing individual ingredients, so we have to create an array for looping) as total ingredients are 20 ,
        some of them are empty string */}
        {Array.from({ length: 20 }, (_, index) =>
          recipe[`strIngredient${index + 1}`] ? (
            <li key={index} className="capitalize list-disc">
              {`${recipe[`strIngredient${index + 1}`]}: ${
                recipe[`strMeasure${index + 1}`]
              }`}
            </li>
          ) : null
        )}
      </ul>

      <h5 className="my-2 font-semibold">Instructions to prepare</h5>
      <div className="text-sm space-y-4 leading-relaxed text-gray-700 p-4">
        <ul>
          {instructionsParagraphs.map((paragraph, index) => (
            <li key={index} className="list-disc">
              {paragraph}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeDetailPage;
