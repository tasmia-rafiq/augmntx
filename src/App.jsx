import ProfilesPage from "./pages/ProfilesPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SingleProfilePage from "./pages/SingleProfilePage";
import Layout from "./components/Layout";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path={"/"} element={<ProfilesPage />} />
            <Route
              path="profile/:profile_title/:unique_id"
              element={<SingleProfilePage />}
            />
            <Route path="admin/auth/login" element={<LoginPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
