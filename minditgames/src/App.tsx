import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/MindItGames/ScrollToTop.tsx'
import Home from './pages/Home.tsx'
import PrivacyPolicy from './pages/PrivacyPolicy.tsx'

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
