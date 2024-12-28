import React from 'react'

const Header = () => {
  return (
    <div className="w-full bg-slate-400 p-4 border rounded-2xl flex md:flex-nowrap flex-wrap gap-3 md:items-center md:justify-between justify-center ">
      <img src="/images/consultancy-logo.jpeg" className="md:w-36 w-full md:h-28 h-[20rem] border-none rounded-3xl" alt="logo" />
      <div className=" relative md:text-end flex text-start gap-6">
        <span className='text-white'>Email:gajendra@gmail.com</span>
        <span className='text-white'>Cont.:8871243787</span>
      </div>
    </div>
  )
}

export default Header
