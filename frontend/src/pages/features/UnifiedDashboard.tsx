import React from 'react'
import CtaLink from '../../components/CtaLink'

const DashboardMockup = ({ title, rows }: { title: string; rows: { label: string; value: string; color: string; badge?: string; badgeColor?: string }[] }) => (
  <div style={{ background: 'white', borderRadius: 16, boxShadow: '0 4px 32px rgba(27,110,243,0.12)', padding: '20px 24px', border: '1px solid #f0f4ff' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
      <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
      <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }} />
      <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} />
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
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(27,110,243,0.07) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          pointerEvents: 'none',
        }} />
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
      <section style={{ padding: '80px 48px', maxWidth: 1200, margin: '0 auto' }}>
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
              <div style={{ position: 'relative', width: 64, height: 64 }}>
                <img src="/assets/2/Rectangle 14.png" alt="" style={{ width: 64, height: 64, borderRadius: 14, display: 'block' }} />
                <img src="/assets/2/信息过滤 1.png" alt="" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 36, height: 36, objectFit: 'contain' }} />
              </div>
            }
            title="Universal Platform Integration"
            description="Connect TikTok, Amazon Ads, Google Ads, Meta, and Instagram in minutes. Sapientia syncs your accounts instantly so you never miss a campaign update."
          />
          <FeatureCard
            icon={
              <div style={{ position: 'relative', width: 64, height: 64 }}>
                <img src="/assets/3/Rectangle 15.png" alt="" style={{ width: 64, height: 64, borderRadius: 14, display: 'block' }} />
                <img src="/assets/3/大数据 1.png" alt="" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 36, height: 36, objectFit: 'contain' }} />
              </div>
            }
            title="Cross-Platform Reporting"
            description="See unified analytics across all platforms in a single view. Compare ROAS, spend, and conversions side by side to make data-driven decisions faster."
          />
          <FeatureCard
            icon={
              <div style={{ position: 'relative', width: 64, height: 64 }}>
                <img src="/assets/4/Rectangle 16.png" alt="" style={{ width: 64, height: 64, borderRadius: 14, display: 'block' }} />
                <img src="/assets/4/image 198.png" alt="" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 36, height: 36, objectFit: 'contain' }} />
                <img src="/assets/4/智能云 1.png" alt="" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 36, height: 36, objectFit: 'contain' }} />
              </div>
            }
            title="Bulk Campaign Creation"
            description="Launch campaigns across multiple platforms simultaneously. Set budgets, audiences, and creative assets once, then deploy everywhere with one click."
          />
          <FeatureCard
            icon={
              <div style={{ position: 'relative', width: 64, height: 64 }}>
                <img src="/assets/5/Rectangle 18.png" alt="" style={{ width: 64, height: 64, borderRadius: 14, display: 'block' }} />
                <img src="/assets/5/人脸识别 1.png" alt="" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 36, height: 36, objectFit: 'contain' }} />
              </div>
            }
            title="Format Support"
            description="From short-form video to static display, carousel to stories — Sapientia supports every ad format across every channel, auto-adapting your creative assets."
          />
        </div>
      </section>

      {/* ── MULTI-BRAND TEAM MANAGEMENT ── */}
      <section style={{ background: '#f8faff', padding: '96px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
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
                rectSrc: '/assets/5/Rectangle 18.png',
                iconSrc: '/assets/5/人脸识别 1.png',
                title: 'Create Business Profile',
                desc: 'Set up dedicated workspaces for each brand or client. Keep campaigns, budgets, and data fully separated and organized.',
              },
              {
                rectSrc: '/assets/6/Rectangle 19.png',
                iconSrc: '/assets/6/信息提取 1.png',
                title: 'Invite Team Members',
                desc: 'Add team members with granular permissions — admin, editor, or viewer — and control exactly what each person can see and do.',
              },
              {
                rectSrc: '/assets/7/Rectangle 20.png',
                iconSrc: '/assets/7/智能搜索 1.png',
                title: 'Switch Context Instantly',
                desc: 'Jump between brand accounts with one click. No logging out, no confusion — just seamless context switching across your entire portfolio.',
              },
            ].map((item) => (
              <div key={item.title} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
                <div style={{ position: 'relative', width: 64, height: 64 }}>
                  <img src={item.rectSrc} alt="" style={{ width: 64, height: 64, borderRadius: 16, display: 'block' }} />
                  <img src={item.iconSrc} alt="" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 36, height: 36, objectFit: 'contain' }} />
                </div>
                <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 15, fontWeight: 700, color: '#0D1B2A' }}>{item.title}</div>
                <div style={{ fontSize: 13, color: '#6B7A8D', lineHeight: 1.65 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CENTRALIZED CONTROL ── */}
      <section style={{ padding: '96px 48px', maxWidth: 1200, margin: '0 auto' }}>
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
                rectSrc: '/assets/8/Rectangle 21.png',
                iconSrc: '/assets/8/人工智能 (2) 1.png',
                title: 'Strategy Template Library',
                desc: 'Create reusable campaign templates with preset bid strategies, audience targeting, and creative guidelines.',
              },
              {
                rectSrc: '/assets/9/Rectangle 22.png',
                iconSrc: '/assets/9/用户画像 1.png',
                title: 'Bulk Rule Deployment',
                desc: 'Push keyword lists, negative keywords, bid adjustments, and audience segments to multiple accounts simultaneously.',
              },
              {
                rectSrc: '/assets/10/Rectangle 24.png',
                iconSrc: '/assets/10/数据挖掘 1.png',
                title: 'Unified Budget Management',
                desc: 'Allocate budgets across platforms and regions from a central interface with automatic spending controls.',
              },
              {
                rectSrc: '/assets/11/Rectangle 23.png',
                iconSrc: '/assets/11/数据建模 1.png',
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
                <div style={{ position: 'relative', width: 60, height: 60, flexShrink: 0 }}>
                  <img src={item.rectSrc} alt="" style={{ width: 60, height: 60, borderRadius: 14, display: 'block' }} />
                  <img src={item.iconSrc} alt="" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 32, height: 32, objectFit: 'contain' }} />
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
      </section>

      {/* ── ONE BRAIN FOR EVERY CHANNEL (dark section) ── */}
      <section style={{
        background: 'linear-gradient(135deg, #0D1B2A 0%, #1B3A5C 50%, #0D1B2A 100%)',
        padding: '96px 48px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* dot grid overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          pointerEvents: 'none',
        }} />
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
          <div style={{
            maxWidth: 900, margin: '40px auto 0',
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 0, borderRadius: 16,
            background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
            overflow: 'hidden',
          }}>
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
      <section style={{ padding: '96px 48px', textAlign: 'center', background: 'white' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 800, marginBottom: 18, color: '#0D1B2A', lineHeight: 1.1, whiteSpace: 'nowrap' }}>
            Ready to <span className="gradient-text">Unify Your Ad Management?</span>
          </h2>
          <p style={{ fontSize: 16, color: '#6B7A8D', lineHeight: 1.6, marginBottom: 40, maxWidth: 520, margin: '0 auto 40px' }}>
            Join thousands of marketers who've replaced fragmented ad tools<br />with one powerful, AI-driven dashboard. Stop managing tabs. Start managing results.
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
