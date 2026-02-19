import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="flex flex-col items-center justify-center py-32">

      <motion.div
        className="w-24 h-24 border-4 border-blue-500 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />

      <h2 className="mt-8 text-xl font-semibold text-gray-700">
        AI is analyzing your symptoms...
      </h2>

      <p className="text-gray-500 mt-2">
        Please wait while the model predicts the disease
      </p>

    </div>
  );
}

export default Loader;
