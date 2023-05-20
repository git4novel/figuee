import "./ShopCategory.css";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiTwotoneStar } from 'react-icons/ai';

const ShopCategory = () => {
  const [toggleState, setToggleState] = useState(1);

  const notify = () => {
    toast("You Can not See Details Without Login!");
  }

  const toggleTab = (index) => {
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
          <div className="flex gap-4 mt-6">
            <div className="card card-compact w-96 bg-base-100 shadow-2xl">
              <figure>
                <img
                className="h-32 lg:h-64"
                  src="https://i.ibb.co/fvyxkzF/61ak-Ktpdm-DS-AC-SX679.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Falcon!</h2>
                <p className="text-xl italic">Price: 15$</p>
                <div className="flex gap-1 text-xl text-[#7E4C4F]">
                  <AiTwotoneStar className="" /> 
                  <AiTwotoneStar className="" /> 
                  <AiTwotoneStar className="" /> 
                  <AiTwotoneStar className="" /> 
                </div>
                <div className="card-actions justify-end">
                  <button onClick={notify} className="bg-[#7E4C4F] hover:bg-[#9d6e71] btn btn-primary">Show Details</button>
                </div>
              </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-2xl">
              <figure>
                <img
                className="h-32 lg:h-64"
                  src="https://i.ibb.co/PNR1Wdf/61-Flhov-AO4-L-AC-UL400.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Tony Stark!</h2>
                <p className="text-xl italic">Price: 15$</p>
                <div className="flex gap-1 text-xl text-[#7E4C4F]">
                  <AiTwotoneStar className="" /> 
                  <AiTwotoneStar className="" /> 
                  <AiTwotoneStar className="" /> 
                  <AiTwotoneStar className="" /> 
                </div>
                <div className="card-actions justify-end">
                  <button onClick={notify} className="bg-[#7E4C4F] hover:bg-[#9d6e71] btn btn-primary">Show Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* tab 2 content */}
        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div className="flex gap-4 mt-6">
            <div className="card card-compact w-96 bg-base-100 shadow-2xl">
              <figure>
                <img
                className="h-32 lg:h-64"
                  src="https://i.ibb.co/c832txL/71ynk-NAWj-ML-AC-UL400.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Moon Knight!</h2>
                <p className="text-xl italic">Price: 15$</p>
                <div className="flex gap-1 text-xl text-[#7E4C4F]">
                  <AiTwotoneStar className="" /> 
                  <AiTwotoneStar className="" /> 
                  <AiTwotoneStar className="" /> 
                  <AiTwotoneStar className="" /> 
                </div>
                <div className="card-actions justify-end">
                  <button onClick={notify} className="bg-[#7E4C4F] hover:bg-[#9d6e71] btn btn-primary">Show Details</button>
                </div>
              </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-2xl">
              <figure>
                <img
                className="h-32 lg:h-64"
                  src="https://i.ibb.co/n0p0xGY/71-Yy7-Nte-HZL-AC-SX679.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Joker!</h2>
                <p className="text-xl italic">Price: 15$</p>
                <div className="flex gap-1 text-xl text-[#7E4C4F]">
                  <AiTwotoneStar className="" /> 
                  <AiTwotoneStar className="" /> 
                  <AiTwotoneStar className="" /> 
                  <AiTwotoneStar className="" /> 
                </div>
                <div className="card-actions justify-end">
                  <button onClick={notify} className="bg-[#7E4C4F] hover:bg-[#9d6e71] btn btn-primary">Show Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* tab 3 here content */}
        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <div className="flex gap-4 mt-6">
            <div className="card card-compact w-96 bg-base-100 shadow-2xl">
              <figure>
                <img
                className="h-32 lg:h-64"
                  src="https://i.ibb.co/MVxyN78/61jy0-I9-GIML-AC-UL400.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shang Chi!</h2>
                <p className="text-xl italic">Price: 15$</p>
                <div className="flex gap-1 text-xl text-[#7E4C4F]">
                  <AiTwotoneStar className="" /> 
                  <AiTwotoneStar className="" /> 
                  <AiTwotoneStar className="" /> 
                  <AiTwotoneStar className="" /> 
                </div>
                <div className="card-actions justify-end">
                  <button onClick={notify} className="bg-[#7E4C4F] hover:bg-[#9d6e71] btn btn-primary">Show Details</button>
                </div>
              </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-2xl">
              <figure>
                <img
                className="h-32 lg:h-64"
                  src="https://i.ibb.co/QK3FJXz/71bv-Os-Aa-A-L-AC-UL400.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Captain America !</h2>
                <p className="text-xl italic">Price: 15$</p>
                <div className="flex gap-1 text-xl text-[#7E4C4F]">
                  <AiTwotoneStar className="" /> 
                  <AiTwotoneStar className="" /> 
                  <AiTwotoneStar className="" /> 
                  <AiTwotoneStar className="" /> 
                </div>
                <div className="card-actions justify-end">
                  <button onClick={notify} className="bg-[#7E4C4F] hover:bg-[#9d6e71] btn btn-primary">Show Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
