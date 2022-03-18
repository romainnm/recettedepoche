import { Link } from "react-router-dom";
import { useRecipeContext } from "../context/recipe-context";
import { RandomRecipe } from "../components";
import { IoDiceOutline, AiFillCloseCircle } from "../utils/icons";

const Home = () => {
  const { getRandomRecipe, random_recipe, loading, isModalOpen, closeModal } =
    useRecipeContext();

  if (loading) {
    return (
      <main className="home-content">
        <h2>...Loading</h2>
      </main>
    );
  }

  return (
    <main className="home-content">
      <div className="center-content">
        <div className="home-grid">
          <div className="home-grid-left">
            <h2>What's for dinner?</h2>
            <div className="button-container">
              <Link to={"/recipes"} className="btn btn-browse">
                Browse Recipes
              </Link>
              <button
                type="button"
                className="btn btn-random"
                onClick={() => getRandomRecipe()}
              >
                Random choice <IoDiceOutline className="btn-random-icon" />
              </button>
            </div>
          </div>
          <img
            src="./assets/images/undraw_eating_together_re_ux62.svg"
            alt="splashed"
            className="splashed-image"
          />
        </div>
        <div
          className={
            isModalOpen ? `show-overlay recipe-overlay` : `recipe-overlay`
          }
        >
          <AiFillCloseCircle
            className="close-overlay"
            onClick={() => closeModal()}
          />
          <RandomRecipe recipe={random_recipe} />
        </div>
      </div>
    </main>
  );
};

export default Home;
