import { blight, grayLeafSpot, commonRust } from "../assets/diseases";
import { useState } from "react";

function Disease() {
  const [filterSelected, setFilterSelected] = useState(blight);
  const [active, setActive] = useState("blight");

  const getBlightInformation = () => {
    setActive("blight");
    setFilterSelected(blight);
  };

  const getCommonRustInformation = () => {
    setActive("common");
    setFilterSelected(commonRust);
  };

  const getGrayLeafInformation = () => {
    setActive("gray");
    setFilterSelected(grayLeafSpot);
  };

  return (
    <section
      className="isolate px-6 py-14 max-w-screen-xl mx-auto"
      id="information"
    >
      <div className="content-wrapper border p-6 rounded-xl">
        <div className="button-list items-stretch mb-2 md:mb-6">
          <button
            onClick={getBlightInformation}
            className={`rounded-full px-3 py-2 me-2 mb-2 md:mb-0 md:px-6 md:py-2.5 text-sm font-semibold border ${
              active === "blight"
                ? "bg-green-600 text-white"
                : "border-green-600 text-green-600"
            }`}
          >
            Blight
          </button>
          <button
            onClick={getGrayLeafInformation}
            className={`rounded-full px-3 py-2 me-2 mb-2 md:mb-0 md:px-6 md:py-2.5 text-sm font-semibold border ${
              active === "gray"
                ? "bg-green-600 text-white"
                : "border-green-600 text-green-600"
            }`}
          >
            Gray Leaf Spot
          </button>
          <button
            onClick={getCommonRustInformation}
            className={`rounded-full px-3 py-2 me-2 mb-2 md:mb-0 md:px-6 md:py-2.5 text-sm font-semibold border ${
              active === "common"
                ? "bg-green-600 text-white"
                : "border-green-600 text-green-600"
            }`}
          >
            Common Rust
          </button>
        </div>
        <hr />

        <div className="content flex flex-col-reverse md:flex-row gap-4 md:gap-14 mt-4 md:mt-8 md:items-center justify-between">
          <div className="description">
            <div className="name-disease mb-4">
              <h1 className="font-extrabold font-jetbrains text-2xl md:text-4xl mb-2 md:mb-4">
                {filterSelected.name}
              </h1>
              <p>{filterSelected.description}</p>
            </div>
            <div className="handling">
              <h1 className="font-bold font-jakarta text-xl mb-2">
                Cara penanganan
              </h1>
              <ul className="list-disc ps-8">
                {filterSelected.handling &&
                  filterSelected.handling.map((event, index) => (
                    <li key={index}>{event}</li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="image">
            <div className="image-pattern md:w-96 md:h-96">
              <img
                src={filterSelected.image}
                alt="jagung"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Disease;
