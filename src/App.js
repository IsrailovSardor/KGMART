import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Page/Home/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/alphabet" element={<Home />} />
      <Route path="/author" element={<Home />} />
      <Route path="/category" element={<Home />} /> */}

    </Routes>
  );
}

export default App;
