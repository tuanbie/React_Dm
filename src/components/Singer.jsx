import React, { useState } from "react";
import { data } from "../data/data.js";
import { setSelectedImage } from "../pages/actions/imageActions.js";
import { useDispatch } from "react-redux";
const Food = ({ onImageSelect }) => {
  //   console.log(data);
  const [foods, setFoods] = useState(data);
  const dispatch = useDispatch();

  const choseImage = (image) => {
    dispatch(setSelectedImage(image));
  };
  //   Filter Type burgers/pizza/etc
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //   Filter by price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Singer
      </h1>

      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Fliter Type */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justfiy-between flex-wrap">
            <button
              onClick={() => setFoods(data)}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              All
            </button>
            <button
              onClick={() => filterType("sontungmtp")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Sơn Tùng MTP
            </button>
            <button
              onClick={() => filterType("mytam")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Mỹ Tâm
            </button>
            <button
              onClick={() => filterType("haanhtuan")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Hà Anh Tuấn
            </button>
            <button
              onClick={() => filterType("ducphuc")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Đức Phúc
            </button>

            <button
              onClick={() => filterType("bichphuong")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Bích Phương
            </button>

            <button
              onClick={() => filterType("jack")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              J97
            </button>
          </div>
        </div>

        {/* Rate */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            {/* <button
              onClick={() => filterPrice('✩')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              ✩
            </button> */}
            <button
              onClick={() => filterPrice("✩✩")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              ✩✩
            </button>
            <button
              onClick={() => filterPrice("✩✩✩")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              ✩✩✩
            </button>
            <button
              onClick={() => filterPrice("✩✩✩✩")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              ✩✩✩✩
            </button>

            <button
              onClick={() => filterPrice("✩✩✩✩✩")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              ✩✩✩✩✩
            </button>
          </div>
        </div>
      </div>

      {/* Display foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-lg hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
              onClick={() => choseImage(item.image)}

            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-orange-500 text-white p-1 rounded-full">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
