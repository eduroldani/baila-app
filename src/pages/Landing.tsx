import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div style={{ background: '#000', minHeight: '100vh', fontFamily: 'monospace', color: '#fff' }}>
      <nav style={{ display: 'flex', justifyContent: 'flex-end', padding: '20px 40px', borderBottom: '1px solid #222' }}>
        <Link to="/login" style={{ color: '#fff', textDecoration: 'none', fontSize: 14 }}>Login</Link>
      </nav>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'calc(100vh - 61px)' }}>
        <h1 style={{ fontSize: 100, margin: 0 }}>Baila</h1>
      </div>
    </div>
  )
}
