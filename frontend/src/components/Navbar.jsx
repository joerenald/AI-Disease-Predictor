import { Link } from "react-router-dom";
import { FaHeartbeat } from "react-icons/fa";

function Navbar() {
  return (
    <nav id="site-navbar" className="bg-white/70 backdrop-blur-md shadow-md sticky top-0 z-50">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="flex items-center gap-2 text-blue-700 font-bold text-xl">
          <FaHeartbeat className="text-red-500 text-2xl" />
          AI Health Predictor
        </div>

        <div className="flex gap-6 font-medium text-gray-700">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/diagnosis" className="hover:text-blue-600">Start Diagnosis</Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
