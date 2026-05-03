import CtaLink from '../CtaLink'

export default function MultiBrand() {
  return (
    <section style={{ background: 'linear-gradient(160deg, #f5eeff 0%, #eef2ff 40%, #f8f9ff 100%)', padding: '80px 48px' }}>
      <div className="feature-section container">
        <div>
          <h2 className="section-title" style={{ fontSize: 'clamp(28px, 3.5vw, 46px)' }}>
            Run <span className="gradient-text">Multiple</span> Brands &amp;<br />
            Teams Effortlessly
          </h2>
          <p className="section-sub" style={{ marginTop: 20 }}>
            Manage multiple clients or brands from one account. Our platform provides the tools
            and permissions you need to collaborate efficiently and scale your operations.
          </p>
          <CtaLink className="btn btn-primary" style={{ marginTop: 28, fontSize: 15, padding: '13px 32px' }}>
            Hire Sapientia
          </CtaLink>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src="/assets/feature-section-4.png"
            alt="Run Multiple Brands"
            style={{ width: '100%', maxWidth: 520, display: 'block' }}
          />
        </div>
      </div>
    </section>
  )
}
