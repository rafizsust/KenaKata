import React, { useState, useEffect, useRef } from 'react';
import './NavBar.css';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import ProductList from './components/ProductList';
import data from './components/data';
import cartData from './components/cartData';

const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [isSearchBarEmpty, setIsSearchBarEmpty] = useState(true);
  const location = useLocation();
  const navbarRef = useRef(null);
  const userData = localStorage.getItem('userData');
  const isLoggedIn = !!userData;
  const navigate = useNavigate();

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleSearch = (event) => {
    const userInput = event.target.value.toLowerCase();
    setSearchQuery(userInput);
    setIsSearchBarEmpty(userInput === '');
    location.pathname = '/';
  };

  const handleCloseNavbar = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setShowNavbar(false);
    }
  };

  useEffect(() => {
    const searchResults = data.filter((product) =>
      Object.values(product)
        .join(' ')
        .toLowerCase()
        .includes(searchQuery)
    );
    setFilteredData(searchResults);
  }, [searchQuery]);

  useEffect(() => {
    document.addEventListener('mousedown', handleCloseNavbar);
    document.addEventListener('scroll', handleCloseNavbar);
    return () => {
      document.removeEventListener('mousedown', handleCloseNavbar);
      document.removeEventListener('scroll', handleCloseNavbar);
    };
  }, []);

  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    const parsedData = JSON.parse(storedData);
    const userId = parsedData?.id;
    const currentUser = cartData.find((user) => user.user_id === userId);
    let totalCount = 0;

    if (currentUser) {
      currentUser.cart.forEach((product) => {
        totalCount += product.count;
      });
    }

    setCartItemCount(totalCount);
  }, [localStorage.getItem('userData')]);

  const handleHomeLinkClick = () => {
    window.location.href = '/';
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  const isHomePage = location.pathname === '/';
  const isCart = location.pathname === '/cart';

  return (
    <>
      <nav className="navbar" ref={navbarRef}>
        <div className="container">
          <div className="left-nav">
            <div className="logo">
              <NavLink to="/" onClick={handleHomeLinkClick}>
                <img src={require('./components/assets/logo.png')} alt="Logo" />
              </NavLink>
            </div>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search Products..."
                onChange={handleSearch}
                value={searchQuery}
              />
              <button type="submit">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <i className="fas fa-bars fa-lg"></i>
          </div>

          <div className={`nav-elements ${showNavbar && 'active'}`}>
            <ul>
              <li>
                <NavLink to="/" onClick={handleHomeLinkClick}>Home</NavLink>
              </li>
              {!isLoggedIn && (
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
              )}

              {isLoggedIn && (
                <>
                  <li>
                    <NavLink to="/account">Account</NavLink>
                    <button
                      style={{
                        border: "none",
                        background: "none",
                        color: "#d88200",
                        padding: 0,
                        cursor: "pointer",
                      }}
                      onClick={handleLogout}
                    >
                      (Logout)
                    </button>
                  </li>

                  <li>
                    <NavLink to="/cart">
                      <i className="fas fa-shopping-cart fa-lg"></i>
                      <span className="item-count">{cartItemCount}</span>
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      {isHomePage && <ProductList products={filteredData} searchBarData={!isSearchBarEmpty} />}
    </>
  );
};

export default NavBar;
