import {
  SET_LOADING,
  SET_MODAL_OPEN,
  SET_MODAL_CLOSE,
  SET_RANDOM_RECIPE,
  SET_RECIPES,
  SET_SINGLE_RECIPE,
  SET_SINGLE_RECIPE_LOADING,
  SET_UNIQUE_CATEGORY,
  SET_TOGGLE_SORT,
  SET_VIEW,
  SET_STYLE_FILTER,
  SET_SORT_RECIPES,
  SET_TOGGLE_SORT_ORDER,
  SET_SEARCH,
} from "./dispatch-actions";

const reducer = (state, action) => {
  if (action.type === SET_RECIPES) {
    return {
      ...state,
      recipes: action.payload,
      filtered_recipes: action.payload,
      loading: false,
    };
  }
  if (action.type === SET_LOADING) {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === SET_SINGLE_RECIPE) {
    return {
      ...state,
      recipe: action.payload,
      recipe_loading: false,
    };
  }
  if (action.type === SET_SINGLE_RECIPE_LOADING) {
    return {
      ...state,
      recipe_loading: true,
    };
  }
  if (action.type === SET_RANDOM_RECIPE) {
    return {
      ...state,
      random_recipe: state.recipes[action.payload],
    };
  }
  if (action.type === SET_MODAL_OPEN) {
    return { ...state, isModalOpen: true };
  }
  if (action.type === SET_MODAL_CLOSE) {
    return { ...state, isModalOpen: false };
  }

  if (action.type === SET_UNIQUE_CATEGORY) {
    const newCategories = [
      "all",
      ...new Set(state.recipes.map((recipe) => recipe.style)),
    ];
    return { ...state, recipes_category: newCategories };
  }

  if (action.type === SET_TOGGLE_SORT) {
    const newSort = !state.sortAz;

    return {
      ...state,
      sortAz: newSort,
    };
  }

  if (action.type === SET_TOGGLE_SORT_ORDER) {
    let tempRecipes = [...state.filtered_recipes];
    if (state.sortAz && state.sort_selected === "name") {
      tempRecipes = tempRecipes.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    } else {
      tempRecipes = tempRecipes.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }

    if (state.sortAz && state.sort_selected === "duration") {
      tempRecipes = tempRecipes.sort((a, b) => a.duration - b.duration);
    } else if (!state.sortAz && state.sort_selected === "duration") {
      tempRecipes = tempRecipes.sort((a, b) => b.duration - a.duration);
    }
    return {
      ...state,
      filtered_recipes: tempRecipes,
    };
  }

  if (action.type === SET_VIEW) {
    if (action.payload === "grid-view") {
      return { ...state, listView: false };
    }
    if (action.payload === "list-view") {
      return { ...state, listView: true };
    }
  }

  if (action.type === SET_STYLE_FILTER) {
    // reinitialize the filtered list state
    state.filtered_recipes = state.recipes;
    let newFilteredRecipes = state.recipes.filter((recipe) => {
      if (action.payload === "all") {
        return state.recipes;
      }
      return recipe.style === action.payload;
    });

    return { ...state, filtered_recipes: newFilteredRecipes };
  }

  if (action.type === SET_SORT_RECIPES) {
    if (!action.payload) {
      return { ...state };
    }
    let tempRecipes = [...state.filtered_recipes];

    if (action.payload === "name") {
      tempRecipes = tempRecipes.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    if (action.payload === "duration") {
      tempRecipes = tempRecipes.sort((a, b) => a.duration - b.duration);
    }
    return {
      ...state,
      sort_selected: action.payload,
      filtered_recipes: tempRecipes,
    };
  }

  if (action.type === SET_SEARCH) {
    // reinitialize the filtered list state
    state.filtered_recipes = state.recipes;
    let tempRecipes = [...state.recipes];

    let newFilter = tempRecipes.filter((recipe) => {
      return recipe.name.toLowerCase().includes(action.payload.toLowerCase());
    });

    return {
      ...state,
      filtered_recipes: newFilter,
      searchQuery: action.payload,
    };
  }
  return state;
};

export default reducer;
