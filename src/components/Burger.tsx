import React, { useState } from 'react';
import './BurgerStyles.css';

type Ingredients = {
  lettuce: number;
  tomato: number;
  cheese: number;
  meat: number;
};

const Burger: React.FC = () => {
  const [ingredients, setIngredients] = useState<Ingredients>({
    lettuce: 0,
    tomato: 0,
    cheese: 0,
    meat: 0,
  });

  const addIngredient = (ingredient: keyof Ingredients) => {
    setIngredients((prevIngredients) => ({
      ...prevIngredients,
      [ingredient]: prevIngredients[ingredient] + 1,
    }));
  };

  const removeIngredient = (ingredient: keyof Ingredients) => {
    setIngredients((prevIngredients) => ({
      ...prevIngredients,
      [ingredient]: Math.max(prevIngredients[ingredient] - 1, 0),
    }));
  };

  const renderIngredients = () => {
    return Object.entries(ingredients).map(([ingredient, quantity]) => {
      return Array.from({ length: quantity }).map((_, index) => (
        <div key={`${ingredient}-${index}`} className={`ingredient ${ingredient}`}>
          {ingredient}
        </div>
      ));
    });
  };

  return (
    <div className="burger-container">
      <h1>Build Your Burger</h1>
      <div className="burger">
        {renderIngredients()}
      </div>
      <div className="controls">
        <button onClick={() => addIngredient('lettuce')}>Add Lettuce</button>
        <button onClick={() => addIngredient('tomato')}>Add Tomato</button>
        <button onClick={() => addIngredient('cheese')}>Add Cheese</button>
        <button onClick={() => addIngredient('meat')}>Add Meat</button>
        <br />
        <button onClick={() => removeIngredient('lettuce')}>Remove Lettuce</button>
        <button onClick={() => removeIngredient('tomato')}>Remove Tomato</button>
        <button onClick={() => removeIngredient('cheese')}>Remove Cheese</button>
        <button onClick={() => removeIngredient('meat')}>Remove Meat</button>
      </div>
    </div>
  );
};

export default Burger;
