import Link from 'next/link';

import './Footer.css';
const Footer: React.FC = () => {
  return (
    <footer className="footer wrapper border-themes border-t">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>We are a leading platform for streaming movies and TV shows. Enjoy unlimited access to your favorite content.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link href="/home">Home</Link>
            </li>
            <li>
              <Link href="/movies">Movies</Link>
            </li>
            <li>
              <Link href="/tv-shows">TV Shows</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <ul className="social-links">
            <li>
              <Link target="_blank" rel="noopener noreferrer" href="https://facebook.com">
                Facebook
              </Link>
            </li>
            <li>
              <Link target="_blank" rel="noopener noreferrer" href="https://twitter.com">
                Twitter
              </Link>
            </li>
            <li>
              <Link target="_blank" rel="noopener noreferrer" href="https://instagram.com">
                Instagram
              </Link>
            </li>
            <li>
              <Link target="_blank" rel="noopener noreferrer" href="https://youtube.com">
                YouTube
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: support@moviewebsite.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>
      <div className="footer-bottom border-themes border-t">
        <p>&copy; 2023 MovieWebsite. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
