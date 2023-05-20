
import Banner from "../HomePages/Banner/Banner";
import Gallery from "../HomePages/Gallery/Gallery";
import ShopCategory from "../HomePages/ShopCategory/ShopCategory";
import useTitleHook from "../hooks/useTitleHook";
// import Gallery from "../HomePages/Gallery/Gallery";



const HomeOutlet = () => {
    useTitleHook('Home')
    return (
        <>
            <Banner></Banner>
            
            <Gallery></Gallery>
            <ShopCategory></ShopCategory>

            {/* <Gallery></Gallery> */}
        </>
    );
};

export default HomeOutlet;