import CtaLink from '../../components/CtaLink'

const blueCards = [
  { icon: '🧠', title: 'Data Intelligence', desc: 'Unified data pipeline surfacing actionable signals across every channel.' },
  { icon: '📚', title: 'Market Library', desc: 'Curated market benchmarks, competitor intel, and category trends.' },
  { icon: '👥', title: 'Audience Profiles', desc: 'Rich audience segments built from behavioral and demographic data.' },
  { icon: '📊', title: 'Platform Analytics', desc: 'Cross-platform performance dashboards updated in real time.' },
]

const greenCards = [
  { icon: '🎨', title: 'Creative Assets', desc: 'AI-scored creative library ranked by predicted engagement.' },
  { icon: '🛒', title: 'Buying Library', desc: 'Historical buying patterns and media mix recommendations.' },
  { icon: '🚀', title: 'Campaign Intelligence', desc: 'End-to-end campaign analysis from launch to post-flight review.' },
]

const orangeCards = [
  { icon: '⚙️', title: 'Creative & Optimization', desc: 'Automated creative testing and iteration at scale.' },
  { icon: '📈', title: 'Trend Monitoring', desc: 'Real-time trend detection before they peak.' },
  { icon: '🎯', title: 'Campaign Optimizer', desc: 'Continuous budget and bid optimization driven by live signals.' },
  { icon: '🔑', title: 'Keyword Tracker', desc: 'Track keyword performance across search, social, and retail media.' },
  { icon: '🔍', title: 'Audience Hunter', desc: 'Discover high-value audience segments your competitors are missing.' },
]

