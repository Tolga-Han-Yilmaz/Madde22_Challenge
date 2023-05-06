import Link from "next/link";
import React from "react";

import EventProps from "@/app/model/dataTypes";

const Categories = ({ categories }: { categories: EventProps[] }) => {
  return (
    <div className="flex items-center w-full justify-start overflow-x-auto		 sm:justify-center snap-mandatory   snap-x">
      {categories.map((category: EventProps) => (
        <Link
          key={category.id}
          className=" snap-center px-3"
          href={`/${category.id}`}>
          {category.type}
        </Link>
      ))}
    </div>
  );
};

export default Categories;
