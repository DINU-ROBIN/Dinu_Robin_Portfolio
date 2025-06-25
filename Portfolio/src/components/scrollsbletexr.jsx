import React from 'react';
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export default function ScrollableText() {
  return (
    <div className='my-9 relative overflow-hidden'>
      {/* Left fade shadow */}
      <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      
      {/* Right fade shadow */}
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      
      <VelocityScroll>
        Graphic Designer | <span style={{ color: 'red' }}>Web Developer </span> |
      </VelocityScroll>
    </div>
  );
}
