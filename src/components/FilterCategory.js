import React from "react";
import { useRecipeContext } from "../context/recipe-context";

const FilterCategory = () => {
  const { recipes_category, filterByStyle } = useRecipeContext();

  return (
    <div className="filter-category">
      {recipes_category.map((category, index) => {
        return (
          <button
            key={index}
            type="button"
            className="btn-category"
            onClick={() => filterByStyle(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default FilterCategory;
