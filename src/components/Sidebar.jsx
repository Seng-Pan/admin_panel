import React, { useState } from 'react'
import logo from '../assets/logo.png';
import control from '../assets/control.png';
import { FaHome } from "react-icons/fa";
import { RiContactsBook2Fill } from "react-icons/ri";
import { IoMdContact } from "react-icons/io";
import { FaInfoCircle } from "react-icons/fa";
import { RiServiceFill } from "react-icons/ri";

function Sidebar() {
    const[open, setOpen] = useState(false);

    const Menus = [
        {title: "New user", src: <IoMdContact />},
        // {title: "About", src: <RiContactsBook2Fill />},
        // {title: "Info", src: <FaInfoCircle />, gap: true},
        // {title: "Services", src: <RiServiceFill />},
        // {title: "Contact", src: <IoMdContact />},
    ]

  return (

    <div className="flex">
        <div className={`${open ? 'w-72' : 'w-20'} duration-300 h-screen relative gradientBg`}>
            <img src={control} className={`absolute text-slate-900 text-3xl cursor-pointer rounded-full -right-3 top-12 w-7 border-4 border-emerald-800 ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />
            
            <div className='flex gap-x-4 items-center mt-2 ml-4'>
                <img src={logo} alt='logo' className={`cursor-pointer rounded-full duration-500 size-8 mt-2 ml-2 ${open && 'rotate-[360deg]'}`} />
                <span className={`text-white origin-left font-medium text-2xl duration-300 mt-2 ${!open && 'scale-0'}`}>Recyglo_<i className='text-xs'>Waste Management</i></span>
            </div>

            <ul className='pt-6'>
                {Menus.map((menu,index) => (
                    <li key={index} className={`text-white flex items-center gap-x-4 cursor-pointer p-2 hover:bg-teal-500 rounded-md ${menu.gap ? 'mt-9' : 'mt-2'} ${index === 0 && 'bg-teal-500'}`}>
                        {menu.src} <span className={`${!open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
                    </li>
                ))}
            </ul>
        </div>

        <div className='p-7 text-2xl font-semibold flex-1 h-screen'>
            
        </div>

    </div>
    
  )
}

export default Sidebar