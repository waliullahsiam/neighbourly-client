import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-505px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
