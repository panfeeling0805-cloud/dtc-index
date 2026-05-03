import { useState } from 'react'

const faqs = [
  {
    q: 'What can I use Sapientia for?',
    a: 'Sapientia helps with AI-assisted strategy, campaign optimization, data analysis, and workflow automation across your marketing stack.',
  },
  {
    q: 'Is there a money-back guarantee?',
    a: 'Yes. If the product does not meet your expectations within the guarantee period, you can request a full refund according to our policy.',
  },
  {
    q: 'Can I invite my team to use Sapientia?',
    a: 'Absolutely. Create team spaces, assign roles and permissions, and collaborate on strategies and reports in real time.',
  },
  {
    q: 'Does Sapientia have an affiliate program?',
    a: 'We offer an affiliate program for qualified partners. Contact us to learn more about commissions and requirements.',
  },
  {
    q: 'Are there tutorials or guides to help me use Sapientia?',
    a: 'Yes. You can access our knowledge base, quick-start tutorials, and in-product tips to get up to speed quickly.',
  },
  {
    q: 'Can Sapientia integrate with other software I use?',
    a: 'We support integrations with popular ad platforms and analytics tools. Advanced users can also leverage our API for custom use cases.',
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section style={{ background: 'white', padding: '80px 48px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 80, alignItems: 'start' }}>

        {/* Left */}
        <div>
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, lineHeight: 1.15, marginBottom: 24, color: 'var(--dark)' }}>
            <span className="gradient-text">Questions?</span><br />
            Let's clear things up.
          </h2>
          <p style={{ fontSize: 15, color: 'var(--gray)', lineHeight: 1.75, marginBottom: 16 }}>
            Yes, we understand—AI-powered solutions, business automation tools, AI for marketing, AI for customer support... a lot of big words can get confusing.
          </p>
          <p style={{ fontSize: 15, color: 'var(--gray)', lineHeight: 1.75 }}>
            We're here to make it clear—check out our FAQs, and if you still feel the need to ask AI questions, Cassie is always ready to answer.
          </p>
        </div>

        {/* Right */}
        <div>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{ borderBottom: '1px solid #EAECF0', padding: '20px 0', cursor: 'pointer' }}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ color: 'var(--dark)', fontSize: 16 }}>•</span>
                  <span style={{ fontFamily: "'Sora', sans-serif", fontSize: 15, fontWeight: 600, color: 'var(--dark)' }}>
                    {faq.q}
                  </span>
                </div>
                <span style={{
                  flexShrink: 0,
                  width: 20, height: 20,
                  borderRadius: '50%',
                  background: 'var(--blue-pale)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 11, color: 'var(--blue)',
                  transition: 'transform 0.2s',
                  transform: openIndex === i ? 'rotate(180deg)' : 'none',
                }}>▾</span>
              </div>
              {openIndex === i && (
                <p style={{ fontSize: 14, color: 'var(--gray)', lineHeight: 1.7, marginTop: 12, paddingLeft: 26 }}>
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
