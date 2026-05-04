import { useState } from 'react'
import CtaLink from '../../components/CtaLink'

export default function WhiteBoxAI() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      q: 'What makes Sapientia\'s AI "white-box"?',
      a: 'White-box means every decision, recommendation, and strategy change is fully visible and explainable. You can see exactly why a bid was increased, why a keyword was paused, or why a budget was shifted — with reasoning attached to every action.',
    },
    {
      q: 'Can I approve or reject AI recommendations before they execute?',
      a: 'Yes. Sapientia features an approval workflow where every significant strategy change is surfaced for your review before execution. You stay in control — the AI proposes, you decide.',
    },
    {
      q: 'How does the Strategy Log work?',
      a: 'The Strategy Log is a full audit trail of every decision made by the AI engine. Each entry includes the timestamp, the action taken, the data signals that triggered it, and the outcome. You can filter, search, and export the log at any time.',
    },
    {
      q: 'Can I set custom business rules that the AI must follow?',
      a: 'Absolutely. Sapientia allows you to define guardrails — minimum ROAS thresholds, bid caps, budget floors, blacklisted keywords, and more. The AI will never violate these rules, and you can update them at any time.',
    },
    {
      q: 'Is the white-box approach available on all plans?',
      a: 'Core transparency features — visible recommendations, the strategy log, and approval workflows — are available on all plans. Advanced custom rule-sets and enterprise audit exports are available on the Strategic Partner plan.',
    },
  ]

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
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(27,110,243,0.15)',
            border: '1px solid rgba(27,110,243,0.35)',
            borderRadius: 100, padding: '6px 16px',
            marginBottom: 28,
          }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#1B6EF3', display: 'inline-block' }} />
            <span style={{ fontSize: 12, fontWeight: 700, color: '#a5c4ff', fontFamily: "'Sora', sans-serif", letterSpacing: '0.08em' }}>
              WHITE-BOX AI STRATEGY ENGINE
            </span>
          </div>

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
          <div>
            <p style={{
              fontSize: 13, fontWeight: 700, color: '#1B6EF3',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              marginBottom: 20, fontFamily: "'Sora', sans-serif",
            }}>
              We believe strategy should be:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { label: 'Explainable', desc: 'Every decision comes with a reason you can read, share, and learn from.' },
                { label: 'Yours to control', desc: 'Approve, reject, or modify any recommendation before it goes live.' },
                { label: 'Reviewable', desc: 'A full audit trail of every strategy action, forever searchable.' },
              ].map(item => (
                <div key={item.label} style={{
                  display: 'flex', alignItems: 'flex-start', gap: 16,
                  padding: '20px 24px',
                  background: '#f8faff',
                  borderRadius: 16,
                  border: '1px solid #e4eeff',
                }}>
                  <span style={{
                    background: '#EAF1FF',
                    color: '#1B6EF3',
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: 700,
                    fontSize: 12,
                    padding: '5px 14px',
                    borderRadius: 100,
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                    marginTop: 2,
                  }}>
                    {item.label}
                  </span>
                  <p style={{ fontSize: 14, color: '#6B7A8D', lineHeight: 1.65, margin: 0, fontFamily: "'Inter', sans-serif" }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION: Transparent AI. You're in Control ── */}
      <section style={{ background: '#f8faff', padding: '96px 48px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <p style={{
              fontSize: 12, fontWeight: 700, color: '#1B6EF3',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              marginBottom: 12, fontFamily: "'Sora', sans-serif",
            }}>
              Full Transparency
            </p>
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
                icon: '👁',
                title: 'Every Suggestion is Visible',
                desc: 'Before any change is applied to your campaigns, you see it. The AI surfaces every recommendation with context — what triggered it, what it expects to happen, and why now.',
                accent: '#1B6EF3',
                bg: '#EAF1FF',
              },
              {
                icon: '✅',
                title: 'Review & Approve Before it Executes',
                desc: 'An approval workflow puts you in the driver\'s seat. Accept, modify, or decline any action. Set auto-approve thresholds for low-risk optimizations and manual review for bigger moves.',
                accent: '#16a34a',
                bg: '#f0fdf4',
              },
              {
                icon: '📋',
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
                  fontSize: 22, marginBottom: 20,
                }}>
                  {card.icon}
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
        background: 'linear-gradient(135deg, #0f1729 0%, #1a2a50 60%, #0f1729 100%)',
        padding: '96px 48px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <h2 style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 800, color: 'white',
              lineHeight: 1.15, marginBottom: 16,
            }}>
              Proven Expertise + Adaptive AI<br />
              <span className="gradient-text">= Unbeatable Strategy</span>
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', maxWidth: 500, margin: '0 auto', lineHeight: 1.7, fontFamily: "'Inter', sans-serif" }}>
              The engine combines human advertising expertise with adaptive machine learning — in full view.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
            {[
              {
                label: 'Expert Knowledge',
                icon: '🧠',
                points: [
                  'Built on thousands of real campaign decisions',
                  'Encodes best-practice bidding & budget rules',
                  'Understands seasonality, category nuance, and buyer intent',
                  'Continuously reviewed by human strategists',
                ],
                border: 'rgba(27,110,243,0.4)',
                bg: 'rgba(27,110,243,0.1)',
              },
              {
                label: 'Strategy Engine',
                icon: '⚙️',
                points: [
                  'Synthesizes expert rules with live performance data',
                  'Generates explainable recommendations in plain language',
                  'Weighs short-term wins vs. long-term brand health',
                  'Updates strategy in real-time as signals change',
                ],
                border: 'rgba(124,58,237,0.4)',
                bg: 'rgba(124,58,237,0.1)',
                highlight: true,
              },
              {
                label: 'AI Learning',
                icon: '📈',
                points: [
                  'Learns from every outcome in your account',
                  'Adapts models to your category and audience',
                  'Improves bid and budget predictions over time',
                  'Surfaces new opportunities as market shifts',
                ],
                border: 'rgba(34,197,94,0.35)',
                bg: 'rgba(34,197,94,0.08)',
              },
            ].map((col, i) => (
              <div key={col.label} style={{
                background: col.bg,
                border: `1px solid ${col.border}`,
                borderRadius: i === 0 ? '16px 0 0 16px' : i === 2 ? '0 16px 16px 0' : '0',
                padding: '36px 28px',
              }}>
                <div style={{ fontSize: 28, marginBottom: 14 }}>{col.icon}</div>
                <h3 style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: 16, fontWeight: 700,
                  color: 'white', marginBottom: 20,
                }}>
                  {col.label}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {col.points.map(pt => (
                    <li key={pt} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                      <span style={{ color: '#1B6EF3', fontWeight: 700, flexShrink: 0, marginTop: 2 }}>→</span>
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.65, fontFamily: "'Inter', sans-serif" }}>{pt}</span>
                    </li>
                  ))}
                </ul>
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
            <p style={{
              fontSize: 12, fontWeight: 700, color: '#1B6EF3',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              marginBottom: 12, fontFamily: "'Sora', sans-serif",
            }}>
              Real-Time Intelligence
            </p>
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

          {/* Right — dashboard mockup */}
          <div style={{
            background: 'white',
            borderRadius: 20,
            boxShadow: '0 8px 48px rgba(27,110,243,0.13)',
            border: '1px solid #e4eeff',
            overflow: 'hidden',
          }}>
            {/* Window chrome */}
            <div style={{
              background: '#f4f7fb',
              padding: '12px 16px',
              borderBottom: '1px solid #e4eeff',
              display: 'flex', alignItems: 'center', gap: 6,
            }}>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} />
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }} />
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
              <span style={{ fontFamily: "'Sora', sans-serif", fontSize: 12, fontWeight: 700, color: '#6B7A8D', marginLeft: 10 }}>Strategy Decision Feed</span>
            </div>

            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {/* Pending action */}
              <div style={{ background: '#fff7ed', borderRadius: 14, padding: '16px 18px', border: '1px solid #fed7aa' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#f97316', fontFamily: "'Sora', sans-serif" }}>⏳ PENDING APPROVAL</span>
                  <span style={{ fontSize: 10, color: '#6B7A8D' }}>2 min ago</span>
                </div>
                <p style={{ fontSize: 13, color: '#0D1B2A', fontWeight: 500, marginBottom: 8, lineHeight: 1.5 }}>
                  Increase bid for <strong>"running shoes womens"</strong> from $1.20 → $1.55
                </p>
                <p style={{ fontSize: 12, color: '#6B7A8D', marginBottom: 12, lineHeight: 1.5 }}>
                  Reason: CTR 4.2% (avg 1.8%), ROAS 6.1x over 14 days. Predicted rank improvement: #7 → #3.
                </p>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button style={{ flex: 1, background: '#1B6EF3', color: 'white', border: 'none', borderRadius: 8, padding: '8px', fontSize: 12, fontWeight: 700, cursor: 'pointer', fontFamily: "'Sora', sans-serif" }}>Approve</button>
                  <button style={{ flex: 1, background: 'white', color: '#6B7A8D', border: '1px solid #e4eeff', borderRadius: 8, padding: '8px', fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: "'Sora', sans-serif" }}>Decline</button>
                </div>
              </div>

              {/* Approved action */}
              <div style={{ background: '#f0fdf4', borderRadius: 14, padding: '16px 18px', border: '1px solid #bbf7d0' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#16a34a', fontFamily: "'Sora', sans-serif" }}>✓ EXECUTED</span>
                  <span style={{ fontSize: 10, color: '#6B7A8D' }}>18 min ago</span>
                </div>
                <p style={{ fontSize: 13, color: '#0D1B2A', fontWeight: 500, marginBottom: 6, lineHeight: 1.5 }}>
                  Paused keyword <strong>"cheap bluetooth headphones"</strong>
                </p>
                <div style={{ display: 'flex', gap: 8 }}>
                  <div style={{ background: 'white', borderRadius: 7, padding: '5px 10px', fontSize: 11, color: '#16a34a', fontWeight: 700 }}>ACOS was 94%</div>
                  <div style={{ background: 'white', borderRadius: 7, padding: '5px 10px', fontSize: 11, color: '#1B6EF3', fontWeight: 700 }}>$48 saved</div>
                </div>
              </div>

              {/* Info card */}
              <div style={{ background: '#EAF1FF', borderRadius: 14, padding: '16px 18px' }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#1B6EF3', marginBottom: 8, fontFamily: "'Sora', sans-serif" }}>✦ AI INSIGHT</div>
                <p style={{ fontSize: 13, color: '#0D1B2A', lineHeight: 1.6, margin: 0 }}>
                  Strategy is operating within your ROAS floor of 4.0x. 3 opportunities queued for tomorrow's review window.
                </p>
              </div>

              {/* Rule indicator */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#f8faff', borderRadius: 12, padding: '12px 16px', border: '1px solid #e4eeff' }}>
                <span style={{ fontSize: 16 }}>🔒</span>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#0D1B2A', marginBottom: 2 }}>Business Rule Active</div>
                  <div style={{ fontSize: 11, color: '#6B7A8D' }}>Max daily budget cap: $2,500 · Min ROAS: 4.0x</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION: Smarter, Safer, and Scalable ── */}
      <section style={{ background: '#f8faff', padding: '96px 48px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <h2 style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 800, color: '#0D1B2A',
              lineHeight: 1.15, marginBottom: 16,
            }}>
              Smarter, Safer, and{' '}
              <span className="gradient-text">Scalable Advertising.</span>
            </h2>
            <p style={{ fontSize: 15, color: '#6B7A8D', maxWidth: 500, margin: '0 auto', lineHeight: 1.7, fontFamily: "'Inter', sans-serif" }}>
              Three problems every other AI ad platform creates. Zero of them with Sapientia.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              {
                icon: '⬜',
                iconBg: '#EAF1FF',
                iconColor: '#1B6EF3',
                label: 'No Black Box',
                desc: 'Every decision, every recommendation, every outcome — visible and explained. You always know why your budget moved.',
              },
              {
                icon: '🛑',
                iconBg: '#fff0f0',
                iconColor: '#ef4444',
                label: 'No Autopilot Risk',
                desc: 'The AI proposes. You decide. No changes execute without passing your approval rules and business constraints.',
              },
              {
                icon: '📐',
                iconBg: '#f0fdf4',
                iconColor: '#16a34a',
                label: 'No Overfitting',
                desc: 'Strategies are built on expert logic plus live data — not just historical patterns that break when the market shifts.',
              },
            ].map(item => (
              <div key={item.label} style={{
                background: 'white',
                borderRadius: 20,
                border: '1px solid #e4eeff',
                padding: '36px 28px',
                textAlign: 'center',
                boxShadow: '0 2px 12px rgba(27,110,243,0.05)',
              }}>
                <div style={{
                  width: 60, height: 60, borderRadius: 18,
                  background: item.iconBg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 26, margin: '0 auto 20px',
                }}>
                  {item.icon}
                </div>
                <h3 style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: 18, fontWeight: 800,
                  color: '#0D1B2A', marginBottom: 12,
                }}>
                  {item.label}
                </h3>
                <p style={{ fontSize: 14, color: '#6B7A8D', lineHeight: 1.75, fontFamily: "'Inter', sans-serif", margin: 0 }}>
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

      {/* ── FAQ ── */}
      <section style={{ background: 'white', padding: '96px 48px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 800, textAlign: 'center',
            marginBottom: 64, color: '#0D1B2A',
          }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderTop: '1px solid #EAECF0' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: '100%', background: 'none', border: 'none', cursor: 'pointer',
                    display: 'flex', alignItems: 'flex-start', gap: 12,
                    padding: '24px 0', textAlign: 'left',
                  }}
                >
                  <span style={{ color: '#1B6EF3', fontSize: 16, lineHeight: 1, marginTop: 2, flexShrink: 0 }}>•</span>
                  <span style={{ fontFamily: "'Sora', sans-serif", fontSize: 15, fontWeight: 700, color: '#0D1B2A', flex: 1, lineHeight: 1.4 }}>
                    {faq.q}
                  </span>
                  <span style={{
                    flexShrink: 0, fontSize: 16, color: '#6B7A8D', marginTop: 2,
                    transform: openFaq === i ? 'rotate(90deg)' : 'none',
                    transition: 'transform 0.2s', display: 'inline-block',
                  }}>›</span>
                </button>
                {openFaq === i && (
                  <p style={{ fontSize: 14, color: '#6B7A8D', lineHeight: 1.75, paddingLeft: 28, paddingBottom: 24, marginTop: -8, fontFamily: "'Inter', sans-serif" }}>
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
            <div style={{ borderTop: '1px solid #EAECF0' }} />
          </div>
        </div>
      </section>

    </main>
  )
}
