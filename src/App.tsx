import './assets/fonts/pappins/all.css'
import { BrowserRouter, } from 'react-router-dom'
import Main from './pages/Main'

export default function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  )
}
