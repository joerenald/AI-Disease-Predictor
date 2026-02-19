import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Diagnosis from "./pages/Diagnosis";
import Result from "./pages/Result";
import Navbar from "./components/Navbar";

function App() {
return ( <Router> <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">

```
    <Navbar />

    {/* Main content container */}
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diagnosis" element={<Diagnosis />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </main>

  </div>
</Router>

);
}

export default App;
