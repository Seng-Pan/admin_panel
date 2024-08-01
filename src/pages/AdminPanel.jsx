import React, { useState } from 'react'
import logo from '../assets/logo.png'
import gbanner from '../assets/greenbanner.png'
import LoginPopup from "../components/LoginPopup";

function AdminPanel() {
    const [loginPopup, setLoginPopup] = useState(false);

    const handleLoginPopup = () => {
        setLoginPopup(!loginPopup);
    }

    return (
        <>

            <div className='flex space-x-3 fixed top-4 left-2 m-4'>
                <img src={logo} alt='logo' className='w-20 h-20 inline-block items-center rounded-full' />
                <a href='#' className='flex items-center space-x-3 text-primanry'><span className='uppercase text-3xl font-semibold'>Recyglo</span>
                </a>
            </div>

            <div className='md:px-12 flex items-center p-[4px] max-w-screen-2xl h-full mx-auto mt-[150px]'>
                <div className='rounded-xl rounded-br-[80px] md:p-9' >
                    <div className='flex flex-col md:flex-row-reverse justify-center items-center gap-10' >
                        {/* banner image */}
                        <div>
                            <img src={gbanner} alt='banner' className='lg:h-[360px]' />
                        </div>

                        {/* banner content */}
                        <div className='md:w-3/5' >
                            <h2 className='md:text-7xl text-4xl font-bold mb-6 leading-relaxed' >Waste Management</h2>
                            <p className='text-xl mb-8' >A good example of a paragraph contains a topic sentence, details and a conclusion. There are many different kinds of animals that live in Chian.</p>
                            <div className='space-x-5 space-y-4 text-lg' >
                                <button className=' font-semibold bg-[#68B2A0] py-2 px-6 transition-all duration-300 rounded-xl shadow-3xl hover:text-white hover:bg-[#2C6975]' onClick={handleLoginPopup}>Login</button>
                            </div>
                        </div>

                    </div>
                </div>

                <LoginPopup loginPopup={loginPopup} handleLoginPopup={handleLoginPopup} />
            </div>
        </>
    )
}

export default AdminPanel