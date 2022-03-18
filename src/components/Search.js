import React from "react";
import { IoSearch } from "../utils/icons";
import { useRecipeContext } from "../context/recipe-context";

const Search = () => {
  const { searchQuery, handleSearch } = useRecipeContext();
  return (
    <form className="search-recipe" onSubmit={(e) => e.preventDefault()}>
      <div className="search-input-icon-grp">
        <input
          id="search-input"
          type="search"
          placeholder="Have something in mind?"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <button>
          <IoSearch />
        </button>
      </div>
    </form>
  );
};

export default Search;
