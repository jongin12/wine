import { Outlet, Link, useNavigate } from "react-router-dom";
import "./mainLayout.scss";
import Sidebar from "../sidebar/sidebar";
import { useState } from "react";

const MainLayout = () => {
  const [sideSwitch, setSideSwitch] = useState<boolean>(false);

  return (
    <div>
      <header className="top-section">
        <button onClick={() => setSideSwitch(!sideSwitch)}>=</button>
      </header>
      <Sidebar data={sideSwitch}></Sidebar>
      <main>
        <div id="mainDiv">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
