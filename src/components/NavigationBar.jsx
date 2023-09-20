import React, { useEffect, useState } from 'react'

import { CgMenuRight, CgClose } from 'react-icons/cg';
import { CvTitle, NavData } from './Data';
import NavMobiles from './NavMobiles';
import { SiGamedeveloper } from 'react-icons/si'
import { motion } from 'framer-motion'
import Cv from './image/Cv.png'
import BlueCeo from './image/BlueCeo.png'



const textAnimationTitle = {

    offscreen: { y: -50, opacity: 0 },
    onscreen: {
        y: 0, opacity: 1,
        transition: {
            type: "string",
            bounce: 0.9,
            duration: 1.3
        }
    }

}

const animationUp = {

    offscreen: { y: 50, opacity: 0 },
    onscreen: {

        y: 0, opacity: 1,
        transition: {
            type: "string",
            bounce: 0.9,
            duration: 1.3
        }

    }

}

const animationLeft = {
    offscreen: { x: -50, opacity: 0 },
    onscreen: {
        x: 0, opacity: 1,
        transition: {
            type: "string",
            bounce: 0.9,
            duration: 1.3
        }
    }
}

const animationRight = {
    offscreen: { x: 50, opacity: 0 },
    onscreen: {
        x: 0, opacity: 1,
        transition: {
            type: "string",
            bounce: 0.5,
            duration: 1.3
        }
    }
}


function NavigationBar() {

    const [bg, setBg] = useState(false);
    const [mobileNav, setMoileNav] = useState(false);

    //for scroll background

    useEffect(()=>{

        window.addEventListener('scroll', ()=>{
            return window.scrollY > 50 ? setBg(true) : setBg(false)
        })
        
    })

    return (
        <>


            <header className={`${bg ? 'bg-blue-700 text-white py-2 lg:py-2' : 'bg-blue'} fixed  left-0 w-full py-8 z-10 transition-all duration-200`}>
                <div className="container mx-auto">
                    <div className='flex justify-between md:justify-between lg:justify-around p-4 '>
                        <a href="#" className={`${bg ? 'text-white text-4xl' : 'text-orange-500'}  font-modi`}>Porfolio</a>
                        <div onClick={() => setMoileNav(!mobileNav)} className='text-2xl md:hidden lg:text-3xl cursor-pointer'>
                            {mobileNav ? <CgClose /> : <CgMenuRight />}
                        </div>
                        {/* for navbar */}
                        <nav className='hidden md:flex'>
                            <ul className='md:flex md:gap-x-12'>
                                {NavData.map((item, index) => {

                                    return (

                                        <li key={index}>
                                            <a href={item.href} className='hover:border-b duration-400 hover:border-black transition-all ease-in-out font-modi'>{item.names}</a>
                                        </li>

                                    )
                                })}
                            </ul>
                        </nav>
                        {/* Mobile */}

                        <div className={`${mobileNav ? 'left-0' : '-left-full'} md:hidden fixed w-full z-50 h-screen max-w-xs bottom-0 transition-all`}>
                            <NavMobiles />
                        </div>
                    </div>
                </div>

            </header>

            <div className="container mx-auto font-modi">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    <div className='text-center lg:ml-[14rem] flex justify-center items-center '>
                         <div className='text-start md:p-5 mt-[8rem] p-4'>
                            {CvTitle.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <motion.p className='text-sm font-bold'
                                            variants={textAnimationTitle}
                                            initial={"offscreen"}
                                            whileInView={"onscreen"}
                                            viewport={{ once: false, amount: 0.5 }}
                                            transition={{ staggerChildren: 0.5 }}
                                        >{item.title}
                                        </motion.p>

                                        <motion.h1 className='text-6xl sm:text-4xl md:text-5xl lg:text-6xl'

                                            variants={animationUp}
                                            initial={"offscreen"}
                                            whileInView={"onscreen"}
                                            viewport={{ once: false, amount: 0.5 }}
                                            transition={{ staggerChildren: 0.5 }}
                                        >{item.title1}</motion.h1>

                                        <motion.p className='text-sm'

                                            variants={animationLeft}
                                            initial={"offscreen"}
                                            whileInView={"onscreen"}
                                            viewport={{ once: false, amount: 0.5 }}
                                            transition={{ staggerChildren: 0.5 }}

                                        >{item.title2}</motion.p>

                                        <motion.div className='flex items-center gap-x-1'

                                            variants={animationRight}
                                            initial={"offscreen"}
                                            whileInView={"onscreen"}
                                            viewport={{ once: false, amount: 0.5 }}
                                            transition={{ staggerChildren: 0.5 }}

                                        >
                                            <SiGamedeveloper />
                                            <p>{item.title3}</p>
                                        </motion.div>

                                    </div>
                                )
                            })}
                        </div> 
                    </div>
                    <div className='ml-5'>
                        <img src={Cv} className='mt-[8rem]' alt="" style={{ width: "80%" }} />
                    </div>
                </div>
            </div>

            <section className='bg-gray-200/50  mb-3 p-6'>
                <div className="container mx-auto mt-[50px]">
                    <div className='text-center text-2xl mb-3 flex justify-center'>
                        <p className='border-b-2 border-b-orange-500  ' style={{width:"120px"}}>ABOUT ME</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-[5rem]">
                        <div className='flex justify-center'>
                            <img src={BlueCeo} style={{width: "40%"}} alt="" />
                        </div>
                        <div className="bg-red-500">
                            <h1>Hello world</h1>
                        </div>
                      
                    </div>
                </div>
            </section>
        </>
    )
}

export default NavigationBar