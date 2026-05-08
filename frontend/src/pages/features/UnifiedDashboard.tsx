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
    background: 'linear-gradient(145deg, #0d1224 0%, #1a1a50 100%)',
    borderRadius: 18,
    border: '1px solid rgba(100,80,240,0.3)',
    padding: '28px 24px',
    boxShadow: '0 2px 24px rgba(0,0,0,0.35)',
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
  }}>
    <div style={{ width: 64, height: 64, flexShrink: 0 }}>
      {icon}
    </div>
    <div>
      <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 15, fontWeight: 700, color: 'white', marginBottom: 8 }}>{title}</div>
      <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.62)', lineHeight: 1.65 }}>{description}</div>
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
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(27,110,243,0.10)', border: '1px solid rgba(27,110,243,0.25)',
            borderRadius: 100, padding: '6px 18px', marginBottom: 32,
          }}>
            <span style={{ fontSize: 15 }}>🖥️</span>
            <span style={{ fontSize: 12, fontWeight: 700, color: '#1B6EF3', letterSpacing: '0.07em', fontFamily: "'Sora', sans-serif" }}>
              UNIFIED DASHBOARD
            </span>
          </div>
          <h1 style={{
            fontFamily: "'Sora', sans-serif", fontWeight: 800,
            fontSize: 'clamp(34px, 5vw, 58px)', lineHeight: 1.1,
            marginBottom: 20, color: '#0D1B2A',
          }}>
            Manage All Your Ads from{' '}
            <span className="gradient-text">One Unified Dashboard</span>
          </h1>
          <p style={{ fontSize: 16, color: '#6B7A8D', maxWidth: 600, margin: '0 auto 40px', lineHeight: 1.75, fontWeight: 500 }}>
            Unify your Amazon, Google, Meta, and TikTok campaigns in one place. Track performance in real time, optimize ad spend with precision, and scale faster across every channel — all with enterprise-level controls and seamless team collaboration.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
            <CtaLink className="btn btn-primary" style={{ fontSize: 15, padding: '13px 32px', borderRadius: 100 }}>
              Hire Sapientia
            </CtaLink>
            <CtaLink className="btn btn-ghost" style={{ fontSize: 15, padding: '13px 32px', borderRadius: 100, border: '1.5px solid #1B6EF3', color: '#1B6EF3', background: 'transparent' }}>
              Schedule Demo
            </CtaLink>
          </div>

          {/* Platform logos row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, marginTop: 44, flexWrap: 'wrap' }}>
            {[
              { name: 'TikTok', icon: '♪', color: '#f0fdf4', text: '#16a34a' },
              { name: 'Amazon', icon: '📦', color: '#fff7ed', text: '#ea580c' },
              { name: 'Google', icon: '🔍', color: '#EAF1FF', text: '#1B6EF3' },
              { name: 'Meta', icon: '𝕄', color: '#eff6ff', text: '#2563eb' },
              { name: 'Instagram', icon: '📷', color: '#fdf2f8', text: '#c026d3' },
            ].map((p) => (
              <div key={p.name} style={{
                display: 'flex', alignItems: 'center', gap: 7,
                background: p.color, borderRadius: 100,
                padding: '7px 16px', border: '1px solid rgba(0,0,0,0.06)',
              }}>
                <span style={{ fontSize: 14 }}>{p.icon}</span>
                <span style={{ fontSize: 12, fontWeight: 700, color: p.text, fontFamily: "'Sora', sans-serif" }}>{p.name}</span>
              </div>
            ))}
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
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
          {/* Left — features */}
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, color: '#1B6EF3', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12, fontFamily: "'Sora', sans-serif" }}>
              Team & Brand Management
            </p>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 800, lineHeight: 1.18, marginBottom: 20, color: '#0D1B2A' }}>
              Seamless Multi-Brand &{' '}
              <span className="gradient-text">Team Management.</span>
            </h2>
            <p style={{ fontSize: 14, color: '#6B7A8D', lineHeight: 1.7, marginBottom: 32, fontWeight: 500 }}>
              Whether you manage one brand or fifty, Sapientia gives every team member the right access at the right level — without compromising control.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {[
                {
                  icon: '🏢',
                  title: 'Create Business Profile',
                  desc: 'Set up dedicated workspaces for each brand or client. Keep campaigns, budgets, and data fully separated and organized.',
                  accent: '#EAF1FF',
                },
                {
                  icon: '👥',
                  title: 'Invite Team Members',
                  desc: 'Add team members with granular permissions — admin, editor, or viewer — and control exactly what each person can see and do.',
                  accent: '#f0fdf4',
                },
                {
                  icon: '🔄',
                  title: 'Switch Context Instantly',
                  desc: 'Jump between brand accounts with one click. No logging out, no confusion — just seamless context switching across your entire portfolio.',
                  accent: '#fff7ed',
                },
              ].map((item) => (
                <div key={item.title} style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: item.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 15, fontWeight: 700, color: '#0D1B2A', marginBottom: 6 }}>{item.title}</div>
                    <div style={{ fontSize: 13, color: '#6B7A8D', lineHeight: 1.65 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — dashboard mockup */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <DashboardMockup
              title="Team Workspace"
              rows={[
                { label: 'Brand A — Nike Campaign', value: 'Admin: Sarah · 3 members', color: '#EAF1FF', badge: 'Active', badgeColor: '#22c55e' },
                { label: 'Brand B — Adidas Q4', value: 'Admin: John · 5 members', color: '#f0fdf4', badge: 'Active', badgeColor: '#22c55e' },
                { label: 'Brand C — Puma Launch', value: 'Admin: Lisa · 2 members', color: '#fff7ed', badge: 'Draft', badgeColor: '#f59e0b' },
                { label: 'Brand D — Reebok Promo', value: 'Admin: Mark · 4 members', color: '#fdf4ff', badge: 'Active', badgeColor: '#22c55e' },
              ]}
            />
            {/* Member invite card */}
            <div style={{ background: 'white', borderRadius: 14, border: '1px solid #EAF1FF', padding: '16px 20px', boxShadow: '0 2px 16px rgba(27,110,243,0.07)' }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#0D1B2A', marginBottom: 12, fontFamily: "'Sora', sans-serif" }}>Recent Invites</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  { name: 'alex@brand.com', role: 'Editor', color: '#EAF1FF', roleColor: '#1B6EF3' },
                  { name: 'morgan@agency.io', role: 'Viewer', color: '#f0fdf4', roleColor: '#22c55e' },
                  { name: 'taylor@client.com', role: 'Admin', color: '#fff7ed', roleColor: '#f97316' },
                ].map((inv) => (
                  <div key={inv.name} style={{ display: 'flex', alignItems: 'center', gap: 10, background: inv.color, borderRadius: 8, padding: '9px 12px' }}>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#0D1B2A', flexShrink: 0 }}>
                      {inv.name[0].toUpperCase()}
                    </div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: '#0D1B2A', flex: 1 }}>{inv.name}</div>
                    <span style={{ fontSize: 10, fontWeight: 700, color: inv.roleColor, background: 'white', padding: '2px 8px', borderRadius: 100 }}>{inv.role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CENTRALIZED CONTROL ── */}
      <section style={{ padding: '96px 48px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: '#1B6EF3', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12, fontFamily: "'Sora', sans-serif" }}>
            Operational Efficiency
          </p>
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, marginBottom: 14, color: '#0D1B2A' }}>
            Centralized Control.{' '}
            <span className="gradient-text">Local Execution.</span>
          </h2>
          <p style={{ fontSize: 15, color: '#6B7A8D', maxWidth: 540, margin: '0 auto', lineHeight: 1.7 }}>
            Deploy global strategy with the precision of local execution. Sapientia's toolkit gives you the power to standardize, automate, and scale everything.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
          <div style={{
            background: 'white', borderRadius: 18, border: '1px solid #EAF1FF',
            padding: '32px 28px', boxShadow: '0 2px 16px rgba(27,110,243,0.07)',
          }}>
            <div style={{ width: 52, height: 52, borderRadius: 16, background: '#EAF1FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, marginBottom: 18 }}>📋</div>
            <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 16, fontWeight: 700, color: '#0D1B2A', marginBottom: 10 }}>Strategy Template Library</div>
            <p style={{ fontSize: 13, color: '#6B7A8D', lineHeight: 1.65, marginBottom: 16 }}>
              Build once, deploy everywhere. Save your best-performing campaign structures as reusable templates and apply them across brands, regions, or platforms instantly.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {['E-commerce Retargeting Template', 'Brand Awareness Blueprint', 'Seasonal Promo Playbook'].map((t) => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#EAF1FF', borderRadius: 8, padding: '9px 12px' }}>
                  <span style={{ fontSize: 12, color: '#1B6EF3' }}>●</span>
                  <span style={{ fontSize: 12, fontWeight: 600, color: '#0D1B2A' }}>{t}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            background: 'white', borderRadius: 18, border: '1px solid #EAF1FF',
            padding: '32px 28px', boxShadow: '0 2px 16px rgba(27,110,243,0.07)',
          }}>
            <div style={{ width: 52, height: 52, borderRadius: 16, background: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, marginBottom: 18 }}>⚙️</div>
            <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 16, fontWeight: 700, color: '#0D1B2A', marginBottom: 10 }}>Bulk Rule Deployment</div>
            <p style={{ fontSize: 13, color: '#6B7A8D', lineHeight: 1.65, marginBottom: 16 }}>
              Set automated rules once and push them across hundreds of campaigns simultaneously. Pause underperforming ads, scale winners, and protect budgets — all automatically.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                { rule: 'Pause if CPA > $25', status: 'Active on 32 campaigns', color: '#f0fdf4', statusColor: '#22c55e' },
                { rule: 'Scale if ROAS > 4x', status: 'Active on 18 campaigns', color: '#f0fdf4', statusColor: '#22c55e' },
                { rule: 'Alert if CTR < 1%', status: 'Monitoring 47 campaigns', color: '#fffbeb', statusColor: '#f59e0b' },
              ].map((r) => (
                <div key={r.rule} style={{ display: 'flex', alignItems: 'center', gap: 10, background: r.color, borderRadius: 8, padding: '9px 12px' }}>
                  <span style={{ fontSize: 12, color: '#22c55e' }}>✓</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: '#0D1B2A' }}>{r.rule}</div>
                    <div style={{ fontSize: 10, color: r.statusColor, marginTop: 1 }}>{r.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            background: 'white', borderRadius: 18, border: '1px solid #EAF1FF',
            padding: '32px 28px', boxShadow: '0 2px 16px rgba(27,110,243,0.07)',
          }}>
            <div style={{ width: 52, height: 52, borderRadius: 16, background: '#fff7ed', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, marginBottom: 18 }}>💰</div>
            <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 16, fontWeight: 700, color: '#0D1B2A', marginBottom: 10 }}>Unified Budget Management</div>
            <p style={{ fontSize: 13, color: '#6B7A8D', lineHeight: 1.65, marginBottom: 16 }}>
              Manage and redistribute budgets across all platforms from a single interface. Set global caps, channel allocations, and let Sapientia's AI optimize spend in real time.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { platform: 'Meta', pct: 35, color: '#1B6EF3' },
                { platform: 'Google', pct: 28, color: '#f97316' },
                { platform: 'TikTok', pct: 22, color: '#22c55e' },
                { platform: 'Amazon', pct: 15, color: '#a855f7' },
              ].map((b) => (
                <div key={b.platform} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: '#6B7A8D', width: 56 }}>{b.platform}</div>
                  <div style={{ flex: 1, height: 6, background: '#f0f4ff', borderRadius: 100, overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${b.pct}%`, background: b.color, borderRadius: 100 }} />
                  </div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#0D1B2A', width: 32, textAlign: 'right' }}>{b.pct}%</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            background: 'white', borderRadius: 18, border: '1px solid #EAF1FF',
            padding: '32px 28px', boxShadow: '0 2px 16px rgba(27,110,243,0.07)',
          }}>
            <div style={{ width: 52, height: 52, borderRadius: 16, background: '#fdf4ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, marginBottom: 18 }}>🖼️</div>
            <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 16, fontWeight: 700, color: '#0D1B2A', marginBottom: 10 }}>Creative Asset Sharing</div>
            <p style={{ fontSize: 13, color: '#6B7A8D', lineHeight: 1.65, marginBottom: 16 }}>
              Maintain a shared creative library across all brands and campaigns. Upload once, adapt automatically, and ensure brand consistency wherever your ads appear.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
              {[
                { icon: '🎬', label: 'Videos', count: '124', color: '#fdf4ff' },
                { icon: '🖼️', label: 'Images', count: '389', color: '#EAF1FF' },
                { icon: '📝', label: 'Copy', count: '76', color: '#f0fdf4' },
              ].map((asset) => (
                <div key={asset.label} style={{ background: asset.color, borderRadius: 10, padding: '14px 12px', textAlign: 'center' }}>
                  <div style={{ fontSize: 22, marginBottom: 6 }}>{asset.icon}</div>
                  <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 18, fontWeight: 800, color: '#0D1B2A' }}>{asset.count}</div>
                  <div style={{ fontSize: 10, color: '#6B7A8D', marginTop: 2 }}>{asset.label}</div>
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
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: '#a5c4ff', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12, fontFamily: "'Sora', sans-serif" }}>
              AI-Powered Intelligence
            </p>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 800, marginBottom: 14, color: 'white' }}>
              One Brain for{' '}
              <span className="gradient-text">Every Channel</span>
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.60)', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
              Sapientia's AI doesn't just aggregate data — it learns across all your channels simultaneously, surfacing insights and recommendations that no single-platform tool can match.
            </p>
          </div>

          {/* Dark dashboard mockup */}
          <div style={{ maxWidth: 900, margin: '0 auto', background: 'rgba(255,255,255,0.05)', borderRadius: 20, border: '1px solid rgba(255,255,255,0.10)', padding: '28px 32px', backdropFilter: 'blur(12px)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28 }}>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }} />
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} />
              <span style={{ fontFamily: "'Sora', sans-serif", fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.8)', marginLeft: 10 }}>Sapientia AI — Cross-Channel Insights</span>
              <span style={{ marginLeft: 'auto', background: 'rgba(27,110,243,0.3)', color: '#a5c4ff', fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: 100, border: '1px solid rgba(27,110,243,0.4)' }}>● AI Active</span>
            </div>

            {/* AI insights */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 24 }}>
              {[
                { icon: '🧠', title: 'AI Recommendation', text: 'Shift 15% budget from Google Display to Meta Reels — projected +0.8x ROAS', color: 'rgba(27,110,243,0.15)', border: 'rgba(27,110,243,0.3)' },
                { icon: '📈', title: 'Trend Alert', text: 'TikTok video CPM down 22% this week. Optimal window for new creative launch.', color: 'rgba(34,197,94,0.12)', border: 'rgba(34,197,94,0.25)' },
                { icon: '⚠️', title: 'Anomaly Detected', text: 'Amazon Sponsored Products CTR dropped 18% in last 6 hours — review creative.', color: 'rgba(249,115,22,0.12)', border: 'rgba(249,115,22,0.25)' },
              ].map((insight) => (
                <div key={insight.title} style={{ background: insight.color, border: `1px solid ${insight.border}`, borderRadius: 12, padding: '18px 16px' }}>
                  <div style={{ fontSize: 20, marginBottom: 10 }}>{insight.icon}</div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>{insight.title}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>{insight.text}</div>
                </div>
              ))}
            </div>

            {/* Performance bars */}
            <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 12, padding: '20px' }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 16 }}>Channel Performance Index</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { platform: 'Meta', score: 92, color: '#1B6EF3' },
                  { platform: 'TikTok', score: 87, color: '#22c55e' },
                  { platform: 'Google', score: 79, color: '#f97316' },
                  { platform: 'Amazon', score: 95, color: '#a855f7' },
                  { platform: 'Instagram', score: 83, color: '#ec4899' },
                ].map((ch) => (
                  <div key={ch.platform} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.6)', width: 70 }}>{ch.platform}</div>
                    <div style={{ flex: 1, height: 6, background: 'rgba(255,255,255,0.08)', borderRadius: 100, overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${ch.score}%`, background: ch.color, borderRadius: 100 }} />
                    </div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.8)', width: 36, textAlign: 'right' }}>{ch.score}</div>
                  </div>
                ))}
              </div>
            </div>
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
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#EAF1FF', border: '1px solid rgba(27,110,243,0.20)',
            borderRadius: 100, padding: '6px 18px', marginBottom: 28,
          }}>
            <span style={{ fontSize: 14 }}>🚀</span>
            <span style={{ fontSize: 12, fontWeight: 700, color: '#1B6EF3', letterSpacing: '0.07em', fontFamily: "'Sora', sans-serif" }}>
              GET STARTED TODAY
            </span>
          </div>
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 800, marginBottom: 18, color: '#0D1B2A', lineHeight: 1.15 }}>
            Ready to{' '}
            <span className="gradient-text">Unify Your Ad Management?</span>
          </h2>
          <p style={{ fontSize: 16, color: '#6B7A8D', lineHeight: 1.7, marginBottom: 40, maxWidth: 500, margin: '0 auto 40px' }}>
            Join thousands of marketers who've replaced their fragmented ad tools with one powerful, AI-driven dashboard. Stop managing tabs. Start managing results.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
            <CtaLink className="btn btn-primary" style={{ fontSize: 15, padding: '14px 36px', borderRadius: 100, fontWeight: 700 }}>
              Hire Sapientia
            </CtaLink>
            <CtaLink className="btn btn-ghost" style={{ fontSize: 15, padding: '14px 36px', borderRadius: 100, border: '1.5px solid #1B6EF3', color: '#1B6EF3', background: 'transparent', fontWeight: 700 }}>
              Schedule Demo
            </CtaLink>
          </div>
          <p style={{ fontSize: 12, color: '#6B7A8D', marginTop: 20 }}>No credit card required · Free 14-day trial · Cancel anytime</p>
        </div>
      </section>

    </main>
  )
}
