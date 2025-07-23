// Experience Component
export default function Experience (){
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
