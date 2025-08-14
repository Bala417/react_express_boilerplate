import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import api from "../utils/api";

const Navbar = () => {
  const BASEURL = import.meta.env.VITE_APP_BASEURL;
  const navigate = useNavigate();

  const handleLogout = async () => {
    const response = await api.get("/auth/logout");
    console.log("response", response);
    if (response.status === 200) {
      navigate("/");
    }
  };
  return (
    <div>
      <form>
        <div className=" navbar flex">
          {/* <div className="dropdown">
            <button className="dropbtn">Masters</button>
            <div className="dropdown-content">
              <a href="/ict4/assetMaster/index.php" className="style_s">
                Asset Master
              </a>
            </div>
          </div> */}

          <div className="dropdown">
            <button className="dropbtn">Transactions</button>
            <div className="dropdown-content">
              <Link to={"task"}>Task Entry</Link>
              <a
                href="/ict4/transaction/purchase_register.php"
                className="style_s"
              >
                Purchase Register
              </a>
              <a href="/ict4/transaction/invoice.php" className="style_s">
                Invoice Entry
              </a>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">Reports</button>
            <div className="dropdown-content">
              <a href="/ict4/assetMaster/asset_list.php" className="style_s">
                Asset Master Report
              </a>

              <a href="/ict4/reports/invoice_report.php" className="style_s">
                Invoice
              </a>
              <a href="/ict4/reports/amc_report.php" className="style_s">
                AMC Report
              </a>
              <a href="/ict4/reports/purchase_report.php" className="style_s">
                Purchase Report
              </a>
            </div>
          </div>
          <div className="dropdown">
            <Link className="dropbtn" onClick={handleLogout}>
              Logout
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Navbar;
