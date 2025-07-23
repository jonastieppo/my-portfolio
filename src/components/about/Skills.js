// Skills Component
export default function Skills () {
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
