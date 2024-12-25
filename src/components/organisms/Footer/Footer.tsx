import './Footer.css';
const Footer: React.FC = () => {
  return (
    <footer className="footer wrapper border-themes border-t">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            We are a leading platform for streaming movies and TV shows. Enjoy unlimited access to
            your favorite content.
          </p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/movies">Movies</a>
            </li>
            <li>
              <a href="/tv-shows">TV Shows</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <ul className="social-links">
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://facebook.com">
                Facebook
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://twitter.com">
                Twitter
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://instagram.com">
                Instagram
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://youtube.com">
                YouTube
              </a>
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
