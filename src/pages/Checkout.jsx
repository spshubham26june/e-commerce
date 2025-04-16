import React from "react";
import { Footer, Navbar } from "../components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Checkout = () => {
  const state = useSelector((state) => state.handleCart);

  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div
            className="col-md-12 py-5 text-center"
            style={{ backgroundColor: "#f0f4f8", borderRadius: "10px" }}
          >
            <h4 className="p-3 display-5 text-danger">No item in Cart</h4>
            <Link to="/" className="btn btn-outline-info mx-4">
              <i className="fa fa-arrow-left"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const ShowCheckout = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;

    state.map((item) => (subtotal += item.price * item.qty));
    state.map((item) => (totalItems += item.qty));

    return (
      <>
        <div className="container py-5" style={{ backgroundColor: "#eef5f9", borderRadius: "12px" }}>
          <div className="row my-4">
            <div className="col-md-5 col-lg-4 order-md-last">
              <div className="card mb-4 shadow-sm" style={{ backgroundColor: "#fefefe" }}>
                <div className="card-header py-3" style={{ backgroundColor: "#6c5ce7", color: "white" }}>
                  <h5 className="mb-0">Order Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                      Products ({totalItems})<span>${Math.round(subtotal)}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                      Shipping<span>${shipping}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between fw-bold text-primary">
                      Total<span>${Math.round(subtotal + shipping)}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-lg-8">
              <div className="card shadow-sm" style={{ backgroundColor: "#ffffff" }}>
                <div className="card-header py-3" style={{ backgroundColor: "#00cec9", color: "white" }}>
                  <h4 className="mb-0">Billing Address</h4>
                </div>
                <div className="card-body">
                  <form className="needs-validation" noValidate>
                    <div className="row g-3">
                      <div className="col-sm-6 my-1">
                        <label htmlFor="firstName" className="form-label">
                          First name
                        </label>
                        <input type="text" className="form-control" id="firstName" required />
                      </div>
                      <div className="col-sm-6 my-1">
                        <label htmlFor="lastName" className="form-label">
                          Last name
                        </label>
                        <input type="text" className="form-control" id="lastName" required />
                      </div>
                      <div className="col-12 my-1">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input type="email" className="form-control" id="email" required />
                      </div>
                      <div className="col-12 my-1">
                        <label htmlFor="address" className="form-label">
                          Address
                        </label>
                        <input type="text" className="form-control" id="address" required />
                      </div>
                      <div className="col-12 my-1">
                        <label htmlFor="address2" className="form-label">
                          Address 2 (Optional)
                        </label>
                        <input type="text" className="form-control" id="address2" />
                      </div>
                      <div className="col-md-5 my-1">
                        <label htmlFor="country" className="form-label">
                          Country
                        </label>
                        <select className="form-select" id="country" required>
                          <option value="">Choose...</option>
                          <option>India</option>
                        </select>
                      </div>
                      <div className="col-md-4 my-1">
                        <label htmlFor="state" className="form-label">
                          State
                        </label>
                        <select className="form-select" id="state" required>
                          <option value="">Choose...</option>
                          <option>Maharashtra</option>
                        </select>
                      </div>
                      <div className="col-md-3 my-1">
                        <label htmlFor="zip" className="form-label">
                          Zip
                        </label>
                        <input type="text" className="form-control" id="zip" required />
                      </div>
                    </div>

                    <hr className="my-4" />

                    <h4 className="mb-3">Payment</h4>

                    <div className="row gy-3">
                      <div className="col-md-6">
                        <label htmlFor="cc-name" className="form-label">
                          Name on card
                        </label>
                        <input type="text" className="form-control" id="cc-name" required />
                        <small className="text-muted">Full name as displayed on card</small>
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="cc-number" className="form-label">
                          Credit card number
                        </label>
                        <input type="text" className="form-control" id="cc-number" required />
                      </div>

                      <div className="col-md-3">
                        <label htmlFor="cc-expiration" className="form-label">
                          Expiration
                        </label>
                        <input type="text" className="form-control" id="cc-expiration" required />
                      </div>

                      <div className="col-md-3">
                        <label htmlFor="cc-cvv" className="form-label">
                          CVV
                        </label>
                        <input type="text" className="form-control" id="cc-cvv" required />
                      </div>
                    </div>

                    <hr className="my-4" />

                    <button className="w-100 btn btn-success" type="submit" disabled>
                      Continue to checkout
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center text-primary">Checkout</h1>
        <hr />
        {state.length ? <ShowCheckout /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
