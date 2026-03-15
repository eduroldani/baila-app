import React, { useState, FormEvent } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setError(error.message)
    } else {
      navigate('/')
    }
  }

  const pageStyle: React.CSSProperties = {
    background: '#000',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'monospace',
    color: '#fff',
  }

  const boxStyle: React.CSSProperties = {
    width: 320,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '8px 10px',
    background: '#111',
    border: '1px solid #444',
    color: '#fff',
    fontFamily: 'monospace',
    fontSize: 14,
    boxSizing: 'border-box',
  }

  const btnStyle: React.CSSProperties = {
    padding: '9px 0',
    background: '#fff',
    color: '#000',
    border: 'none',
    fontFamily: 'monospace',
    fontSize: 14,
    cursor: 'pointer',
    width: '100%',
  }

  return (
    <div style={pageStyle}>
      <div style={boxStyle}>
        <h1 style={{ margin: 0, fontSize: 28 }}>Login</h1>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div>
            <label htmlFor="email" style={{ display: 'block', marginBottom: 4, fontSize: 13 }}>Email</label>
            <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required style={inputStyle} />
          </div>
          <div>
            <label htmlFor="password" style={{ display: 'block', marginBottom: 4, fontSize: 13 }}>Password</label>
            <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} required style={inputStyle} />
          </div>
          {error && <p style={{ color: '#f55', margin: 0, fontSize: 13 }}>{error}</p>}
          <button type="submit" style={btnStyle}>Login</button>
        </form>
        <p style={{ margin: 0, fontSize: 13, color: '#aaa' }}>
          No account? <Link to="/signup" style={{ color: '#fff' }}>Sign up</Link>
        </p>
      </div>
    </div>
  )
}
