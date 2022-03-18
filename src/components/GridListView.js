import React from "react";
import { BsGridFill, MdViewList } from "../utils/icons";
import { useRecipeContext } from "../context/recipe-context";

const GridListView = () => {
  const { listView, chooseView } = useRecipeContext();
  return (
    <div className="view-group">
      <MdViewList
        className={`${listView ? "list-icon filter-color" : "list-icon "}`}
        onClick={() => chooseView("list-view")}
      />
      <BsGridFill
        className={`${listView ? "grid-icon" : "grid-icon filter-color"}`}
        onClick={() => chooseView("grid-view")}
      />
    </div>
  );
};

export default GridListView;
