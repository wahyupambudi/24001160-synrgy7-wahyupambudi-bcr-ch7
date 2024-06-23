import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";
import { useEffect } from "react";
import Breadcrumb from "../Breadcrumb";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { authState, logout } = useAuth();


  useEffect(() => {
    if(authState.isAuthenticated === false) {
      navigate("/")
    }
  }, [authState.isAuthenticated, navigate]);

  return (
    <div>
      <Row>
        <Col md={2}>
          <Sidebar />
        </Col>
        <Col md={10}>
          <TopNavbar />
          <Breadcrumb />
          <div style={{ backgroundColor: "#f4f5f7" }}>
            <h1>Welcome to the Dashboard!</h1>
            {authState.isAuthenticated ? (
              <p>You are logged in as {authState.email}</p>
            ) : (
              <p>You are not logged in.</p>
            )}
            <button onClick={logout}>Logout</button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
