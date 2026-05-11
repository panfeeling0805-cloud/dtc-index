import React from 'react'
import CtaLink from '../../components/CtaLink'

const DashboardMockup = ({ title, rows }: { title: string; rows: { label: string; value: string; color: string; badge?: string; badgeColor?: string }[] }) => (
  <div style={{ background: 'white', borderRadius: 16, boxShadow: '0 4px 32px rgba(27,110,243,0.12)', padding: '20px 24px', border: '1px solid #f0f4ff' }}>
    <div className="window-chrome">
      <span className="window-dot window-dot-green" />
      <span className="window-dot window-dot-yellow" />
      <span className="window-dot window-dot-red" />
      <span style={{ fontFamily: "'Sora', sans-serif", fontSize: 13, fontWeight: 700, color: '#0D1B2A', marginLeft: 8 }}>{title}</span>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {rows.map((row) => (
        <div key={row.label} style={{ display: 'flex', alignItems: 'center', gap: 12, background: row.color, borderRadius: 10, padding: '11px 14px' }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#0D1B2A' }}>{row.label}</div>
            <div style={{ fontSize: 11, color: '#6B7A8D', marginTop: 2 }}>{row.value}</div>
          </div>
          {row.badge && (
            <span style={{ fontSize: 10, fontWeight: 700, color: row.badgeColor ?? '#1B6EF3', background: 'white', padding: '3px 9px', borderRadius: 100, flexShrink: 0 }}>
              {row.badge}
            </span>
          )}
        </div>
      ))}
    </div>
  </div>
)

const CheckItem = ({ text }: { text: string }) => (
  <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: '#6B7A8D', lineHeight: 1.6, listStyle: 'none' }}>
    <span style={{ width: 20, height: 20, borderRadius: '50%', background: '#EAF1FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2, fontSize: 11, color: '#1B6EF3', fontWeight: 700 }}>✓</span>
    {text}
  </li>
)

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div style={{
    background: 'white',
    borderRadius: 18,
    border: '1.5px solid transparent',
    backgroundClip: 'padding-box',
    padding: '28px 24px',
    boxShadow: '0 2px 20px rgba(99,102,241,0.10)',
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
    position: 'relative',
    isolation: 'isolate',
  }}>
    {/* gradient border overlay */}
    <div style={{
      position: 'absolute', inset: 0, borderRadius: 18, zIndex: -1,
      padding: 1.5,
      background: 'linear-gradient(135deg, #7C3AED, #2563EB)',
      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
      WebkitMaskComposite: 'xor',
      maskComposite: 'exclude',
    }} />
    <div style={{ width: 64, height: 64, flexShrink: 0, position: 'relative' }}>
      {icon}
    </div>
    <div>
      <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 15, fontWeight: 700, color: '#0D1B2A', marginBottom: 8 }}>{title}</div>
      <div style={{ fontSize: 13, color: '#6B7A8D', lineHeight: 1.65 }}>{description}</div>
    </div>
  </div>
)

