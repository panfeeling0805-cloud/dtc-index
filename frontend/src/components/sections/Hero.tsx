import CtaLink from '../CtaLink'

export default function Hero() {
  return (
    <section style={{ padding: 0, background: 'url(/assets/path_1.png) center center / cover no-repeat' }}>
      <div className="hero">
        <div className="fade-up">
          <h1>
            Run Ads<br />
            with AI You Can<br />
            <span className="trust gradient-text">Trust</span><br />
            for <span className="highlight gradient-text">REAL</span> Results
          </h1>
          <p className="hero-sub">
            Launch, optimize, and scale your advertising with seamless cross-platform precision.
          </p>
          <div className="hero-cta">
            <CtaLink className="btn btn-primary" style={{ fontSize: 15, padding: '13px 28px' }}>
              Free Sapientia
            </CtaLink>
            <a href="#" className="btn btn-ghost" style={{ fontSize: 15 }}>
              ▶ Watch Demo
            </a>
          </div>
        </div>

        <div className="hero-visual fade-up delay-2">
          <div style={{ position: 'relative', width: '100%', maxWidth: 560 }}>
            <img
              src="/assets/1ima_3d.png"
              alt="Sapientia AI Platform"
              style={{ width: '100%', borderRadius: 24, display: 'block' }}
              onError={(e) => {
                const img = e.currentTarget
                img.style.display = 'none'
                const fallback = img.nextElementSibling as HTMLElement
                if (fallback) fallback.style.display = 'flex'
              }}
            />
            <div
              style={{
                display: 'none',
                width: '100%',
                height: 420,
                background: 'linear-gradient(135deg,#c8deff,#e8f0ff)',
                borderRadius: 24,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: 12,
                color: '#1B6EF3',
                fontFamily: "'Sora', sans-serif",
              }}
            >
              <div style={{ fontSize: 48 }}>🖼️</div>
              <div style={{ fontSize: 14, fontWeight: 600 }}>
                请将 hero-banner.png 放入 public/assets/ 文件夹
              </div>
            </div>
            <div className="floating-card card-1">📈 ROAS +42%</div>
            <div className="floating-card card-2">🎯 Auto Bidding Active</div>
            <div className="floating-card card-3">✅ Amazon Approved</div>
          </div>
        </div>
      </div>
    </section>
  )
}
