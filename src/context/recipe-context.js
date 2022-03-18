import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducer/recipe-reducer";
import {
  SET_RECIPES,
  SET_LOADING,
  SET_SINGLE_RECIPE,
  SET_SINGLE_RECIPE_LOADING,
  SET_RANDOM_RECIPE,
  SET_MODAL_OPEN,
  SET_MODAL_CLOSE,
  SET_UNIQUE_CATEGORY,
  SET_TOGGLE_SORT,
  SET_VIEW,
  SET_STYLE_FILTER,
  SET_SORT_RECIPES,
  SET_TOGGLE_SORT_ORDER,
  SET_SEARCH
} from "../reducer/dispatch-actions";
import axios from "axios";
const RecipeContext = React.createContext();
const apiEndPoint = "https://recette-de-poche.herokuapp.com/api/v1/";

// Init States for useReducer
const initialState = {
  loading: true,
  recipes: [],
  filtered_recipes: [],
  recipe: [],
  recipe_loading: true,
  random_recipe: [],
  recipes_category: [],
  isModalOpen: false,
  listView: true,
  sortAz: true,
  sort_selected: "name",
  searchQuery: "",
};

const RecipeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetching and loading data (recipes)
  const fetchRecipes = async (url) => {
    dispatch({ type: SET_LOADING });
    const response = await axios(url).catch((err) => console.log(err));
    const recipesList = response.data.recipes;
    dispatch({
      type: SET_RECIPES,
      payload: recipesList,
    });
  };
  useEffect(() => {
    fetchRecipes(`${apiEndPoint}recipes`);
  }, []);

  // Fetch Single recipe
  const fetchSingleRecipe = async (url) => {
    dispatch({ type: SET_SINGLE_RECIPE_LOADING });
    const response = await axios(url).catch((err) => console.log(err));
    const singleRecipe = response.data.recipe;
    dispatch({ type: SET_SINGLE_RECIPE, payload: singleRecipe });
  };

  // Sort A-Z by default
  useEffect(() => {
    dispatch({ type: SET_SORT_RECIPES });
  }, []);
  // Sort Asc-Desc
  useEffect(() => {
    dispatch({ type: SET_TOGGLE_SORT_ORDER });
  }, [state.sortAz, state.sort_selected, state.recipes_category]);

  // Modal Behavious on home page
  const openModal = () => {
    dispatch({ type: SET_MODAL_OPEN });
  };
  const closeModal = () => {
    dispatch({ type: SET_MODAL_CLOSE });
  };
  const getUniqueCategory = () => {
    dispatch({ type: SET_UNIQUE_CATEGORY });
  };

  useEffect(() => {
    getUniqueCategory();
  }, [state.recipes]);

  const getRandomRecipe = () => {
    const randomIndex = Math.floor(Math.random() * state.recipes.length);
    dispatch({ type: SET_RANDOM_RECIPE, payload: randomIndex });
    openModal();
  };

  const toggleSortOrder = () => {
    dispatch({ type: SET_TOGGLE_SORT });
  };

  const chooseView = (view) => {
    dispatch({ type: SET_VIEW, payload: view });
  };

  const filterByStyle = (category) => {
    dispatch({ type: SET_STYLE_FILTER, payload: category });
  };
  const sortRecipes = (value) => {
    dispatch({ type: SET_SORT_RECIPES, payload: value });
  };

const handleSearch = (search) => {
  dispatch({type:SET_SEARCH, payload:search })
}

  return (
    <RecipeContext.Provider
      value={{
        ...state,
        fetchSingleRecipe,
        apiEndPoint,
        getRandomRecipe,
        openModal,
        closeModal,
        toggleSortOrder,
        chooseView,
        filterByStyle,
        sortRecipes,
        handleSearch
  
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
export const useRecipeContext = () => {
  return useContext(RecipeContext);
};

export { RecipeContext, RecipeProvider };
