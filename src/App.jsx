import './App.css'
import Tiptap from './components/TipTap';
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';

function App() {

  return (
    <>
      <main className="inky">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<Tiptap />} />
        </Routes>
      </main>
    </>
  )
}

export default App
