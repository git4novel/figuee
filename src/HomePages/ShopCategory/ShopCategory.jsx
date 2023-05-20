import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import './ShopCategory.css'
import { useState } from "react";

const ShopCategory = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };
    return (
        <div className="mx-auto">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Tab 1
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Tab 2
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Tab 3
        </button>
      </div>


        {/* tabs content here */}
      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>Content 1</h2>
          <hr />
          <p>
            
          </p>
        </div>
        {/* tab 2 content */}
        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Content 2</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
        </div>
        {/* tab 3 here content */}
        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Content 3</h2>
          <hr />
          <p>
          </p>
        </div>
      </div>
    </div>
    );
};

export default ShopCategory;