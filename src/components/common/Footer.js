import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className='footerLinks'> 
        <Link to="/terms">Terms of Service</Link>
        <Link to="/privacy">Privacy Policy</Link>
     </div>

       
      <p>© 2023 StoreCode. All rights reserved.</p>
     
    </footer>
  );
};

export default Footer;
