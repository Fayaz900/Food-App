import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./components/Home";
import AddItems from './components/AddItems';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addItem" element={<AddItems />} />
      </Routes>
    </Router>
  )
}