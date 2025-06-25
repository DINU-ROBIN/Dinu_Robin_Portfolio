import React, { useState } from 'react';

const ImageWithFallback = ({ src, alt, className, fallbackSrc }) => {
    const [imgSrc, setImgSrc] = useState(src);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const defaultFallback = 'https://via.placeholder.com/400x250/e2e8f0/64748b?text=No+Image';

    const handleLoad = () => {
        setIsLoading(false);
        setHasError(false);
    };

    const handleError = () => {
        setIsLoading(false);
        setHasError(true);
        if (imgSrc !== (fallbackSrc || defaultFallback)) {
            setImgSrc(fallbackSrc || defaultFallback);
        }
    };

    return (
        <div className="relative">
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                </div>
            )}
            <img
                src={imgSrc}
                alt={alt}
                className={className}
                onLoad={handleLoad}
                onError={handleError}
                style={{ display: isLoading ? 'none' : 'block' }}
            />
        </div>
    );
};

export default ImageWithFallback;
