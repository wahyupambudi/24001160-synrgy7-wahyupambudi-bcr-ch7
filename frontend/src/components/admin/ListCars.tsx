import React, { useEffect, useState } from "react";
import axios from "axios";
import { format } from 'date-fns';
import rent from "../../assets/images/main/icon/fi_key.png";
import clock from "../../assets/images/main/icon/fi_clock.png";
import { Col, Row } from "react-bootstrap";
import imgCar from "../../assets/images/cars/car01.min.jpg";

interface Car {
  id: number;
  user_id: number;
  car_name: string;
  type: string;
  desc: string;
  seat: number;
  transmission: string;
  year: string;
  price: number;
  availabillity: boolean;
  start_rent: string;
  end_rent: string;
  img: string;
  created_At: string;
  updated_At: string;
  deleted_At: string | null;
}

const ListCars: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const token = localStorage.getItem("token"); // Ambil token dari localStorage
        const response = await axios.get("http://localhost:3000/api/v1/cars", {
          headers: {
            Authorization: `Bearer ${token}`, // Tambahkan token ke header Authorization
          },
        });
        setCars(response.data.cars);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch cars");
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <div className="row" id="cars-container">
        {cars.map((car) => (
          <div className="col-md-4">
            <div className="card shadow p-3 rounded">
              <img
                className="img-car-filter"
                src={imgCar}
                alt=""
              />
              <p className="card-text fs-14">
                {car.car_name} / {car.type}{" "}
              </p>
              <p className="card-title fs-16">
                Rp {new Intl.NumberFormat("id").format(car.price)} / hari
              </p>
              <ul className="list-unstyled">
                <li className="mb-3 fs-14">
                  <img className="icon-20 me-2" src={rent} alt="logo" />
                  {format(new Date(car.start_rent), 'dd-MM-yyyy')} - {format(new Date(car.end_rent), 'dd-MM-yyyy')}
                </li>
                <li className="mb-3 fs-14">
                  <img className="icon-20 me-2" src={clock} alt="logo" />
                  UpdatedAt {format(new Date(car.updated_At), 'dd-MM-yyyy, HH:mm')}
                </li>
              </ul>
              <Row>
                <Col>
                  <div className="d-flex justify-content-center">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-danger"
                      style={{ width: "100%", marginRight: "10px" }}
                    >
                      Delete
                    </button>
                    <button
                      className="btn text-white fs-14 btn-header"
                      id="filter-btn"
                      style={{ width: "100%" }}
                    >
                      Edit
                    </button>
                  </div>
                </Col>
              </Row>
            </div>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListCars;
