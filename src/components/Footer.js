import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <footer className="bg-body-tertiary text-center">
        {/* Grid container */}
        <div className="container p-4 pb-0">
          {/* Section: Social media */}
          <section className="mb-4">
            {/* Facebook */}
            <Link
              to="#!"
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: '#3b5998' }}
              role="button"
            >
              <i className="fab fa-facebook-f" alt="Facebook"></i>
            </Link>

            {/* Twitter */}
            <Link
              to="#!"
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: '#55acee' }}
              role="button"
            >
              <i className="fab fa-twitter" alt="Twitter"></i>
            </Link>

            {/* Google */}
            <Link
              to="#!"
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: '#dd4b39' }}
              role="button"
            >
              <i className="fab fa-google" alt="Google"></i>
            </Link>

            {/* Instagram */}
            <Link
              to="#!"
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: '#ac2bac' }}
              role="button"
            >
              <i className="fab fa-instagram" alt="Instagram"></i>
            </Link>

            {/* Linkedin */}
            <Link
              to="#!"
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: '#0082ca' }}
              role="button"
            >
              <i className="fab fa-linkedin-in" alt="LinkedIn"></i>
            </Link>
            
            {/* Github */}
            <Link
              to="#!"
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: '#333333' }}
              role="button"
            >
              <i className="fab fa-github" alt="GitHub"></i>
            </Link>
          </section>
          {/* Section: Social media */}
        </div>
        {/* Grid container */}

        {/* Copyright */}
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2020 Copyright:
          <Link className="text-body" to="https://mdbootstrap.com/">MDBootstrap.com</Link>
        </div>
        {/* Copyright */}
      </footer>
    </div>
  );
}

export default Footer;
