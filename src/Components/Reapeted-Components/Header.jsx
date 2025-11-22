import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <nav className="w-full bg-black text-white py-4 px-5 sm:px-8 md:px-10 flex flex-col md:flex-row items-center justify-between shadow-md">

                {/* Logo */}
                <div className="flex gap-1 items-center mb-4 md:mb-0">
                    <h1 className="text-xl sm:text-2xl font-semibold tracking-wider">
                        <span className="text-sky-300/50">Ali</span>Hassan
                    </h1>
                </div>

                {/* Nav Links */}
                <ul className="flex flex-wrap justify-center md:justify-between gap-4 md:gap-7 text-[15px] sm:text-[16px] md:text-[17px] font-medium">

                    <li className="relative">
                        <Link to="/" className="cursor-pointer hover:text-sky-300/50 transition duration-200">
                            Home
                            <span className="absolute left-0 bottom-[-4px] w-0 bg-blue-500 h-[2px] transition-all duration-300 hover:w-full"></span>
                        </Link>
                    </li>

                    <li className="relative">
                        <Link to="/about" className="cursor-pointer hover:text-sky-300/50 transition duration-200">
                            About Me
                            <span className="absolute left-0 bottom-[-4px] w-0 bg-blue-500 h-[2px] transition-all duration-300 hover:w-full"></span>
                        </Link>
                    </li>

                    <li className="relative">
                        <Link to="/experience" className="cursor-pointer hover:text-sky-300/50 transition duration-200">
                            Experience
                            <span className="absolute left-0 bottom-[-4px] w-0 bg-blue-500 h-[2px] transition-all duration-300 hover:w-full"></span>
                        </Link>
                    </li>

                    <li className="relative">
                        <Link to="/education" className="cursor-pointer hover:text-sky-300/50 transition duration-200">
                            Education
                            <span className="absolute left-0 bottom-[-4px] w-0 bg-blue-500 h-[2px] transition-all duration-300 hover:w-full"></span>
                        </Link>
                    </li>

                    <li className="relative">
                        <Link to="/skill" className="cursor-pointer hover:text-sky-300/50 transition duration-200">
                            Skill
                            <span className="absolute left-0 bottom-[-4px] w-0 bg-blue-500 h-[2px] transition-all duration-300 hover:w-full"></span>
                        </Link>
                    </li>

                    <li className="relative">
                        <Link to="/contact" className="cursor-pointer hover:text-sky-300/50 transition duration-200">
                            Contact
                            <span className="absolute left-0 bottom-[-4px] w-0 bg-blue-500 h-[2px] transition-all duration-300 hover:w-full"></span>
                        </Link>
                    </li>

                </ul>

                {/* Button */}
                <button className="mt-3 md:mt-0 bg-sky-300/50 text-white px-4 sm:px-5 py-1.5 sm:py-2 font-semibold rounded-3xl hover:text-black transition duration-400 cursor-pointer text-sm sm:text-base">
                    Contact Me
                </button>

            </nav>
        </div>
    )
}

export default Header
