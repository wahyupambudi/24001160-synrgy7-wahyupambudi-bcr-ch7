const ListCars: React.FC = () => {
  return (
    <div>
      <div className="row" id="cars-container">
        <div className="col-md-4">
          <div className="card shadow p-3 rounded">
            <img
              className="img-car-filter"
              src="./images/car01.min.jpg"
              alt=""
            />
            <p className="card-text fs-14">Sedan / Ford</p>
            <p className="card-title fs-16">Rp 200.000 / hari</p>
            <p className="card-text fs-14 fw-light">
              {" "}
              Brake assist. Leather-wrapped shift knob. Glove box lamp. A
            </p>
            <ul className="list-unstyled">
              <li className="mb-3">
                <img
                  className="icon-20 me-2"
                  src="./images/main/icon/fi_users.png"
                  alt="logo"
                />
                2 orang
              </li>
              <li className="mb-3">
                <img
                  className="icon-20 me-2"
                  src="./images/main/icon/fi_settings.png"
                  alt="logo"
                />
                Automatic
              </li>
              <li className="mb-3">
                <img
                  className="icon-20 me-2"
                  src="./images/main/icon/fi_calendar.png"
                  alt="logo"
                />
                2022
              </li>
            </ul>
            <button className="btn text-white fs-14 btn-header" id="filter-btn">
              Pilih Mobil
            </button>
          </div>
          <br />
        </div>
        <div className="col-md-4">
          <div className="card shadow p-3 rounded">
            <img
              className="img-car-filter"
              src="./images/car02.min.jpg"
              alt=""
            />
            <p className="card-text fs-14">Convertible / BMW</p>
            <p className="card-title fs-16">Rp 800.000 / hari</p>
            <p className="card-text fs-14 fw-light">
              {" "}
              Rear passenger map pockets. Electrochromic rearview mirror.
            </p>
            <ul className="list-unstyled">
              <li className="mb-3">
                <img
                  className="icon-20 me-2"
                  src="./images/main/icon/fi_users.png"
                  alt="logo"
                />
                6 orang
              </li>
              <li className="mb-3">
                <img
                  className="icon-20 me-2"
                  src="./images/main/icon/fi_settings.png"
                  alt="logo"
                />
                Automatic
              </li>
              <li className="mb-3">
                <img
                  className="icon-20 me-2"
                  src="./images/main/icon/fi_calendar.png"
                  alt="logo"
                />
                2019
              </li>
            </ul>
            <button className="btn text-white fs-14 btn-header" id="filter-btn">
              Pilih Mobil
            </button>
          </div>
          <br />
        </div>
        <div className="col-md-4">
          <div className="card shadow p-3 rounded">
            <img
              className="img-car-filter"
              src="./images/car03.min.jpg"
              alt=""
            />
            <p className="card-text fs-14">Sedan / Lincoln</p>
            <p className="card-title fs-16">Rp 900.000 / hari</p>
            <p className="card-text fs-14 fw-light">
              {" "}
              Driver &amp; front passenger map pockets. Direct-type tire pres
            </p>
            <ul className="list-unstyled">
              <li className="mb-3">
                <img
                  className="icon-20 me-2"
                  src="./images/main/icon/fi_users.png"
                  alt="logo"
                />
                6 orang
              </li>
              <li className="mb-3">
                <img
                  className="icon-20 me-2"
                  src="./images/main/icon/fi_settings.png"
                  alt="logo"
                />
                Automanual
              </li>
              <li className="mb-3">
                <img
                  className="icon-20 me-2"
                  src="./images/main/icon/fi_calendar.png"
                  alt="logo"
                />
                2021
              </li>
            </ul>
            <button className="btn text-white fs-14 btn-header" id="filter-btn">
              Pilih Mobil
            </button>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default ListCars;
