import { useNavigate } from "react-router-dom";
import car from "../../assets/images/main/carAdmin.png";
import logo from "../../assets/images/main/logo.png";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

// interface LoginParams {
//   email: string;
//   password: string;
// }

// async function doLogin({ email, password }: LoginParams): Promise<string> {
//   console.log({ email, password });
//   // Use your own endpoint
//   const response = await fetch("http://localhost:3000/api/v1/auth/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       email,
//       password,
//     }),
//   });
//   const data = await response.json();
//   return data.token;
// }

const AuthLogin: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      // navigate("/dashboard");
    } catch (error) {
      setError('Login failed. Please check your credentials and try again.');
      console.log(setError)
    }
  };

  // const handleLogin = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setError(''); // Reset error state before login attempt
  //   const errorMessage = await login(email, password);
  //   if (errorMessage != undefined) {
  //     setError(errorMessage);
  //   } else {
  //     navigate('/dashboard');
  //   }
  // };


  // const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  // const token = localStorage.getItem("token");

  // useEffect(() => {
  //   setIsLoggedIn(!!token);
  // }, [token]);

  // const handleLogin = () => {
  //   setIsLoading(true);
  //   doLogin({ email, password })
  //     .then((token) => {
  //       localStorage.setItem("token", token);
  //       navigate("/dashboard");
  //     })
  //     .catch((err) => console.log(err.message))
  //     .finally(() => setIsLoading(false));
  // };
  return (
    <div>
      <section className="vh-100">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-sm-7 px-0 d-none d-sm-block"
              style={{ backgroundColor: "#a85cff" }}
            >
              <img
                src={car}
                alt="Login image"
                className="w-100 vh-100"
                style={{ objectFit: "cover", objectPosition: "left" }}
              />
            </div>
            <div className="col-sm-5 text-black">
              <div className="px-5 ms-xl-4">
                <img src={logo} alt="" className="me-3 pt-5 mt-xl-4" />
              </div>

              <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                <form onSubmit={handleLogin} style={{ width: "23rem" }}>
                  <h3
                    className="fw-normal mb-3 pb-3"
                    style={{ letterSpacing: "1px" }}
                  >
                    Welcome, Admin BCR
                  </h3>

                  <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label" htmlFor="email">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="form-control form-control-lg"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="form-control form-control-lg"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  {error && <div style={{ color: 'red' }}>{error}</div>}
                  <div className="pt-1 mb-4">
                    <button
                      data-mdb-button-init
                      data-mdb-ripple-init
                      className="btn btn-primary btn-md w-100"
                      type="submit"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AuthLogin;
