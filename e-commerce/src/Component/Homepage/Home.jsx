import NavBar from "../Navbar/Navbar";
import Product from "../Product/Product";
import HeroSection from "./Component/HeroSection";

const Home = () => {
  return (
    <div className="flex-1">
      <NavBar />
      <div className="">
        <HeroSection />
        <Product />
      </div>
    </div>
  );
};

export default Home;