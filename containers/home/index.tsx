import React from "react";
import EventProps from "@/app/model/dataTypes";
import Card from "@/components/Card";

import Theaters from "@/mock/theaters.json";
import Categories from "@/components/Categories";
import Input from "@/components/Input";
import Filter from "@/components/Filter";
import Calendar from "@/components/Calendar";
import CategoriesService from "@/app/model/categoriesType";

const HomeContainer = ({
  selectedCategory,
  categories,
}: {
  selectedCategory: boolean;
  categories: CategoriesService[];
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-between container relative">
        <div className="w-full h-12 flex justify-center" style={{height:51}}>
          <Categories categories={categories} />
        </div>
        <div className="hidden lg:block absolute right-0" style={{right:0}}>
          <Input id={""} onChange={undefined} value={""} label={""} />
        </div>
      </div>
      <div className="flex justify-between my-8 container px-4 lg:px-0">
        <Filter locations={Theaters.results} />
        <Calendar />
      </div>
      {!!selectedCategory.theaters.length && (
        <Card
          title={categories.find(({ id }) => id === +selectedCategory.id)?.name}
          theaters={selectedCategory.theaters}
        />
      )}
    </div>
  );
};

export default HomeContainer;
