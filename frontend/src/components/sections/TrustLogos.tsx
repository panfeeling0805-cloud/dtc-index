const logos = ['Amazon', 'TikTok', 'Google', 'Meta', 'Shopify', 'Walmart']

export default function TrustLogos() {
  return (
    <div className="trust-section">
      <p className="trust-label">Trusted by growth teams at leading brands</p>
      <div className="trust-logos">
        {logos.map((logo) => (
          <span key={logo} className="trust-logo">{logo}</span>
        ))}
      </div>
    </div>
  )
}
