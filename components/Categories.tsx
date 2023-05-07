import Link from "next/link";
import React from "react";

import CategoriesService from "@/app/model/categoriesType";
import EventProps from "@/app/model/dataTypes";

const Categories = ({ categories }: { categories: CategoriesService[] }) => {
  
  return (
    <div className="flex items-center w-full justify-start overflow-x-auto		 sm:justify-center snap-mandatory   snap-x">
      {categories.map((category) => (
        <Link
          key={category.id}
          className=" snap-center px-3"
          href={`/${category.name}`}>
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default Categories;
