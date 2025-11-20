import React from 'react'
import { FaDiagramProject } from "react-icons/fa6";
import { RiComputerLine } from "react-icons/ri";
import { IoPeopleOutline } from "react-icons/io5";
function Experience() {
    return (
        <div>
            <section className="w-full bg-black text-white py-24 px-6 flex flex-col items-center font-sans">

                {/* Main Heading */}
                <h1 className="text-4xl font-bold tracking-wide mb-4">
                    My <span className="text-blue-400">Experience</span>
                </h1>

                {/* Paragraph */}
                <p className="text-gray-400 text-center max-w-3xl mb-12 text-lg leading-7">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur vitae esse assumenda odio impedit illum.
                    Consectetur iusto ad, similique magni ipsum animi ducimus
                    soluta sunt sequi non unde eaque magnam.
                </p>


                <div className="flex justify-center  gap-15 align-between text-gray-300 font-medium text-[18px]">
                    <div className="flex-col bg-gray-900 border  hover:border-blue-500 border-gray-700  px-10 py-8 w-full max-w-3xl shadow-lg justify-between text-gray-300  font-medium text-[18px]">
                        <RiComputerLine className=' text-sky-300/50  ml-6 text-center
 text-3xl ' />
                        <h4 className=' my-2'>6 Month</h4>
                        <h2 > Experience</h2>
                    </div>
                    <div className="flex-col bg-gray-900 border  hover:border-blue-500 border-gray-700  px-10 py-8 w-full max-w-3xl shadow-lg justify-betweenborder-2r text-gray-300 font-medium text-[18px]">
                        <FaDiagramProject className=' text-sky-300/50  ml-4 text-center
 text-3xl ' />
                        <h4 className=' my-2 '>Nothing</h4>
                        <h2 > Project</h2>
                    </div>
                    <div className="flex-col justify-between  hover:border-blue-500 bg-gray-900 border border-gray-700  px-10 py-8 w-full max-w-3xl shadow-lg text-gray-300 font-medium text-[18px]">
                        <IoPeopleOutline className=' text-sky-300/50  ml-4 text-center
 text-3xl ' />

                        <h4 className=' my-2'>Nothing</h4>
                        <h2 > Clients</h2>
                    </div>
                </div>
                <div className="h-\[1px] bg-gray-700 my-3"></div>





            </section>
        </div>
    )
}

export default Experience
