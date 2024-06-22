import car from "../../assets/images/main/carAdmin.png";
import logo from "../../assets/images/main/logo.png";

const AuthRegister: React.FC = () => {
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
                <form style={{ width: "23rem" }}>
                  <h3
                    className="fw-normal mb-3 pb-3"
                    style={{ letterSpacing: "1px" }}
                  >
                    Create Account
                  </h3>

                  <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label" htmlFor="username">
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      className="form-control form-control-lg"
                      style={{ width: "100%" }}
                    />
                  </div>

                  <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example18">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="form2Example18"
                      className="form-control form-control-lg"
                    />
                  </div>

                  <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example28">
                      Password
                    </label>
                    <input
                      type="password"
                      id="form2Example28"
                      className="form-control form-control-lg"
                    />
                  </div>

                  <div className="pt-1 mb-4">
                    <button
                      data-mdb-button-init
                      data-mdb-ripple-init
                      className="btn btn-primary btn-md w-100"
                      type="button"
                    >
                      Sign Up
                    </button>
                  </div>
                  <div className="card-footer text-center pt-0 px-lg-2 px-1">
                      <p className="mb-4 text-sm mx-auto">
                        Already have an account? 
                        <a
                          href="#"
                          className="text-primary text-gradient font-weight-bold"
                        >
                          Sign In
                        </a>
                      </p>
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
export default AuthRegister;
