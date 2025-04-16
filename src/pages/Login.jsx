import React from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Login = () => {
  return (
    <div style={{ backgroundColor: '#f0f0f0' }}> {/* Gray background for the whole page */}
      <Navbar />
      <div className="container my-5 py-5" style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: 'white' }}>
        <h1 className="text-center mb-4" style={{ color: '#333', fontWeight: 'bold', borderBottom: '2px solid #ccc', paddingBottom: '10px' }}>
          Sign In
        </h1>
        <div className="row justify-content-center h-100">
          <div className="col-md-4 col-lg-4 col-sm-8">
            <form>
              <div className="mb-3">
                <label htmlFor="floatingInput" className="form-label" style={{ fontWeight: 'bold', color: '#555' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  style={{ borderColor: '#ddd', borderRadius: '5px', padding: '10px' }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="floatingPassword" className="form-label" style={{ fontWeight: 'bold', color: '#555' }}>
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  style={{ borderColor: '#ddd', borderRadius: '5px', padding: '10px' }}
                />
              </div>
              <div className="my-3">
                <p className="mb-0" style={{ color: '#777' }}>
                  New Here?{' '}
                  <Link to="/register" className="text-decoration-underline text-info" style={{ fontWeight: 'bold' }}>
                    Register
                  </Link>
                </p>
              </div>
              <div className="text-center">
                <button
                  className="btn btn-primary px-4 py-2"
                  type="submit"
                  disabled
                  style={{ backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', fontWeight: 'bold', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;