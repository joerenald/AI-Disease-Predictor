import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaRobot, FaHeartbeat, FaUserMd, FaStethoscope } from "react-icons/fa";

function Home() {
return ( <div className="relative overflow-hidden">

  {/* Animated Background Blobs */}
  <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-300 opacity-30 blur-3xl rounded-full animate-pulse"></div>
  <div className="absolute top-60 -right-40 w-[500px] h-[500px] bg-purple-300 opacity-30 blur-3xl rounded-full animate-pulse"></div>

  {/* HERO SECTION */}
  <section className="max-w-7xl mx-auto px-6 py-28 text-center relative z-10">

    <motion.h1
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight"
    >
      AI Powered <span className="text-blue-600">Disease Prediction</span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto"
    >
      Analyze symptoms instantly using Machine Learning.  
      Our intelligent healthcare assistant helps you identify potential illnesses
      early and take medical action before complications arise.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className="mt-10"
    >
      <Link to="/diagnosis">
        <button className="px-10 py-4 bg-blue-600 text-white rounded-2xl text-lg font-semibold shadow-xl hover:scale-105 hover:bg-blue-700 transition">
          Start Free Diagnosis
        </button>
      </Link>
    </motion.div>
  </section>

  {/* FEATURES SECTION */}
  <section className="max-w-6xl mx-auto px-6 py-20 relative z-10">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-14">
      Why Use Our AI Health System?
    </h2>

    <div className="grid md:grid-cols-3 gap-10">

      <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:scale-105 transition">
        <FaRobot className="text-blue-600 text-4xl mb-4" />
        <h3 className="text-xl font-semibold mb-2">Smart AI Analysis</h3>
        <p className="text-gray-600">
          Machine learning model trained on symptom data predicts diseases
          quickly and efficiently.
        </p>
      </div>

      <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:scale-105 transition">
        <FaHeartbeat className="text-red-500 text-4xl mb-4" />
        <h3 className="text-xl font-semibold mb-2">Early Detection</h3>
        <p className="text-gray-600">
          Identify potential health issues before they become severe and
          take timely medical advice.
        </p>
      </div>

      <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:scale-105 transition">
        <FaUserMd className="text-green-600 text-4xl mb-4" />
        <h3 className="text-xl font-semibold mb-2">Instant Report</h3>
        <p className="text-gray-600">
          Receive an immediate diagnosis report and understand your health
          condition in seconds.
        </p>
      </div>

    </div>
  </section>

  {/* HOW IT WORKS */}
  <section className="bg-white/60 backdrop-blur-md py-20">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-14">
      How It Works
    </h2>

    <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12 text-center px-6">

      <div>
        <FaStethoscope className="text-blue-600 text-5xl mx-auto mb-4" />
        <h3 className="font-semibold text-xl mb-2">1. Select Symptoms</h3>
        <p className="text-gray-600">
          Choose symptoms you are experiencing from the diagnosis page.
        </p>
      </div>

      <div>
        <FaRobot className="text-purple-600 text-5xl mx-auto mb-4" />
        <h3 className="font-semibold text-xl mb-2">2. AI Processing</h3>
        <p className="text-gray-600">
          Our machine learning model analyzes your symptoms.
        </p>
      </div>

      <div>
        <FaHeartbeat className="text-red-500 text-5xl mx-auto mb-4" />
        <h3 className="font-semibold text-xl mb-2">3. Get Result</h3>
        <p className="text-gray-600">
          Instantly view predicted disease and health report.
        </p>
      </div>

    </div>
  </section>

  {/* CTA SECTION */}
  <section className="text-center py-24">
    <h2 className="text-4xl font-bold text-gray-800 mb-6">
      Take Control of Your Health Today
    </h2>

    <p className="text-gray-600 mb-8">
      Fast • Free • AI Powered Healthcare Assistant
    </p>

    <Link to="/diagnosis">
      <button className="px-12 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl text-lg font-semibold shadow-xl hover:scale-105 transition">
        Check My Symptoms
      </button>
    </Link>
  </section>

</div>
);
}

export default Home;
