import React from 'react'

import Theaters from "@/mock/theaters.json";
import Categories from './Categories';
import Input from "./Input"
import Filter from './Filter';
import Calendar from './Calendar';


const Header = () => {
  return (
    <header className='w-full flex justify-center mb-8'>
      <div className='container px-6 sm:p-0'>
        <h1 className='text-center text-4xl my-8 font-extrabold'>ETKİNLİKLER</h1>
        <div className='flex justify-between'>
          <div className='w-1/6 hidden lg:block'></div>
          <div className='w-full lg:w-4/6 flex justify-center'>
            <Categories categories={Theaters.results}/>
          </div>
          <div className='w-1/6 hidden lg:flex justify-end '>
            <Input />
          </div>
        </div>
        <div className='flex justify-between py-2'>
            <Filter locations={Theaters.results}/>
            <Calendar/>
        </div>
      </div>
    </header>
  )
}

export default Header;
