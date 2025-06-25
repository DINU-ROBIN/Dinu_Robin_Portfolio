import React from 'react';

const PortfolioCard = ({ portfolio }) => {
    const defaultImage = 'https://picsum.photos/400/250';

    return (
        <div
            className="rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto group border border-gray-700 hover:border-[rgb(255,42,0)]/50 flex flex-col mb-4 mt-4"
            style={{ backgroundColor: "#252526" }} 
        >
            {/* Image container (top center) */}
            <div className="w-full flex items-center justify-center bg-[#ffffff]/10  pt-4 pb-2 relative">
                <div className="absolute inset-0 bg-[rgb(255,42,0)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                <img
                    src={portfolio.image_url || portfolio.image || defaultImage}
                    alt={portfolio.title}
                    className="w-full max-w-xs sm:max-w-sm h-auto max-h-[180px] object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300 z-10"
                />
            </div>

            {/* Content (bottom) */}
            <div className="w-full p-4 md:p-6 flex flex-col justify-center">
                <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-3 text-white">
                    {portfolio.title}
                </h3>

                <p
                    className="text-gray-400 text-sm md:text-base leading-relaxed mb-3 md:mb-5 group-hover:text-gray-300 transition-colors duration-300 w-full break-words"
                    style={{ wordBreak: "break-word" }}
                >
                    {portfolio.short_description || portfolio.description}
                </p>
                {/* 
                <div className="flex justify-center md:justify-start">
                    <button className="px-4 py-2 md:px-5 md:py-2 bg-[rgb(255,42,0)] text-white text-sm font-medium rounded-md hover:bg-orange-700 transition-colors duration-300">
                        Learn More
                    </button>
                </div> */}
            </div>
        </div>
    );
};

export default PortfolioCard;
