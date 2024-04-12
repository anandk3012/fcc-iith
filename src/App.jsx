import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import Header from "./components/Header";
import { AuthProvider, useAuth } from "./contexts/Contexts";
import Dashboard from "./pages/UserDashboard";
import HomePage from "./pages/Home";

function App() {
  const currentUser = useAuth();
  console.log("currentuser : " + currentUser);

  return (
    <AuthProvider>
      <Router>
        <Header isAuthenticated={currentUser?.email !== undefined} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
