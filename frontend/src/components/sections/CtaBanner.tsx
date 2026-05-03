import { useState } from 'react'
import { joinWaitlist } from '../../api/client'
import CtaLink from '../CtaLink'

export default function CtaBanner() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async () => {
    if (!email) return
    setStatus('loading')
    try {
      await joinWaitlist(email)
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    /* 外层 wrapper：overflow visible，让右图可以超出顶部 */
    <div style={{ position: 'relative', overflow: 'visible' }}>

      {/* 背景层：严格限制在 section 高度内 */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(/assets/Rectanglelast.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 0,
      }} />

      {/* 内容层 */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: 1200,
        margin: '0 auto',
        padding: '80px 80px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        gap: 48,
      }}>

        {/* 左侧文字 */}
        <div>
          <h2 style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: 'clamp(36px, 4.5vw, 60px)',
            fontWeight: 800,
            color: 'white',
            lineHeight: 1.1,
            marginBottom: 20,
          }}>
            Ready to Scale<br />with AI?
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: 36, maxWidth: 420 }}>
            Join hundreds of growth teams already using DAE Tech to optimize their performance marketing
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
            <CtaLink className="btn btn-primary" style={{ fontSize: 15, padding: '14px 32px' }}>
              Start Your Free Trial
            </CtaLink>
            <a href="#" className="btn" style={{
              fontSize: 15,
              padding: '13px 32px',
              background: 'rgba(255,255,255,0.15)',
              color: 'white',
              border: '1px solid rgba(255,255,255,0.4)',
              backdropFilter: 'blur(8px)',
            }}>
              Schedule Demo
            </a>
          </div>
          <div style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ padding: '12px 20px', borderRadius: 10, border: 'none', fontSize: 14, width: 240, outline: 'none' }}
            />
            <button className="btn btn-primary" onClick={handleSubmit} disabled={status === 'loading'}>
              {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
            </button>
          </div>
          {status === 'success' && <p style={{ color: '#6effc0', marginTop: 10, fontSize: 14 }}>✓ You're on the list!</p>}
          {status === 'error'   && <p style={{ color: '#ff9999', marginTop: 10, fontSize: 14 }}>Something went wrong.</p>}
        </div>

        {/* 右侧图片容器：相对于整个 wrapper 绝对定位 */}
        <div style={{ position: 'relative', height: '100%', minHeight: 400 }} />
      </div>

      {/* 右侧图片：底部与背景底部齐平，顶部超出 20% */}
      <img
        src="/assets/image-photoroom.png"
        alt="AI Scale"
        style={{
          position: 'absolute',
          right: 'calc((100% - 1200px) / 2 + 80px)',  /* 对齐右侧内容区 */
          bottom: 0,
          height: '120%',
          width: 'auto',
          zIndex: 2,
          objectFit: 'contain',
          objectPosition: 'bottom',
        }}
      />
    </div>
  )
}
