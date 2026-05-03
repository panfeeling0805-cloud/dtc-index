import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function Navbar() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { isLoggedIn } = useAuth()
  const [productsOpen, setProductsOpen] = useState(false)
  const ctaPath = isLoggedIn ? '/dashboard' : '/auth'

  return (
    <nav>
      <div className="nav-inner">
        <Link to="/" className="nav-logo">
          <img src="/assets/preview.png" alt="Sapientia" style={{ width: 28, height: 28, objectFit: 'contain' }} />
          Sapientia
        </Link>
        <ul className="nav-links">
          <li style={{ position: 'relative' }}
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <a href="#" style={{ color: pathname.startsWith('/products') ? 'var(--blue)' : undefined }}>
              Products ▾
            </a>
            {productsOpen && (
              <div style={{
                position: 'absolute', top: '100%', left: 0,
                paddingTop: 8,
                background: 'transparent',
              }}>
              <div style={{
                background: 'white', borderRadius: 12, padding: '8px',
                boxShadow: '0 8px 32px rgba(27,110,243,0.15)',
                border: '1px solid rgba(27,110,243,0.08)',
                minWidth: 180, zIndex: 200,
              }}>
                {[
                  { to: '/products/tiktok', label: 'TikTok' },
                  { to: '/products/amazon', label: 'Amazon' },
                ].map(item => (
                  <Link
                    key={item.to}
                    to={item.to}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 10,
                      padding: '10px 14px', borderRadius: 8, textDecoration: 'none',
                      color: pathname === item.to ? 'var(--blue)' : 'var(--dark)',
                      background: pathname === item.to ? 'var(--blue-pale)' : 'transparent',
                      fontSize: 13, fontWeight: 600, transition: 'background 0.15s',
                    }}
                    onMouseEnter={e => { if (pathname !== item.to) (e.currentTarget as HTMLElement).style.background = '#f4f7fb' }}
                    onMouseLeave={e => { if (pathname !== item.to) (e.currentTarget as HTMLElement).style.background = 'transparent' }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              </div>
            )}
          </li>
          <li><a href="#">Features ▾</a></li>
          <li>
            <Link
              to="/pricing"
              style={{ color: pathname === '/pricing' ? 'var(--blue)' : undefined }}
            >
              Pricing
            </Link>
          </li>
          <li><a href="#">Resources ▾</a></li>
        </ul>
        <div className="nav-actions">
          <button onClick={() => navigate(ctaPath)} className="btn btn-ghost" style={{ cursor: 'pointer', border: 'none' }}>Log in</button>
          <button onClick={() => navigate(ctaPath)} className="btn btn-primary" style={{ cursor: 'pointer', border: 'none' }}>Get Started →</button>
        </div>
      </div>
    </nav>
  )
}
