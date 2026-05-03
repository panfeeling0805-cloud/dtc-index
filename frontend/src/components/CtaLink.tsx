import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { CSSProperties, ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  style?: CSSProperties
}

export default function CtaLink({ children, className, style }: Props) {
  const { isLoggedIn } = useAuth()
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate(isLoggedIn ? '/dashboard' : '/auth')}
      className={className}
      style={{ cursor: 'pointer', border: 'none', ...style }}
    >
      {children}
    </button>
  )
}
