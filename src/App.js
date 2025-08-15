import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Algorithm from "./pages/Algorithm";
import Category from "./pages/Category";
import Compare from "./pages/Compare";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-wrapper">
      <Router>
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Category />} />
            <Route path="/category/:algorithm" element={<Algorithm />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;