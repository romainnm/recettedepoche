import React, { useEffect } from "react";
import { useRecipeContext } from "../context/recipe-context";
import { Link, useParams } from "react-router-dom";
import { RecipeDetails } from "../components";

const SingleRecipe = () => {
  const { id } = useParams();
  const { fetchSingleRecipe, apiEndPoint, recipe, recipe_loading } =
    useRecipeContext();

  useEffect(() => {
    fetchSingleRecipe(`${apiEndPoint}recipes/${id}`);
  }, []);

  if (recipe_loading) {
    return <div>Loading...</div>;
  }
  return (
    <main className="single-recipe-container">
      <div className="center-content">
        <div className="single-wrap">
          <RecipeDetails {...recipe} />
          <div className="button-container">
            <Link to={"/recettedepoche/recipes"} className="btn btn-back">
              Back
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleRecipe;
