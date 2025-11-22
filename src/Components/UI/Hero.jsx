import React from 'react'

function Hero() {
    return (
        <div>
            <section className="w-full bg-black text-white min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12 py-16 font-sans text-center md:text-left">

                {/* Image */}
                <div className="w-[260px] h-[260px] md:w-[330px] md:h-[330px] bg-gray-800 overflow-hidden rounded-md shadow-lg mb-8 md:mb-0">
                    <img
                        src="ali.png"
                        alt="Ali Hassan"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Text Content */}
                <div className="md:ml-14 max-w-xl">
                    <h3 className="text-xl md:text-2xl font-medium mb-2">Hello ,</h3>

                    <h1 className="text-3xl md:text-4xl font-bold tracking-wide mb-4">
                        I am a <span className="text-blue-400">Developer</span>
                    </h1>

                    <p className="text-base md:text-lg leading-7 text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Necessitatibus harum adipisci dignissimos asperiores velit
                        placeat amet perspiciatis saepe ad porro tenetur quos quia
                        reprehenderit veritatis illum esse, laudantium numquam minus.
                    </p>
                </div>

            </section>
        </div>
    )
}

export default Hero
