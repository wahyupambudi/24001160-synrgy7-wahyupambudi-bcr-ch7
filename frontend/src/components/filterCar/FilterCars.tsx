import "../../assets/css/car-rental.css";


const FilterCars: React.FC = () => {
    return (
      <div>
          <section style={{ position: "relative" }} className="mt-45">
    <div className="container w-1047 shadow p-3 rounded fs-12 bg-body">
      <div className="row justify-content-around">
        <div className="col-md-2">
          <label htmlFor="driverType" className="form-label">Tipe Driver</label>
          <select className="form-select fs-12 h-36 placeholder" aria-label="Default select example" id="driverType">
            <option value="0" selected>Pilih Tipe Driver</option>
            <option value="Dengan Supir">Dengan Sopir</option>
            <option value="Tanpa Supir">Tanpa Sopir (Lepas Kunci)</option>
          </select>
        </div>
        <div className="col-md-2">
          <label htmlFor="date" className="form-label">Tanggal</label>
          <input type="date" placeholder="Pilih Tanggal"
            className="form-control fs-12 h-36 placeholder" id="date" aria-describedby="date" />
        </div>
        <div className="col-md-2">
          <label htmlFor="pickupTime" className="form-label">Waktu Jemput / Ambil</label>
          <select className="form-select fs-12 h-36 placeholder" aria-label="Default select example" id="pickupTime">
            <option value="0" selected>Pilih Waktu</option>
            <option value="08:00">08:00 WIB</option>
            <option value="09:00">09:00 WIB</option>
            <option value="10:00">10:00 WIB</option>
            <option value="11:00">11:00 WIB</option>
            <option value="12:00">12:00 WIB</option>
          </select>
        </div>
        <div className="col-md-2">
          <label htmlFor="seat" className="form-label w-200">Jumlah Penumpang (optional)</label>
          <input type="number" className="form-control fs-12 h-36 placeholder" id="seat" aria-describedby="seat"
            placeholder="Jumlah Penumpang" />
        </div>
        <div className="col-md-2">
          <label htmlFor="" className="form-label w-200" style={{ visibility: "hidden"}}>cari</label>
          <button className="btn text-white fs-14 btn-header" id="filter-btn" disabled>Cari Mobil</button>
        </div>
      </div>
    </div>
  </section>
      </div>
    )}
export default FilterCars;
