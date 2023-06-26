import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginScreen from "./screens/LoginScreen";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginScreen />} />
    </Routes>
  );
}

export default App;
