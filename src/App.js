import React from 'react';

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

// Header Component
const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 sm:p-8 lg:p-10 rounded-t-lg shadow-md">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-2">Jonas Tieppo da Rocha</h1>
          <p className="text-xl sm:text-2xl font-light">MSc | R&D | Structural Composites</p>
          <p className="text-md sm:text-lg mt-2">São Leopoldo, Rio Grande do Sul, Brazil</p>
        </div>
        <div className="flex flex-col items-center sm:items-end space-y-2">
          <a href="mailto:jonastieppo@yahoo.com.br" className="text-white hover:underline flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            jonastieppo@yahoo.com.br
          </a>
          <a href="https://www.linkedin.com/in/jonastieppo" target="_blank" rel="noopener noreferrer" className="text-white hover:underline flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38-.999-2.5-2.48-2.5zm.02 6.5h-2.5v13h2.5zm7.982 0h-2.5v13h2.5v-6.002c0-3.345 3.98-3.098 3.98-6.104v-.894h-3.98z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
};

// Skills Component
const Skills = () => {
  return (
    <section className="py-8 border-b border-gray-200">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">Top Skills</h3>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>Deep Learning</li>
            <li>Data Wrangling</li>
            <li>Manipulação de dados</li>
          </ul>
        </div>
        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">Languages</h3>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>Japanese (Elementary)</li>
            <li>English (Professional Working)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

// Experience Component
const Experience = () => {
  return (
    <section className="py-8 border-b border-gray-200">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Experience</h2>

      {/* Instituto SENAI de Inovação em Engenharia de Polímeros */}
      <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-gray-900">Senior Analyst of Technical and Technological Services</h3>
        <p className="text-blue-600 text-lg">Instituto SENAI de Inovação em Engenharia de Polímeros</p>
        <p className="text-gray-600 text-md mb-2">June 2023 - Present (2 years 2 months) | São Leopoldo, Rio Grande do Sul, Brazil</p>
      </div>

      {/* SKA Automação de Engenharias Ltda. - Junior Software Developer */}
      <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-gray-900">Junior Software Developer</h3>
        <p className="text-blue-600 text-lg">SKA Automação de Engenharias Ltda.</p>
        <p className="text-gray-600 text-md mb-2">February 2022 - June 2023 (1 year 5 months) | São Leopoldo, Rio Grande do Sul, Brazil</p>
      </div>

      {/* SKA Automação de Engenharias Ltda. - Finite Element Analyst */}
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-gray-900">Finite Element Analyst - Abaqus Specialist</h3>
        <p className="text-blue-600 text-lg">SKA Automação de Engenharias Ltda.</p>
        <p className="text-gray-600 text-md mb-4">October 2020 - February 2022 (1 year 5 months) | São Leopoldo, Rio Grande do Sul, Brazil</p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg">
          <li>Technical support for mechanical projects, with a focus on the use of the Abaqus software.</li>
          <li>Assistance in modeling, analysis, and interpretation of results to ensure the integrity and proper performance of structures.</li>
          <li>Analysis of composite structures, fatigue, wear, discrete element method (DEM), and usage of subroutines in Fortran.</li>
          <li>Development of customized solutions using the Python programming language.</li>
          <li>Conducting workshops, writing texts, and recording videos.</li>
        </ul>
      </div>
    </section>
  );
};

// Education Component
const Education = () => {
  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Education</h2>

      {/* USP - University of São Paulo */}
      <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-gray-900">Postgraduate, Data Science & Analytics</h3>
        <p className="text-blue-600 text-lg">USP - University of São Paulo</p>
        <p className="text-gray-600 text-md">April 2024 - October 2025</p>
      </div>

      {/* Federal University of Rio Grande do Sul - Master's */}
      <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-gray-900">Master's degree, Solid Mechanics</h3>
        <p className="text-blue-600 text-lg">Federal University of Rio Grande do Sul</p>
        <p className="text-gray-600 text-md">2019-2022</p>
      </div>

      {/* Universidade Federal do Rio Grande do Sul - Bachelor's */}
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-gray-900">Bachelor's degree, Mechanical Engineering</h3>
        <p className="text-blue-600 text-lg">Universidade Federal do Rio Grande do Sul</p>
        <p className="text-gray-600 text-md">2013-2018</p>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 sm:p-8 lg:p-10 text-center rounded-b-lg mt-8">
      <p className="text-lg">&copy; {new Date().getFullYear()} Jonas Tieppo da Rocha. All rights reserved.</p>
    </footer>
  );
};

export default App;