export default function UnifiedDashboard() {
  return (
    <main style={{ background: 'white', minHeight: '100vh', overflow: 'hidden' }}>

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(160deg, #ffffff 0%, #EAF1FF 55%, #dbeafe 100%)',
        padding: '90px 48px 100px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* subtle grid overlay */}
        <div className="dot-overlay-light" />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 800, margin: '0 auto' }}>
          <h1 style={{
            fontFamily: "'Sora', sans-serif", fontWeight: 800,
            fontSize: 'clamp(34px, 5vw, 58px)', lineHeight: 1.1,
            marginBottom: 20, color: '#0D1B2A',
          }}>
            Manage All Your Ads from{' '}
            <span className="gradient-text">One Unified Dashboard</span>
          </h1>
          <p style={{ fontSize: 16, color: '#6B7A8D', maxWidth: 640, margin: '0 auto 40px', lineHeight: 1.6, fontWeight: 500 }}>
            Unify Amazon, Google, Meta, and TikTok campaigns in one workspace.<br />
            Track performance, optimize spend, and scale faster with enterprise-grade control and collaboration.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
            <CtaLink className="btn btn-primary" style={{ fontSize: 15, padding: '13px 32px', borderRadius: 100 }}>
              Hire Sapientia
            </CtaLink>
            <CtaLink className="btn btn-ghost" style={{ fontSize: 15, padding: '13px 32px', borderRadius: 100, background: 'transparent' }}>
              Schedule Demo
            </CtaLink>
          </div>
        </div>
      </section>

      {/* ── HERO DASHBOARD MOCKUP ── */}
      <section style={{ padding: '0 48px', maxWidth: 1000, margin: '-36px auto 80px', position: 'relative', zIndex: 2 }}>
        <img
          src="/assets/Group 62.png"
          alt="Unified Campaign Workspace Dashboard"
          style={{ width: '100%', borderRadius: 20, boxShadow: '0 8px 60px rgba(27,110,243,0.15)', display: 'block' }}
        />
      </section>

      {/* ── COMMAND CENTER ── */}
      <section className="page-section-sm">
        <div className="page-inner">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, marginBottom: 14, color: '#0D1B2A' }}>
            Your Business, Your{' '}
            <span className="gradient-text">Unified Command Center.</span>
          </h2>
          <p style={{ fontSize: 15, color: '#6B7A8D', maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>
            The control layer for modern advertising.<br />
            Unify campaigns across every major platform with transparent AI optimization, centralized performance tracking, and enterprise-grade collaboration.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
          <FeatureCard
            icon={
              <div style={{ width: 64, height: 64, borderRadius: 14, background: '#EAF1FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1B6EF3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                </svg>
              </div>
            }
            title="Universal Platform Integration"
            description="Connect TikTok, Amazon Ads, Google Ads, Meta, and Instagram in minutes. Sapientia syncs your accounts instantly so you never miss a campaign update."
          />
          <FeatureCard
            icon={
              <div style={{ width: 64, height: 64, borderRadius: 14, background: '#EAF1FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1B6EF3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/>
                </svg>
              </div>
            }
            title="Cross-Platform Reporting"
            description="See unified analytics across all platforms in a single view. Compare ROAS, spend, and conversions side by side to make data-driven decisions faster."
          />
          <FeatureCard
            icon={
              <div style={{ width: 64, height: 64, borderRadius: 14, background: '#EAF1FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1B6EF3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
                </svg>
              </div>
            }
            title="Bulk Campaign Creation"
            description="Launch campaigns across multiple platforms simultaneously. Set budgets, audiences, and creative assets once, then deploy everywhere with one click."
          />
          <FeatureCard
            icon={
              <div style={{ width: 64, height: 64, borderRadius: 14, background: '#EAF1FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1B6EF3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
                </svg>
              </div>
            }
            title="Format Support"
            description="From short-form video to static display, carousel to stories — Sapientia supports every ad format across every channel, auto-adapting your creative assets."
          />
        </div>
        </div>
      </section>

      {/* ── MULTI-BRAND TEAM MANAGEMENT ── */}
      <section className="page-section section-light">
        <div className="page-inner" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(26px, 3.5vw, 44px)', fontWeight: 800, lineHeight: 1.18, marginBottom: 20, color: '#0D1B2A' }}>
            Seamless Multi-Brand &{' '}
            <span className="gradient-text">Team Management.</span>
          </h2>
          <p style={{ fontSize: 15, color: '#6B7A8D', lineHeight: 1.7, marginBottom: 48, maxWidth: 620, margin: '0 auto 48px', fontWeight: 500 }}>
            Built for teams managing brands at scale.<br />
            Give every stakeholder the exact access they need — while keeping campaigns, budgets, and approvals fully under control.
          </p>

          {/* Large image */}
          <img
            src="/assets/Group 64.png"
            alt="Team Management Dashboard"
            style={{ width: '100%', maxWidth: 900, borderRadius: 20, boxShadow: '0 8px 48px rgba(27,110,243,0.13)', display: 'block', margin: '0 auto 72px' }}
          />

          {/* Three feature items */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40, maxWidth: 900, margin: '0 auto' }}>
            {[
              {
                svg: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1B6EF3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
                title: 'Create Business Profile',
                desc: 'Set up dedicated workspaces for each brand or client. Keep campaigns, budgets, and data fully separated and organized.',
              },
              {
                svg: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1B6EF3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>,
                title: 'Invite Team Members',
                desc: 'Add team members with granular permissions — admin, editor, or viewer — and control exactly what each person can see and do.',
              },
              {
                svg: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1B6EF3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 014-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 01-4 4H3"/></svg>,
                title: 'Switch Context Instantly',
                desc: 'Jump between brand accounts with one click. No logging out, no confusion — just seamless context switching across your entire portfolio.',
              },
            ].map((item) => (
              <div key={item.title} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 64, height: 64, borderRadius: 16, background: '#EAF1FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {item.svg}
                </div>
                <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 15, fontWeight: 700, color: '#0D1B2A' }}>{item.title}</div>
                <div style={{ fontSize: 13, color: '#6B7A8D', lineHeight: 1.65 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CENTRALIZED CONTROL ── */}
      <section className="page-section">
        <div className="page-inner">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, marginBottom: 14, color: '#0D1B2A' }}>
            Centralized Control.{' '}
            <span className="gradient-text">Local Execution.</span>
          </h2>
          <p style={{ fontSize: 15, color: '#6B7A8D', maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>
            Define global strategies and push them across all accounts instantly. Maintain consistency while allowing local customization for regional markets and specific campaigns.
          </p>
        </div>

        {/* Single bordered container with 2×2 grid */}
        <div style={{
          border: '1.5px solid',
          borderColor: 'transparent',
          borderRadius: 20,
          padding: 2,
          background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #7C3AED, #2563EB) border-box',
          boxShadow: '0 2px 24px rgba(99,102,241,0.08)',
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', borderRadius: 18, overflow: 'hidden' }}>
            {[
              {
                svg: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>,
                title: 'Strategy Template Library',
                desc: 'Create reusable campaign templates with preset bid strategies, audience targeting, and creative guidelines.',
              },
              {
                svg: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>,
                title: 'Bulk Rule Deployment',
                desc: 'Push keyword lists, negative keywords, bid adjustments, and audience segments to multiple accounts simultaneously.',
              },
              {
                svg: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>,
                title: 'Unified Budget Management',
                desc: 'Allocate budgets across platforms and regions from a central interface with automatic spending controls.',
              },
              {
                svg: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>,
                title: 'Creative Asset Sharing',
                desc: 'Maintain a central creative library and deploy assets across platforms while respecting platform-specific requirements.',
              },
            ].map((item, i) => (
              <div key={item.title} style={{
                display: 'flex', alignItems: 'flex-start', gap: 20,
                padding: '36px 32px',
                borderRight: i % 2 === 0 ? '1px solid rgba(124,58,237,0.15)' : 'none',
                borderBottom: i < 2 ? '1px solid rgba(124,58,237,0.15)' : 'none',
                background: 'white',
              }}>
                {/* Icon */}
                <div style={{ width: 60, height: 60, borderRadius: 14, background: '#F3EEFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {item.svg}
                </div>
                {/* Text */}
                <div>
                  <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 16, fontWeight: 700, color: '#1B6EF3', marginBottom: 8 }}>{item.title}</div>
                  <div style={{ fontSize: 13, color: '#6B7A8D', lineHeight: 1.7 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* ── ONE BRAIN FOR EVERY CHANNEL (dark section) ── */}
      <section style={{
        background: 'linear-gradient(135deg, #0D1B2A 0%, #1B3A5C 50%, #0D1B2A 100%)',
        padding: '96px 48px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* dot grid overlay */}
        <div className="dot-overlay" />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 800, marginBottom: 14, color: 'white' }}>
              One Brain for{' '}
              <span className="gradient-text">Every Channel</span>
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.60)', maxWidth: 620, margin: '0 auto', lineHeight: 1.6 }}>
              AI-powered monitoring that detects performance anomalies, budget risks, and optimization opportunities<br />across every advertising channel in real time.
            </p>
          </div>

          {/* Image */}
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <img
              src="/assets/Group 63.png"
              alt="AI Cross-Channel Intelligence"
              style={{ width: '100%', borderRadius: 20, display: 'block' }}
            />
          </div>

          {/* Stats row */}
          <div className="stats-bar grid-3" style={{ maxWidth: 900, margin: '40px auto 0', gap: 0, borderRadius: 16 }}>
            {[
              { num: '5+', label: 'Platforms connected' },
              { num: '3x', label: 'Faster campaign setup' },
              { num: '100%', label: 'Data in one dashboard' },
            ].map((stat, i) => (
              <div key={stat.num} style={{
                textAlign: 'center', padding: '36px 24px',
                borderRight: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              }}>
                <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(30px, 3.5vw, 44px)', fontWeight: 800, lineHeight: 1, marginBottom: 8 }}>
                  <span className="gradient-text">{stat.num}</span>
                </div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.50)', fontWeight: 500 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="page-section section-white" style={{ textAlign: 'center' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(24px, 3vw, 38px)', fontWeight: 800, marginBottom: 18, color: '#0D1B2A', lineHeight: 1.1, textAlign: 'center', whiteSpace: 'nowrap' }}>
            Ready to <span className="gradient-text">Unify Your Ad Management?</span>
          </h2>
          <p style={{ fontSize: 16, color: '#6B7A8D', lineHeight: 1.75, marginBottom: 40, margin: '0 auto 40px', textAlign: 'center' }}>
            Join thousands of marketers who've replaced fragmented ad tools with one powerful, AI-driven dashboard.<br />Stop managing tabs. Start managing results.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
            <CtaLink className="btn btn-primary" style={{ fontSize: 15, padding: '14px 36px', borderRadius: 100, fontWeight: 700 }}>
              Hire Sapientia
            </CtaLink>
            <CtaLink className="btn btn-ghost" style={{ fontSize: 15, padding: '14px 36px', borderRadius: 100, background: 'transparent', fontWeight: 700 }}>
              Schedule Demo
            </CtaLink>
          </div>
        </div>
      </section>

    </main>
  )
}
