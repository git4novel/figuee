import { Outlet } from "react-router-dom";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";

const Main = () => {
    return (
        <div className="mx-auto">
          <Header></Header>  
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default Main;