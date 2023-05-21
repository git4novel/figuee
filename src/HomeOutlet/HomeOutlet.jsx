
import About from "../HomePages/About/About";
import Banner from "../HomePages/Banner/Banner";
import Gallery from "../HomePages/Gallery/Gallery";
import ShopCategory from "../HomePages/ShopCategory/ShopCategory";
import Testimonial from "../HomePages/TesTimonial/Testimonial";
import useTitleHook from "../hooks/useTitleHook";
// import Gallery from "../HomePages/Gallery/Gallery";



const HomeOutlet = () => {
    useTitleHook('Home')
    return (
        <>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopCategory></ShopCategory>
            <About></About>
            <Testimonial></Testimonial>
            {/* <Gallery></Gallery> */}
        </>
    );
};

export default HomeOutlet;