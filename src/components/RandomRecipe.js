import React from "react";
import { RecipeDetails } from "../components";

const RandomRecipe = ({ recipe }) => {
  return (
    <>
      <RecipeDetails {...recipe} />
    </>
  );
};

export default RandomRecipe;
