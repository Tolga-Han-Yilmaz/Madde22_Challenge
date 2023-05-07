import Image from 'next/image'
import React from 'react'

const Calendar = () => {
  return (
    <div className='flex items-center cursor-pointer '>
      <Image src="./images/calendar.png" alt="" />
      <p className='pl-2'>Takvimde Gör</p>
    </div>
  )
}

export default Calendar
