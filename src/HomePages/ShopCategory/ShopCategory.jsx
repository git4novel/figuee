import "./ShopCategory.css";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TabOne from "./TabOne";
import TabTwo from "./TabTwo";
import TabThree from "./TabThree";

const ShopCategory = () => {
  const [toggleState, setToggleState] = useState(1);
  const notify = () => {
    toast("You Can not See Details Without Login!");
  }

  const toggleTab = (index) => {
    // b
    setToggleState(index);
  };
  return (
    <div className="mx-auto mt-4 mb-5">
      <div className="bloc-tabs">
        <button
          style={{ fontFamily: "Pacifico", fontWeight: "bolder" }}
          className={
            toggleState === 1 ? "tabs active-tabs text-3xl" : "tabs text-2xl"
          }
          onClick={() => toggleTab(1)}
        >
          Avengers Figure
        </button>
        <button
          style={{ fontFamily: "Pacifico", fontWeight: "bolder" }}
          className={
            toggleState === 2 ? "tabs active-tabs text-3xl" : "tabs text-2xl"
          }
          onClick={() => toggleTab(2)}
        >
          DC Toy
        </button>
        <button
          style={{ fontFamily: "Pacifico", fontWeight: "bolder" }}
          className={
            toggleState === 3 ? "tabs active-tabs text-3xl" : "tabs text-2xl"
          }
          onClick={() => toggleTab(3)}
        >
          Anime Toy
        </button>
      </div>
        <ToastContainer />
      {/* tabs content here */}
      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <TabOne notify={notify}></TabOne>
        </div>
        {/* tab 2 content */}
        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
         <TabTwo notify={notify}></TabTwo>
        </div>
        {/* tab 3 here content */}
        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <TabThree notify={notify}></TabThree>
        </div>
      </div>
    </div>
  );
};

export default ShopCategory