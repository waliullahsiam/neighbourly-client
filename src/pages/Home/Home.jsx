import Categories from "../../components/Categories/Categories";
import HeroSection from "../../components/HeroSection/HeroSection";
import Helmet from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Neighbourly | Reliable services at your doorstep</title>
      </Helmet>
      <HeroSection />
      <div className="my-10">
        <Categories />
      </div>
    </div>
  );
};

export default Home;
