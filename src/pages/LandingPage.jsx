import { Link } from "react-router-dom";

const LandingPage = () => {
  // Data for top recipes section (Bottom landing page)

  const topRecipesData = [
    {
      id: 1,
      name: "Milk",
      type: "ingredient",
      image:
        "https://res.cloudinary.com/dmrqwx9x5/image/upload/v1731150772/eiliv-aceron-_8bnn1GqX70-unsplash_azryxv.jpg",
    },
    {
      id: 2,
      name: "Chicken",
      type: "ingredient",
      image:
        "https://res.cloudinary.com/dmrqwx9x5/image/upload/v1731150868/eiliv-aceron-DNQLBdGdld0-unsplash_xjvaha.jpg",
    },
    {
      id: 3,
      name: "Butter",
      type: "ingredient",
      image:
        "https://res.cloudinary.com/dmrqwx9x5/image/upload/v1731150772/pexels-monserratsoldu-3821250_brd9ii.jpg",
    },
    {
      id: 4,
      name: "Cake",
      type: "name",
      image:
        "https://res.cloudinary.com/dmrqwx9x5/image/upload/v1731226884/will-echols-P_l1bJQpQF0-unsplash_nyzhcy.jpg",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center m-4 p-10 text-center">
      {/* Top landing page */}

      <h2 className="text-2xl sm:text-4xl font-bold  drop-shadow-md">
        Welcome to <span className="text-purple-700">Recipe</span> Ideas
      </h2>

      <div className="p-4">
        <img
          src="https://res.cloudinary.com/dmrqwx9x5/image/upload/v1731081941/pngegg_2_a04xpa.png"
          alt="Recipe"
          className="w-[372px]"
        />
      </div>

      <p className="font-normal text-lg sm:text-xl text-purple-700 drop-shadow-md">
        Discover dishes that match your ingredients, culinary mood and time.
      </p>

      {/* Bottom landing page */}

      <div className="mt-16">
        <h4 className="text-xl sm:text-3xl font-bold drop-shadow-md">
          Top <span className="text-purple-700">Ingredients </span> or{" "}
          <span className="text-purple-700">Dishes</span>
        </h4>

        <div className="flex flex-col sm:flex-row w-full  justify-between items-center flex-wrap gap-8 sm:gap-4 md:gap-12  mt-12">
          {topRecipesData.map((recipe) => (
            <div key={recipe.id} className="">
              <Link
                className="cursor-pointer"
                to={`/search?query=${recipe.name}&type=${recipe.type}`}
              >
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-20 h-20 sm:w-28 sm:h-28 object-cover rounded-full mb-2 shadow-md hover:scale-[1.03] transition-all"
                />
                <p className="  text-purple-700 drop-shadow-md mt-5">
                  {recipe.name}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
