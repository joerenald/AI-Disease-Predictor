import pandas as pd
from sklearn.tree import DecisionTreeClassifier
import pickle

# Step 1: Load dataset
data = pd.read_csv("dataset.csv")

# Step 2: Split features and label
X = data.drop("disease", axis=1)   # symptoms
y = data["disease"]                # disease name

# Step 3: Create ML model
model = DecisionTreeClassifier()

# Step 4: Train model
model.fit(X, y)

# Step 5: Save trained model
with open("disease_model.pkl", "wb") as file:
    pickle.dump(model, file)

print("✅ Model trained successfully and saved as disease_model.pkl")
