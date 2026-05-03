const crew = [
  {
    name: 'Cleo',
    role: 'Head',
    desc: 'Builds data-driven plans, forecasts budgets, and finds your highest ROI opportunities.',
    bg: '/assets/Rectangle1.png',
    robot: '/assets/robot1.png',
    nameColor: '#C05A00',
    roleColor: '#7A3800',
    floatClass: 'robot-float',
    scale: 1.22, // 两侧透明边距大，放大补偿
  },
  {
    name: 'Zeno',
    role: 'Operator',
    desc: 'Launches and manages campaigns across all platforms, optimizing daily performance.',
    bg: '/assets/Rectangle2.png',
    robot: '/assets/robot2.png',
    nameColor: '#1155CC',
    roleColor: '#0B3D91',
    floatClass: 'robot-float-delay-1',
    scale: 1.0, // 基准
  },
  {
    name: 'Lumi',
    role: 'Analyst',
    desc: 'Tracks results, uncovers insights, and turns every campaign into a repeatable asset.',
    bg: '/assets/Rectangle3.png',
    robot: '/assets/robot3.png',
    nameColor: '#1A6B1A',
    roleColor: '#0F4A0F',
    floatClass: 'robot-float-delay-2',
    scale: 1.08, // 略小于 robot2，小幅放大
  },
]

const ROBOT_W = 221
const ROBOT_H = 376
const ROBOT_OVERFLOW = 60 // 脚露出卡片底部的高度

export default function AICrew() {
  return (
    <section style={{ background: 'white', padding: '80px 48px', textAlign: 'center' }}>
      <div className="container">
        <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, lineHeight: 1.15, marginBottom: 12 }}>
          Meet Your <span className="gradient-text">AI Crew</span> .
        </h2>
        <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, lineHeight: 1.15, marginBottom: 24 }}>
          Always On. Always Optimizing.
        </h2>
        <p style={{ fontSize: 15, color: 'var(--gray)', lineHeight: 1.7, maxWidth: 520, margin: '0 auto 56px' }}>
          Specialized AI agents for planning, execution, and insights — working seamlessly across Amazon, Meta, Google, and TikTok.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, alignItems: 'start' }}>
          {crew.map((c) => (
            // 外层 wrapper：overflow visible，底部留出 robot 露脚的空间
            <div key={c.name} style={{ position: 'relative', paddingBottom: ROBOT_OVERFLOW }}>

              {/* 卡片背景区域：按 360:600 比例，overflow hidden 保证圆角裁切 */}
              <div style={{
                borderRadius: 24,
                overflow: 'hidden',
                backgroundImage: `url(${c.bg})`,
                backgroundSize: '100% 100%',
                backgroundPosition: 'center',
                aspectRatio: '360 / 440',
                textAlign: 'left',
                padding: '28px 24px',
              }}>
                <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 26, fontWeight: 800, color: c.nameColor, marginBottom: 4 }}>
                  {c.name}
                </div>
                <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 14, fontWeight: 700, color: c.roleColor, marginBottom: 16 }}>
                  {c.role}
                </div>
                <p style={{ fontSize: 13.5, color: c.roleColor, lineHeight: 1.65, maxWidth: 220, opacity: 0.85 }}>
                  {c.desc}
                </p>
              </div>

              {/* Robot：绝对定位，底部对齐 wrapper，超出卡片显示脚 */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                display: 'flex',
                justifyContent: 'center',
                pointerEvents: 'none',
              }}>
                <img
                  src={c.robot}
                  alt={c.name}
                  className={c.floatClass}
                  style={{
                    width: ROBOT_W,
                    height: ROBOT_H,
                    objectFit: 'contain',
                    objectPosition: 'bottom',
                    transform: `scale(${c.scale})`,
                    transformOrigin: 'bottom center',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
