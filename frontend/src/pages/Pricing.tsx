const plans = [
  {
    name: 'Start Easy',
    price: '$5,000',
    period: '/6 months',
    desc: 'For emerging brands or lean teams looking to automate fast.',
    cta: 'Claim Free Trial',
    ctaStyle: 'primary',
    checkColor: '#22c55e',
    checkBg: '#dcfce7',
    included: [
      'Up to 50 Amazon stores or ad accounts',
      'AI-powered product diagnostics and recommendations',
      'Keyword suggestions and custom rule automation',
      'Up to 100 user seats with flexible org structure',
      'Cross-platform ad management (Amazon, Meta, Google, TikTok)',
    ],
    support: [
      'Live chat support',
      'Knowledge base access',
      'Onboarding guide',
      'Platform health checks (self-service)',
    ],
  },
  {
    name: 'Scale Fast',
    price: '$15,000',
    period: '/6 months',
    desc: 'For growing brands managing high-volume campaigns across markets.',
    cta: 'Talk to Sales',
    ctaStyle: 'primary',
    checkColor: '#1B6EF3',
    checkBg: '#dbeafe',
    included: [
      'Up to 300 stores or ad accounts',
      'Advanced product diagnostics and AI strategy optimization',
      'Bilingual ad workflows and custom model training',
      'Role-based access for up to 600 users',
      'Performance dashboards and trend insights',
    ],
    support: [
      'Dedicated onboarding & 1:1 strategy session (per term)',
      'Priority email & chat support',
      'Access to strategy documentation',
      'Platform health checks (self-service)',
    ],
  },
  {
    name: 'Strategic Partner',
    price: 'Custom',
    period: '',
    desc: 'For enterprise brands and agencies with complex needs.',
    cta: 'Request a Custom Quote',
    ctaStyle: 'primary',
    checkColor: '#f97316',
    checkBg: '#ffedd5',
    included: [
      'Unlimited store and ad account support',
      'Fully customized AI model deployment',
      'API access and enterprise-grade integrations',
      'Full permissioning system and team-level customization',
      'Cross-platform orchestration for multi-brand operations',
    ],
    support: [
      'Dedicated Customer Success Manager',
      'Weekly performance report and quarterly strategy reviews',
      'SLA-backed technical support',
      'Priority onboarding and enterprise training',
      'Early access to beta features',
    ],
  },
]

import CtaLink from '../components/CtaLink'

export default function Pricing() {
  return (
    <main style={{ background: 'linear-gradient(180deg, #f0f5ff 0%, #ffffff 30%)', minHeight: '100vh' }}>
      {/* Hero */}
      <div style={{ textAlign: 'center', padding: '80px 48px 60px' }}>
        <h1 style={{
          fontFamily: "'Sora', sans-serif",
          fontSize: 'clamp(32px, 4vw, 52px)',
          fontWeight: 800,
          color: 'var(--dark)',
          lineHeight: 1.15,
          marginBottom: 8,
        }}>
          AI-Powered Plans for Every
        </h1>
        <h1 style={{
          fontFamily: "'Sora', sans-serif",
          fontSize: 'clamp(32px, 4vw, 52px)',
          fontWeight: 800,
          lineHeight: 1.15,
          marginBottom: 20,
        }}>
          <span className="gradient-text">Growth Stage</span>
        </h1>
        <p style={{ fontSize: 16, color: 'var(--gray)', maxWidth: 560, margin: '0 auto' }}>
          From lean teams to global operators — choose a plan that evolves with your business goals.
        </p>
      </div>

      {/* Pricing cards */}
      <div style={{
        maxWidth: 1100,
        margin: '0 auto',
        padding: '0 48px 100px',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 24,
        alignItems: 'start',
      }}>
        {plans.map((plan) => (
          <div key={plan.name} style={{
            background: 'white',
            borderRadius: 20,
            padding: '36px 28px',
            boxShadow: '0 4px 24px rgba(27,110,243,0.08)',
            display: 'flex',
            flexDirection: 'column',
            gap: 0,
          }}>
            {/* Plan header */}
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 16, fontWeight: 700, color: 'var(--dark)', marginBottom: 8 }}>
                {plan.name}
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 8 }}>
                <span style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 800, color: 'var(--dark)' }}>
                  {plan.price}
                </span>
                {plan.period && (
                  <span style={{ fontSize: 14, color: 'var(--gray)', fontWeight: 500 }}>{plan.period}</span>
                )}
              </div>
              <p style={{ fontSize: 13, color: 'var(--gray)', lineHeight: 1.6 }}>{plan.desc}</p>
            </div>

            {/* CTA button */}
            <CtaLink className="btn btn-primary" style={{
              justifyContent: 'center',
              width: '100%',
              marginBottom: 28,
              padding: '13px 0',
              fontSize: 14,
              borderRadius: 100,
            }}>
              {plan.cta}
            </CtaLink>

            {/* What's Included */}
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 14, fontWeight: 700, color: 'var(--dark)', marginBottom: 14 }}>
                What's Included:
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {plan.included.map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: 'var(--gray)', lineHeight: 1.5 }}>
                    <span style={{
                      width: 18, height: 18, borderRadius: 4,
                      background: plan.checkBg,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0, marginTop: 1, fontSize: 11, color: plan.checkColor, fontWeight: 700,
                    }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: '#f0f0f0', marginBottom: 20 }} />

            {/* Support Services */}
            <div>
              <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 14, fontWeight: 700, color: 'var(--dark)', marginBottom: 14 }}>
                Support Services
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {plan.support.map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: 'var(--gray)', lineHeight: 1.5 }}>
                    <span style={{
                      width: 18, height: 18, borderRadius: 4,
                      background: plan.checkBg,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0, marginTop: 1, fontSize: 11, color: plan.checkColor, fontWeight: 700,
                    }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
