import React from "react";

import EventProps from "@/app/model/dataTypes";

const Filter = ({ locations }: { locations: EventProps[] }) => {
  return (
    <div className="group ">
      <div className="flex items-center my-2 cursor-pointer">
        <img className="h-4" src="./images/filtre.png" />
        <span className="pl-2">Filtreler</span>
      </div>
      <div className="hidden absolute z-40 bg-white group-hover:block p-4 border-2 border-slate-200 rounded-sm drop-shadow-[0_4px_50px_0_rgba(81,81,81,0.2)]	">
        <div className="mb-4">
          <p className="mb-2">Etkinlik Mekanı</p>
          <form action="">
            {locations.map((item: EventProps) => (
              <>
                <input
                  type="checkbox"
                  className="peer/draft form-checkbox border-2 border-solid border-borderColor appearance-none  w-4 h-4 checked:bg-mainColor"
                  id={item.id}
                />
                <label className="pl-2 mb-2" htmlFor={item.id}>
                  {item.location}
                </label>
                <br />
              </>
            ))}
          </form>
        </div>
        <div>
          <p className="mb-2">Etkinlik Tarihi</p>
          <form action="">
            <input
              type="checkbox"
              className="peer/draft form-checkbox border-2 border-solid border-borderColor appearance-none  w-4 h-4 checked:bg-mainColor"
            />
            <label className="pl-2 mb-2" htmlFor="">
              Güncel Etkinlikler
            </label>
            <br />
            <input
              type="checkbox"
              className="peer/draft form-checkbox border-2 border-solid border-borderColor appearance-none  w-4 h-4 checked:bg-mainColor"
            />
            <label className="pl-2 mb-2" htmlFor="">
              Geçmiş Etkinlikler
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Filter;
