import { motion } from "framer-motion";
import { FaHeartbeat, FaUserMd, FaExclamationTriangle, FaLeaf } from "react-icons/fa";

function ResultCard({ disease }) {

// Basic risk estimation (visual only)
const highRiskDiseases = ["Pneumonia", "Typhoid", "Dengue"];
const riskLevel = highRiskDiseases.includes(disease) ? "High" : "Moderate";

return (
<motion.div id="medical-report"
initial={{ opacity: 0, y: 50 }}
animate={{ opacity: 1, y: 0 }}
className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-10"
>

  {/* Diagnosis */}
  <div className="text-center mb-10">
    <FaHeartbeat className="text-red-500 text-6xl mx-auto mb-5" />

    <h2 className="text-3xl font-bold text-gray-800 mb-2">
      Predicted Condition
    </h2>

    <div className="inline-block px-6 py-3 rounded-full bg-blue-50 border border-blue-200">
      <span className="text-2xl font-semibold text-blue-700">
        {disease}
      </span>
    </div>
  </div>

  {/* Risk Level */}
  <div className="grid md:grid-cols-2 gap-8">

    <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-3">
        <FaExclamationTriangle className="text-red-500 text-2xl" />
        <h3 className="text-xl font-semibold text-red-600">Risk Level</h3>
      </div>

      <p className="text-gray-700">
        This condition is categorized as:
        <span className="font-bold ml-2">{riskLevel}</span>
      </p>

      <p className="text-sm text-gray-500 mt-2">
        Severity estimation based on general medical symptom patterns.
      </p>
    </div>

    {/* Doctor Advice */}
    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-3">
        <FaUserMd className="text-blue-600 text-2xl" />
        <h3 className="text-xl font-semibold text-blue-700">Doctor Advice</h3>
      </div>

      <ul className="text-gray-700 space-y-2">
        <li>• Get adequate rest</li>
        <li>• Drink plenty of fluids</li>
        <li>• Monitor temperature regularly</li>
        <li>• Consult a physician if symptoms persist</li>
      </ul>
    </div>

  </div>

  {/* Home Care */}
  <div className="mt-10 bg-green-50 border border-green-200 rounded-2xl p-6">
    <div className="flex items-center gap-3 mb-3">
      <FaLeaf className="text-green-600 text-2xl" />
      <h3 className="text-xl font-semibold text-green-700">Home Care Tips</h3>
    </div>

    <ul className="text-gray-700 space-y-2">
      <li>• Stay hydrated</li>
      <li>• Eat light nutritious food</li>
      <li>• Avoid cold beverages</li>
      <li>• Take proper sleep</li>
    </ul>
  </div>

  {/* Disclaimer */}
  <p className="text-center text-sm text-gray-500 mt-10">
    This AI generated report is for educational purposes only and not a
    substitute for professional medical diagnosis.
  </p>

</motion.div>

);
}

export default ResultCard;
