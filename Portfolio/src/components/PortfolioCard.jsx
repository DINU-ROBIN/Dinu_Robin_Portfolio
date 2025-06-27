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
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO8AAAA2CAYAAAAvQc5eAAAABmJLR0QA/wD/AP+gvaeTAAAYI0lEQVR42u2dB3wURRfAQ7EA8iEdBJHQMRgpCtIEQieChCMgShOkCSJNEsEPaVKlh16lE0MXREDpUQTlUKmClJCEFDZ3uUsv8725e3uZG7bd5YL5dN/v936QndnZ3dn578y8efPO681tUULrrVGC3+Zood2maKHDhmihE2iXtTHCW6tjhG6rYoTuK2IEQ0iM0HNpjNBrSYzwzqIY4d0FscJ7X8be6T8/1jhwbtzOwV/EfjxsRmxNL1100eXJSIsdUQQAJq23RBEAmADABAAmndZFky5rH5K3Vj8k3VY+JN1XPCQ9QmIIAEx6LY4h7yyKJQAw6Ts/lvSfG0sGzokjg2bFkQ9mxp0CiLvoNauLLnkszXZGESeAv+IAXsMAvDyG9FjGALyQA3i2A2AydHrcsQ9mmLz1GtZFlzySpqGRpDkA3HJ7FGkFALcBgNsCwO03RpOOAHDndQ+JPwDcddVD8jYAHAAAGwDgwCUxpDcA3AcAhuEz6TcvlgwAgN8HgAd/EUeGAMDDpseZRkyL89drWRdd8kCafB1JnADeSgGOzgF4PQfwCg7gRRzAcxiAZ9gAzhwxLX6AXtO66OJheX13JLEBvCuKNN/BALyZA3gtB3AIB/ACDuBZDMDT4rOGTXnUXq9tXXTxoLy2J5I0DoskbwDAzXYx89+tnAFrPWPAWsUZsJZQA1ZMzvx3npMBiwwFgIdPi48ZPjm+kl7juujiIWm4L5I4AA7lAPacBZoasCjAx/Ua10UXD0n9/Q9Iw70cwHlngYYhtD581kUXj8irBx6QBgBwIwDYNv8N4wxYubFAz5eyQMeG67Wuiy4ekFe+eUBsAO9jAM5jC/SQ6XGt9JrXRZdcis+hB8QJ4D0MwHlngV6l17wuuuRSXv42gtQDgH0PPiD1AeCGALAm
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
