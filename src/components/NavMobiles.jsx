import React from 'react'
import { NavData } from './Data'

function NavMobiles() {
  return (
    <>

        <nav className='w-full h-full bg-white shadow-2xl'>
            <ul className='h-full items-center p-[40px] space-y-5 gap-y-6'>
                {NavData.map((item,index) => {
                    return(
                        <li key={index}>
                            <a href={item.href}>{item.names}</a>
                        </li>
                    )
                })}
            </ul>
        </nav>

    </>
  )
}

export default NavMobiles