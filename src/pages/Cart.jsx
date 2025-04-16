import React from "react";
import { Footer, Navbar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { Link } from "react-router-dom";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const EmptyCart = () => {
    return (
      <div className="container" style={{ marginTop: '50px' }}>
        <div className="row">
          <div className="col-md-12 py-5 text-center" style={{ backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <h4 className="p-3 display-5" style={{ color: '#555' }}>Your Cart is Empty</h4>
            <Link to="/" className="btn btn-outline-info mx-4" style={{ borderRadius: '5px', fontWeight: 'bold' }}>
              <i className="fa fa-arrow-left"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const addItem = (product) => {
    dispatch(addCart(product));
  };
  const removeItem = (product) => {
    dispatch(delCart(product));
  };

  const ShowCart = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;
    state.map((item) => (subtotal += item.price * item.qty));
    state.map((item) => (totalItems += item.qty));

    return (
      <section className="h-100" style={{ backgroundColor: '#e9ecef', paddingBottom: '50px' }}>
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4" style={{ border: '1px solid #ddd', borderRadius: '10px' }}>
                <div className="card-header py-3" style={{ backgroundColor: '#f0f8ff', borderBottom: '1px solid #ddd' }}>
                  <h5 className="mb-0" style={{ color: '#333', fontWeight: 'bold' }}>Item List</h5>
                </div>
                <div className="card-body">
                  {state.map((item) => (
                    <div key={item.id} style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #eee' }}>
                      <div className="row d-flex align-items-center">
                        <div className="col-lg-3 col-md-12">
                          <div
                            className="bg-image rounded"
                            data-mdb-ripple-color="light"
                            style={{ overflow: 'hidden', borderRadius: '8px' }}
                          >
                            <img
                              src={item.image}
                              alt={item.title}
                              width="100"
                              height="75"
                              style={{ display: 'block', width: '100%', height: 'auto', objectFit: 'cover' }}
                            />
                          </div>
                        </div>

                        <div className="col-lg-5 col-md-6">
                          <p className="mb-1" style={{ fontWeight: 'bold', color: '#333' }}>{item.title}</p>
                          {/* <p className="mb-1">Color: blue</p>
                          <p className="mb-0">Size: M</p> */}
                        </div>

                        <div className="col-lg-4 col-md-6">
                          <div
                            className="d-flex mb-4 align-items-center"
                            style={{ maxWidth: "300px" }}
                          >
                            <button
                              className="btn btn-sm px-2"
                              onClick={() => removeItem(item)}
                              style={{ backgroundColor: '#dc3545', color: 'white', borderRadius: '5px', fontWeight: 'bold' }}
                            >
                              <i className="fas fa-minus"></i>
                            </button>

                            <p className="mx-3 mb-0" style={{ fontSize: '1.1rem' }}>{item.qty}</p>

                            <button
                              className="btn btn-sm px-2"
                              onClick={() => addItem(item)}
                              style={{ backgroundColor: '#28a745', color: 'white', borderRadius: '5px', fontWeight: 'bold' }}
                            >
                              <i className="fas fa-plus"></i>
                            </button>
                          </div>

                          <p className="text-start text-md-center mb-0">
                            <strong>
                              <span className="text-muted">{item.qty}</span> x ${item.price}
                            </strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4" style={{ border: '1px solid #ddd', borderRadius: '10px' }}>
                <div className="card-header py-3" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #ddd' }}>
                  <h5 className="mb-0" style={{ color: '#333', fontWeight: 'bold' }}>Order Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products ({totalItems})
                      <span>${Math.round(subtotal)}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>${shipping}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                      </div>
                      <span>
                        <strong style={{ color: '#007bff' }}>${Math.round(subtotal + shipping)}</strong>
                      </span>
                    </li>
                  </ul>

                  <Link
                    to="/checkout"
                    className="btn btn-success btn-lg btn-block"
                    style={{ borderRadius: '5px', fontWeight: 'bold' }}
                  >
                    Go to checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container my-4">
        <h1 className="text-center mb-4" style={{ color: '#333', fontWeight: 'bold' }}>Shopping Cart</h1>
        <hr style={{ borderColor: '#ccc', borderWidth: '2px' }} />
        {state.length > 0 ? <ShowCart /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Cart;