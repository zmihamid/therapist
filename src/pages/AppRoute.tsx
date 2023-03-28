import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'

export default function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  )
}
