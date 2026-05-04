import { useState } from 'react'

type Tab = 'learning' | 'stories' | 'faq' | 'tools'

const BLUE = '#1b6ef3'

const cardStyle: React.CSSProperties = {
  background: '#fff',
  borderRadius: 12,
  padding: 24,
  boxShadow: '0 2px 16px rgba(27,110,243,0.08)',
  border: '1px solid rgba(27,110,243,0.08)',
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
}

const sectionStyle: React.CSSProperties = {
  padding: '80px 24px',
  background: '#f7f9fd',
}

const innerStyle: React.CSSProperties = {
  maxWidth: 1100,
  margin: '0 auto',
}

const sectionTitleStyle: React.CSSProperties = {
  fontSize: 32,
  fontWeight: 700,
  color: '#0d1b2e',
  marginBottom: 8,
  textAlign: 'center',
}

const sectionSubtitleStyle: React.CSSProperties = {
  fontSize: 16,
  color: '#5a6a85',
  textAlign: 'center',
  marginBottom: 48,
  maxWidth: 680,
  margin: '0 auto 48px',
}

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: 24,
}

const metricRowStyle: React.CSSProperties = {
  display: 'flex',
  gap: 24,
  borderBottom: '1px solid rgba(27,110,243,0.08)',
  paddingBottom: 16,
}

const metricItemStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
}

const metricValueStyle: React.CSSProperties = {
  fontSize: 24,
  fontWeight: 700,
  color: BLUE,
}

const metricLabelStyle: React.CSSProperties = {
  fontSize: 11,
  color: '#8a9ab5',
  textTransform: 'uppercase',
  letterSpacing: '0.04em',
}

const cardTitleStyle: React.CSSProperties = {
  fontSize: 18,
  fontWeight: 700,
  color: '#0d1b2e',
}

const cardDescStyle: React.CSSProperties = {
  fontSize: 14,
  color: '#5a6a85',
  lineHeight: 1.7,
  flex: 1,
}

const primaryBtnStyle: React.CSSProperties = {
  display: 'inline-block',
  padding: '10px 22px',
  background: BLUE,
  color: '#fff',
  border: 'none',
  borderRadius: 8,
  fontWeight: 600,
  fontSize: 14,
  cursor: 'pointer',
  alignSelf: 'flex-start',
}

// --- Success Stories data ---
const stories = [
  {
    metrics: [
      { value: '300%', label: 'ROI Increase' },
      { value: '65%', label: 'Cost Reduction' },
      { value: '8x', label: 'Conversion Growth' },
    ],
    title: 'E-commerce Brand AI Transformation',
    desc: 'Through AI-powered bidding and precision targeting, we helped a major e-commerce client double their advertising ROI within 6 months while reducing acquisition costs by 65%.',
    btn: 'View Full Case',
  },
  {
    metrics: [
      { value: '500%', label: 'Traffic Growth' },
      { value: '45%', label: 'Conversion Rate' },
      { value: '3 Months', label: 'Time to Results' },
    ],
    title: 'SaaS Customer Acquisition Optimization',
    desc: 'Using AI dynamic creative optimization and intelligent audience expansion, we achieved 500% high-quality lead growth for a B2B SaaS client.',
    btn: 'Learn More',
  },
  {
    metrics: [
      { value: '220%', label: 'Revenue Growth' },
      { value: '80%', label: 'Ad Efficiency' },
      { value: '24/7', label: 'Automation' },
    ],
    title: 'EdTech Precision Customer Acquisition',
    desc: 'AI-driven multi-channel integrated campaigns helped an online education platform achieve precise customer acquisition and double revenue growth.',
    btn: 'View Case',
  },
]

// --- Learning Resources data ---
const articles = [
  {
    tag: 'Guide',
    title: 'The Complete Guide to AI-Powered PPC Campaigns',
    desc: 'Learn how machine learning transforms pay-per-click advertising from manual bid management to intelligent automation.',
  },
  {
    tag: 'Strategy',
    title: 'Audience Segmentation Best Practices for 2026',
    desc: 'Discover advanced techniques for building high-converting audience segments using first-party data and predictive modeling.',
  },
  {
    tag: 'Tutorial',
    title: 'Creative Optimization: A/B Testing at Scale',
    desc: 'A step-by-step tutorial on running dynamic creative experiments that continuously improve ad performance without manual intervention.',
  },
]

