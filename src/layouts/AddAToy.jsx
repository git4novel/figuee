import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import AddAToyPage from "../AddAToyPage/AddAToyPage";

const AddAToy = () => {
    return (
        <>
          <Header></Header>  
            <AddAToyPage></AddAToyPage>
          <Footer></Footer>
        </>
    );
};

export default AddAToy;