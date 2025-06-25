import React, { useState, useEffect } from 'react';
import { portfolioAPI } from '../services/api';
import PortfolioCard from './PortfolioCard';
import { Meteors } from "@/components/magicui/meteors";

const PortfolioGrid = () => {
    const [portfolioItems, setPortfolioItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchPortfolioItems = async () => {
        try {
            setLoading(true);
            const response = await portfolioAPI.getAll();
            setPortfolioItems(response.data);
            setError(null);
        } catch (err) {
            setError('Failed to fetch Projects.');
            console.error('Error fetching data:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPortfolioItems();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            fetchPortfolioItems();
        }, 30000);
        return () => clearInterval(interval);
    }, []);

    // Simple meteors component
    const SimpleMeteors = () => {
        return (
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full opacity-70"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `meteor-${i} ${3 + Math.random() * 3}s linear infinite`,
                            animationDelay: `${Math.random() * 2}s`
                        }}
                    />
                ))}
                <style jsx>{`
                    ${[...Array(20)].map((_, i) => `
                        @keyframes meteor-${i} {
                            0% {
                                transform: translateY(-100px) translateX(-100px);
                                opacity: 0;
                            }
                            10% {
                                opacity: 1;
                            }
                            90% {
                                opacity: 1;
                            }
                            100% {
                                transform: translateY(100vh) translateX(100px);
                                opacity: 0;
                            }
                        }
                    `).join('')}
                `}</style>
            </div>
        );
    };

    if (loading) {
        return (
            <div className="relative flex justify-center items-center min-h-screen bg-gray-900 overflow-hidden">
                <SimpleMeteors />
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 z-10"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 overflow-hidden">
                <SimpleMeteors />
                <div className="text-red-500 text-center mb-4 z-10">{error}</div>
                <button 
                    onClick={fetchPortfolioItems}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors z-10"
                >
                    Try Again
                </button>
            </div>
        );
    }

    return (
        <div 
          className="relative bg-black-900 py-2 px-2 sm:px-4 lg:px-6 overflow-hidden"
          style={{ backgroundColor: "#252526" }} id='projects'
        >
            <SimpleMeteors />
                
            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-4 relative"> {/* mb-16 → mb-4 */}
                    <div className="relative z-10 mt-4">
                        {/* Beautiful "Explore my latest projects" Heading */}
                        <h1 className="text-5xl md:text-7xl font-bold mb-2 leading-tight"> {/* mb-8 → mb-2 */}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-white to-gray-200">
                                My{' '}
                            </span>
                            <span 
                                className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-orange-500"
                                style={{
                                     filter: 'drop-shadow(0 4px 20px rgba(255, 42, 0, 0.5))',
                                }}
                            >
                                Latest Projects
                                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full transform scale-x-110 animate-pulse"></div>
                            </span>
                        </h1>
                    </div>
                                        
                    {/* Background glow effect */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl -z-10 opacity-10"
                          style={{ backgroundColor: 'rgb(255, 42, 0)' }}>
                    </div>
                </div>

                {portfolioItems.length > 0 ? (
                    <div className={`flex flex-wrap gap-4 lg:gap-6 ${
                        portfolioItems.length === 1 
                            ? 'justify-center' 
                            : 'justify-center lg:justify-start'
                    }`}>
                        {portfolioItems.map((item) => (
                            <div key={item.id} className="flex-shrink-0">
                                <PortfolioCard portfolio={item} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-4"> {/* py-12 → py-4 */}
                        <div className="text-gray-300 text-lg mb-2">
                            No portfolio items found
                        </div>
                        <p className="text-gray-400">
                            Add some portfolio items in the Django admin panel
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PortfolioGrid;
