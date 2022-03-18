import React from "react";
import { useRecipeContext } from "../context/recipe-context";
import {
  RecipeCard,
  Search,
  Sort,
  FilterCategory,
  GridListView,
  NoResults,
} from "../components";

const Recipes = () => {
  const { filtered_recipes, listView } = useRecipeContext();

  if (filtered_recipes.length === 0) {
    return (
      <main>
        <div className="center-content">
          <div className="search-filter-group">
            <Search />
            <FilterCategory />
            <hr className="filterHR" />
            <div className="view-sort">
              <Sort />
              <GridListView />
            </div>
          </div>
          <NoResults />
        </div>
      </main>
    );
  }

  return (
    <main className="recipes-container">
      <div className="center-content">
        <div className="recipe-list">
          <div className="search-filter-group">
            <Search />
            <FilterCategory />
            <hr className="filterHR" />
            <div className="view-sort">
              <Sort />
              <GridListView />
            </div>
          </div>
          <div className={`${listView ? null : "view-layout"}`}>
            {filtered_recipes.map((recipe) => (
              <RecipeCard key={recipe?._id} {...recipe} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Recipes;
