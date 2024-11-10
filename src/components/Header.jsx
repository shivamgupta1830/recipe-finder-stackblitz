import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";

const Header = () => {
  const [search, setSearch] = useState("");
  const [searchType, setSearchType] = useState("ingredient");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search?query=${search}&type=${searchType}`);
    setSearch("");
  };

  return (
    <header className="p-4 flex flex-col sm:flex-row gap-4 justify-between items-center bg-purple-100 shadow-md text-gray-800">
      <Link to="/">
        <div className="flex gap-2 justify-center items-center">
          <img src={logo} alt="Logo" className="size-5" />
          <h1 className="text-lg sm:text-xl font-bold tracking-tight">
            Recipe <span className="text-purple-700">Ideas</span>
          </h1>
        </div>
      </Link>

      {/* Responsive container for search controls */}
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto items-center">
        {/* Select Menu */}
        <select
          className="p-2 rounded outline-none text-purple-700 bg-white h-10 w-full sm:w-auto text-sm sm:text-base"
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value="ingredient">Ingredient</option>
          <option value="name">Name</option>
        </select>

        {/* Search Input and Button */}
        <div className="flex gap-2 w-full sm:w-auto">
          <input
            type="text"
            className="p-2 rounded placeholder:text-purple-400 outline-none bg-white text-purple-700 h-10 flex-1 text-sm sm:text-base w-3/4"
            placeholder="Search for recipes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            onClick={handleSearch}
            className="bg-purple-700 p-2 rounded text-white hover:bg-purple-800 h-10 w-1/4 text-sm sm:text-base"
          >
            Search
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
