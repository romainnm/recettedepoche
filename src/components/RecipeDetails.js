import React from "react";
import { RiTimer2Line } from "../utils/icons";
import { minToH } from "../utils/helper";
import styled from "styled-components";

const RecipeDetails = ({
  name,
  ingredients,
  instructions,
  style,
  duration,
}) => {
  return (
    <StyleWrapper className="recipe-infos-container">
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

      <ul>
        <h4>Ingredients</h4>
        {ingredients?.map((ingredient, index) => {
          return <li key={index}>{ingredient}</li>;
        })}
      </ul>

      <ol>
        <h4>Instructions</h4>
        {instructions?.map((instruction, index) => {
          return <li key={index}>{instruction}</li>;
        })}
      </ol>
    </StyleWrapper>
  );
};

const StyleWrapper = styled.article`
  .timer {
    color: #f57c73;
    font-weight: bold;
  }
  .timer-icon {
    font-size: 1.2rem;
  }
  .recipe-infos {
    display: flex;
    gap: 15px;
    align-items: center;
    margin: 10px 0;
  }
  .recipe-info-group {
    display: flex;
    align-items: center;
    gap: 3px;
  }
  h4 {
    font-size: 1.1rem;
    margin-top: 10px;
  }
  li {
    margin: 5px 0;
    letter-spacing: 0.06rem;
  }
`;

export default RecipeDetails;
