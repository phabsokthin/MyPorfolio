import React, { useState } from 'react'

import {CgMenuRight,CgClose} from 'react-icons/cg';
import { NavData } from './Data';
import NavMobiles from './NavMobiles';

function NavigationBar() {

    const [bg, setBg] = useState(false);
    const[mobileNav, setMoileNav] = useState(false);

  return (
    <>
    
    
        <header className={`${bg ? 'bg-blue-600 py-4 lg:py-6' : 'bg-blue'} fixed left-0 w-full py-8 z-10 transition-all duration-200`}>
            <div className="container mx-auto">
                <div className='flex justify-between p-4'>
                    <a href="#" className='text-3xl text-orange-500  font-modi'>Porfolio</a>
                    <div onClick={() => setMoileNav(!mobileNav)} className='text-2xl md:hidden lg:text-3xl cursor-pointer'>
                        {mobileNav ? <CgClose/> : <CgMenuRight/>}
                    </div>
                    {/* for navbar */}
                    <nav className='hidden md:flex'>
                        <ul className='md:flex md:gap-x-12'>
                            {NavData.map((item, index)=> {

                                return(

                                    <li key={index}>
                                        <a href={item.href} className='hover:border-b duration-400 hover:border-black transition-all ease-in-out font-modi'>{item.names}</a>
                                    </li>

                                )
                            })}
                        </ul>
                    </nav>
                    {/* Mobile */}

                    <div className={`${mobileNav ? 'left-0' : '-left-full'} md:hidden fixed w-full h-screen max-w-xs bottom-0 transition-all`}>
                        <NavMobiles/>
                    </div>
                </div>
            </div>

        </header>

        <div className="container mx-auto">
            
        </div>

    
    </>
  )
}

export default NavigationBar