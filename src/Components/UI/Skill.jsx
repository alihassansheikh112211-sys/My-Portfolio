import React from 'react'

function Skill() {
    return (
        <div>
            <section className="w-full bg-black text-white py-24 px-6 font-sans flex flex-col items-center">

                <h1 className="text-4xl font-bold tracking-wide mb-12">
                    My <span className="text-blue-400">Skill</span>
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl w-full">

                    <div className="bg-gray-900 border border-gray-700 p-7 rounded-xl shadow-lg hover:shadow-2xl hover:border-blue-500 transition duration-300">
                        <h2 className="text-2xl font-semibold mb-3 text-blue-400">
                            Web & App Development
                        </h2>
                        <p className="text-gray-300 leading-7">
                            Crafting visually appealing and user-friendly interfaces using
                            HTML, CSS, JavaScript, and modern frameworks like React and Tailwind.
                        </p>
                    </div>

                    <div className="bg-gray-900 border border-gray-700 p-7 rounded-xl shadow-lg hover:shadow-2xl hover:border-blue-500 transition duration-300">
                        <h2 className="text-2xl font-semibold mb-3 text-blue-400">
                            Database Management
                        </h2>
                        <p className="text-gray-300 leading-7">
                            Designing and managing databases with technologies such as MongoDB.
                        </p>
                    </div>

                    <div className="bg-gray-900 border border-gray-700 p-7 rounded-xl shadow-lg hover:shadow-2xl hover:border-blue-500 transition duration-300">
                        <h2 className="text-2xl font-semibold mb-3 text-blue-400">
                            API Development
                        </h2>
                        <p className="text-gray-300 leading-7">
                            Creating and integrating APIs to enable smooth communication between
                            front-end and back-end systems.
                        </p>
                    </div>

                    <div className="bg-gray-900 border border-gray-700 p-7 rounded-xl shadow-lg hover:shadow-2xl hover:border-blue-500 transition duration-300">
                        <h2 className="text-2xl font-semibold mb-3 text-blue-400">
                            E-commerce Solutions
                        </h2>
                        <p className="text-gray-300 leading-7">
                            Developing scalable and optimized solutions for e-commerce platforms
                            tailored to your business needs.
                        </p>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Skill
