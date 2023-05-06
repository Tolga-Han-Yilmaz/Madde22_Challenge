/* eslint-disable react/jsx-key */
import React from "react";

import EventProps from "@/app/model/dataTypes";
import Link from "next/link";

const Card = ({ theaters }: { theaters: EventProps[] }) => {
  return (
    <section className="flex flex-col items-center ">
      <div className="container lg:px-8">
        {theaters.map((item: EventProps) => (
          <div className="lg:flex mb-8    border-borderColor border-2">
            <div className="lg:w-5/12 w-full lg:flex relative">
              <div className="lg:w-6/12 w-full lg:h-full h-96 py-16 bg-black flex lg:justify-around justify-center items-center">
                <p className="text-mainColor text-center lg:w-10 flex flex-col items-center">
                  {item.date}
                </p>
                <p></p>
              </div>
              <div className="lg:w-8/12 w-full relative lg:absolute -translate-y-2/4 top-2/4 right-4">
                <span className=" bg-orange-500 absolute top-0 lg:top-4 left-0 lg:left-[-20px] z-10 px-4  uppercase text-white font-bold ">
                  {item.type}
                </span>
                <img
                  className="lg:w-5/6 w-11/12 h-5/6  translate-x-10 translate-y-10"
                  src={item.image}
                  alt={item.title}
                />
              </div>
            </div>
            <div className="lg:w-5/12 flex flex-col justify-evenly pr-5">
              <h3 className="font-bold">{item.title}</h3>
              <span className="text-textColor flex">
                <img src="./images/Address.png" alt="" />
                {item.location}
              </span>
              <p>
                {item.description.length > 100
                  ? item.description.substring(0, 200) + `...Detaylı Bilgi`
                  : item.description}
              </p>
            </div>
            <div className="lg:w-2/12 flex flex-col justify-center items-center ">
              <Link
                href={""}
                className="px-12 py-2 mb-2 bg-mainColor text-white font-bold">
                Bilet Al
              </Link>
              <button className="flex">
                <img src="./images/add.png" alt="add" />
                <span className="pl-2">Takvime Ekle</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card;
