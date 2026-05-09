import { useState } from 'react'
import CtaLink from '../components/CtaLink'

const faqs = [
  { q: 'What can I use Sapientia for on Amazon?', a: 'Sapientia automates Amazon PPC campaign management, keyword strategy, bid optimization, and provides AI-driven recommendations to improve organic ranking and ACOS.' },
  { q: 'Is there a money-back guarantee?', a: 'Yes. If the product does not meet your expectations within the guarantee period, you can request a full refund according to our policy.' },
  { q: 'Can I invite my team to use Sapientia?', a: 'Absolutely. Create team spaces, assign roles and permissions, and collaborate on strategies and reports in real time.' },
  { q: 'Does Sapientia have an affiliate program?', a: 'We offer an affiliate program for qualified partners. Contact us to learn more about commissions and requirements.' },
  { q: 'Are there tutorials or guides to help me use Sapientia?', a: 'Yes. You can access our knowledge base, quick-start tutorials, and in-product tips to get up to speed quickly.' },
  { q: 'Can Sapientia integrate with other software I use?', a: 'We support integrations with Amazon Seller Central, Amazon Ads, and major e-commerce analytics tools. API access is available on the Strategic Partner plan.' },
]

export default function ProductAmazon() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main style={{ background: 'white', minHeight: '100vh', overflow: 'hidden' }}>

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(180deg, #eaf3ff 0%, #f8fbff 60%, #ffffff 100%)',
        padding: '80px 48px 60px',
        textAlign: 'center',
      }}>
        <h1 style={{
          fontFamily: "'Sora', sans-serif", fontWeight: 800,
          fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: 1.1,
          color: '#0D1B2A', marginBottom: 16,
        }}>
          The smarter way to win<br />on Amazon
        </h1>
        <p style={{ fontSize: 15, color: '#6B7A8D', maxWidth: 560, margin: '0 auto 32px', lineHeight: 1.7 }}>
          Most tools automate campaigns, but keep decisions hidden. Sapientia does both — saving you hours with AI-driven automation while showing exactly why each change is made. The result: fewer ACOS, higher ROI, and strategies that stay with your team, long after you hit the pause.
        </p>
        <CtaLink className="btn btn-primary" style={{ fontSize: 15, padding: '13px 32px', borderRadius: 100 }}>
          Book a Demo
        </CtaLink>

        {/* Campaign Analytics widget */}
        <div style={{ maxWidth: 720, margin: '56px auto 0', borderRadius: 20, overflow: 'hidden', border: '0.5px solid #c8c8f4', background: 'linear-gradient(145deg,#f0eeff 0%,#e8f0ff 100%)' }}>
          {/* Title bar — gradient bg */}
          <div style={{ padding: '12px 18px', display: 'flex', alignItems: 'center', gap: 8, background: 'linear-gradient(90deg,#7C3AED,#2563EB)' }}>
            <div style={{ display: 'flex', gap: 6 }}>
              <div style={{ width: 13, height: 13, borderRadius: '50%', background: '#FF5F57' }} />
              <div style={{ width: 13, height: 13, borderRadius: '50%', background: '#FFBD2E' }} />
              <div style={{ width: 13, height: 13, borderRadius: '50%', background: '#27C840' }} />
            </div>
            <span style={{ fontSize: 13, fontWeight: 600, flex: 1, textAlign: 'center', paddingRight: 54, color: '#fff' }}>Campaign Analytics</span>
          </div>
          {/* Body */}
          <div style={{ padding: 14 }}>
            <div style={{ background: 'rgba(255,255,255,0.82)', borderRadius: 14, border: '0.5px solid rgba(130,120,240,0.2)', padding: 16, display: 'flex', gap: 12, alignItems: 'stretch' }}>
              {/* ACOS Reduction */}
              <div style={{ flex: 1, borderRadius: 11, padding: 16, background: 'rgba(254,226,226,0.6)', border: '0.5px solid rgba(248,113,113,0.25)', display: 'flex', flexDirection: 'column', gap: 6 }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: '#9999bb' }}>ACOS Reduction</div>
                <div style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.1, background: 'linear-gradient(90deg,#EF4444,#DC2626)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>-32%</div>
                <div style={{ fontSize: 11, color: '#aaaacc' }}>vs last period</div>
              </div>
              {/* PPC Growth */}
              <div style={{ flex: 1, borderRadius: 11, padding: 16, background: 'rgba(209,250,229,0.6)', border: '0.5px solid rgba(52,211,153,0.25)', display: 'flex', flexDirection: 'column', gap: 6 }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: '#9999bb' }}>PPC Growth</div>
                <div style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.1, background: 'linear-gradient(90deg,#10B981,#059669)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>+187%</div>
                <div style={{ fontSize: 11, color: '#aaaacc' }}>revenue increase</div>
              </div>
              {/* Divider */}
              <div style={{ width: 0.5, background: 'rgba(130,120,240,0.15)', flexShrink: 0 }} />
              {/* AI Recommendation */}
              <div style={{ flex: 1.3, padding: '4px 6px', display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                  <div style={{ width: 24, height: 24, borderRadius: 7, background: 'linear-gradient(135deg,#60A5FA,#6366F1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1l1.3 3.2H10L7.6 6.1l.9 3L6 7.6 3.5 9.1l.9-3L2 4.2h2.7L6 1z" fill="white"/></svg>
                  </div>
                  <span style={{ fontSize: 14, fontWeight: 800, background: 'linear-gradient(90deg,#6366F1,#2563EB)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>AI Recommendation</span>
                </div>
                <div style={{ fontSize: 13, color: '#4a4a8a', lineHeight: 1.6 }}>
                  Increase bid to 15% for <strong style={{ color: '#2a2a6a', fontWeight: 700 }}>"running shoes"</strong> to improve organic ranking
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 1: Focus on strategy ── */}
      <section style={{ padding: '96px 48px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'flex-start' }}>
          {/* Left — Campaign Strategy Dashboard widget */}
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <div style={{ width: 480, borderRadius: 20, overflow: 'hidden', border: '0.5px solid #c8c8f4', background: 'linear-gradient(145deg,#f0eeff 0%,#e8f0ff 100%)' }}>
            {/* Title bar */}
            <div style={{ padding: '12px 18px', display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.6)', borderBottom: '0.5px solid rgba(130,120,240,0.15)' }}>
              <div style={{ display: 'flex', gap: 6 }}>
                <div style={{ width: 13, height: 13, borderRadius: '50%', background: '#FF5F57' }} />
                <div style={{ width: 13, height: 13, borderRadius: '50%', background: '#FFBD2E' }} />
                <div style={{ width: 13, height: 13, borderRadius: '50%', background: '#27C840' }} />
              </div>
              <span style={{ fontSize: 13, fontWeight: 600, flex: 1, textAlign: 'center', paddingRight: 54, background: 'linear-gradient(90deg,#7C3AED,#2563EB)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Campaign Strategy Dashboard
              </span>
            </div>
            {/* Body */}
            <div style={{ padding: 14 }}>
              {/* Tags */}
              <div style={{ background: 'rgba(255,255,255,0.78)', borderRadius: 14, border: '0.5px solid rgba(130,120,240,0.2)', padding: 16, display: 'flex', flexWrap: 'wrap' as const, gap: 10, marginBottom: 12 }}>
                {['High-CTR Products', 'Low-Converting Terms', 'Seasonal Keywords', 'Budget Optimized', 'Performance Signal'].map(tag => (
                  <span key={tag} style={{ padding: '8px 16px', borderRadius: 999, border: '1.5px solid rgba(100,120,240,0.35)', fontSize: 13, fontWeight: 600, background: 'linear-gradient(90deg,#7C3AED,#2563EB)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', whiteSpace: 'nowrap' as const }}>
                    {tag}
                  </span>
                ))}
              </div>
              {/* Cards */}
              {[
                { title: 'Auto-Generated Strategy', text: 'Scale high-CTR products: +25% budget allocation for running shoes category based on performance signals' },
                { title: 'Smart Tag Filter Applied', text: 'Pause 147 low-converting terms identified by AI across 12 campaigns' },
              ].map((card, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.78)', borderRadius: 14, border: '0.5px solid rgba(130,120,240,0.2)', padding: '16px 18px', marginBottom: i < 1 ? 10 : 0, position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', left: 0, top: 8, bottom: 8, width: 4, borderRadius: '0 4px 4px 0', background: 'linear-gradient(180deg,#7C3AED,#2563EB)' }} />
                  <div style={{ paddingLeft: 12 }}>
                    <div style={{ fontSize: 15, fontWeight: 800, letterSpacing: '0.02em', background: 'linear-gradient(90deg,#7C3AED,#2563EB)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: 6 }}>
                      {card.title}
                    </div>
                    <div style={{ fontSize: 13, color: '#7777aa', lineHeight: 1.55 }}>{card.text}</div>
                  </div>
                </div>
              ))}
            </div>
            {/* Quote banner */}
            <div style={{ background: 'linear-gradient(90deg,#2563EB,#7C3AED)', padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 15, fontWeight: 600, color: '#fff', letterSpacing: '0.01em' }}>Manage strategies, not spreadsheets.</span>
            </div>
          </div>
          </div>

          {/* Right */}
          <div>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 800, lineHeight: 1.18, marginBottom: 16, color: '#0D1B2A' }}>
              Focus on <span className="gradient-text">strategy</span>,<br />not manual campaign<br />management
            </h2>
            <p style={{ fontSize: 14, color: '#6B7A8D', lineHeight: 1.7, marginBottom: 24, fontWeight: 600 }}>
              Your strategy on campaign co-pilot.
            </p>
            <p style={{ fontSize: 14, color: '#6B7A8D', lineHeight: 1.75, marginBottom: 16 }}>
              Sapientia auto-tags thousands of products, keywords, ads, and performance signals with 2000+ smart labels. Operators can filter those tags to instantly build strategies — like discovering low-converting terms or scaling high-CTR products.
            </p>
            <p style={{ fontSize: 14, color: '#6B7A8D', lineHeight: 1.75 }}>
              Then apply optimizations at scale, instead of digging through endless reports, you manage campaigns at the <span style={{ color: '#1B6EF3', fontWeight: 600 }}>strategy level</span>, not keyword by keyword.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Transparent strategies ── */}
      <section style={{ background: '#f8faff', padding: '96px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'flex-start' }}>
          {/* Left */}
          <div>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 800, lineHeight: 1.18, marginBottom: 16, color: '#0D1B2A' }}>
              Transparent<br />
              <span className="gradient-text">strategies.</span> Every<br />move explained.
            </h2>
            <p style={{ fontSize: 14, color: '#6B7A8D', lineHeight: 1.7, marginBottom: 24, fontWeight: 600 }}>
              No more black-box optimization
            </p>
            <p style={{ fontSize: 14, color: '#6B7A8D', lineHeight: 1.75 }}>
              Traditional automation is often a black box: you see the results, but not the reasons. Our white-box approach creates every recommendation, making strategies visible, traceable, and refutable. Teams gain confidence and managers can finally understand where their ad spend goes.
            </p>
          </div>

          {/* Right — Strategy Explanation Dashboard widget */}
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <div style={{ width: 480, borderRadius: 20, overflow: 'hidden', border: '0.5px solid #c8c8f4', background: 'linear-gradient(145deg,#f0eeff 0%,#e8f0ff 100%)' }}>
              {/* Title bar */}
              <div style={{ padding: '12px 18px', display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.6)', borderBottom: '0.5px solid rgba(130,120,240,0.15)' }}>
                <div style={{ display: 'flex', gap: 6 }}>
                  <div style={{ width: 13, height: 13, borderRadius: '50%', background: '#FF5F57' }} />
                  <div style={{ width: 13, height: 13, borderRadius: '50%', background: '#FFBD2E' }} />
                  <div style={{ width: 13, height: 13, borderRadius: '50%', background: '#27C840' }} />
                </div>
                <span style={{ fontSize: 13, fontWeight: 600, flex: 1, textAlign: 'center', paddingRight: 54, background: 'linear-gradient(90deg,#7C3AED,#2563EB)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Strategy Explanation Dashboard
                </span>
              </div>
              {/* Body */}
              <div style={{ padding: 14 }}>
                <div style={{ background: 'rgba(255,255,255,0.82)', borderRadius: 14, border: '0.5px solid rgba(130,120,240,0.2)', padding: '20px 20px 16px' }}>
                  {/* Main header */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                    <div style={{ width: 26, height: 26, borderRadius: 7, background: 'linear-gradient(135deg,#34D399,#10B981)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7l3 3 6-6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <span style={{ fontSize: 16, fontWeight: 800, background: 'linear-gradient(90deg,#10B981,#059669)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Recommendation Applied</span>
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#1a1a2e', lineHeight: 1.4, marginBottom: 10 }}>
                    Increased bid for "wireless headphones" by 18%
                  </div>
                  <div style={{ fontSize: 12, color: '#9999bb', lineHeight: 1.6 }}>
                    <strong style={{ color: '#7777aa', fontWeight: 600 }}>Reasoning:</strong> CTR increased 34% over 7 days, conversion rate stable at 12.3%, competitors bidding 15% higher on similar terms
                  </div>
                  {/* Divider */}
                  <div style={{ height: 0.5, background: 'rgba(130,120,240,0.15)', margin: '16px 0 12px' }} />
                  {/* Case cards */}
                  {[
                    {
                      icon: <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="4.5" stroke="white" strokeWidth="1.3"/><path d="M6 3v3.5l1.5 1.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                      title: 'Pending Action',
                      main: 'Pause 23 underperforming keywords',
                      sub: <><strong style={{ color: '#7777aa', fontWeight: 600 }}>Logic:</strong> ACOS &gt; 50% for 14+ days, zero conversions, search volume declining 25%</>,
                    },
                    {
                      icon: <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1.5 9l3-3.5 2 2L10 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 3h2v2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                      title: 'Strategy Impact Forecast',
                      main: null,
                      sub: <>Expected ACOS reduction: <span style={{ color: '#3B3BAA', fontWeight: 700 }}>-8.5%</span> &nbsp;|&nbsp; Budget reallocation: <span style={{ color: '#3B3BAA', fontWeight: 700 }}>$1,247</span></>,
                    },
                  ].map((card, i) => (
                    <div key={i} style={{ borderRadius: 11, padding: '14px 16px', background: 'rgba(219,234,254,0.55)', border: '0.5px solid rgba(99,102,241,0.2)', marginTop: i > 0 ? 8 : 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 6 }}>
                        <div style={{ width: 22, height: 22, borderRadius: 6, background: 'linear-gradient(135deg,#60A5FA,#6366F1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          {card.icon}
                        </div>
                        <span style={{ fontSize: 13, fontWeight: 800, background: 'linear-gradient(90deg,#6366F1,#2563EB)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{card.title}</span>
                      </div>
                      {card.main && <div style={{ fontSize: 13, fontWeight: 600, color: '#2a2a4a', marginBottom: 5, lineHeight: 1.4 }}>{card.main}</div>}
                      <div style={{ fontSize: 11.5, color: '#9999bb', lineHeight: 1.55 }}>{card.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Reusable asset ── */}
      <section style={{ padding: '96px 48px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'flex-start' }}>
          {/* Left — Intelligence Hub / Asset Library widget */}
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <div style={{ width: 500, borderRadius: 20, overflow: 'hidden', border: '0.5px solid #c8c8f4', background: 'linear-gradient(145deg,#f0eeff 0%,#e8f0ff 100%)' }}>
            {/* Title bar */}
            <div style={{ padding: '13px 18px', display: 'flex', alignItems: 'center', gap: 8, background: 'linear-gradient(90deg,#7C3AED,#2563EB)' }}>
              <div style={{ display: 'flex', gap: 6 }}>
                <div style={{ width: 13, height: 13, borderRadius: '50%', background: '#FF5F57' }} />
                <div style={{ width: 13, height: 13, borderRadius: '50%', background: '#FFBD2E' }} />
                <div style={{ width: 13, height: 13, borderRadius: '50%', background: '#27C840' }} />
              </div>
              <span style={{ fontSize: 14, fontWeight: 600, flex: 1, textAlign: 'center', paddingRight: 54, color: '#fff', letterSpacing: '0.01em' }}>Intelligence Hub - Asset Library</span>
            </div>
            {/* Body */}
            <div style={{ padding: 14 }}>
              <div style={{ background: '#fff', borderRadius: 14, border: '0.5px solid rgba(130,120,240,0.15)', padding: 14, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {/* Keywords Library */}
                <div style={{ background: 'rgba(219,234,254,0.5)', borderRadius: 14, border: '0.5px solid rgba(99,102,241,0.18)', padding: '14px 14px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, textAlign: 'center' }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(219,234,254,0.8)', border: '0.5px solid rgba(99,102,241,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                      <defs><linearGradient id="al-g1" x1="0" y1="0" x2="26" y2="26" gradientUnits="userSpaceOnUse"><stop stopColor="#7C3AED"/><stop offset="1" stopColor="#2563EB"/></linearGradient></defs>
                      <circle cx="11" cy="11" r="7.5" stroke="url(#al-g1)" strokeWidth="1.5"/>
                      <path d="M17 17L22 22" stroke="url(#al-g1)" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M8 11h6M11 8v6" stroke="url(#al-g1)" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                    <span style={{ fontSize: 14, fontWeight: 700, color: '#1a1a2e' }}>Keywords Library</span>
                    <span style={{ fontSize: 11.5, color: '#9999bb', lineHeight: 1.5 }}>Proven search terms & negatives</span>
                  </div>
                </div>
                {/* Product Database */}
                <div style={{ background: 'rgba(219,234,254,0.5)', borderRadius: 14, border: '0.5px solid rgba(99,102,241,0.18)', padding: '14px 14px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, textAlign: 'center' }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(219,234,254,0.8)', border: '0.5px solid rgba(99,102,241,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                      <defs><linearGradient id="al-g2" x1="0" y1="0" x2="26" y2="26" gradientUnits="userSpaceOnUse"><stop stopColor="#7C3AED"/><stop offset="1" stopColor="#2563EB"/></linearGradient></defs>
                      <rect x="5" y="8" width="16" height="13" rx="2.5" stroke="url(#al-g2)" strokeWidth="1.5"/>
                      <path d="M9 8V6a4 4 0 018 0v2" stroke="url(#al-g2)" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M9 14h8" stroke="url(#al-g2)" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                    <span style={{ fontSize: 14, fontWeight: 700, color: '#1a1a2e' }}>Product Database</span>
                    <span style={{ fontSize: 11.5, color: '#9999bb', lineHeight: 1.5 }}>Item-level performance history</span>
                  </div>
                </div>
                {/* Strategy Intelligence */}
                <div style={{ background: 'rgba(219,234,254,0.5)', borderRadius: 14, border: '0.5px solid rgba(99,102,241,0.18)', padding: '14px 14px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, textAlign: 'center' }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(219,234,254,0.8)', border: '0.5px solid rgba(99,102,241,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                      <defs><linearGradient id="al-g3" x1="0" y1="0" x2="26" y2="26" gradientUnits="userSpaceOnUse"><stop stopColor="#7C3AED"/><stop offset="1" stopColor="#2563EB"/></linearGradient></defs>
                      <circle cx="13" cy="13" r="9" stroke="url(#al-g3)" strokeWidth="1.5"/>
                      <path d="M13 7v2M13 17v2M7 13H5M21 13h-2" stroke="url(#al-g3)" strokeWidth="1.5" strokeLinecap="round"/>
                      <circle cx="13" cy="13" r="3" stroke="url(#al-g3)" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                    <span style={{ fontSize: 14, fontWeight: 700, color: '#1a1a2e' }}>Strategy Intelligence</span>
                    <span style={{ fontSize: 11.5, color: '#9999bb', lineHeight: 1.5 }}>Saved playbooks & best practices</span>
                  </div>
                </div>
                {/* Tags Library */}
                <div style={{ background: 'rgba(219,234,254,0.5)', borderRadius: 14, border: '0.5px solid rgba(99,102,241,0.18)', padding: '14px 14px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, textAlign: 'center' }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(219,234,254,0.8)', border: '0.5px solid rgba(99,102,241,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                      <defs><linearGradient id="al-g4" x1="0" y1="0" x2="26" y2="26" gradientUnits="userSpaceOnUse"><stop stopColor="#7C3AED"/><stop offset="1" stopColor="#2563EB"/></linearGradient></defs>
                      <path d="M3 13.5L10 6.5H21v10.5L14 24 3 13.5z" stroke="url(#al-g4)" strokeWidth="1.5" strokeLinejoin="round"/>
                      <circle cx="16.5" cy="10.5" r="1.5" fill="url(#al-g4)"/>
                    </svg>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                    <span style={{ fontSize: 14, fontWeight: 700, color: '#1a1a2e' }}>Tags Library</span>
                    <span style={{ fontSize: 11.5, color: '#9999bb', lineHeight: 1.5 }}>2,000+ smart labels across metrics</span>
                  </div>
                </div>
                {/* Bidding Strategies */}
                <div style={{ background: 'rgba(219,234,254,0.5)', borderRadius: 14, border: '0.5px solid rgba(99,102,241,0.18)', padding: '14px 14px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, textAlign: 'center' }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(219,234,254,0.8)', border: '0.5px solid rgba(99,102,241,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                      <defs><linearGradient id="al-g5" x1="0" y1="0" x2="26" y2="26" gradientUnits="userSpaceOnUse"><stop stopColor="#7C3AED"/><stop offset="1" stopColor="#2563EB"/></linearGradient></defs>
                      <circle cx="13" cy="13" r="9" stroke="url(#al-g5)" strokeWidth="1.5"/>
                      <path d="M13 8v1.5M13 16.5V18M10.5 11.5C10.5 10.1 11.6 9 13 9s2.5 1.1 2.5 2.5c0 1.5-2.5 3-2.5 3s-2.5-1.5-2.5-3zM11 15h4" stroke="url(#al-g5)" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                    <span style={{ fontSize: 14, fontWeight: 700, color: '#1a1a2e' }}>Bidding Strategies</span>
                    <span style={{ fontSize: 11.5, color: '#9999bb', lineHeight: 1.5 }}>Rules & AI-tested adjustments</span>
                  </div>
                </div>
                {/* Campaign Tactics */}
                <div style={{ background: 'rgba(219,234,254,0.5)', borderRadius: 14, border: '0.5px solid rgba(99,102,241,0.18)', padding: '14px 14px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, textAlign: 'center' }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(219,234,254,0.8)', border: '0.5px solid rgba(99,102,241,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                      <defs><linearGradient id="al-g6" x1="0" y1="0" x2="26" y2="26" gradientUnits="userSpaceOnUse"><stop stopColor="#7C3AED"/><stop offset="1" stopColor="#2563EB"/></linearGradient></defs>
                      <rect x="4" y="4" width="18" height="18" rx="3" stroke="url(#al-g6)" strokeWidth="1.5"/>
                      <path d="M8 10h10M8 13h7M8 16h5" stroke="url(#al-g6)" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                    <span style={{ fontSize: 14, fontWeight: 700, color: '#1a1a2e' }}>Campaign Tactics</span>
                    <span style={{ fontSize: 11.5, color: '#9999bb', lineHeight: 1.5 }}>Seasonal & platform-specific playbooks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>

          {/* Right */}
          <div>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 800, lineHeight: 1.18, marginBottom: 16, color: '#0D1B2A' }}>
              Turn every campaign<br />into a{' '}
              <span className="gradient-text">reusable asset.</span>
            </h2>
            <p style={{ fontSize: 14, color: '#6B7A8D', lineHeight: 1.7, marginBottom: 24, fontWeight: 600 }}>
              Build an intelligence hub that compounds over time.
            </p>
            <p style={{ fontSize: 14, color: '#6B7A8D', lineHeight: 1.75, marginBottom: 16 }}>
              Great strategies shouldn't disappear with each campaign. Sapientia transforms daily campaigns into an ever-growing, reusable modular — building your company's sort of <span style={{ color: '#1B6EF3', fontWeight: 600 }}>playbook</span>: from keywords to audiences, from creatives to bidding tactics — each strategy becoming smarter, faster to deploy.
            </p>
            <p style={{ fontSize: 13, color: '#6B7A8D', fontStyle: 'italic' }}>"From one sprint to all-in-all. 🚀"</p>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Custom AI Models ── */}
      <section style={{
        background: 'linear-gradient(135deg, #0f1729 0%, #1a2a50 60%, #0f1729 100%)',
        padding: '96px 48px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '32px 32px', pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
          {/* Left */}
          <div>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, lineHeight: 1.18, marginBottom: 16, color: 'white' }}>
              Custom AI Models<br />
              <span className="gradient-text">— for brands that<br />need more.</span>
            </h2>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: 24, fontWeight: 600 }}>
              An opt-in option for enterprise-level precision.
            </p>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
              Standard AI models already deliver strong results, but for brands that want an edge, Sapientia offers <span style={{ color: '#a5c4ff', fontWeight: 600 }}>custom-trained models</span> as an add-on. These models are trained on your own data — products, keywords, audience signals, seasonality — so strategies are significantly sharper over time, under your insights, all your data stays private.
            </p>
          </div>

          {/* Right — Custom Model Training Dashboard widget */}
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ width: 480, borderRadius: 20, overflow: 'hidden', border: '0.5px solid #c8c8f4', background: 'linear-gradient(145deg,#f0eeff 0%,#e8f0ff 100%)' }}>
            {/* Title bar */}
            <div style={{ padding: '12px 18px', display: 'flex', alignItems: 'center', gap: 8, background: 'linear-gradient(90deg,#7C3AED,#2563EB)' }}>
              <div style={{ display: 'flex', gap: 6 }}>
                <div style={{ width: 13, height: 13, borderRadius: '50%', background: '#FF5F57' }} />
                <div style={{ width: 13, height: 13, borderRadius: '50%', background: '#FFBD2E' }} />
                <div style={{ width: 13, height: 13, borderRadius: '50%', background: '#27C840' }} />
              </div>
              <span style={{ fontSize: 13, fontWeight: 600, flex: 1, textAlign: 'center', paddingRight: 54, color: '#fff' }}>Custom Model Training Dashboard</span>
            </div>
            {/* Body */}
            <div style={{ padding: 14 }}>
              <div style={{ background: 'rgba(255,255,255,0.82)', borderRadius: 14, border: '0.5px solid rgba(130,120,240,0.2)', padding: '20px 20px 16px' }}>
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                  <div style={{ width: 26, height: 26, borderRadius: 7, background: 'linear-gradient(135deg,#7C3AED,#2563EB)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5" stroke="white" strokeWidth="1.5"/><path d="M4.5 7l2 2 3-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span style={{ fontSize: 16, fontWeight: 800, background: 'linear-gradient(90deg,#7C3AED,#2563EB)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Model Training Status</span>
                </div>
                {/* Model name */}
                <div style={{ fontSize: 15, fontWeight: 700, color: '#1a1a2e', lineHeight: 1.4, marginBottom: 14 }}>Custom Model: SportswearBrand_v2.1</div>
                {/* Progress bar */}
                <div style={{ marginBottom: 8 }}>
                  <div style={{ background: 'rgba(219,234,254,0.6)', borderRadius: 99, height: 10, overflow: 'hidden', border: '0.5px solid rgba(99,102,241,0.2)' }}>
                    <div style={{ height: '100%', width: '85%', borderRadius: 99, background: 'linear-gradient(90deg,#7C3AED,#2563EB)' }} />
                  </div>
                  <div style={{ fontSize: 11.5, color: '#9999bb', marginTop: 6, lineHeight: 1.5 }}><strong style={{ color: '#7777aa', fontWeight: 600 }}>Training Progress: 85%</strong> · 2.3M data points processed</div>
                </div>
                {/* Divider */}
                <div style={{ height: 0.5, background: 'rgba(130,120,240,0.15)', margin: '16px 0 12px' }} />
                {/* Performance Improvement card */}
                <div style={{ borderRadius: 11, padding: '14px 16px', background: 'rgba(219,234,254,0.55)', border: '0.5px solid rgba(99,102,241,0.2)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 6 }}>
                    <div style={{ width: 22, height: 22, borderRadius: 6, background: 'linear-gradient(135deg,#60A5FA,#6366F1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1.5 9l3-3.5 2 2L10 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 3h2v2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 800, background: 'linear-gradient(90deg,#6366F1,#2563EB)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Performance Improvement</span>
                  </div>
                  <div style={{ fontSize: 12.5, color: '#4a4a8a' }}><strong style={{ color: '#2a2a6a' }}>vs Standard Model:</strong> <span style={{ color: '#3B3BAA', fontWeight: 700 }}>+23% ROAS</span>, <span style={{ color: '#3B3BAA', fontWeight: 700 }}>+15% conversion accuracy</span>, <span style={{ color: '#3B3BAA', fontWeight: 700 }}>-12% wasted spend</span></div>
                </div>
                {/* Privacy Protected card */}
                <div style={{ borderRadius: 11, padding: '14px 16px', background: 'rgba(219,234,254,0.55)', border: '0.5px solid rgba(99,102,241,0.2)', marginTop: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 6 }}>
                    <div style={{ width: 22, height: 22, borderRadius: 6, background: 'linear-gradient(135deg,#60A5FA,#6366F1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="2.5" y="5" width="7" height="5.5" rx="1.5" stroke="white" strokeWidth="1.3"/><path d="M4 5V3.5a2 2 0 014 0V5" stroke="white" strokeWidth="1.3" strokeLinecap="round"/></svg>
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 800, background: 'linear-gradient(90deg,#6366F1,#2563EB)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Privacy Protected</span>
                  </div>
                  <div style={{ fontSize: 11.5, color: '#9999bb', lineHeight: 1.55 }}>Your data never leaves your environment · Federated learning · SOC 2 compliant</div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: 'white', padding: '96px 48px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: 'clamp(32px, 4vw, 52px)',
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
                  <span style={{ color: '#0D1B2A', fontSize: 16, lineHeight: 1, marginTop: 2, flexShrink: 0 }}>•</span>
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
                  <p style={{ fontSize: 14, color: '#6B7A8D', lineHeight: 1.75, paddingLeft: 28, paddingBottom: 24, marginTop: -8 }}>
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
