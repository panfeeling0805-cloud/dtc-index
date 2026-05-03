export default function GrowthJourney() {
  return (
    <section
      style={{
        backgroundImage: 'url(/assets/Bitmap.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '100px 48px',
        textAlign: 'center',
      }}
    >
      <div className="container">
        <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 24, color: 'var(--dark)' }}>
          Built for <span className="gradient-text">Every Growth</span> Journey
        </h2>
        <p style={{ fontSize: 16, color: 'var(--gray)', lineHeight: 1.7, maxWidth: 620, margin: '0 auto' }}>
          Whether you're expanding to new markets, testing new products, or capturing long-tail demand, Sapientia adapts — and keeps getting smarter.
        </p>
      </div>
    </section>
  )
}
