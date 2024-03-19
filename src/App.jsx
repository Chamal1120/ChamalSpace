import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

const App = () => {

  return (
    <>
      <Router>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </main>
    </Router>
    </>
  )

}

export default App
