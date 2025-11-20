import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

function Footer() {
    return (
        <div>
            <div className="w-full bg-black text-white py-10 flex flex-col items-center font-sans">

                <h1 className="text-3xl font-bold tracking-wide mb-4">
                    <span className="text-sky-300/50">Ali</span>Hassan</h1>

                <div className="flex space-x-6 mt-2">

                    <a
                        href="#"
                        className="text-gray-300 hover:text-blue-500 text-2xl transition duration-300"
                    ><FaFacebook />

                    </a>

                    <a
                        href="#"
                        className="text-gray-300 hover:text-blue-500 text-2xl transition duration-300"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="#"
                        className="text-gray-300 hover:text-blue-500 text-2xl transition duration-300"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="#"
                        className="text-gray-300 hover:text-blue-500 text-2xl transition duration-300"
                    >
                        <FaTwitterSquare />
                    </a>

                </div>

            </div>
        </div>
    )
}

export default Footer
