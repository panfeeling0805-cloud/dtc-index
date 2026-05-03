const stats = [
  { num: '250+',  label: 'Companies Powered',    bg: '/assets/Bitmap-1.png' },
  { num: '550M+', label: 'Ad Spend Optimized',   bg: '/assets/Bitmap-2.png' },
  { num: '340%',  label: 'Average ROI Increase', bg: '/assets/Bitmap-3.png' },
  { num: '24/7',  label: 'Autonomous Operation', bg: '/assets/Bitmap-4.png' },
]

export default function Stats() {
  return (
    <section style={{ background: 'white', padding: '80px 48px', textAlign: 'center' }}>
      <div className="container">
        <h2 style={{
          fontFamily: "'Sora', sans-serif",
          fontSize: 'clamp(32px, 4vw, 52px)',
          fontWeight: 800,
          color: 'var(--dark)',
          marginBottom: 48,
        }}>
          Trusted by Growth Teams Worldwide
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {stats.map((s) => (
            <div
              key={s.label}
              style={{
                borderRadius: 20,
                overflow: 'hidden',
                backgroundImage: `url(${s.bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '48px 28px 40px',
                textAlign: 'center',
                minHeight: 200,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: 'clamp(32px, 3vw, 44px)',
                fontWeight: 800,
                background: 'linear-gradient(90deg, #1B6EF3, #7C3AED)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: 6,
              }}>
                {s.num}
              </div>
              <div style={{ fontSize: 13, color: '#555', fontWeight: 500 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
