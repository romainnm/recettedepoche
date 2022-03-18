import React from "react";
import { Link } from "react-router-dom";
import { minToH } from "../utils/helper";
import { RiTimer2Line } from "../utils/icons";
import styled from "styled-components";
import { useRecipeContext } from "../context/recipe-context";
import breakfast from "../assets/images/breakfast.svg";

const RecipeCard = (recipe) => {
  const { listView } = useRecipeContext();
  const { _id: recipeId, name, duration, style } = recipe;

  if (listView) {
    return (
      <StyleListWrapper className="recipe-card">
        <h3>{name}</h3>

        <div className="recipe-infos">
          <div className="left-group">
            <div className="recipe-info-group">
              <RiTimer2Line className="timer timer-icon" />
              <span>{minToH(duration)}</span>
            </div>

            <div className="recipe-info-group">
              <span className="timer">Category: </span> {style}
            </div>
          </div>
          <div className="right-group">
            <Link
              to={`/recettedepoche/recipes/${recipeId}`}
              className="btn-details"
            >
              +Details
            </Link>
          </div>
        </div>
      </StyleListWrapper>
    );
  }
  return (
    <StyleGridWrapper>
      <div className="recipe-card-grid">
        <h3>{name}</h3>
        <div className="recipe-infos">
          <div className="recipe-info-group">
            <RiTimer2Line className="timer timer-icon" />
            <span>{minToH(duration)}</span>
          </div>

          <div className="recipe-info-group">
            <span className="timer">Category: </span> {style}
          </div>
        </div>
        <div className="recipe-content">
          <img src={breakfast} alt="default" />
          <Link
            to={`/recettedepoche/recipes/${recipeId}`}
            className="btn btn-grid-detail"
          >
            Details
          </Link>
        </div>
      </div>
    </StyleGridWrapper>
  );
};

const StyleGridWrapper = styled.div`
  .timer {
    color: #f57c73;
    font-weight: bold;
  }
  .timer-icon {
    font-size: 1.2rem;
  }
  .recipe-card-grid {
    border-radius: 5px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
    background-color:#fff;
  }
  .recipe-card-grid img {
    width: 100%;
    opacity: 0.1;
  }
  .recipe-infos {
    display: flex;
    margin: 10px 0;
    padding: 0 40px;
  }
  .recipe-info-group {
    display: flex;
    align-items: center;
    gap: 3px;
    margin-right: 10px;
  }
  .recipe-content {
    position: relative;
  }
  .btn-grid-detail {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    background-color: var(--clr-palette-4);
  }
  .btn-grid-detail:hover {
    background-color: var(--clr-palette-5);
  }
  h3{
    padding: 40px 0 0 40px;
  }
  @media screen and (min-width: 800px) {
    .recipe-card-grid {
      margin-top: 0px;
      padding: 0px;
    }
  }
`;

const StyleListWrapper = styled.div`
  .timer {
    color: #f57c73;
    font-weight: bold;
  }
  .timer-icon {
    font-size: 1.2rem;
  }
  .recipe-infos {
    display: flex;
    justify-content: space-between;
  }
  .left-group {
    display: flex;
  }
  .recipe-info-group {
    display: flex;
    align-items: center;
    gap: 3px;
    margin-right: 10px;
  }
  .btn-details {
    padding: 6px 8px;
    background-color: var(--clr-palette-1);
    border-radius: 5px;
    font-size: 0.7rem;
    color: #fff;
  }
  .btn-details:hover {
    background-color: var(--clr-palette-5);
  }
`;

export default RecipeCard;
