from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np

# Create Flask app
app = Flask(__name__)
CORS(app)   # allow React to connect

# Load trained ML model
model = pickle.load(open("disease_model.pkl", "rb"))

# Home route (test)
@app.route("/")
def home():
    return "Disease Prediction Backend is Running"

# Prediction route
@app.route("/predict", methods=["POST"])
def predict():
    try:
        # Receive JSON data from React
        data = request.get_json()

        # Extract symptoms in correct order
        symptoms = [
            data["fever"],
            data["cough"],
            data["headache"],
            data["fatigue"],
            data["body_pain"],
            data["sore_throat"],
            data["diarrhea"],
            data["nausea"]
        ]

        # Convert to numpy array
        symptoms_array = np.array(symptoms).reshape(1, -1)

        # Predict disease
        prediction = model.predict(symptoms_array)

        # Send response back to React
        return jsonify({
            "success": True,
            "predicted_disease": prediction[0]
        })

    except Exception as e:
        return jsonify({
            "success": False,
            "error": str(e)
        })

# Run server
if __name__ == "__main__":
    app.run(debug=True, port=5000)
