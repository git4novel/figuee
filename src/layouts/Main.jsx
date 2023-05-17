import { Outlet } from "react-router-dom";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";

const Main = () => {
    return (
        <>
          <Header></Header>  
          <Outlet></Outlet>
          <Footer></Footer>
        </>
    );
};

export default Main;