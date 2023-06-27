import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginScreen from "./screens/LoginScreen";
import HomeLayout from "./layouts/HomeLayout";
import HomeScreen from "./screens/HomeScreen";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getLoggedInUser } from "./redux/reducers/user/userAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLoggedInUser());
  }, []);
  return (
    <Routes>
      <Route path="/login" element={<LoginScreen />} />
      <Route
        path="/:type"
        element={
          <HomeLayout>
            <HomeScreen />
          </HomeLayout>
        }
      />
    </Routes>
  );
}

export default App;
