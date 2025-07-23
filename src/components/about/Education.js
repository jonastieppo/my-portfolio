
// Education Component
export default function Education () {
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
