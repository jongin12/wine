import { Outlet, Link } from "react-router-dom";
import "./mainLayout.scss";
import { useState } from "react";
import CloseButton from "react-bootstrap/CloseButton";
import { FiMenu } from "react-icons/fi";
import { SlArrowDown } from "react-icons/sl";

const SideList = () => {
  const [expandedMenu, setExpandedMenu] = useState<null | string>(null);

  const handleMenuClick = (path: string) => {
    setExpandedMenu(expandedMenu === path ? null : path);
  };

  const list = [
    {
      name: "소개",
      path: "/a",
      children: [
        { name: "01", path: "/01" },
        { name: "02", path: "/02" },
      ],
    },
    {
      name: "ㅁㅁ",
      path: "/b",
      children: [
        { name: "01", path: "/01" },
        { name: "02", path: "/02" },
        { name: "03", path: "/03" },
      ],
    },
    {
      name: "ㅇㅇ",
      path: "/c",
    },
  ];

  return (
    <div id="sideList">
      {list.map((item, index) => {
        if (item.children) {
          return (
            <div key={index}>
              <div
                onClick={(e) => {
                  handleMenuClick(item.path);
                }}>
                <span>{item.name}</span>
                <SlArrowDown />
              </div>
              {item.path === expandedMenu && (
                <div>
                  {item.children.map((child, index) => {
                    return (
                      <Link to={item.path + child.path} key={index}>
                        <div>{child.name}</div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        } else {
          return (
            <div key={index}>
              <Link to={item.path}>
                <div>{item.name}</div>
              </Link>
            </div>
          );
        }
      })}
    </div>
  );
};

const MainLayout = () => {
  const [sideSwitch, setSideSwitch] = useState<boolean>(false);

  return (
    <div>
      <header className="top-section">
        <div style={{ width: "100px" }}>
          <FiMenu onClick={() => setSideSwitch(!sideSwitch)} />
        </div>
        <div>중간 이미지</div>
        <div>언어선택</div>
      </header>
      <div id="sidebar" className={sideSwitch ? "sidebar-on" : "sidebar-off"}>
        <div>
          <CloseButton onClick={() => setSideSwitch(!sideSwitch)} />
        </div>
        <div>
          <SideList />
        </div>
      </div>
      <main>
        <div id="mainDiv">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
