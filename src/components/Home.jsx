import Footer from "./Footer/Footer";
import User from "./User/User";
import HomeStyle from "./Home.module.css";

const Home = () => {
  return (
    <div className={HomeStyle.home}>
      <User />
      <Footer />
    </div>
  );
};

export default Home;
