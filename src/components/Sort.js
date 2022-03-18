import React from "react";
import { sortList } from "../utils/constant";
import { CgSortAz, CgSortZa } from "../utils/icons";
import { useRecipeContext } from "../context/recipe-context";

const Sort = () => {
  const { sortAz, toggleSortOrder, sortRecipes } = useRecipeContext();
  return (
    <form className="sort-filter" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="sort">Sort By</label>
      <select
        name="sort"
        id="sort"
        onChange={(e) => sortRecipes(e.target.value)}
      >
        {sortList.map((sort, index) => {
          return (
            <option key={index} value={sort.toLowerCase()}>
              {sort}
            </option>
          );
        })}
      </select>
      {sortAz ? (
        <CgSortAz
          onClick={() => toggleSortOrder()}
          className="sort-icon filter-color"
        />
      ) : (
        <CgSortZa
          onClick={() => toggleSortOrder()}
          className="sort-icon filter-color"
        />
      )}
    </form>
  );
};

export default Sort;
