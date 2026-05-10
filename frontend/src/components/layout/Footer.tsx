export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <a href="#" className="nav-logo" style={{ color: 'white', marginBottom: 16, display: 'block' }}>
            <img src="/assets/preview.png" alt="Sapientia" style={{ width: 28, height: 28, objectFit: 'contain' }} />
            Sapientia
          </a>
          <p>AI-powered advertising that launches, optimizes, and scales your campaigns across every major platform.</p>
          <div className="footer-social">
            <div className="social-btn">𝕏</div>
            <div className="social-btn">in</div>
            <div className="social-btn">▶</div>
          </div>
        </div>
        <div className="footer-col">
          <h5>Resources</h5>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Affiliates</a></li>
            <li><a href="#">Changelog</a></li>
            <li><a href="#">Pricing</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Company</h5>
          <ul>
            <li><a href="#">Partners</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Help</h5>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 Sapientia. All rights reserved.</span>
        <span>Made with ❤️ for growth teams everywhere</span>
      </div>
    </footer>
  )
}
