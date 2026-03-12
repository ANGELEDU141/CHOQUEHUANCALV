import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Services from './pages/Services/Services.jsx'
import Contact from './pages/Contact/Contact.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/quienes-somos" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
