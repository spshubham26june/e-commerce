import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products/");
      const products = await response.json();
      setData(products);
      setFilter(products);
      setLoading(false);
    };

    getProducts();
  }, []);

  const handleClear = () => {
    setSearchTerm("");
    setFilter(data);
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  };

  const Loading = () => (
    <>
      {[...Array(6)].map((_, index) => (
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4" key={index}>
          <Skeleton height={592} />
        </div>
      ))}
    </>
  );

  const cardColors = ["#FDEDEC", "#E8F8F5", "#FEF9E7", "#EBF5FB", "#F5EEF8", "#FDF2E9"];

  const ShowProducts = () => (
    <>
      <div className="py-4 d-flex justify-content-end">
        <div className="dropdown">
          <button
            className="btn btn-outline-dark dropdown-toggle"
            type="button"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            Filter
          </button>
          {showDropdown && (
            <div className="dropdown-menu show position-absolute border-0 shadow-sm mt-2">
              <button className="dropdown-item" onClick={() => { setFilter(data); setShowDropdown(false); }}>All</button>
              <button className="dropdown-item" onClick={() => { filterProduct("men's clothing"); setShowDropdown(false); }}>Men's Clothing</button>
              <button className="dropdown-item" onClick={() => { filterProduct("women's clothing"); setShowDropdown(false); }}>Women's Clothing</button>
              <button className="dropdown-item" onClick={() => { filterProduct("jewelery"); setShowDropdown(false); }}>Jewelery</button>
              <button className="dropdown-item" onClick={() => { filterProduct("electronics"); setShowDropdown(false); }}>Electronics</button>
            </div>
          )}
        </div>
      </div>

      {filter.length > 0 ? (
        filter.map((product, index) => (
          <div
            id={product.id}
            key={product.id}
            className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4"
          >
            <div
              className="custom-card card text-center h-100"
              style={{ backgroundColor: cardColors[index % cardColors.length] }}
            >
              <img className="card-img-top p-3" src={product.image} alt="Card" height={300} />
              <div className="card-body">
                <h5 className="card-title">{product.title.substring(0, 12)}...</h5>
                <p className="card-text">{product.description.substring(0, 90)}...</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item lead">$ {product.price}</li>
              </ul>
              <div className="card-body">
                <Link to={`/product/${product.id}`} className="custom-btn m-1">
                  Buy Now
                </Link>
                <button
                  className="custom-btn m-1"
                  onClick={() => {
                    toast.success("Added to cart");
                    addProduct(product);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="col-12 text-center mt-4">
          <h5>No products found.</h5>
        </div>
      )}
    </>
  );

  return (
    <div className="container my-3 py-3">
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>

      {/* Inline CSS injected here */}
      <style>{`
        .custom-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: none;
          border-radius: 12px;
        }

        .custom-card:hover {
          transform: scale(1.03);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }

        .custom-btn {
          background-color: #212529;
          color: #fff;
          border: none;
          padding: 8px 16px;
          border-radius: 6px;
          text-decoration: none;
          transition: background-color 0.3s ease, transform 0.2s ease;
        }

        .custom-btn:hover {
          background-color: #343a40;
          transform: translateY(-2px);
        }

        .dropdown-menu {
          min-width: 200px;
          z-index: 1000;
        }
      `}</style>
    </div>
  );
};

export default Products;
