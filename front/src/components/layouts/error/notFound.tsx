import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div className="animated fadeInDown">
        <div>404 Not Found</div>
        <Link to="/">
          <button>홈으로 이동</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
