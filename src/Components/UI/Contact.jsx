import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
function Contact() {
    return (
        <div>
            <section className="w-full bg-black text-white py-24 px-8 font-sans flex flex-col items-center">

                <h1 className="text-4xl font-bold tracking-wide mb-12">
                    Contact <span className="text-blue-400">Me</span>
                </h1>

                <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10">

                    <div className="bg-gray-900 border border-gray-700 p-8 rounded-xl shadow-lg">
                        <form className="space-y-6">

                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full px-4 py-3 bg-black text-white border border-gray-700 rounded-lg focus:border-blue-500 outline-none"
                            />

                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 bg-black text-white border border-gray-700 rounded-lg focus:border-blue-500 outline-none"
                            />

                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-black font-semibold py-3 rounded-lg hover:bg-blue-400 transition duration-200"
                            >
                                Submit
                            </button>

                        </form>
                    </div>

                    <div className="flex flex-col justify-center bg-gray-900 border border-gray-700 p-8 rounded-xl shadow-lg space-y-4">
                        <div className=' flex align-middle  gap-5'>

                            <FaPhoneAlt className='mu-3' />
                            <p className="text-xl font-medium tracking-wide"> 0327 - 4640966</p>
                        </div>
                        <div className=' flex align-middle  gap-5'>

                            <MdOutlineMail />
                            <p className="text-lg text-gray-300">
                                alihassansheikh206@gmail.com
                            </p>
                        </div>
                        <div className=' flex align-middle  gap-5'>

                            <IoLocationSharp />
                            <p className="text-lg text-gray-400">
                                Pakistan - Lahore
                            </p>
                        </div>

                    </div>

                </div>

            </section>
        </div>
    )
}

export default Contact
