import CtaLink from '../CtaLink'

export default function Features() {
  return (
    <section style={{ background: 'linear-gradient(160deg, #fce8f0 0%, #e8eeff 30%, #eef2ff 60%, #f0f5ff 100%)', padding: '80px 48px' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: 64 }}>
        <h2 className="section-title">
          How Can AI Handle Your <span className="accent">Entire Marketing Stack?</span>
        </h2>
        <p className="section-sub" style={{ margin: '0 auto' }}>
          From platform integration to strategy generation—discover how our AI team manages every
          aspect of your marketing operations with enterprise-grade reliability.
        </p>
      </div>

      {/* Feature 1 — 图片左，文字右 */}
      <div className="feature-section" style={{ marginBottom: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src="/assets/Group13.png"
            alt="Integrate Ad Channels"
            style={{ width: '100%', maxWidth: 480, display: 'block' }}
          />
        </div>
        <div>
          <h2 className="section-title" style={{ fontSize: 'clamp(28px, 3.5vw, 46px)' }}>
            Integrate Top Ad Channels<br />
            in <span className="gradient-text">One AI Hub.</span>
          </h2>
          <p className="section-sub">
            Stop switching between tabs. Manage Google, Facebook, Amazon, and more from a single,
            intelligent platform that provides a unified view of your performance.
          </p>
          <CtaLink className="btn btn-primary" style={{ marginTop: 28, fontSize: 15, padding: '13px 32px' }}>Hire Sapientia</CtaLink>
        </div>
      </div>

      {/* Feature 2 — 文字左，图片右 */}
      <div className="feature-section" style={{ marginBottom: 100 }}>
        <div>
          <h2 className="section-title" style={{ fontSize: 'clamp(28px, 3.5vw, 46px)' }}>
            <span className="gradient-text">Transparent</span> by design.
          </h2>
          <p className="section-sub">
            No black boxes. Understand exactly how the AI is optimizing your campaigns with clear,
            actionable insights and detailed performance reports.
          </p>
          <CtaLink className="btn btn-primary" style={{ marginTop: 28, fontSize: 15, padding: '13px 32px' }}>Hire Sapientia</CtaLink>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src="/assets/Group1948759892.png"
            alt="Transparent by design"
            style={{ width: '100%', maxWidth: 480, display: 'block' }}
          />
        </div>
      </div>

      {/* Feature 3 — 图片左，文字右 */}
      <div className="feature-section">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src="/assets/Group1948759934.png"
            alt="Campaigns that compound"
            style={{ width: '100%', maxWidth: 480, display: 'block' }}
          />
        </div>
        <div>
          <h2 className="section-title" style={{ fontSize: 'clamp(28px, 3.5vw, 46px)' }}>
            Campaigns that<br />
            <span className="gradient-text">compound.</span>
          </h2>
          <p className="section-sub">
            Our AI learns from every campaign, continuously improving and applying insights across
            channels to create a compounding effect on your growth.
          </p>
          <CtaLink className="btn btn-primary" style={{ marginTop: 28, fontSize: 15, padding: '13px 32px' }}>Hire Sapientia</CtaLink>
        </div>
      </div>
    </section>
  )
}
