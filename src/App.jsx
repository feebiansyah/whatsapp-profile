import { Route, Routes } from 'react-router-dom'
import WhatsAppProfile from './components/WhatsAppProfile'

export default function App() {
  return <Routes>
    <Route path="/:group/:character" element={<WhatsAppProfile />} />
    <Route path="*" element={<WhatsAppProfile />} />
  </Routes>
}
