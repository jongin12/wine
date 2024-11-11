import "./sidebar.scss";

const Sidebar = (data: { data: boolean }) => {
  console.log(data.data);

  const width = data.data ? "100px" : "0px";

  return <div id="sidebar" style={{ width }}></div>;
};

export default Sidebar;
