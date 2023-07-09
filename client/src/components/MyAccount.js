import React, { useState, useEffect } from 'react';
import MyOrders from './MyOrders';
import './MyAccount.css';
import Footer from './Footer';
import ProductGrid from './ProductGrid';
import Pagination from './Pagination';
import data from './data';
import userdata from './userData';

const MyAccount = () => {
  useEffect(() => {
    setCurrentPage(1);
  }, []);

  const storedData = localStorage.getItem('userData');
  const parsedData = JSON.parse(storedData);
  const userId = parsedData.id;
  const userData = userdata.find((user) => user.id === userId);

  const [currentPage, setCurrentPage] = useState(1);
  const [showModifyForm, setShowModifyForm] = useState(false);
  const [modifiedUserData, setModifiedUserData] = useState(userData);
  const [selectedImage, setSelectedImage] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  const handleModify = () => {
    setShowModifyForm(true);
    setModifiedUserData(userData);
    setFormErrors({});
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setModifiedUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(modifiedUserData);
    if (Object.keys(errors).length === 0) {
      console.log('Modified user data:', modifiedUserData);
      console.log('Selected image:', selectedImage);
      setShowModifyForm(false);
    } else {
      setFormErrors(errors);
    }
  };

  const validateForm = (userData) => {
    const errors = {};
    if (!userData.name) {
      errors.name = 'Name is required';
    }
    if (!userData.email) {
      errors.email = 'Email is required';
    }
    if (!userData.contact) {
      errors.contact = 'Contact is required';
    }
    return errors;
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const productsPerPage = 6;
  const totalPages = Math.ceil(data.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = data.slice(startIndex, endIndex);

  return (
    <>
      <div className="my-account">
        <div className="user-info">
          {showModifyForm ? (
            <form onSubmit={handleFormSubmit}>
              <h3>Modify User Information</h3>
              <label>
                Profile Image:
                <input
                  type="file"
                  name="profileImage"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={modifiedUserData.name}
                  onChange={handleFormChange}
                />
                {formErrors.name && <span className="error-message">{formErrors.name}</span>}
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={modifiedUserData.email}
                  onChange={handleFormChange}
                />
                {formErrors.email && <span className="error-message">{formErrors.email}</span>}
              </label>
              <label>
                Contact:
                <input
                  type="text"
                  name="contact"
                  value={modifiedUserData.contact}
                  onChange={handleFormChange}
                />
                {formErrors.contact && (
                  <span className="error-message">{formErrors.contact}</span>
                )}
              </label>
              <label>
                Delivery Address:
                <input
                  type="text"
                  name="deliveryAddress"
                  value={modifiedUserData.deliveryAddress}
                  onChange={handleFormChange}
                />
              </label>
              <div className="save-button-container">
                <button type="submit">Save</button>
              </div>
            </form>
          ) : (
            <>
              <div className="profile-image">
                <img src={userData.image} alt="Profile" />
              </div>
              <h3>User Information</h3>
              <hr className="cart-horizontal-line" />
              <p>Name: {userData.name}</p>
              <p>Email: {userData.email}</p>
              <p>Contact: {userData.contact}</p>
              <p>Delivery Address: {userData.deliveryAddress || 'Not provided'}</p>
              <div>
                <button className="user-info-modify-button" onClick={handleModify}>
                  Modify
                </button>
              </div>
            </>
          )}
        </div>
        <MyOrders />
      </div>
      <div className="more-product-section">
        <p>Explore More Products:</p>
      </div>
      <div>
        <ProductGrid products={currentProducts} />
      </div>
      <div className="product-pagination">
        {totalPages > 1 && (
          <div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default MyAccount;