// --- FAQ data ---
const faqs = [
  {
    q: 'How quickly can I expect to see results from AI-driven campaigns?',
    a: 'Most clients begin to see measurable improvements within the first 4–8 weeks. Full optimization typically matures over 3 months as the AI learns from campaign data and refines targeting parameters.',
  },
  {
    q: 'What ad platforms do your AI tools support?',
    a: 'Our platform natively integrates with Google Ads, Meta Ads, TikTok Ads, Amazon Advertising, and LinkedIn Ads, with additional connectors for programmatic DSPs.',
  },
  {
    q: 'Do I need a large budget to benefit from AI optimization?',
    a: 'No. Our AI engine is effective starting at modest monthly budgets. However, larger data volumes do accelerate the learning phase and yield faster performance gains.',
  },
  {
    q: 'How does your AI protect brand safety and ad quality?',
    a: 'We apply real-time inventory filtering, contextual suitability scoring, and custom blocklists to ensure your ads appear only in brand-appropriate environments.',
  },
  {
    q: 'Can I retain control over creative and messaging decisions?',
    a: 'Absolutely. Our AI handles bid management, audience targeting, and performance pacing while you retain full creative approval workflows and brand guideline enforcement.',
  },
]

// --- Free Tools data ---
const tools = [
  {
    icon: '📊',
    title: 'Ad Spend Calculator',
    desc: 'Estimate your optimal monthly ad budget based on your industry, target CPA, and revenue goals.',
    btn: 'Try Free',
  },
  {
    icon: '🎯',
    title: 'Audience Overlap Analyzer',
    desc: 'Upload your audience lists and discover overlap rates to eliminate wasted reach across campaigns.',
    btn: 'Try Free',
  },
  {
    icon: '⚡',
    title: 'Creative Performance Scorer',
    desc: 'Score your ad creatives before launch using our AI model trained on millions of high-performing campaigns.',
    btn: 'Try Free',
  },
]

// --- Sub-sections ---

