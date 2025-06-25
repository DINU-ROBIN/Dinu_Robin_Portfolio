"use client";
import createGlobe, { COBEOptions } from "cobe";
import { useMotionValue, useSpring } from "framer-motion"; // Changed this line
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const GLOBE_CONFIG = {
  width: 800,
  height: 800,
  onRender: () => { },
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [
  { location: [14.5995, 120.9842], size: 0.03 }, // Manila, Philippines
  { location: [19.076, 72.8777], size: 0.1 },    // Mumbai, India
  
  // Major Cities
  { location: [40.7128, -74.0060], size: 0.08 }, // New York City, USA
  { location: [51.5074, -0.1278], size: 0.07 },  // London, UK
  { location: [35.6762, 139.6503], size: 0.09 }, // Tokyo, Japan
  { location: [48.8566, 2.3522], size: 0.06 },   // Paris, France
  { location: [52.5200, 13.4050], size: 0.05 },  // Berlin, Germany
  { location: [55.7558, 37.6176], size: 0.06 },  // Moscow, Russia
  { location: [39.9042, 116.4074], size: 0.08 }, // Beijing, China
  { location: [31.2304, 121.4737], size: 0.07 }, // Shanghai, China
  
  // Tech Hubs
  { location: [37.7749, -122.4194], size: 0.07 }, // San Francisco, USA
  { location: [47.6062, -122.3321], size: 0.05 }, // Seattle, USA
  { location: [12.9716, 77.5946], size: 0.06 },   // Bangalore, India
  { location: [37.5665, 126.9780], size: 0.06 },  // Seoul, South Korea
  { location: [1.3521, 103.8198], size: 0.05 },   // Singapore
  { location: [25.2048, 55.2708], size: 0.04 },   // Dubai, UAE
  
  // Other Notable Cities
  { location: [-33.8688, 151.2093], size: 0.05 }, // Sydney, Australia
  { location: [-23.5505, -46.6333], size: 0.06 }, // São Paulo, Brazil
  { location: [19.4326, -99.1332], size: 0.05 },  // Mexico City, Mexico
  { location: [30.0444, 31.2357], size: 0.05 },   // Cairo, Egypt
  { location: [-26.2041, 28.0473], size: 0.04 },  // Johannesburg, South Africa
  { location: [41.9028, 12.4964], size: 0.04 },   // Rome, Italy
  { location: [59.9311, 30.3609], size: 0.04 },   // St. Petersburg, Russia
  { location: [6.5244, 3.3792], size: 0.05 },     // Lagos, Nigeria
  { location: [13.7563, 100.5018], size: 0.04 },  // Bangkok, Thailand
  { location: [-34.6037, -58.3816], size: 0.05 }, // Buenos Aires, Argentina
  { location: [45.4215, -75.6972], size: 0.03 },  // Ottawa, Canada
  { location: [64.1466, -21.9426], size: 0.02 },  // Reykjavik, Iceland
  { location: [-36.8485, 174.7633], size: 0.03 }, // Auckland, New Zealand
  { location: [33.6844, 73.0479], size: 0.04 },   // Islamabad, Pakistan
  { location: [23.8103, 90.4125], size: 0.04 },   // Dhaka, Bangladesh
],

};

export function Globe({ className = "", config = GLOBE_CONFIG }) {
  let phi = 0;
  let width = 0;
  const canvasRef = useRef(null);
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);
  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    if (!canvasRef.current) return;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender: (state) => {
        if (!pointerInteracting.current) phi += 0.005;
        state.phi = phi + rs.get();
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1";
      }
    }, 100);

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [rs, config]);

  return (
    <div
      className={`absolute inset-0 mx-auto aspect-square w-full max-w-[600px] ${className}`}
      style={{
        width: "600px",
        height: "600px",
        position: "relative",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          opacity: 0,
          transition: "opacity 0.5s",
          cursor: "grab",
        }}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          if (canvasRef.current) {
            canvasRef.current.style.cursor = "grabbing";
          }
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) {
            canvasRef.current.style.cursor = "grab";
          }
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            r.set(r.get() + delta / 1400);
          }
        }}
      />
    </div>
  );
}
