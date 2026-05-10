import CtaLink from '../../components/CtaLink'

export default function WhiteBoxAI() {
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

        {/* Blue glow orb */}
        <div style={{
          position: 'absolute',
          top: '30%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600, height: 300,
          background: 'radial-gradient(ellipse, rgba(27,110,243,0.22) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>

          <h1 style={{
            fontFamily: "'Sora', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(36px, 5.5vw, 72px)',
            lineHeight: 1.08,
            color: 'white',
            marginBottom: 24,
            letterSpacing: '-0.02em',
          }}>
            White-Box AI<br />
            <span className="gradient-text">Strategy Engine</span>
          </h1>

          <p style={{
            fontSize: 'clamp(15px, 1.8vw, 18px)',
            color: 'rgba(255,255,255,0.65)',
            maxWidth: 560,
            margin: '0 auto 40px',
            lineHeight: 1.7,
            fontFamily: "'Inter', sans-serif",
          }}>
            The transparent AI that builds, runs, and explains every strategy — so you stay in control of every ad dollar.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
            <CtaLink className="btn btn-primary" style={{ fontSize: 15, padding: '13px 32px', borderRadius: 100 }}>
              Hire Sapientia
            </CtaLink>
            <button style={{
              fontSize: 15, padding: '13px 32px', borderRadius: 100,
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.18)',
              color: 'white', cursor: 'pointer', fontWeight: 600,
              fontFamily: "'Sora', sans-serif",
            }}>
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{
        background: '#0D1B2A',
        padding: '32px 48px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 0,
        flexWrap: 'wrap',
      }}>
        {[
          { value: '100%', label: 'Decision Accuracy' },
          { value: '0', label: 'Hidden Logic' },
          { value: '24/7', label: 'Strategy Monitoring' },
        ].map((stat, i, arr) => (
          <div key={stat.label} style={{
            display: 'flex', alignItems: 'center', gap: 0,
          }}>
            <div style={{ textAlign: 'center', padding: '0 56px' }}>
              <div style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: 'clamp(32px, 4vw, 48px)',
                fontWeight: 800,
                color: '#1B6EF3',
                lineHeight: 1,
                marginBottom: 6,
              }}>
                {stat.value}
              </div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', fontFamily: "'Inter', sans-serif", letterSpacing: '0.04em' }}>
                {stat.label}
              </div>
            </div>
            {i < arr.length - 1 && (
              <div style={{ width: 1, height: 48, background: 'rgba(255,255,255,0.1)' }} />
            )}
          </div>
        ))}
      </section>

      {/* ── SECTION: Guessing is Not a Strategy ── */}
      <section style={{ padding: '96px 48px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          {/* Left */}
          <div>
            <h2 style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: 'clamp(30px, 3.5vw, 48px)',
              fontWeight: 800,
              lineHeight: 1.1,
              color: '#0D1B2A',
              marginBottom: 24,
            }}>
              Guessing is Not<br />a Strategy.
            </h2>
            <p style={{ fontSize: 15, color: '#6B7A8D', lineHeight: 1.8, marginBottom: 16, fontFamily: "'Inter', sans-serif" }}>
              Most AI ad platforms are black boxes. They make changes to your campaigns, collect their fees, and leave you with no idea why. You see the outputs, never the reasoning.
            </p>
            <p style={{ fontSize: 15, color: '#6B7A8D', lineHeight: 1.8, fontFamily: "'Inter', sans-serif" }}>
              When performance dips, you can't debug what you can't see. When it works, you can't replicate it. Your team learns nothing, and your strategy stays locked inside a machine.
            </p>
          </div>

          {/* Right */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src="/assets/product-problem-CuMixbkP.png"
              alt=""
              style={{ width: '100%', objectFit: 'contain', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* ── SECTION: Transparent AI. You're in Control ── */}
      <section style={{ background: '#f8faff', padding: '96px 48px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <h2 style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: 'clamp(30px, 4vw, 52px)',
              fontWeight: 800, color: '#0D1B2A',
              lineHeight: 1.1, marginBottom: 16,
            }}>
              Transparent AI.{' '}
              <span className="gradient-text">You're in Control.</span>
            </h2>
            <p style={{ fontSize: 15, color: '#6B7A8D', maxWidth: 540, margin: '0 auto', lineHeight: 1.7, fontFamily: "'Inter', sans-serif" }}>
              No more black-box optimization. Every strategy move is visible, reviewable, and yours to approve.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              {
                svg: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
                title: 'Every Suggestion is Visible',
                desc: 'Before any change is applied to your campaigns, you see it. The AI surfaces every recommendation with context — what triggered it, what it expects to happen, and why now.',
                accent: '#1B6EF3',
                bg: '#EAF1FF',
              },
              {
                svg: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
                title: 'Review & Approve Before it Executes',
                desc: 'An approval workflow puts you in the driver\'s seat. Accept, modify, or decline any action. Set auto-approve thresholds for low-risk optimizations and manual review for bigger moves.',
                accent: '#16a34a',
                bg: '#f0fdf4',
              },
              {
                svg: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/></svg>,
                title: 'Traceable Strategy Log',
                desc: 'Every action the AI has ever taken lives in your Strategy Log — searchable, exportable, timestamped. Use it to audit performance, train your team, and build institutional knowledge.',
                accent: '#7C3AED',
                bg: '#fdf4ff',
              },
            ].map(card => (
              <div key={card.title} style={{
                background: 'white',
                borderRadius: 20,
                border: '1px solid #e4eeff',
                padding: '32px 28px',
                boxShadow: '0 2px 16px rgba(27,110,243,0.06)',
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 14,
                  background: card.bg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: card.accent, marginBottom: 20,
                }}>
                  {card.svg}
                </div>
                <h3 style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: 17, fontWeight: 700,
                  color: '#0D1B2A', marginBottom: 12,
                  lineHeight: 1.3,
                }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: 14, color: '#6B7A8D', lineHeight: 1.75, fontFamily: "'Inter', sans-serif", margin: 0 }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION: Proven Expertise + Adaptive AI ── */}
      <section style={{
        backgroundImage: "url('/assets/Mask group1.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '96px 48px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2 style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 800, color: 'white',
              lineHeight: 1.15, marginBottom: 0,
            }}>
              Proven Expertise + Adaptive AI<br />
              <span className="gradient-text">= Unbeatable Strategy</span>
            </h2>
          </div>

          {/* Simplified 3-column card */}
          <div style={{
            background: 'rgba(0,0,0,0.6)',
            border: '1px dashed rgba(255,255,255,0.35)',
            borderRadius: 16,
            padding: '32px 40px',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 0,
          }}>
            {[
              {
                label: 'Expert Knowledge',
                desc: 'Real-case experience across industries +successful playbooks (FBA, DTC, B2B...)',
              },
              {
                label: 'Strategy Engine',
                desc: 'Combines expert patterns & AI learning in real-time',
              },
              {
                label: 'AI Learning',
                desc: 'Trained on live data to generate adaptive, performance-based actions',
              },
            ].map((col, i) => (
              <div key={col.label} style={{
                borderRight: i < 2 ? '1px solid rgba(255,255,255,0.15)' : 'none',
                padding: '0 32px',
                textAlign: 'center',
              }}>
                <h3 style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: 18, fontWeight: 700,
                  color: 'white', marginBottom: 12,
                }}>
                  {col.label}
                </h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.65, fontFamily: "'Inter', sans-serif", margin: 0 }}>
                  {col.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION: See every decision before it happens ── */}
      <section style={{ padding: '96px 48px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 72, alignItems: 'center' }}>
          {/* Left */}
          <div>
            <h2 style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 800, color: '#0D1B2A',
              lineHeight: 1.15, marginBottom: 20,
            }}>
              See every decision<br />
              <span className="gradient-text">before it happens.</span>
            </h2>
            <p style={{ fontSize: 14, color: '#6B7A8D', lineHeight: 1.75, marginBottom: 28, fontFamily: "'Inter', sans-serif" }}>
              Sapientia's decision feed shows you what the AI is about to do, why it's doing it, and what outcome it predicts — before execution.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                'Real-time decision explanations in plain English',
                'Approve workflows for high-impact changes',
                'Custom business rules the AI must respect',
                'Predicted outcome ranges for every action',
                'One-click rollback if results disappoint',
              ].map(pt => (
                <li key={pt} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <span style={{
                    width: 20, height: 20, borderRadius: '50%',
                    background: '#EAF1FF', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginTop: 1,
                  }}>
                    <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#1B6EF3', display: 'block' }} />
                  </span>
                  <span style={{ fontSize: 14, color: '#0D1B2A', fontWeight: 500, lineHeight: 1.55, fontFamily: "'Inter', sans-serif" }}>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — dashboard image */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src="/assets/Group 1948759932 .png"
              alt=""
              style={{ width: '100%', objectFit: 'contain', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* ── SECTION: Smarter, Safer, and Scalable ── */}
      <section style={{
        padding: '96px 48px',
        backgroundImage: "url('/assets/Mask group .png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>

          {/* Centered title */}
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <h2 style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 800,
              lineHeight: 1.2, marginBottom: 0,
            }}>
              <span style={{ color: '#1B6EF3' }}>Smarter, Safer,</span><br />
              <span style={{ color: '#0D1B2A' }}>and </span>
              <span style={{ color: '#1B6EF3' }}>Scalable</span>
              <span style={{ color: '#0D1B2A' }}> Advertising.</span>
            </h2>
          </div>

          {/* 3-column icon cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 48, textAlign: 'center' }}>
            {[
              {
                svg: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="14" cy="14" r="8" stroke="white" strokeWidth="2.5" fill="none"/>
                    <line x1="20" y1="20" x2="28" y2="28" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                ),
                label: 'No Black Box',
                desc: 'Understand the logic behind every decision',
              },
              {
                svg: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 3L4 8v8c0 7 5.5 11.5 12 13 6.5-1.5 12-6 12-13V8L16 3z" stroke="white" strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
                    <polyline points="11,16 14.5,19.5 21,13" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                label: 'No Autopilot Risk',
                desc: 'Approve actions before execution',
              },
              {
                svg: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="10" r="4" stroke="white" strokeWidth="2.5" fill="none"/>
                    <circle cx="22" cy="10" r="4" stroke="white" strokeWidth="2.5" fill="none"/>
                    <path d="M4 26c0-4.4 3.6-8 8-8h8c4.4 0 8 3.6 8 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                  </svg>
                ),
                label: 'No Overfitting',
                desc: 'Models adapt based on your brand and audience',
              },
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
                <div style={{
                  width: 72, height: 72, borderRadius: 18,
                  background: '#1B6EF3',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {item.svg}
                </div>
                <h3 style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: 18, fontWeight: 700,
                  color: '#1B6EF3', margin: 0,
                }}>
                  {item.label}
                </h3>
                <p style={{ fontSize: 14, color: '#6B7A8D', lineHeight: 1.65, fontFamily: "'Inter', sans-serif", margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section style={{
        background: 'linear-gradient(135deg, #0f1729 0%, #1a2a50 50%, #0f1729 100%)',
        padding: '96px 48px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-20%', left: '50%',
          transform: 'translateX(-50%)',
          width: 700, height: 300,
          background: 'radial-gradient(ellipse, rgba(27,110,243,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 680, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: 'clamp(28px, 4vw, 52px)',
            fontWeight: 800, color: 'white',
            lineHeight: 1.15, marginBottom: 20,
          }}>
            Control every ad move.<br />
            See every decision.<br />
            <span className="gradient-text">Approve what matters.</span>
          </h2>
          <p style={{
            fontSize: 16, color: 'rgba(255,255,255,0.6)',
            maxWidth: 500, margin: '0 auto 40px',
            lineHeight: 1.7, fontFamily: "'Inter', sans-serif",
          }}>
            Join brands that run transparent, high-performance advertising — with AI they can actually trust.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
            <CtaLink className="btn btn-primary" style={{ fontSize: 15, padding: '14px 36px', borderRadius: 100 }}>
              Hire Sapientia
            </CtaLink>
            <button style={{
              fontSize: 15, padding: '14px 36px', borderRadius: 100,
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'white', cursor: 'pointer', fontWeight: 600,
              fontFamily: "'Sora', sans-serif",
            }}>
              Watch Demo
            </button>
          </div>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', marginTop: 24, fontFamily: "'Inter', sans-serif" }}>
            No credit card required. Setup in under 5 minutes.
          </p>
        </div>
      </section>


    </main>
  )
}
