import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "./ShopCategory.css";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
                <h2 className="card-title">!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button onClick={notify} className="btn btn-primary">Buy Now</button>
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
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
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
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
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
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
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
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
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
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
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
