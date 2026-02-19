import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

const symptomsList = [
  "fever",
  "cough",
  "headache",
  "fatigue",
  "body_pain",
  "sore_throat",
  "diarrhea",
  "nausea",
];

function SymptomSelector() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState({});
  const [loading, setLoading] = useState(false);

  const toggleSymptom = (symptom) => {
    setSelected((prev) => ({
      ...prev,
      [symptom]: prev[symptom] ? 0 : 1,
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);

    // Convert to backend format
    let formData = {};
    symptomsList.forEach((sym) => {
      formData[sym] = selected[sym] ? 1 : 0;
    });

    try {
      const res = await axios.post("http://127.0.0.1:5000/predict", formData);

      navigate("/result", { state: { disease: res.data.predicted_disease } });
    } catch (error) {
      alert("Flask server not running!");
    }

    setLoading(false);
  };

  if (loading) return <Loader />;

  return (
    <div className="bg-white/80 backdrop-blur-xl border border-blue-100 rounded-3xl shadow-2xl p-10">


      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {symptomsList.map((symptom) => (
          <div
            key={symptom}
            onClick={() => toggleSymptom(symptom)}
            className={`cursor-pointer rounded-xl p-4 text-center border transition
            ${
              selected[symptom]
                ? "bg-blue-600 text-white border-blue-600 scale-105"
                : "bg-white hover:bg-blue-50"
            }`}
          >
            {symptom.replace("_", " ").toUpperCase()}
          </div>
        ))}

      </div>

      <div className="flex justify-center mt-10">
        <button
          onClick={handleSubmit}
          className="px-10 py-4 rounded-xl bg-blue-600 text-white text-lg font-semibold shadow-lg hover:bg-blue-700 transition"
        >
          Analyze Symptoms
        </button>
      </div>

    </div>
  );
}

export default SymptomSelector;
