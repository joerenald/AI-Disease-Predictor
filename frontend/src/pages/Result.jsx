import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import ResultCard from "../components/ResultCard";

function Result() {
const location = useLocation();
const disease = location.state?.disease;

if (!disease) {
return ( <div className="text-center py-40"> <h2 className="text-2xl font-bold text-gray-800 mb-4">
No Diagnosis Found </h2> <Link
       to="/diagnosis"
       className="text-blue-600 underline font-medium"
     >
Start Diagnosis </Link> </div>
);
}

return ( <div className="relative max-w-6xl mx-auto px-6 py-16">

  {/* background glow */}
  <div className="absolute -top-20 left-10 w-72 h-72 bg-green-300 opacity-20 blur-3xl rounded-full"></div>
  <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-300 opacity-20 blur-3xl rounded-full"></div>

  {/* Page Header */}
  <motion.div
    initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-center mb-12"
  >
    <h1 className="text-4xl font-bold text-gray-800">
      AI Diagnosis Report
    </h1>
    <p className="text-gray-600 mt-3">
      Generated based on the symptoms you selected
    </p>
  </motion.div>

  <ResultCard disease={disease} />

  {/* Action Buttons */}
  <div className="flex justify-center gap-6 mt-12">
    <Link to="/diagnosis">
      <button className="px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 shadow-md">
        Check Again
      </button>
    </Link>

    <button
      onClick={() => window.print()}
      className="px-8 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 shadow-md"
    >
      Download / Print Report
    </button>
  </div>

</div>

);
}

export default Result;