function SuccessStories() {
  return (
    <section style={sectionStyle}>
      <div style={innerStyle}>
        <h2 style={sectionTitleStyle}>Success Stories</h2>
        <p style={sectionSubtitleStyle}>
          Real client results showcasing the transformative power of AI-driven advertising campaigns
        </p>
        <div style={gridStyle}>
          {stories.map((s) => (
            <div key={s.title} style={cardStyle}>
              <div style={metricRowStyle}>
                {s.metrics.map((m) => (
                  <div key={m.label} style={metricItemStyle}>
                    <span style={metricValueStyle}>{m.value}</span>
                    <span style={metricLabelStyle}>{m.label}</span>
                  </div>
                ))}
              </div>
              <div style={cardTitleStyle}>{s.title}</div>
              <p style={cardDescStyle}>{s.desc}</p>
              <button style={primaryBtnStyle}>{s.btn}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function LearningResources() {
  return (
    <section style={sectionStyle}>
      <div style={innerStyle}>
        <h2 style={sectionTitleStyle}>Learning Resources</h2>
        <p style={sectionSubtitleStyle}>
          Deepen your expertise with in-depth guides, strategies, and tutorials crafted by our performance marketing team.
        </p>
        <div style={gridStyle}>
          {articles.map((a) => (
            <div key={a.title} style={cardStyle}>
              <span
                style={{
                  display: 'inline-block',
                  background: 'rgba(27,110,243,0.08)',
                  color: BLUE,
                  borderRadius: 6,
                  padding: '3px 10px',
                  fontSize: 12,
                  fontWeight: 600,
                  alignSelf: 'flex-start',
                }}
              >
                {a.tag}
              </span>
              <div style={cardTitleStyle}>{a.title}</div>
              <p style={cardDescStyle}>{a.desc}</p>
              <button style={primaryBtnStyle}>Read Article</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FaqSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section style={sectionStyle}>
      <div style={{ ...innerStyle, maxWidth: 760 }}>
        <h2 style={sectionTitleStyle}>Frequently Asked Questions</h2>
        <p style={sectionSubtitleStyle}>
          Everything you need to know about our AI advertising platform and services.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {faqs.map((f, i) => (
            <div
              key={i}
              style={{
                ...cardStyle,
                cursor: 'pointer',
                gap: 0,
              }}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 16,
                }}
              >
                <span style={{ fontWeight: 600, color: '#0d1b2e', fontSize: 15 }}>{f.q}</span>
                <span
                  style={{
                    color: BLUE,
                    fontSize: 20,
                    lineHeight: 1,
                    flexShrink: 0,
                    transform: open === i ? 'rotate(45deg)' : 'none',
                    transition: 'transform 0.2s',
                  }}
                >
                  +
                </span>
              </div>
              {open === i && (
                <p
                  style={{
                    marginTop: 12,
                    fontSize: 14,
                    color: '#5a6a85',
                    lineHeight: 1.7,
                  }}
                >
                  {f.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FreeTools() {
  return (
    <section style={sectionStyle}>
      <div style={innerStyle}>
        <h2 style={sectionTitleStyle}>Free Tools</h2>
        <p style={sectionSubtitleStyle}>
          Practical, no-cost utilities to help you plan, analyze, and optimize your advertising efforts right now.
        </p>
        <div style={gridStyle}>
          {tools.map((t) => (
            <div key={t.title} style={{ ...cardStyle, alignItems: 'flex-start' }}>
              <span style={{ fontSize: 36 }}>{t.icon}</span>
              <div style={cardTitleStyle}>{t.title}</div>
              <p style={cardDescStyle}>{t.desc}</p>
              <button style={primaryBtnStyle}>{t.btn}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// --- Main page ---

export default function Resources() {
  const [activeTab, setActiveTab] = useState<Tab>('stories')

  const tabs: { id: Tab; label: string }[] = [
    { id: 'learning', label: 'Learning Resources' },
    { id: 'stories', label: 'Success Stories' },
    { id: 'faq', label: 'FAQ' },
    { id: 'tools', label: 'Free Tools' },
  ]

  function tabStyle(id: Tab): React.CSSProperties {
    const active = activeTab === id
    return {
      padding: '10px 26px',
      borderRadius: 8,
      fontWeight: 600,
      fontSize: 15,
      cursor: 'pointer',
      border: active ? 'none' : '1px solid #e0e7ef',
      background: active ? BLUE : '#fff',
      color: active ? '#fff' : '#0d1b2e',
      transition: 'background 0.15s, color 0.15s',
    }
  }

  return (
    <main style={{ fontFamily: 'inherit', minHeight: '100vh', background: '#f7f9fd' }}>
      {/* Hero */}
      <section style={{ background: '#fff', padding: '80px 24px 64px', textAlign: 'center' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h1
            style={{
              fontSize: 44,
              fontWeight: 800,
              color: '#0d1b2e',
              marginBottom: 20,
              lineHeight: 1.2,
            }}
          >
            Growth Strategies Resource Center
          </h1>
          <p
            style={{
              fontSize: 18,
              color: '#5a6a85',
              maxWidth: 680,
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            Actionable insights, success stories, smart tools, and expert FAQs to accelerate your
            digital marketing performance and ROI.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section style={{ background: '#fff', padding: '0 24px 32px', borderBottom: '1px solid #e0e7ef' }}>
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
            gap: 12,
            flexWrap: 'wrap',
          }}
        >
          {tabs.map((t) => (
            <button key={t.id} style={tabStyle(t.id)} onClick={() => setActiveTab(t.id)}>
              {t.label}
            </button>
          ))}
        </div>
      </section>

      {/* Tab Content */}
      {activeTab === 'stories' && <SuccessStories />}
      {activeTab === 'learning' && <LearningResources />}
      {activeTab === 'faq' && <FaqSection />}
      {activeTab === 'tools' && <FreeTools />}

      {/* CTA Banner */}
      <section
        style={{
          background: BLUE,
          padding: '72px 24px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 36,
              fontWeight: 800,
              color: '#fff',
              marginBottom: 16,
            }}
          >
            Ready to Transform Your Advertising with AI?
          </h2>
          <p
            style={{
              fontSize: 17,
              color: 'rgba(255,255,255,0.85)',
              maxWidth: 580,
              margin: '0 auto 36px',
              lineHeight: 1.7,
            }}
          >
            Connect with our expert team for a free advertising account audit and optimization
            strategy consultation
          </p>
          <button
            style={{
              padding: '14px 36px',
              background: 'transparent',
              color: '#fff',
              border: '2px solid #fff',
              borderRadius: 8,
              fontWeight: 700,
              fontSize: 16,
              cursor: 'pointer',
            }}
          >
            Get Started Today
          </button>
        </div>
      </section>
    </main>
  )
}
