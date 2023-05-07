/* eslint-disable react/jsx-key */
import React from "react";

import EventProps from "@/app/model/dataTypes";
import Link from "next/link";
import Image from "next/image";

const Card = ({ theaters }: { theaters: EventProps[]}) => {
  return (
    <section className="flex flex-col items-center ">
      <div className="container lg:px-8 px-4">
        {theaters?.map((item: EventProps) => (
          <div className="lg:flex mb-8    border-borderColor border-2">
            <div className="lg:w-5/12 w-full lg:flex relative mb-12 lg:mb-0">
              <div className="lg:w-6/12 w-full lg:h-full h-72 py-16 bg-black flex lg:justify-around justify-center lg:items-center">
                <p className="lg:text-mainColor text-white text-center lg:w-10 flex flex-col items-center">
                  {item.date}
                </p>
                <p></p>
              </div>
              <div className="lg:w-8/12 w-full absolute top-[23%] lg:top-[50%]  lg:-translate-y-1/2  right-4">
                <span className=" bg-orange-500 absolute top-0 lg:top-4 left-0 lg:left-[-20px] z-10 px-4  uppercase text-white font-bold ">
                  {item.type}
                </span>
                <Image
                  className="lg:w-6/6 w-11/12 h-5/6 translate-x-7 lg:translate-x-10 translate-y-10 lg:translate-y-0"
                  src={item.image}
                  alt={item.title}
                />
              </div>
            </div>
            <div className="lg:w-5/12 flex flex-col justify-evenly px-10 lg:px-0 lg:pr-5 mb-4 lg:mb-0">
              <h3 className="font-bold">{item.title}</h3>
              <span className="text-textColor flex">
                <Image src="./images/Address.png" alt="" />
                {item.location}
              </span>
              <p className="hidden lg:block">
                {item.description.length > 100
                  ? item.description.substring(0, 150) + `...Detaylı Bilgi`
                  : item.description}
              </p>
              <p className="block lg:hidden">
                {item.description.length > 15
                  ? item.description.substring(0, 15) + ` ...Detaylı Bilgi`
                  : item.description}
              </p>
            </div>
            <div className="lg:w-2/12 flex lg:flex-col justify-between lg:justify-center items-center px-8 lg:px-0">
              <Link
                href={""}
                className="px-12 py-2 mb-2 bg-mainColor text-white font-bold">
                Bilet Al
              </Link>
              <button className="flex">
                <Image src="./images/add.png" alt="add" />
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
