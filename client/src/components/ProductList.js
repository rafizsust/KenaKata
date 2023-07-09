import React, { useState, useEffect } from 'react';
import './ProductList.css';
import OnSaleComing from './OnSaleComing';
import Footer from './Footer';
import Pagination from './Pagination';
import ProductGrid from './ProductGrid.js';
import CardComponent from './CardComponent';
import Slider from './Slider';
import cardData from './cardData';

const ProductList = ({ products, searchBarData }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showCarousel, setShowCarousel] = useState(true);
  const [isSaleComing, setIsSaleComing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleCategories, setVisibleCategories] = useState(3); // Number of visible categories
  const [visibleColors, setVisibleColors] = useState(3); // Number of visible colors
  const [showCardComponents, setShowCardComponents] = useState(true);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const productsPerPage = 10; // Number of products to display per page

  const saleStartTime = new Date('2023-07-19T09:00:00Z').getTime();
  const saleDuration = 10 * 24 * 60 * 60 * 1000; // 10 days in milliseconds

  useEffect(() => {
    const currentDate = new Date().getTime();
    const saleEndTime = saleStartTime + saleDuration;

    if (currentDate < saleStartTime - 10 * 24 * 60 * 60 * 1000) {
      setIsSaleComing(false); // Sale is more than 10 days away
    } else if (currentDate < saleEndTime) {
      setIsSaleComing(true); // Sale is ongoing or within 10 days
    } else {
      setIsSaleComing(false); // Sale has ended
    }

    if(searchBarData){
      setShowCarousel(false);
      setShowCardComponents(false);
    }
    else {
      setShowCarousel(true);
      setShowCardComponents(true);
    }


    const updatedFilteredProducts = products.filter((product) => {
      if (selectedCategories.length === 0 && selectedColors.length === 0) {
        return (
          (minPrice === '' || product.price >= minPrice) &&
          (maxPrice === '' || product.price <= maxPrice)
        );
      }

      if (selectedCategories.length > 0 && selectedColors.length === 0) {
        return (
          selectedCategories.includes(product.category) &&
          (minPrice === '' || product.price >= minPrice) &&
          (maxPrice === '' || product.price <= maxPrice)
        );
      }

      if (selectedCategories.length === 0 && selectedColors.length > 0) {
        return (
          selectedColors.some((color) =>
            product.colors.some((productColor) => productColor.name === color)
          ) &&
          (minPrice === '' || product.price >= minPrice) &&
          (maxPrice === '' || product.price <= maxPrice)
        );
      }

      return (
        selectedCategories.includes(product.category) &&
        selectedColors.some((color) =>
          product.colors.some((productColor) => productColor.name === color)
        ) &&
        (minPrice === '' || product.price >= minPrice) &&
        (maxPrice === '' || product.price <= maxPrice)
      );
    });

    setFilteredProducts(updatedFilteredProducts);
    setCurrentPage(1); // Reset current page to 1 when filters change
  }, [products, selectedCategories, selectedColors, minPrice, maxPrice]);

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

const handleSlideClick = (category) => {
  setShowCarousel(false);
  setShowCardComponents(false);
  const updatedFilteredProducts = products.filter((product) => product.category === category);
  setFilteredProducts(updatedFilteredProducts);
  setCurrentPage(1); // Reset current page to 1 when filters change
};

const handleCardClick = (category) => {
  console.log('card called');
  setShowCarousel(false);
  setShowCardComponents(false);
  // setSelectedCategories([category]);
  let updatedFilteredProducts;
  if(category === 'Under30'){
    updatedFilteredProducts = products.filter((product) => product.price < 30);
  }
  else if(category === 'Discount50'){
    updatedFilteredProducts = products.filter((product) => product.discount >= 50);
  }
  else if(category === 'TopRated'){
    updatedFilteredProducts = products.sort((a, b) => b.rating - a.rating);
  }
  else 
  updatedFilteredProducts = products.sort((a, b) => b.totalSold - a.totalSold);
  setFilteredProducts(updatedFilteredProducts);
  setCurrentPage(1);
  console.log(category); // Reset current page to 1 when filters change
};

  const handleShowMoreCategory = () => {
    const totalCategory = new Set(products.map((product) => product.category));
    setVisibleCategories(totalCategory.size);
  };

  const handleShowLessCategory = () => {
    setVisibleCategories(3);
  };


  const handleShowMoreColors = () => {
    const totalColors = [...new Set(products.flatMap((product) => product.colors.map((color) => color.name)))];
    setVisibleColors(totalColors.length);
  };

  const handleShowLessColors = () => {
    setVisibleColors(3);
  };


  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  return (
    <>
      {isSaleComing && <OnSaleComing saleStartTime={saleStartTime} saleDuration={saleDuration} />}
      {showCarousel && <Slider handleClick={handleSlideClick} />}
      {showCardComponents&& <CardComponent data={cardData} handleCardClick={handleCardClick} />}
      <div className="product-list-container">
        <div className="left-section">
          <div className="checkbox-container">
            <h3>Categories</h3>
            {products &&
              [...new Set(products.map((product) => product.category))].slice(0, visibleCategories).map((category) => (
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
            {filteredProducts.length > 3 && visibleCategories === 3 && (
              <button onClick={handleShowMoreCategory}>Show More</button>
            )}
            {visibleCategories > 3 && <button onClick={handleShowLessCategory}>Show Less</button>}
          </div>
          <div className="checkbox-container">
        <h3>Colors</h3>
        {products &&
          [...new Set(products.flatMap((product) => product.colors.map((color) => color.name)))]
            .slice(0, visibleColors)
            .map((color) => (
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
        {filteredProducts.length > 0 && visibleColors === 3 && (
          <button onClick={handleShowMoreColors}>Show More</button>
        )}
        {visibleColors > 3 && <button onClick={handleShowLessColors}>Show Less</button>}
      </div>
          <div className="price-filter">
            <div>
              <h2>Price</h2>
            </div>
            <div className="price-inputs">
              <input
                type="number"
                placeholder="Min"
                value={minPrice}
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  if (value >= 0 || e.target.value === "") {
                    setMinPrice(e.target.value);
                  }
                }}
              />
              <input
                type="number"
                placeholder="Max"
                value={maxPrice}
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  if (value >= 0 || e.target.value === "") {
                    setMaxPrice(e.target.value);
                  }
                }}
              />
            </div>
          </div>



        </div>
        <div className="right-section">
        {selectedCategories.length > 0 || selectedColors.length > 0 && (
          <h4>
            Showing results for category{' '}
            {selectedCategories.length > 0 ? selectedCategories.join(', ') : 'All Categories'} and color{' '}
            {selectedColors.length > 0 ? selectedColors.join(', ') : 'All Colors'}
          </h4>
        )}
          {selectedCategories.length === 0 && selectedColors.length === 0 && currentProducts.length != 0 && (
          <h4>
            Showing Products... 
          </h4>
        )}
          
          {currentProducts.length === 0 && (
          <h4>
            No Product Found...
          </h4>
        )}
          <div className="product-grid">
            <ProductGrid products={currentProducts} />
          </div>
          <div className="product-pagination">
            {totalPages > 1 && (
              <div>
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductList;
