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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: parseInt(e.target.value)
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const API_URL = "https://ai-disease-predictor-tjnu.onrender.com/predict";

axios.post(API_URL, formData)
  .then((response) => {
    setResult(response.data.prediction);
  })
  .catch((error) => {
    console.error(error);
    alert("Server connected but prediction failed");
  });


      setResult(response.data.predicted_disease);

    } catch (error) {
      alert("Backend not connected!");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Disease Prediction System</h1>

      <form onSubmit={handleSubmit}>

        {Object.keys(formData).map((symptom) => (
          <div key={symptom} style={{ margin: "10px" }}>
            <label>{symptom.replace("_", " ")}: </label>

            <select name={symptom} onChange={handleChange}>
              <option value="0">No</option>
              <option value="1">Yes</option>
            </select>

          </div>
        ))}

        <button type="submit" style={{ marginTop: "20px", padding: "10px" }}>
          Predict Disease
        </button>
      </form>

      {result && (
        <h2 style={{ color: "green", marginTop: "20px" }}>
          Predicted Disease: {result}
        </h2>
      )}

    </div>
  );
}

export default DiseaseForm;
