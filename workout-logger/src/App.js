//import logo from "./logo.svg";
import "./App.css";
import Signup from "./components/account/Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./components/contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <h1 className="text-center">WORKOUT LOGGER</h1>
          <Signup />
        </div>
      </Container>
    </AuthProvider>
  );
}

export default App;
