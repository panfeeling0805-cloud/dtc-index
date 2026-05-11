import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const areaCodes = ['+1', '+44', '+86', '+81', '+49', '+33', '+61', '+65', '+82', '+91']

export default function Auth() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [mode, setMode] = useState<'signup' | 'login'>('signup')

  // Signup state
  const [username, setUsername] = useState('')
  const [business, setBusiness] = useState('')
  const [areaCode, setAreaCode] = useState('+1')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [verifyCode, setVerifyCode] = useState('')
  const [agreed, setAgreed] = useState(false)
  const [codeSent, setCodeSent] = useState(false)
  const [codeCooldown, setCodeCooldown] = useState(0)

  // Login state
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  function handleSignup() {
    login()
    navigate('/dashboard')
  }

  function handleLogin() {
    login()
    navigate('/dashboard')
  }

  function handleGetCode() {
    if (!email || codeCooldown > 0) return
    setCodeSent(true)
    setCodeCooldown(60)
    const t = setInterval(() => {
      setCodeCooldown(c => {
        if (c <= 1) { clearInterval(t); return 0 }
        return c - 1
      })
    }, 1000)
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f0f2f5', display: 'flex', flexDirection: 'column' }}>
      {/* Main */}
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', maxWidth: 1100, margin: '0 auto', width: '100%', padding: '20px 32px 60px', gap: 48, alignItems: 'center' }}>

        {/* Left — illustration */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src="/assets/feature-section-4.png"
            alt="AI agent team"
            style={{ width: '100%', maxWidth: 520, objectFit: 'contain', borderRadius: 20 }}
          />
        </div>

        {/* Right — form */}
        <div style={{ background: 'white', borderRadius: 24, padding: '40px 40px', boxShadow: '0 4px 32px rgba(27,110,243,0.08)' }}>
          {mode === 'signup' ? (
            <>
              <h1 style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#0D1B2A', marginBottom: 28, lineHeight: 1.2 }}>
                Sign Up for a Free Trial
              </h1>

              {/* Username */}
              <div style={fieldWrap}>
                <span style={fieldIcon}>👤</span>
                <input
                  type="text" placeholder="Enter Username" value={username}
                  onChange={e => setUsername(e.target.value)}
                  style={inputStyle}
                />
              </div>

              {/* Business Name */}
              <div style={fieldWrap}>
                <span style={fieldIcon}>🏢</span>
                <input
                  type="text" placeholder="Enter Business Name" value={business}
                  onChange={e => setBusiness(e.target.value)}
                  style={inputStyle}
                />
              </div>

              {/* Phone */}
              <div style={{ ...fieldWrap, gap: 0 }}>
                <select
                  value={areaCode} onChange={e => setAreaCode(e.target.value)}
                  style={{ ...inputStyle, width: 110, borderRight: '1px solid #e4eeff', borderRadius: '10px 0 0 10px', flexShrink: 0, cursor: 'pointer', paddingLeft: 12 }}
                >
                  {areaCodes.map(c => <option key={c}>{c}</option>)}
                </select>
                <input
                  type="tel" placeholder="Enter Phone Number" value={phone}
                  onChange={e => setPhone(e.target.value)}
                  style={{ ...inputStyle, borderRadius: '0 10px 10px 0', flex: 1 }}
                />
              </div>

              {/* Email */}
              <div style={fieldWrap}>
                <span style={fieldIcon}>✉️</span>
                <input
                  type="email" placeholder="Enter Email" value={email}
                  onChange={e => setEmail(e.target.value)}
                  name="email" autoComplete="email"
                  style={inputStyle}
                />
              </div>

              {/* Verification code */}
              <div style={{ ...fieldWrap, gap: 0 }}>
                <input
                  type="text" placeholder="Enter Email Verification Code" value={verifyCode}
                  onChange={e => setVerifyCode(e.target.value)}
                  name="one-time-code" autoComplete="one-time-code"
                  style={{ ...inputStyle, borderRadius: '10px 0 0 10px', flex: 1 }}
                />
                <button
                  onClick={handleGetCode}
                  disabled={codeCooldown > 0}
                  style={{
                    background: codeCooldown > 0 ? '#93b4fa' : '#1B6EF3',
                    color: 'white', border: 'none', cursor: codeCooldown > 0 ? 'default' : 'pointer',
                    padding: '0 16px', borderRadius: '0 10px 10px 0',
                    fontSize: 13, fontWeight: 600, fontFamily: "'Sora', sans-serif",
                    whiteSpace: 'nowrap', flexShrink: 0, height: 46,
                  }}
                >
                  {codeCooldown > 0 ? `Resend (${codeCooldown}s)` : 'Get Verification Code'}
                </button>
              </div>
              {codeSent && (
                <p style={{ fontSize: 12, color: '#22c55e', marginTop: -8, marginBottom: 8, paddingLeft: 4 }}>
                  ✓ Verification code sent to {email}
                </p>
              )}

              {/* Terms */}
              <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#6B7A8D', marginBottom: 20, cursor: 'pointer' }}>
                <input
                  type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)}
                  style={{ width: 15, height: 15, accentColor: '#1B6EF3', cursor: 'pointer' }}
                />
                I Have Read and Agree
                <a href="#" style={{ color: '#1B6EF3', textDecoration: 'none', fontWeight: 600 }}>Terms of Service</a>
              </label>

              {/* Submit */}
              <button onClick={handleSignup} style={{
                width: '100%', background: '#1B6EF3', color: 'white',
                border: 'none', borderRadius: 10, padding: '14px',
                fontSize: 15, fontWeight: 700, fontFamily: "'Sora', sans-serif",
                cursor: 'pointer', boxShadow: '0 4px 16px rgba(27,110,243,0.3)',
                marginBottom: 16,
              }}>
                Start a Free Trial
              </button>

              <p style={{ textAlign: 'center', fontSize: 13, color: '#6B7A8D' }}>
                Already have an account?{' '}
                <button onClick={() => setMode('login')} style={{ color: '#1B6EF3', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', fontSize: 13, padding: 0 }}>
                  Log In
                </button>
              </p>
            </>
          ) : (
            <>
              <h1 style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#0D1B2A', marginBottom: 8, lineHeight: 1.2 }}>
                Welcome back
              </h1>
              <p style={{ fontSize: 14, color: '#6B7A8D', marginBottom: 28 }}>Log in to your Sapientia account</p>

              {/* Login Email */}
              <div style={fieldWrap}>
                <span style={fieldIcon}>✉️</span>
                <input
                  type="email" placeholder="Enter Email" value={loginEmail}
                  onChange={e => setLoginEmail(e.target.value)}
                  style={inputStyle}
                />
              </div>

              {/* Password */}
              <div style={fieldWrap}>
                <span style={fieldIcon}>🔒</span>
                <input
                  type="password" placeholder="Enter Password" value={loginPassword}
                  onChange={e => setLoginPassword(e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div style={{ textAlign: 'right', marginTop: -8, marginBottom: 20 }}>
                <a href="#" style={{ fontSize: 13, color: '#1B6EF3', textDecoration: 'none', fontWeight: 600 }}>Forgot password?</a>
              </div>

              <button onClick={handleLogin} style={{
                width: '100%', background: '#1B6EF3', color: 'white',
                border: 'none', borderRadius: 10, padding: '14px',
                fontSize: 15, fontWeight: 700, fontFamily: "'Sora', sans-serif",
                cursor: 'pointer', boxShadow: '0 4px 16px rgba(27,110,243,0.3)',
                marginBottom: 16,
              }}>
                Log In
              </button>

              <p style={{ textAlign: 'center', fontSize: 13, color: '#6B7A8D' }}>
                Don't have an account?{' '}
                <button onClick={() => setMode('signup')} style={{ color: '#1B6EF3', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', fontSize: 13, padding: 0 }}>
                  Sign Up Free
                </button>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

const fieldWrap: React.CSSProperties = {
  display: 'flex', alignItems: 'center',
  background: '#f4f7fb', borderRadius: 10,
  marginBottom: 14, overflow: 'hidden',
  border: '1px solid #e4eeff',
}
const fieldIcon: React.CSSProperties = {
  padding: '0 12px', fontSize: 15, flexShrink: 0,
  color: '#6B7A8D',
}
const inputStyle: React.CSSProperties = {
  flex: 1, border: 'none', background: 'transparent',
  padding: '12px 12px 12px 0', fontSize: 14,
  color: '#0D1B2A', outline: 'none',
  fontFamily: "'Inter', sans-serif",
  height: 46,
}
