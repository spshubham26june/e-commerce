import React from 'react';
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div style={{ backgroundColor: '#f0f0f0' }}> {/* Gray background for the whole page */}
      <Navbar />
      <div className="container my-5 py-5" style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: 'white' }}>
        <h1 className="text-center mb-4" style={{ color: '#333', fontWeight: 'bold', borderBottom: '2px solid #ccc', paddingBottom: '10px' }}>
          Create Account
        </h1>
        <div className="row justify-content-center h-100">
          <div className="col-md-6 col-lg-5 col-sm-8">
            <form>
              <div className="mb-3">
                <label htmlFor="Name" className="form-label" style={{ fontWeight: 'bold', color: '#555' }}>
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  placeholder="Enter Your Name"
                  style={{ borderColor: '#ddd', borderRadius: '5px', padding: '10px' }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Email" className="form-label" style={{ fontWeight: 'bold', color: '#555' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  placeholder="name@example.com"
                  style={{ borderColor: '#ddd', borderRadius: '5px', padding: '10px' }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Password" className="form-label" style={{ fontWeight: 'bold', color: '#555' }}>
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="Password"
                  placeholder="Password"
                  style={{ borderColor: '#ddd', borderRadius: '5px', padding: '10px' }}
                />
              </div>
              <div className="my-3">
                <p className="mb-0" style={{ color: '#777' }}>
                  Already have an account?{' '}
                  <Link to="/login" className="text-decoration-underline text-info" style={{ fontWeight: 'bold' }}>
                    Login
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
                  Register
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

export default Register;