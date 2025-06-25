import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Particles } from "@/components/magicui/particles";
import './MyServices.css';

const serviceData = [
    {
        title: "UI/UX Design",
        description: "Creating intuitive and beautiful user experiences with modern design principles that delight users",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        features: ["Figma"],
        gradient: "linear-gradient(135deg, #6b7280 0%, #4b5563 100%)",
        glowColor: "rgba(107, 114, 128, 0.4)",
        bgGradient: "linear-gradient(135deg, rgba(107, 114, 128, 0.1) 0%, rgba(75, 85, 99, 0.05) 100%)",
        link: "#"
    },
    {
        title: "Front-end Development",
        description: "Building responsive and interactive web applications with cutting-edge technologies and best practices",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 18L22 12L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 6L2 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        features: ["React.js", "Vue.js", "Bootstrap & Tailwind CSS", "Responsive Design"],
        gradient: "linear-gradient(135deg, #ff7849 0%, #ff4500 100%)",
        glowColor: "rgba(255, 120, 73, 0.5)",
        bgGradient: "linear-gradient(135deg, rgba(255, 120, 73, 0.15) 0%, rgba(255, 69, 0, 0.1) 100%)",
        link: "#"

    },
    {
        title: "Graphic Design",
        description: "Crafting compelling visual identities and marketing materials that make a lasting impact on your audience",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 3A2.828 2.828 0 1 1 14.172 5.828A2.828 2.828 0 0 1 17 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 12H12L17 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        features: ["Photoshop", "Canva"],
        gradient: "linear-gradient(135deg, #6b7280 0%, #4b5563 100%)",
        glowColor: "rgba(107, 114, 128, 0.4)",
        bgGradient: "linear-gradient(135deg, rgba(107, 114, 128, 0.1) 0%, rgba(75, 85, 99, 0.05) 100%)",
        link: "#"

    }
];


const MyServices = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    const controls = useAnimation();
    const [hoveredCard, setHoveredCard] = useState(null);

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 60, opacity: 0, scale: 0.8 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.8
            }
        }
    };

    return (
        <div className="services-container" id="services" ref={ref}>
            <Particles
                className="particles-bg"
                quantity={200}
                staticity={60}
                color="#ffffff"
                size={0.5}
                refresh={false}
            />

            {/* Floating orbs for extra visual appeal */}
            {/* <div className="floating-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div> */}

            <div className="services-content">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: -30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* <span className="section-subtitle">What I Offer</span> */}
                    <h2 className="section-title">My Services</h2>
                    <div className="section-divider"></div>
                    {/* <p className="section-description">
            Transforming ideas into exceptional digital experiences with creativity and precision
          </p> */}
                </motion.div>

                <motion.div
                    className="services-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                >
                    {serviceData.map((service, index) => (
                        <motion.div
                            key={index}
                            className={`service-card ${hoveredCard === index ? 'hovered' : ''} ${hoveredCard !== null && hoveredCard !== index ? 'dimmed' : ''}`}
                            variants={itemVariants}
                            whileHover
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                            style={{
                                background: service.bgGradient,
                                '--glow-color': service.glowColor,
                                '--gradient': service.gradient
                            }}
                        >
                            {/* Animated background gradient */}
                            <div className="card-bg-gradient"></div>

                            {/* Glowing border effect */}
                            <div className="card-glow-border"></div>

                            <div className="card-content">
                                <div
                                    className="card-icon"
                                    style={{ background: service.gradient }}
                                >
                                    {service.icon}
                                    <div className="icon-glow"></div>
                                </div>

                                <div className="card-header">
                                    <h3
                                        className="card-title"
                                        style={{ "--gradient": service.gradient }}
                                    >
                                        {service.title}
                                    </h3>
                                    <div className="card-number">0{index + 1}</div>
                                </div>

                                <p className="card-description">{service.description}</p>

                                <div className="card-features">
                                    {service.features.map((feature, i) => (
                                        <motion.span
                                            key={i}
                                            className="feature-item"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 * i }}
                                        >
                                            <span className="feature-dot"></span>
                                            {feature}
                                        </motion.span>
                                    ))}
                                </div>

                                <div className="card-footer">
                                    <motion.a
                                        href="#contact" // or any URL you want to link to
                                        className="learn-more-btn"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Hire Me
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </motion.a>
                                </div>

                            </div>

                            <div
                                className="card-hover-effect"
                                style={{ background: service.gradient }}
                            ></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default MyServices;
