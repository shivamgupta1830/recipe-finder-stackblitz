import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";

const Header = () => {
  const [search, setSearch] = useState("");
  const [searchType, setSearchType] = useState("ingredient"); // state for search type
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search?query=${search}&type=${searchType}`); // pass search type as query parameter
    setSearch("");
  };

  return (
    <header className="p-4 flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center bg-purple-100 shadow-md text-gray-800">
      <Link to="/">
        <div className="flex gap-2 justify-center items-center">
          <img src={logo} alt="Logo" className="size-5" />
          <h1 className="text-lg sm:text-xl font-bold tracking-tight">
            Recipe <span className="text-purple-700">Ideas</span>
          </h1>
        </div>
      </Link>

      <div className="flex flex-col sm:flex-row gap-2 sm:gap-2 text-sm sm:text-base items-center w-full sm:w-auto">
        {/* Select Menu for Search Type with fixed height */}
        <select
          className="p-2 rounded outline-none text-purple-700 bg-white flex-1 sm:flex-none h-10"
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value="ingredient">Ingredient</option>
          <option value="name">Name</option>
        </select>

        {/* Search input with fixed height */}
        <input
          type="text"
          className="p-2 rounded placeholder:text-purple-400 outline-none bg-white text-purple-700 flex-1 sm:flex-none h-10"
          placeholder="Search for recipes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          onClick={handleSearch}
          className="bg-purple-700 p-2 rounded text-white hover:bg-purple-800 w-full sm:w-auto"
        >
          Search
        </button>
      </div>
    </header>
  );
};

export default Header;
