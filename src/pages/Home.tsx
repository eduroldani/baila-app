import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import type { User } from '@supabase/supabase-js'

interface Props {
  user: User
}

export default function Home({ user }: Props) {
  const navigate = useNavigate()

  async function handleLogout() {
    await supabase.auth.signOut()
    navigate('/')
  }

  return (
    <div style={{
      background: '#000',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'monospace',
      color: '#fff',
      gap: 24,
    }}>
      <h1 style={{ fontSize: 80, margin: 0 }}>Baila</h1>
      <p style={{ margin: 0 }}>Hello {user.email}</p>
      <button onClick={handleLogout} style={{ padding: '6px 16px', cursor: 'pointer' }}>Logout</button>
    </div>
  )
}
