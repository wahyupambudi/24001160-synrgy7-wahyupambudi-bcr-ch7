import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";
import { useEffect } from "react";
import Breadcrumb from "../Breadcrumb";
import ListCars from "./ListCars";

const Cars: React.FC = () => {
  const navigate = useNavigate();
  const { authState, logout } = useAuth();

  useEffect(() => {
    if (authState.isAuthenticated === false) {
      navigate("/");
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
          <div style={{ backgroundColor: "#f4f5f7", padding: "10px" }}>
            <Row>
              <Col>
                <div className="d-flex justify-content-between mb-3">
                  <h4>List Cars</h4>
                  <button type="button" className="btn btn-sm btn-primary">+ Add New Car</button>
                </div>
              </Col>
            </Row>
            <div className="mb-3">
              <button
                type="button"
                className="btn btn-sm btn-outline-primary m-r-5"
              >
                All
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary m-r-5"
              >
                Small
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary m-r-5"
              >
                Medium
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary m-r-5"
              >
                Large
              </button>
            </div>
            <ListCars />
            <h1>Welcome to the Cars!</h1>
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

export default Cars;
