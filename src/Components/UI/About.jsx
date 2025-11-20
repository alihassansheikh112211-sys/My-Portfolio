import React from 'react'

function About() {
    return (
        <div>
            <section className="w-full bg-black text-white flex flex-col items-center justify-center py-24 px-6 font-sans">

                <h1 className="text-4xl font-bold mb-4 tracking-wide">
                    About <span className="text-blue-400">Me</span>
                </h1>

                <p className="text-lg max-w-2xl text-center text-gray-400 leading-7">
                    Hello, lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis exercitationem doloribus, quod minus nobis dolorum
                    reiciendis dolorem nam! Quisquam distinctio sed magni repellendus
                    accusantium. Quo dolorem nulla asperiores ipsum eius?
                </p>

            </section>
        </div>
    )
}

export default About
