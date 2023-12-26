import React from "react";

function RecipeItem({ recipe, onDelete }) {
  return (
    <tr>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td>
        <img src={recipe.photo} alt={recipe.name} />
      </td>
      <td>{recipe.ingredients}</td>
      <td>{recipe.preparation}</td>
      <td>
        <button type="button" name="delete" onClick={onDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default RecipeItem;
