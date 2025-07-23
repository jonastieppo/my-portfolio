// Header Component
export default function Header () {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 sm:p-8 lg:p-10 rounded-t-lg shadow-md">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-2">Jonas Tieppo da Rocha</h1>
          <p className="text-xl sm:text-2xl font-light">MSc | R&D | Structural Composites</p>
          <p className="text-md sm:text-lg mt-2">São Leopoldo, Rio Grande do Sul, Brazil</p>
        </div>
        <div className="flex flex-col items-center sm:items-end space-y-2">
          <a href="mailto:jonas.tieppo.rocha@gmail.com" className="text-white hover:underline flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            jonas.tieppo.rocha@gmail.com
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
