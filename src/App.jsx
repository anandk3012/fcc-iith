import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import Header from "./components/Header";
import { AuthProvider, useAuth } from "./contexts/Contexts";
import Dashboard from "./pages/UserDashboard";
import HomePage from "./pages/Home";
import Quiz from "./pages/Quiz";

function App() {
  const currentUser = useAuth();
  console.log("currentuser : " + currentUser);

  return (
    <AuthProvider>
      <Router basename="/fcc-iith"> 
        <Header isAuthenticated={currentUser?.email !== undefined} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
