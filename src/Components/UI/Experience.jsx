import React from 'react'
import { FaDiagramProject } from "react-icons/fa6";
import { RiComputerLine } from "react-icons/ri";
import { IoPeopleOutline } from "react-icons/io5";

function Experience() {
    return (
        <div>
            <section className="w-full bg-black text-white py-24 px-6 flex flex-col items-center font-sans">

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-4xl font-bold tracking-wide mb-4">
                    My <span className="text-blue-400">Experience</span>
                </h1>

                {/* Paragraph */}
                <p className="text-gray-400 text-center max-w-3xl mb-12 text-base sm:text-lg leading-7">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur vitae esse assumenda odio impedit illum.
                    Consectetur iusto ad, similique magni ipsum animi ducimus
                    soluta sunt sequi non unde eaque magnam.
                </p>

                {/* Cards */}
                <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-10 text-gray-300 font-medium text-[16px] sm:text-[18px]">

                    <div className="flex flex-col items-center bg-gray-900 border hover:border-blue-500 border-gray-700 px-8 py-6 w-full sm:w-[220px] rounded-md shadow-lg">
                        <RiComputerLine className="text-sky-300/50 text-4xl sm:text-5xl mb-2" />
                        <h4 className="mt-2 mb-1">6 Month</h4>
                        <h2>Experience</h2>
                    </div>

                    <div className="flex flex-col items-center bg-gray-900 border hover:border-blue-500 border-gray-700 px-8 py-6 w-full sm:w-[220px] rounded-md shadow-lg">
                        <FaDiagramProject className="text-sky-300/50 text-4xl sm:text-5xl mb-2" />
                        <h4 className="mt-2 mb-1">Nothing</h4>
                        <h2>Project</h2>
                    </div>

                    <div className="flex flex-col items-center bg-gray-900 border hover:border-blue-500 border-gray-700 px-8 py-6 w-full sm:w-[220px] rounded-md shadow-lg">
                        <IoPeopleOutline className="text-sky-300/50 text-4xl sm:text-5xl mb-2" />
                        <h4 className="mt-2 mb-1">Nothing</h4>
                        <h2>Clients</h2>
                    </div>

                </div>

                {/* Bottom Line */}
                <div className="w-[80%] sm:w-[90%] h-[1px] bg-gray-700 mt-10"></div>

            </section>
        </div>
    );
}

export default Experience;
