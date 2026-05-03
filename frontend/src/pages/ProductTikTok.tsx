import { useState } from 'react'
import CtaLink from '../components/CtaLink'

const faqs = [
  { q: 'What can I use Sapientia for?', a: 'Sapientia helps with AI-assisted strategy, campaign optimization, data analysis, and workflow automation across your marketing stack.' },
  { q: 'Is there a money-back guarantee?', a: 'Yes. If the product does not meet your expectations within the guarantee period, you can request a full refund according to our policy.' },
  { q: 'Can I invite my team to use Sapientia?', a: 'Absolutely. Create team spaces, assign roles and permissions, and collaborate on strategies and reports in real time.' },
  { q: 'Does Sapientia have an affiliate program?', a: 'We offer an affiliate program for qualified partners. Contact us to learn more about commissions and requirements.' },
  { q: 'Are there tutorials or guides to help me use Sapientia?', a: 'Yes. You can access our knowledge base, quick-start tutorials, and in-product tips to get up to speed quickly.' },
  { q: 'Can Sapientia integrate with other software I use?', a: 'We support integrations with popular ad platforms and analytics tools. Advanced users can also leverage our API for custom use cases.' },
]

export default function ProductTikTok() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

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
            <span style={{ fontSize: 16 }}>♪</span>
            <span style={{ fontSize: 12, fontWeight: 700, color: '#a5c4ff', letterSpacing: '0.06em', fontFamily: "'Sora', sans-serif" }}>
              TIKTOK AI MARKETING
            </span>
          </div>
          <h1 style={{
            fontFamily: "'Sora', sans-serif", fontWeight: 800,
            fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: 1.1,
            marginBottom: 16, color: 'white',
          }}>
            TikTok{' '}
            <span className="gradient-text">AI Marketing</span>
            {' '}Software
          </h1>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.65)', marginBottom: 8, fontWeight: 500 }}>
            The smart way to grow on TikTok
          </p>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', maxWidth: 560, margin: '0 auto 36px', lineHeight: 1.7 }}>
            Drive engagement and maximize the visibility of your brand with AI-powered automation and intelligence software for TikTok. Create, launch, and optimize campaigns in seconds with TikTok AI marketing platform.
          </p>
          <CtaLink className="btn btn-primary" style={{ fontSize: 15, padding: '13px 32px', borderRadius: 100 }}>
            Get Started Free
          </CtaLink>
        </div>
      </section>

      {/* ── AMPLIFY ENGAGEMENT ── */}
      <section style={{ padding: '96px 48px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
          {/* Left */}
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, color: '#1B6EF3', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12, fontFamily: "'Sora', sans-serif" }}>
              AI-Powered Automation
            </p>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 800, lineHeight: 1.18, marginBottom: 16, color: '#0D1B2A' }}>
              Amplify Engagement<br />with{' '}
              <span className="gradient-text">AI</span>
            </h2>
            <p style={{ fontSize: 14, color: '#6B7A8D', lineHeight: 1.7, marginBottom: 28, fontWeight: 600 }}>
              Smarter auto-replies that drive engagement
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                'Start your community alive with deep auto-replies across comments, DMs, and in-app messages.',
                'Proactively generate conversations and use Micro-Accounts to amplify your brand account\'s visibility.',
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: '#6B7A8D', lineHeight: 1.6 }}>
                  <span style={{ width: 20, height: 20, borderRadius: '50%', background: '#EAF1FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2, fontSize: 11, color: '#1B6EF3', fontWeight: 700 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — stat cards */}
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Auto Reply Dashboard label */}
            <div style={{
              background: 'white', borderRadius: 16,
              boxShadow: '0 4px 32px rgba(27,110,243,0.12)',
              padding: '20px 24px', border: '1px solid #f0f4ff',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }} />
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} />
                <span style={{ fontFamily: "'Sora', sans-serif", fontSize: 13, fontWeight: 700, color: '#0D1B2A', marginLeft: 8 }}>Auto Reply Dashboard</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { label: 'Auto-replied 24 comments', sub: 'in the last hour', icon: '💬', color: '#EAF1FF', iconColor: '#1B6EF3' },
                  { label: 'Generated 100 new conversations', sub: 'this week', icon: '🔗', color: '#f0fdf4', iconColor: '#22c55e' },
                  { label: 'Engagement rate increased by 34%', sub: 'vs last period', icon: '📈', color: '#fff7ed', iconColor: '#f97316' },
                ].map((card) => (
                  <div key={card.label} style={{
                    display: 'flex', alignItems: 'center', gap: 12,
                    background: card.color, borderRadius: 10, padding: '12px 14px',
                  }}>
                    <span style={{ fontSize: 18 }}>{card.icon}</span>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: '#0D1B2A' }}>{card.label}</div>
                      <div style={{ fontSize: 11, color: '#6B7A8D', marginTop: 2 }}>{card.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DECODE LIVESTREAM ── */}
      <section style={{ padding: '0 48px 96px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
          {/* Left — live content analysis card */}
          <div style={{ background: 'white', borderRadius: 20, boxShadow: '0 4px 32px rgba(27,110,243,0.12)', padding: '24px', border: '1px solid #f0f4ff' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }} />
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} />
              <span style={{ fontFamily: "'Sora', sans-serif", fontSize: 13, fontWeight: 700, color: '#0D1B2A', marginLeft: 8 }}>Live Content Analysis</span>
              <span style={{ marginLeft: 'auto', background: '#fee2e2', color: '#ef4444', fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 100 }}>● LIVE</span>
            </div>
            {[
              { icon: '🛒', label: 'Detected 18 purchase intent signals', color: '#EAF1FF' },
              { icon: '🎯', label: 'Audience intent: 68% decision stage', color: '#f0fdf4' },
              { icon: '😊', label: 'Sentiment analysis: 84% positive', color: '#fff7ed' },
            ].map((item) => (
              <div key={item.label} style={{
                display: 'flex', alignItems: 'center', gap: 12,
                background: item.color, borderRadius: 10, padding: '11px 14px', marginBottom: 10,
              }}>
                <span style={{ fontSize: 18 }}>{item.icon}</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#0D1B2A' }}>{item.label}</span>
              </div>
            ))}
          </div>

          {/* Right */}
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, color: '#1B6EF3', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12, fontFamily: "'Sora', sans-serif" }}>
              Real-Time Intelligence
            </p>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 800, lineHeight: 1.18, marginBottom: 16, color: '#0D1B2A' }}>
              Decode Livestream<br />
              <span className="gradient-text">Comments</span>
            </h2>
            <p style={{ fontSize: 14, color: '#6B7A8D', lineHeight: 1.7, marginBottom: 28, fontWeight: 600 }}>
              Real-time insights into audience needs
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                'Capture and analyze live chat in real time. Our AI deciphers audience language to reveal hidden needs, helping you identify potential customers and respond at the right moment.',
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: '#6B7A8D', lineHeight: 1.6 }}>
                  <span style={{ width: 20, height: 20, borderRadius: '50%', background: '#EAF1FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2, fontSize: 11, color: '#1B6EF3', fontWeight: 700 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── RUN TRANSPARENT AI ADS ── */}
      <section style={{ background: '#f8faff', padding: '96px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
          {/* Left */}
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, color: '#1B6EF3', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12, fontFamily: "'Sora', sans-serif" }}>
              Ad Intelligence
            </p>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 800, lineHeight: 1.18, marginBottom: 16, color: '#0D1B2A' }}>
              Run Transparent<br />
              <span className="gradient-text">AI Ads</span>
            </h2>
            <p style={{ fontSize: 14, color: '#6B7A8D', lineHeight: 1.7, marginBottom: 28, fontWeight: 600 }}>
              Smarter targeting with full control
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                'Power your advertising with AI-curated libraries of music, hashtags, trending topics, and audience segments.',
                'Launch campaigns that optimized for performance while staying fully transparent.',
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: '#6B7A8D', lineHeight: 1.6 }}>
                  <span style={{ width: 20, height: 20, borderRadius: '50%', background: '#EAF1FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2, fontSize: 11, color: '#1B6EF3', fontWeight: 700 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — campaign performance card */}
          <div style={{ background: 'white', borderRadius: 20, boxShadow: '0 4px 32px rgba(27,110,243,0.12)', padding: '24px', border: '1px solid #f0f4ff' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }} />
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} />
              <span style={{ fontFamily: "'Sora', sans-serif", fontSize: 13, fontWeight: 700, color: '#0D1B2A', marginLeft: 8 }}>Campaign Performance</span>
            </div>
            {[
              { icon: '🎯', label: 'ROAS 4.2x above target', color: '#f0fdf4', badge: '+42%', badgeColor: '#22c55e' },
              { icon: '🎵', label: 'Trending music library 500+ tracks', color: '#EAF1FF', badge: 'Updated', badgeColor: '#1B6EF3' },
              { icon: '#️⃣', label: 'Smart hashtags: 85% engagement boost', color: '#fff7ed', badge: 'AI Pick', badgeColor: '#f97316' },
            ].map((item) => (
              <div key={item.label} style={{
                display: 'flex', alignItems: 'center', gap: 12,
                background: item.color, borderRadius: 10, padding: '12px 14px', marginBottom: 10,
              }}>
                <span style={{ fontSize: 18 }}>{item.icon}</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#0D1B2A', flex: 1 }}>{item.label}</span>
                <span style={{ fontSize: 10, fontWeight: 700, color: item.badgeColor, background: 'white', padding: '3px 8px', borderRadius: 100 }}>{item.badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ background: 'linear-gradient(135deg, #0f1729 0%, #1B3A5C 100%)', padding: '64px 48px' }}>
        <div style={{
          maxWidth: 960, margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 0, borderRadius: 24,
          background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
          overflow: 'hidden',
        }}>
          {[
            { num: '10x', label: 'Poster campaign setup' },
            { num: '89%', label: 'Higher engagement rates' },
            { num: '24/7', label: 'Autonomous optimization' },
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

      {/* ── SUCCESS STORIES ── */}
      <section style={{ padding: '96px 48px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, marginBottom: 12, color: '#0D1B2A' }}>
            Success Stories
          </h2>
          <p style={{ fontSize: 15, color: '#6B7A8D' }}>See how creators and brands are growing with our AI platform.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {[
            {
              avatar: '👩‍💼',
              name: 'Sarah Chen',
              role: 'Beauty Creator • 50K followers',
              challenge: 'Struggled to engage with fans from different backgrounds who commented in multiple languages during live streams.',
              success: 'Used AI auto-reply and sentiment tools to respond instantly and grow her audience significantly.',
              metrics: [{ val: '300%', label: 'Engagement Growth' }, { val: '50K', label: 'New Followers' }],
              color: '#EAF1FF',
              accentColor: '#1B6EF3',
            },
            {
              avatar: '🛍️',
              name: 'FashionForward Store',
              role: 'Fashion Brand • TikTok Shop',
              challenge: 'Low conversion rates from live streams. Product inventory couldn\'t keep up with demand spikes.',
              success: 'AI Ads and campaign optimizer increased ROAS dramatically while keeping budget transparent.',
              metrics: [{ val: '5.2x', label: 'ROAS Achieved' }, { val: '$180K', label: 'Revenue Added' }],
              color: '#f0fdf4',
              accentColor: '#22c55e',
            },
            {
              avatar: '🎵',
              name: 'MusicMakers Agency',
              role: 'Music Label • TikTok Promotions',
              challenge: 'Managing campaigns for multiple artists simultaneously with limited team bandwidth.',
              success: 'Sapientia\'s AI automation ran 24/7 across all accounts, maintaining quality and reducing manual work.',
              metrics: [{ val: '40%', label: 'Less Manual Work' }, { val: '25', label: 'Artists Managed' }],
              color: '#fff7ed',
              accentColor: '#f97316',
            },
          ].map((story) => (
            <div key={story.name} style={{
              background: 'white', borderRadius: 20,
              boxShadow: '0 4px 24px rgba(27,110,243,0.08)',
              border: '1px solid #f0f4ff', padding: '28px',
              display: 'flex', flexDirection: 'column', gap: 16,
            }}>
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: story.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>
                  {story.avatar}
                </div>
                <div>
                  <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 15, color: '#0D1B2A' }}>{story.name}</div>
                  <div style={{ fontSize: 12, color: '#6B7A8D', marginTop: 2 }}>{story.role}</div>
                </div>
              </div>

              {/* Challenge */}
              <div style={{ background: '#fafafa', borderRadius: 10, padding: '12px 14px' }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#ef4444', marginBottom: 5, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Challenge</div>
                <p style={{ fontSize: 13, color: '#6B7A8D', lineHeight: 1.6 }}>{story.challenge}</p>
              </div>

              {/* Success */}
              <div style={{ background: story.color, borderRadius: 10, padding: '12px 14px' }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: story.accentColor, marginBottom: 5, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Success</div>
                <p style={{ fontSize: 13, color: '#0D1B2A', lineHeight: 1.6 }}>{story.success}</p>
              </div>

              {/* Metrics */}
              <div style={{ display: 'flex', gap: 12, marginTop: 4 }}>
                {story.metrics.map((m) => (
                  <div key={m.label} style={{ flex: 1, textAlign: 'center', background: '#f8faff', borderRadius: 10, padding: '12px 8px' }}>
                    <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 22, fontWeight: 800, color: story.accentColor }}>{m.val}</div>
                    <div style={{ fontSize: 11, color: '#6B7A8D', marginTop: 4 }}>{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: 'white', padding: '96px 48px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: 800,
            textAlign: 'center',
            marginBottom: 64,
            color: '#0D1B2A',
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
                  <span style={{
                    fontFamily: "'Sora', sans-serif", fontSize: 15, fontWeight: 700,
                    color: '#0D1B2A', flex: 1, lineHeight: 1.4,
                  }}>
                    {faq.q}
                  </span>
                  <span style={{
                    flexShrink: 0, fontSize: 16, color: '#6B7A8D', marginTop: 2,
                    transform: openFaq === i ? 'rotate(90deg)' : 'none',
                    transition: 'transform 0.2s', display: 'inline-block',
                  }}>›</span>
                </button>
                {openFaq === i && (
                  <p style={{
                    fontSize: 14, color: '#6B7A8D', lineHeight: 1.75,
                    paddingLeft: 28, paddingBottom: 24, marginTop: -8,
                  }}>
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
