import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5 className='heading'>About Us</h5>
            <p className='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rutrum mi vel sem pulvinar, id tincidunt felis vulputate.</p>
          </div>
          <div className="col-md-4 links">
            <h5 className='heading'>Links</h5>
            <ul className="list-unstyled">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/mostViewed">Most Viewed</Link></li>
              <li><Link href="/collection">Our Brands</Link></li>
              <li><Link href="/topSellings">Top Products</Link></li>
            </ul>
          </div>
          <div className="col-md-4 contact">
            <h5 className='heading'>Contact</h5>
            <ul className="list-unstyled p">
              <li>123 Street, City</li>
              <li>Phone: 123-456-7890</li>
              <li>Email: info@example.com</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="text-center">
          <p className='small_text rights'>&copy; 2023 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
