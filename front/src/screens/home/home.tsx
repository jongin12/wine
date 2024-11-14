import ControlledCarousel from "../../components/layouts/tool/carousels";
import { post } from "../../util/getApi";
import "./home.scss";

const Home = () => {
  const login = async () => {
    const data = await post("/user/signIn", {
      email: "zzz",
      password: "aaa",
    });
    console.log(data);
  };

  login();

  return (
    <div>
      <span>test</span>
      <div className="animated fadeInDown">zzz</div>
    </div>
  );
};

export default Home;
