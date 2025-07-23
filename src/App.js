import React from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';
// Main App component
function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-xl overflow-hidden">
        {/* Header Section */}
        <Header />

        <main className="p-6 sm:p-8 lg:p-10">
          {/* Skills Section */}
          <Skills />

          {/* Experience Section */}
          <Experience />

          {/* Education Section */}
          <Education />
        </main>

        {/* Footer Section */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
