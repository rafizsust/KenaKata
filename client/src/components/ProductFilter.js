import React, { useState, useEffect } from 'react';
import './ProductList.css';
const ProductFilter = ({ products, setFilteredProducts }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

  useEffect(() => {
    const updatedFilteredProducts = products.filter((product) => {
      if (selectedCategories.length === 0 && selectedColors.length === 0) {
        return true; 
      }

      if (selectedCategories.length > 0 && selectedColors.length === 0) {
        return selectedCategories.includes(product.category);
      }

      if (selectedCategories.length === 0 && selectedColors.length > 0) {
        return selectedColors.some((color) =>
          product.colors.some((productColor) => productColor.name === color)
        );
      }

      return (
        selectedCategories.includes(product.category) &&
        selectedColors.some((color) =>
          product.colors.some((productColor) => productColor.name === color)
        )
      );
    });

    setFilteredProducts(updatedFilteredProducts);
  }, [products, selectedCategories, selectedColors]);

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    setSelectedCategories((prevSelected) => {
      if (checked) {
        return [...prevSelected, value];
      } else {
        return prevSelected.filter((category) => category !== value);
      }
    });
  };

  const handleColorChange = (e) => {
    const { value, checked } = e.target;
    setSelectedColors((prevSelected) => {
      if (checked) {
        return [...prevSelected, value];
      } else {
        return prevSelected.filter((color) => color !== value);
      }
    });
  };

  return (
    <div className="left-section">
      <div className="checkbox-container">
        <h3>Categories</h3>
        {products &&
          [...new Set(products.map((product) => product.category))].map((category) => (
            <label key={category}>
              <input
                type="checkbox"
                value={category}
                checked={selectedCategories.includes(category)}
                onChange={handleCategoryChange}
              />
              {category}
            </label>
          ))}
      </div>
      <div className="checkbox-container">
        <h3>Colors</h3>
        {products &&
          [...new Set(products.flatMap((product) => product.colors.map((color) => color.name)))].map((color) => (
            <label key={color}>
              <input
                type="checkbox"
                value={color}
                checked={selectedColors.includes(color)}
                onChange={handleColorChange}
              />
              {color}
            </label>
          ))}
      </div>
    </div>
  );
};

export default ProductFilter;
