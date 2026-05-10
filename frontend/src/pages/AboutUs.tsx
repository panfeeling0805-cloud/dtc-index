export default function AboutUs() {
  const blue = '#1b6ef3'

  const sectionBase: React.CSSProperties = {
    padding: '80px 24px',
  }

  const container: React.CSSProperties = {
    maxWidth: 1100,
    margin: '0 auto',
  }

  const cardStyle: React.CSSProperties = {
    background: '#fff',
    borderRadius: 12,
    padding: 20,
    boxShadow: '0 2px 16px rgba(27,110,243,0.08)',
  }

  return (
    <main style={{ fontFamily: 'Inter, sans-serif', color: '#1a1a2e' }}>
      {/* 1. Hero Section */}
      <section
        style={{
          ...sectionBase,
          background: 'linear-gradient(160deg, #dbeafe 0%, #ede9fe 50%, #e0f2fe 100%)',
          textAlign: 'center',
        }}
      >
        <div style={container}>
          <h1
            style={{
              fontSize: 48,
              fontWeight: 800,
              marginBottom: 16,
              color: '#0f172a',
            }}
          >
            About Us
          </h1>
          <p
            style={{
              fontSize: 22,
              fontWeight: 600,
              color: blue,
              marginBottom: 12,
            }}
          >
            Built for Operators, Powered by Transparent AI
          </p>
          <p
            style={{
              fontSize: 15,
              color: '#64748b',
              maxWidth: 560,
              margin: '0 auto 48px',
              lineHeight: 1.6,
            }}
          >
            Designed for sellers, marketers, and operators managing advertising
            across Amazon, Google, TikTok and Meta.
          </p>

          {/* aboutme1 overlay image */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src="/assets/aboutme1.png"
              alt=""
              style={{ maxWidth: '100%', width: 884, objectFit: 'contain', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* 2. Vision + Features Section */}
      <section style={{ ...sectionBase, background: '#fff' }}>
        <div
          style={{
            ...container,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 48,
            alignItems: 'start',
          }}
        >
          {/* Left: Vision */}
          <div>
            <h2
              style={{ fontSize: 32, fontWeight: 800, marginBottom: 24, color: '#0f172a' }}
            >
              Vision
            </h2>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 32px',
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
              }}
            >
              {[
                'Fragmented ad platforms slow down growth',
                'Operators forced to make more complex decisions with less transparency',
                'We set out to fix it — with a system that works',
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 10,
                    fontSize: 15,
                    color: '#334155',
                    lineHeight: 1.5,
                  }}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: blue,
                      flexShrink: 0,
                      marginTop: 6,
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>
            <button
              style={{
                background: 'linear-gradient(135deg, #7C3AED 0%, #2563EB 100%)',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                padding: '12px 28px',
                fontSize: 15,
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 2px 14px rgba(124,58,237,0.35)',
              }}
            >
              Free Sapientia
            </button>
          </div>

          {/* Right: Feature cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              {
                svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1b6ef3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="2" x2="12" y2="6"/><path d="M12 6a6 6 0 100 12 6 6 0 000-12z"/><line x1="12" y1="18" x2="12" y2="22"/><path d="M9 21h6"/></svg>,
                title: 'Intelligent Strategy',
                desc: 'AI that learns your brand and recommends what to run and what to stop.',
              },
              {
                svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1b6ef3" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
                title: 'Explainable AI',
                desc: 'No black boxes. Every recommendation comes with a reason.',
              },
            ].map(({ svg, title, desc }) => (
              <div key={title} style={cardStyle}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12, background: '#EAF1FF',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 10,
                }}>{svg}</div>
                <h3
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    marginBottom: 6,
                    color: '#0f172a',
                  }}
                >
                  {title}
                </h3>
                <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Mission Section */}
      <section
        className="bg-deep-gradient"
        style={{
          ...sectionBase,
          textAlign: 'center',
        }}
      >
        <div style={container}>
          <h2
            style={{
              fontSize: 32,
              fontWeight: 800,
              marginBottom: 20,
              color: 'white',
            }}
          >
            Mission
          </h2>
          <p
            style={{
              fontSize: 17,
              color: 'rgba(255,255,255,0.75)',
              maxWidth: 720,
              margin: '0 auto',
              lineHeight: 1.8,
            }}
          >
            To create Sapientia: an ad operating system that makes every decision
            explainable, every action automatable, and every optimization
            operator-first.
          </p>
        </div>
      </section>

      {/* 4. Our Story Section */}
      <section style={{ ...sectionBase, background: '#fff' }}>
        <div style={container}>
          <h2
            style={{
              fontSize: 32,
              fontWeight: 800,
              marginBottom: 20,
              color: '#0f172a',
            }}
          >
            Our Story
          </h2>
          <p
            style={{
              fontSize: 16,
              color: '#334155',
              lineHeight: 1.8,
              marginBottom: 32,
              maxWidth: 760,
            }}
          >
            Frustrated by a mess of inconsistent platforms and strategies, we set
            out to build something different. We needed an intelligent system that
            drives actual growth. So we set out to fix it — with a system that
            works.
          </p>
          <blockquote
            style={{
              borderLeft: `4px solid ${blue}`,
              background: '#f0f5ff',
              borderRadius: '0 12px 12px 0',
              padding: '24px 32px',
              margin: 0,
              maxWidth: 800,
            }}
          >
            <p
              style={{
                fontSize: 18,
                color: '#1e293b',
                fontStyle: 'italic',
                lineHeight: 1.8,
                margin: 0,
                fontWeight: 500,
              }}
            >
              "We're here to help brands scale smart — from their first ad dollar
              to their global expansion. Our mission is to create a new standard
              for performance marketing: transparent, scalable, and always
              operator-first."
            </p>
          </blockquote>
        </div>
      </section>

      {/* 5. Meet the Team Section */}
      <section
        style={{
          ...sectionBase,
          background: '#fff',
          textAlign: 'center',
        }}
      >
        <div style={container}>
          <h2
            style={{
              fontSize: 32,
              fontWeight: 800,
              marginBottom: 8,
              color: '#0f172a',
            }}
          >
            Meet the Team
          </h2>
          <p
            style={{
              fontSize: 16,
              color: '#64748b',
              marginBottom: 48,
            }}
          >
            Building the future of performance technology
          </p>

          {/* Stats row */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 40,
              flexWrap: 'wrap',
              marginBottom: 48,
            }}
          >
            {[
              { value: 'Aug 2024', label: 'Founded' },
              { value: '20+', label: 'Team Members' },
              { value: '28', label: 'Average Age' },
              { value: '3', label: 'Office Locations' },
            ].map(({ value, label }) => (
              <div key={label} style={{ minWidth: 120 }}>
                <div
                  style={{
                    fontSize: 36,
                    fontWeight: 800,
                    color: blue,
                    lineHeight: 1.1,
                  }}
                >
                  {value}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: '#94a3b8',
                    marginTop: 6,
                    fontWeight: 500,
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* Team DNA image */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src="/assets/20260509110948.jpg"
              alt="Our Team DNA"
              style={{ maxWidth: '100%', width: 900, objectFit: 'contain', borderRadius: 16, display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* 6. Contact Section */}
      <section
        className="bg-deep-gradient"
        style={{
          ...sectionBase,
          textAlign: 'center',
        }}
      >
        <div style={container}>
          <h2
            style={{
              fontSize: 32,
              fontWeight: 800,
              marginBottom: 20,
              background: 'linear-gradient(135deg, #7C3AED 0%, #2563EB 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'inline-block',
            }}
          >
            Contact us
          </h2>
          <div />
          <a
            href="mailto:coolwcc@sapientia.tech"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              fontSize: 18,
              color: 'rgba(255,255,255,0.85)',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            coolwcc@sapientia.tech
          </a>
        </div>
      </section>
    </main>
  )
}
