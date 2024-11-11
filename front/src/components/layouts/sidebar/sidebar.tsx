import "./sidebar.scss";

const Sidebar = (data: { data: boolean }) => {
  console.log(data.data);

  const width = data.data ? "100px" : "0px";

  return (
    <div id="sidebar" style={{ width }}>
      <div>home</div>
      <div>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
