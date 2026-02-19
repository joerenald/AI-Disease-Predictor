import { motion } from "framer-motion";
import { FaNotesMedical, FaInfoCircle } from "react-icons/fa";
import SymptomSelector from "../components/SymptomSelector";

function Diagnosis() {
return ( <div className="relative max-w-7xl mx-auto px-6 py-16">

  {/* background glow */}
  <div className="absolute -top-20 left-10 w-72 h-72 bg-blue-300 opacity-20 blur-3xl rounded-full"></div>
  <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-300 opacity-20 blur-3xl rounded-full"></div>

  {/* Header */}
  <motion.div
    initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-center mb-12 relative z-10"
  >
    <div className="flex justify-center mb-4">
      <FaNotesMedical className="text-blue-600 text-5xl" />
    </div>

    <h1 className="text-4xl font-bold text-gray-800">
      AI Symptom Checker
    </h1>

    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
      Select the symptoms you are currently experiencing. Our machine learning
      model will analyze them and provide a predicted health condition.
    </p>
  </motion.div>

  {/* Instructions Card */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="bg-white/70 backdrop-blur-lg border border-blue-100 rounded-2xl shadow-lg p-6 mb-10 relative z-10"
  >
    <div className="flex items-start gap-4">
      <FaInfoCircle className="text-blue-600 text-2xl mt-1" />

      <div>
        <h3 className="font-semibold text-lg text-gray-800 mb-2">
          Instructions
        </h3>

        <ul className="text-gray-600 space-y-1 text-sm">
          <li>• Select all symptoms you are facing today</li>
          <li>• Do not randomly select symptoms</li>
          <li>• The more accurate your selection, the better the prediction</li>
          <li>• This system provides preliminary health guidance only</li>
        </ul>
      </div>
    </div>
  </motion.div>

  {/* Symptom Selector Panel */}
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.3 }}
    className="relative z-10"
  >
    <SymptomSelector />
  </motion.div>

  {/* Medical Disclaimer */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.6 }}
    className="mt-12 text-center text-sm text-gray-500 max-w-2xl mx-auto"
  >
    <p>
      ⚠ This AI system is not a replacement for professional medical advice.
      Always consult a qualified doctor for proper diagnosis and treatment.
    </p>
  </motion.div>

</div>
);
}

export default Diagnosis;