export default function IntelligenceHub() {
  return (
    <main style={{ background: 'white', minHeight: '100vh', overflow: 'hidden' }}>

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #0f1729 0%, #1a2a50 50%, #0f1729 100%)',
        padding: '80px 48px 100px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* dot grid overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 760, margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(27,110,243,0.2)', border: '1px solid rgba(27,110,243,0.4)',
            borderRadius: 100, padding: '6px 16px', marginBottom: 28,
          }}>
            <span style={{ fontSize: 16 }}>🧩</span>
            <span style={{ fontSize: 12, fontWeight: 700, color: '#a5c4ff', letterSpacing: '0.06em', fontFamily: "'Sora', sans-serif" }}>
              INTELLIGENCE HUB
            </span>
          </div>
          <h1 style={{
            fontFamily: "'Sora', sans-serif", fontWeight: 800,
            fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: 1.1,
            marginBottom: 16, color: 'white',
          }}>
            <span className="gradient-text">Intelligence Hub</span>
          </h1>
          <p style={{ fontSize: 20, color: 'rgba(255,255,255,0.75)', marginBottom: 12, fontWeight: 600, fontFamily: "'Sora', sans-serif" }}>
            The Data-Driven Engine for Decisions
          </p>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', maxWidth: 560, margin: '0 auto 36px', lineHeight: 1.7 }}>
            Consolidate every signal, asset, and insight into a single intelligent system — so every decision is backed by data, not guesswork.
          </p>
          <CtaLink className="btn btn-primary" style={{ fontSize: 15, padding: '13px 32px', borderRadius: 100 }}>
            Get Started Today
          </CtaLink>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ background: 'linear-gradient(135deg, #0f1729 0%, #1B3A5C 100%)', padding: '0 48px 72px' }}>
        <div style={{
          maxWidth: 960, margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 0, borderRadius: 24,
          background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
          overflow: 'hidden',
        }}>
          {[
            { num: '9', label: 'Data Categories' },
            { num: '24/7', label: 'Real-Time Processing' },
            { num: '100%', label: 'Customizable' },
          ].map((stat, i) => (
            <div key={stat.num} style={{
              textAlign: 'center', padding: '40px 24px',
              borderRight: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none',
            }}>
              <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 800, lineHeight: 1, marginBottom: 10 }}>
                <span className="gradient-text">{stat.num}</span>
              </div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', fontWeight: 500 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TURN DATA INTO ASSETS ── */}
      <section style={{ padding: '96px 48px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 16 }}>
          <h2 style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: 'clamp(28px, 3.5vw, 44px)',
            fontWeight: 800, color: '#0D1B2A', marginBottom: 16, lineHeight: 1.2,
          }}>
            Turn Data into Assets:{' '}
            <span className="gradient-text">Build Your Long-Term Advantage</span>
          </h2>
          <p style={{ fontSize: 15, color: '#6B7A8D', maxWidth: 640, margin: '0 auto 56px', lineHeight: 1.7 }}>
            Nine interconnected intelligence modules that compound over time — giving you sharper insights, faster decisions, and a durable competitive edge.
          </p>
        </div>

        {/* Blue card group */}
        <div style={{ marginBottom: 24 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#EAF1FF', borderRadius: 100, padding: '5px 14px', marginBottom: 16,
          }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#1B6EF3', display: 'inline-block' }} />
            <span style={{ fontSize: 12, fontWeight: 700, color: '#1B6EF3', letterSpacing: '0.06em', fontFamily: "'Sora', sans-serif" }}>DATA & MARKET INTELLIGENCE</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {blueCards.map((card) => (
              <div key={card.title} style={{
                background: 'linear-gradient(135deg, #EAF1FF 0%, #dbeafe 100%)',
                borderRadius: 16, padding: '24px 20px',
                border: '1px solid rgba(27,110,243,0.15)',
                display: 'flex', flexDirection: 'column', gap: 10,
              }}>
                <span style={{ fontSize: 28 }}>{card.icon}</span>
                <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 14, fontWeight: 700, color: '#0D1B2A' }}>{card.title}</div>
                <div style={{ fontSize: 13, color: '#6B7A8D', lineHeight: 1.6 }}>{card.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Green card group */}
        <div style={{ marginBottom: 24 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#f0fdf4', borderRadius: 100, padding: '5px 14px', marginBottom: 16,
          }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
            <span style={{ fontSize: 12, fontWeight: 700, color: '#22c55e', letterSpacing: '0.06em', fontFamily: "'Sora', sans-serif" }}>CREATIVE & CAMPAIGN ASSETS</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {greenCards.map((card) => (
              <div key={card.title} style={{
                background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
                borderRadius: 16, padding: '24px 20px',
                border: '1px solid rgba(34,197,94,0.2)',
                display: 'flex', flexDirection: 'column', gap: 10,
              }}>
                <span style={{ fontSize: 28 }}>{card.icon}</span>
                <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 14, fontWeight: 700, color: '#0D1B2A' }}>{card.title}</div>
                <div style={{ fontSize: 13, color: '#6B7A8D', lineHeight: 1.6 }}>{card.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Orange card group */}
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#fff7ed', borderRadius: 100, padding: '5px 14px', marginBottom: 16,
          }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#f97316', display: 'inline-block' }} />
            <span style={{ fontSize: 12, fontWeight: 700, color: '#f97316', letterSpacing: '0.06em', fontFamily: "'Sora', sans-serif" }}>OPTIMIZATION & DISCOVERY</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }}>
            {orangeCards.map((card) => (
              <div key={card.title} style={{
                background: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)',
                borderRadius: 16, padding: '24px 20px',
                border: '1px solid rgba(249,115,22,0.2)',
                display: 'flex', flexDirection: 'column', gap: 10,
              }}>
                <span style={{ fontSize: 28 }}>{card.icon}</span>
                <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 14, fontWeight: 700, color: '#0D1B2A' }}>{card.title}</div>
                <div style={{ fontSize: 13, color: '#6B7A8D', lineHeight: 1.6 }}>{card.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FROM CHAOS TO CLARITY ── */}
      <section style={{ background: '#f8faff', padding: '96px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: '#1B6EF3', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16, fontFamily: "'Sora', sans-serif" }}>
            Data Clarity
          </p>
          <h2 style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: 'clamp(32px, 4.5vw, 52px)',
            fontWeight: 800, color: '#0D1B2A',
            marginBottom: 20, lineHeight: 1.15,
          }}>
            From <span className="gradient-text">chaos</span> to <span className="gradient-text">clarity</span>
          </h2>
          <p style={{ fontSize: 16, color: '#6B7A8D', lineHeight: 1.75, marginBottom: 40 }}>
            Most teams drown in dashboards and still can't answer "why." Intelligence Hub replaces fragmented data with a single, continuously updated picture of what's happening — and what to do next. No more context switching, no more guesswork.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}>
            {[
              { icon: '🔗', label: 'Connected Data', color: '#EAF1FF', accent: '#1B6EF3' },
              { icon: '⚡', label: 'Instant Insights', color: '#f0fdf4', accent: '#22c55e' },
              { icon: '🎯', label: 'Precise Actions', color: '#fff7ed', accent: '#f97316' },
            ].map((item) => (
              <div key={item.label} style={{
                display: 'flex', alignItems: 'center', gap: 10,
                background: item.color, borderRadius: 12, padding: '14px 20px',
                border: `1px solid ${item.accent}22`,
              }}>
                <span style={{ fontSize: 22 }}>{item.icon}</span>
                <span style={{ fontFamily: "'Sora', sans-serif", fontSize: 14, fontWeight: 700, color: '#0D1B2A' }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEVER MISS A BEAT ── */}
      <section style={{ padding: '96px 48px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
          {/* Left */}
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, color: '#1B6EF3', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12, fontFamily: "'Sora', sans-serif" }}>
              Anomaly Detection
            </p>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 800, lineHeight: 1.18, marginBottom: 16, color: '#0D1B2A' }}>
              Never Miss{' '}
              <span className="gradient-text">a Beat</span>
            </h2>
            <p style={{ fontSize: 14, color: '#6B7A8D', lineHeight: 1.7, marginBottom: 28, fontWeight: 600 }}>
              Stay ahead of every shift in performance — before it costs you.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                'Hourly anomaly detection across all active campaigns and channels',
                'Catch performance dips before they escalate into wasted budget',
                'Delta optimization triggers that fire automatically on threshold breaches',
                'Spot risk factors before budget is burned on underperforming placements',
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 14, color: '#6B7A8D', lineHeight: 1.6 }}>
                  <span style={{
                    width: 22, height: 22, borderRadius: '50%',
                    background: '#EAF1FF', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, marginTop: 1, fontSize: 11, color: '#1B6EF3', fontWeight: 700,
                  }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — bar chart + robot illustration */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* Performance card */}
            <div style={{
              background: 'white', borderRadius: 20,
              boxShadow: '0 4px 32px rgba(27,110,243,0.12)',
              padding: '24px', border: '1px solid #f0f4ff',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }} />
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} />
                <span style={{ fontFamily: "'Sora', sans-serif", fontSize: 13, fontWeight: 700, color: '#0D1B2A', marginLeft: 8 }}>Live Performance Monitor</span>
                <span style={{ marginLeft: 'auto', background: '#f0fdf4', color: '#22c55e', fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 100 }}>● LIVE</span>
              </div>

              {/* Bar chart */}
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 120, marginBottom: 12 }}>
                {[60, 80, 45, 90, 70, 100, 65, 85].map((h, i) => (
                  <div key={i} style={{
                    width: 24, height: `${h}%`,
                    background: i === 5 ? '#1B6EF3' : '#EAF1FF',
                    borderRadius: '4px 4px 0 0',
                    transition: 'height 0.3s',
                    flex: 1,
                  }} />
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 12, color: '#6B7A8D' }}>Last 8 hours</span>
                <span style={{ fontSize: 12, fontWeight: 700, color: '#22c55e' }}>+18% vs yesterday</span>
              </div>
            </div>

            {/* Alert cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { icon: '🤖', label: 'AI flagged anomaly at 14:00 — CPM spiked 32%', badge: 'Auto-fixed', badgeColor: '#22c55e', bg: '#f0fdf4' },
                { icon: '⚡', label: 'Delta trigger: shifted $800 from low-CTR ad set', badge: 'Optimized', badgeColor: '#1B6EF3', bg: '#EAF1FF' },
                { icon: '🛡️', label: 'Risk factor detected: frequency cap exceeded', badge: 'Alert sent', badgeColor: '#f97316', bg: '#fff7ed' },
              ].map((item) => (
                <div key={item.label} style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  background: item.bg, borderRadius: 12, padding: '12px 14px',
                }}>
                  <span style={{ fontSize: 18 }}>{item.icon}</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#0D1B2A', flex: 1, lineHeight: 1.4 }}>{item.label}</span>
                  <span style={{ fontSize: 10, fontWeight: 700, color: item.badgeColor, background: 'white', padding: '3px 8px', borderRadius: 100, whiteSpace: 'nowrap' }}>{item.badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRIVATE CUSTOMIZATION ── */}
      <section style={{ background: '#f8faff', padding: '96px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'start' }}>

          {/* Left — AI robot illustration */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{
              background: 'linear-gradient(135deg, #0f1729 0%, #1a2a50 100%)',
              borderRadius: 24, padding: '48px 32px',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              minHeight: 280, position: 'relative', overflow: 'hidden',
              border: '1px solid rgba(27,110,243,0.3)',
            }}>
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }} />
              {/* Stylized AI face */}
              <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <div style={{
                  width: 96, height: 96, borderRadius: 24, margin: '0 auto 16px',
                  background: 'linear-gradient(135deg, #1B6EF3 0%, #60a5fa 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 48, boxShadow: '0 0 40px rgba(27,110,243,0.5)',
                }}>
                  🤖
                </div>
                <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 16, fontWeight: 700, color: 'white', marginBottom: 8 }}>Sapientia AI</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>Enterprise Intelligence Engine</div>
                <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 20 }}>
                  {['Custom KPIs', 'Brand Rules', 'Role Access'].map((tag) => (
                    <span key={tag} style={{
                      fontSize: 11, fontWeight: 600, color: '#a5c4ff',
                      background: 'rgba(27,110,243,0.2)', borderRadius: 100,
                      padding: '4px 10px', border: '1px solid rgba(27,110,243,0.3)',
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Testimonial card */}
            <div style={{
              background: 'white', borderRadius: 20,
              boxShadow: '0 4px 24px rgba(27,110,243,0.08)',
              border: '1px solid #f0f4ff', padding: '24px',
            }}>
              <div style={{ display: 'flex', gap: 4, marginBottom: 12 }}>
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} style={{ color: '#f59e0b', fontSize: 16 }}>★</span>
                ))}
              </div>
              <p style={{ fontSize: 14, color: '#0D1B2A', lineHeight: 1.7, fontStyle: 'italic', marginBottom: 16 }}>
                "Intelligence Hub gave us the single source of truth we'd been searching for. Custom KPIs, tailored to our brand strategy — not generic templates."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 12,
                  background: '#EAF1FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20,
                }}>👩‍💼</div>
                <div>
                  <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 13, fontWeight: 700, color: '#0D1B2A' }}>Priya Nair</div>
                  <div style={{ fontSize: 11, color: '#6B7A8D' }}>Head of Growth · Nexus Commerce</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, color: '#1B6EF3', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12, fontFamily: "'Sora', sans-serif" }}>
              Enterprise Ready
            </p>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 800, lineHeight: 1.18, marginBottom: 16, color: '#0D1B2A' }}>
              Private Customization,{' '}
              <span className="gradient-text">Enterprise-Ready</span>
            </h2>
            <p style={{ fontSize: 14, color: '#6B7A8D', lineHeight: 1.7, marginBottom: 32, fontWeight: 600 }}>
              Intelligence Hub adapts to your organization — not the other way around.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 40 }}>
              {[
                {
                  icon: '🎛️',
                  title: 'Custom KPIs',
                  desc: 'Define the metrics that matter to your business. Track them natively without workarounds.',
                  color: '#EAF1FF', accent: '#1B6EF3',
                },
                {
                  icon: '📋',
                  title: 'Brand-Specific Strategy Rules',
                  desc: 'Encode your brand guardrails, bidding philosophy, and audience preferences directly into the AI.',
                  color: '#f0fdf4', accent: '#22c55e',
                },
                {
                  icon: '🔐',
                  title: 'Role-Based Insight Delivery',
                  desc: 'Every team member sees the insights relevant to them — and only them. Full RBAC out of the box.',
                  color: '#fff7ed', accent: '#f97316',
                },
              ].map((item) => (
                <li key={item.title} style={{ display: 'flex', gap: 16 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 14, background: item.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 22, flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 15, fontWeight: 700, color: '#0D1B2A', marginBottom: 4 }}>{item.title}</div>
                    <div style={{ fontSize: 13, color: '#6B7A8D', lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Trust badges */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {['SOC 2 Type II', 'GDPR Compliant', 'SSO Ready', '99.9% Uptime SLA'].map((badge) => (
                <span key={badge} style={{
                  fontSize: 12, fontWeight: 600, color: '#6B7A8D',
                  background: 'white', border: '1px solid #e5eaf3',
                  borderRadius: 8, padding: '6px 12px',
                }}>{badge}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        background: 'linear-gradient(135deg, #0f1729 0%, #1a2a50 50%, #0f1729 100%)',
        padding: '96px 48px', textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '32px 32px', pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 640, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Sora', sans-serif", fontWeight: 800,
            fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: 1.15,
            color: 'white', marginBottom: 16,
          }}>
            Ready to Build Your{' '}
            <span className="gradient-text">Intelligence Hub?</span>
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', marginBottom: 36, lineHeight: 1.7 }}>
            Join hundreds of performance marketing teams already making smarter decisions with Sapientia.
          </p>
          <CtaLink className="btn btn-primary" style={{ fontSize: 16, padding: '15px 40px', borderRadius: 100 }}>
            Get Started Today
          </CtaLink>
        </div>
      </section>

    </main>
  )
}
