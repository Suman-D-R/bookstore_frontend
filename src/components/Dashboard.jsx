import { Outlet } from "react-router-dom";
import Header from "./Header";
import "../sass/dashboard.scss";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Header home={false}/>
      <Outlet />
    </div>
  );
}

export default Dashboard;
