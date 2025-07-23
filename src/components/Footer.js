// Footer Component
export default function Footer () {
  return (
    <footer className="bg-gray-800 text-white p-6 sm:p-8 lg:p-10 text-center rounded-b-lg mt-8">
      <p className="text-lg">&copy; {new Date().getFullYear()} Jonas Tieppo da Rocha. All rights reserved.</p>
    </footer>
  );
};
