const images = [
  { src: '/assets/Bitmap1.png', alt: 'Fashion Brand Scale-Up' },
  { src: '/assets/Bitmap2.png', alt: 'B2B Lead Generation' },
  { src: '/assets/Bitmap3.png', alt: 'App User Acquisition' },
  { src: '/assets/Bitmap4.png', alt: 'Retail Omnichannel' },
]

// 复制三份保证任何宽度下都不露白
const allImages = [...images, ...images, ...images]

export default function UseCases() {
  return (
    <section style={{ background: 'white', padding: '80px 0 80px' }}>
      {/* 标题区 */}
      <div style={{ textAlign: 'center', padding: '0 48px', marginBottom: 48 }}>
        <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 800, color: 'var(--dark)', marginBottom: 16 }}>
          Use Case Gallery
        </h2>
        <p style={{ fontSize: 16, color: 'var(--gray)', lineHeight: 1.7, maxWidth: 560, margin: '0 auto' }}>
          Built-in scaling for any industry. See how our AI team solves marketing challenges with step-by-step demos using real scenarios.
        </p>
      </div>

      {/* 无限轮播 */}
      <div style={{ overflow: 'hidden', width: '100%' }}>
        <div className="marquee-track">
          {allImages.map((img, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                width: 342,
                marginRight: 20,
                borderRadius: 20,
                overflow: 'hidden',
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                style={{ width: '100%', display: 'block', borderRadius: 20 }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
