// // RecipeCreate.jsx

import React, { useState } from "react";
import "./App.css";

function RecipeCreate({ addRecipe }) {
  const [recipe, setRecipe] = useState({
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ensure that all required fields are filled
    if (!recipe.name || !recipe.cuisine || !recipe.photo || !recipe.ingredients || !recipe.preparation) {
      alert("Please fill in all fields.");
      return;
    }

    // Create a new recipe object
    const newRecipe = {
      name: recipe.name,
      cuisine: recipe.cuisine,
      photo: recipe.photo,
      ingredients: recipe.ingredients,
      preparation: recipe.preparation,
    };

    // Update the state with the new recipe
    addRecipe(newRecipe);

    // Clear the form
    setRecipe({
      name: "",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: "",
    });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
      <tbody>
      <tr class="form-row">
            <td class="form-col form-mid">
              <input 
                type="text"
                name="name"
                value={recipe.name}
                onChange={handleChange}
                required
                placeholder="name"
              />
            </td>
            <td class="form-col form-mid">
              <input
                type="text"
                name="cuisine"
                value={recipe.cuisine}
                onChange={handleChange}
                required
                placeholder="cuisine"
              />
            </td>
            <td class="form-col form-mid">
              <input
                type="url"
                name="photo"
                value={recipe.photo}
                onChange={handleChange}
                required
                placeholder="url"
              />
            </td>
            <td class="form-col">
              <textarea
                name="ingredients"
                value={recipe.ingredients}
                onChange={handleChange}
                rows="4"
                required
                placeholder="ingredients"
              />
            </td>
            <td class="form-col">
              <textarea
                name="preparation"
                value={recipe.preparation}
                onChange={handleChange}
                rows="4"
                required
                placeholder="preparation"
              />
            </td>
            <td class="form-col form-mid">
              <button type="submit">Create</button>
            </td>
          </tr>
      </tbody>
      </table>
      
     </form>
  );

}

export default RecipeCreate;


