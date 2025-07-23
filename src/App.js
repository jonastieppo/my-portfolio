import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Articles from './components/Articles';
import Projects from './components/Projects';
import About from './components/about/About';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// Main App component
function App() {
  return (
    <Router> {/* Wrap your entire application with Router */}
    <div className="min-h-screen bg-gray-100 font-sans antialiased flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-xl overflow-hidden">
        {/* Header Section */}
        <Header />
        {/* Navigation Bar */}
        <nav className="bg-gray-800 text-white p-4 flex justify-center space-x-6">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/about" className="hover:text-gray-300">About</Link>
            <Link to="/projects" className="hover:text-gray-300">Projects</Link>
            <Link to="/articles" className="hover:text-gray-300">Articles</Link>
          </nav>
        <main className="p-6 sm:p-8 lg:p-10">

          <Routes>
            <Route path="/" element={<><div className="p-6 text-center"><h2>Beautiful Home</h2><p>Here you'll a nice wellcome page.</p></div></>} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/articles" element={<Articles />} />


          </Routes>
        </main>

        {/* Footer Section */}
        <Footer />
      </div>
    </div>
  </Router>
  );
}

export default App;
