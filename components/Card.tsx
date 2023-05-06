/* eslint-disable react/jsx-key */
import React from "react";

import EventProps from "@/app/model/dataTypes";
import Link from "next/link";

const Card = ({ theaters }: { theaters: EventProps[] }) => {

  return (
    <section className="flex flex-col items-center">
      {theaters.map((item:EventProps) => (
        <div className="flex mb-8 container px-8">
          <div className="w-5/12 flex relative">
            <div className="w-6/12 h-full py-16 bg-black flex justify-around items-center">
              <p className="text-white text-center w-10 flex flex-col items-center">
                {item.date}
              </p>
              <p></p>
            </div>
            <div className="w-8/12 absolute -translate-y-2/4 top-2/4 right-4">
              <span className=" bg-orange-500 absolute top-4 left-[-20px] z-10 px-4  uppercase text-white font-bold ">{item.type}</span>
              <img className="w-5/6 h-5/6" src={item.image} alt={item.title} />
            </div>
          </div>
          <div className="w-5/12 flex flex-col justify-evenly pr-5">
            <h3 className="font-bold">{item.title}</h3>
            <span className="text-gray-300 flex">
              <img src="./images/Address.png" alt="" />
              {item.location}</span>
            <p>{item.description.length > 100 ? item.description.substring(0,200) + `...Detaylı Bilgi` : item.description}</p>
          </div>
          <div className="w-2/12">
            <Link href={""}>Bilet Al</Link>
            <button>
              <img src="./images/add.png" alt="add" />
              <span>Takvime Eklendi</span>
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Card;
