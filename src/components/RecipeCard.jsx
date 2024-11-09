import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => (
  <div className=" bg-purple-100 flex flex-col justify-between items-center p-[2px] pb-8 rounded-md gap-4 text-purple-700  hover:shadow-lg transition-all  w-[80%] sm:w-[250px] md:w-[200px] lg:w-[280px] xl:w-[320px]">
    <img
      src={recipe.strMealThumb}
      alt={recipe.strMeal}
      className="rounded-md mb-2 object-contain"
    />
    <h3 className="text-center drop-shadow-md ">{recipe.strMeal}</h3>

    <Link to={`/recipe/${recipe.idMeal}`}>
      <button className="border border-purple-700 rounded-md py-1 px-2 text-sm hover:bg-purple-800 hover:text-white transition-all">
        Details
      </button>
    </Link>
  </div>
);

export default RecipeCard;
