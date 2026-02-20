import { useState } from "react";
import axios from "axios";

function DiseaseForm() {

  const [formData, setFormData] = useState({
    fever: 0,
    cough: 0,
    headache: 0,
    fatigue: 0,
    body_pain: 0,
    sore_throat: 0,
    diarrhea: 0,
    nausea: 0
  });

  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  // handle dropdown change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: Number(e.target.value)
    });
  };

  // form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("");

    try {
      const API_URL = "https://ai-disease-predictor-tjnu.onrender.com/predict";

      const response = await axios.post(API_URL, formData);

      // IMPORTANT: backend returns "prediction"
      setResult(response.data.prediction);

    } catch (error) {
      console.error(error);
      alert("Flask server is not responding. Please wait 30 seconds and try again.");
    }

    setLoading(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Disease Prediction System</h1>

      <form onSubmit={handleSubmit}>

        {Object.keys(formData).map((symptom) => (
          <div key={symptom} style={{ margin: "10px" }}>
            <label htmlFor={symptom}>
              {symptom.replace("_", " ")}:
            </label>

            <select
              id={symptom}
              name={symptom}
              value={formData[symptom]}
              onChange={handleChange}
            >
              <option value={0}>No</option>
              <option value={1}>Yes</option>
            </select>

          </div>
        ))}

        <button type="submit" style={{ marginTop: "20px", padding: "10px" }}>
          {loading ? "Analyzing..." : "Predict Disease"}
        </button>
      </form>

      {/* Result Box */}
      {result && (
        <div style={{
          marginTop: "30px",
          padding: "15px",
          border: "2px solid green",
          display: "inline-block",
          borderRadius: "10px",
          backgroundColor: "#eaffea"
        }}>
          <h2 style={{ color: "green" }}>
            Predicted Disease: {result}
          </h2>
        </div>
      )}

    </div>
  );
}

export default DiseaseForm;
