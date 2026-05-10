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
          backgroundImage: "url('/assets/path_1.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
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
              style={{ maxWidth: '100%', width: 680, objectFit: 'contain', display: 'block' }}
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
                background: blue,
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                padding: '12px 28px',
                fontSize: 15,
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              Free Sapientia
            </button>
          </div>

          {/* Right: Feature cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              {
                icon: '💡',
                title: 'Intelligent Strategy',
                desc: 'AI that learns your brand and recommends what to run and what to stop.',
              },
              {
                icon: '🔍',
                title: 'Explainable AI',
                desc: 'No black boxes. Every recommendation comes with a reason.',
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} style={cardStyle}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{icon}</div>
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
        style={{
          ...sectionBase,
          background: '#f0f5ff',
          textAlign: 'center',
        }}
      >
        <div style={container}>
          <h2
            style={{
              fontSize: 32,
              fontWeight: 800,
              marginBottom: 20,
              color: '#0f172a',
            }}
          >
            Mission
          </h2>
          <p
            style={{
              fontSize: 17,
              color: '#334155',
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

          {/* Team DNA tags */}
          <div
            style={{
              background: '#f8fafc',
              borderRadius: 16,
              padding: '28px 32px',
              display: 'inline-block',
              maxWidth: '100%',
            }}
          >
            <p
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: '#94a3b8',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: 16,
              }}
            >
              Our Team DNA
            </p>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 12,
                justifyContent: 'center',
              }}
            >
              {[
                { label: 'Operators First', bg: '#dbeafe', color: '#1d4ed8' },
                { label: 'Transparent by Design', bg: '#dcfce7', color: '#15803d' },
                { label: 'Data Driven', bg: '#fef3c7', color: '#b45309' },
                { label: 'Always Improving', bg: '#fce7f3', color: '#be185d' },
                { label: 'Cross-Platform Experts', bg: '#ede9fe', color: '#7c3aed' },
                { label: 'Operator-First Culture', bg: '#ffedd5', color: '#c2410c' },
              ].map(({ label, bg, color }) => (
                <span
                  key={label}
                  style={{
                    background: bg,
                    color,
                    borderRadius: 999,
                    padding: '8px 18px',
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Contact Section */}
      <section
        style={{
          ...sectionBase,
          background: '#fff',
          textAlign: 'center',
          borderTop: '1px solid #e2e8f0',
        }}
      >
        <div style={container}>
          <h2
            style={{
              fontSize: 32,
              fontWeight: 800,
              marginBottom: 20,
              color: '#0f172a',
            }}
          >
            Contact us
          </h2>
          <a
            href="mailto:coolwcc@sapientia.tech"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              fontSize: 18,
              color: blue,
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            <span style={{ fontSize: 22 }}>✉️</span>
            coolwcc@sapientia.tech
          </a>
        </div>
      </section>
    </main>
  )
}
