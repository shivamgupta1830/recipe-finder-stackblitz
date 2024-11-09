import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Header = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search?query=${search}`);
  };

  return (
    <header className=" p-4 flex  gap-4 sm:gap-0 flex-col sm:flex-row justify-between items-center  bg-purple-100  shadow-md  text-gray-800">
      <Link to="/">
        <div className="flex gap-2 justify-center items-center">
          <img src={logo} alt="Logo" className="size-5" />
          <h1 className="text-lg sm:text-xl font-bold  tracking-tight">
            Recipe <span className="text-purple-700">Ideas</span>{' '}
          </h1>
        </div>
      </Link>

      <div className="flex gap-2 text-sm sm:text-base">
        <input
          type="text"
          className="p-2 rounded  placeholder:text-purple-400 outline-none text-purple-700 "
          placeholder="Search for recipes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-purple-700 p-2 rounded text-white hover:bg-purple-800"
        >
          Search
        </button>
      </div>
    </header>
  );
};

export default Header;
