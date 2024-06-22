import { useAuth } from "../../context/AuthContext";

const Dashboard: React.FC = () => {
  const { authState, logout } = useAuth();
  return (
    <div>
      <h1>Welcome to the Dashboard!</h1>
      {authState.isAuthenticated ? (
        <p>You are logged in as {authState.email}</p>
      ) : (
        <p>You are not logged in.</p>
      )}
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
