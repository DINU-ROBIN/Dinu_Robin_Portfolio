import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone_number: "",
    email: "",
    service_type: "",
    project_description: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      phone_number: value,
    }));
    // Clear phone error when user starts typing
    if (errors.phone_number) {
      setErrors((prev) => ({
        ...prev,
        phone_number: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone_number.trim())
      newErrors.phone_number = "Phone number is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.service_type)
      newErrors.service_type = "Please select a service";
    if (!formData.project_description.trim())
      newErrors.project_description = "Project description is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(
        `${API_BASE_URL}/api/contact/submit/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setShowModal(true);
        setFormData({
          name: "",
          phone_number: "",
          email: "",
          service_type: "",
          project_description: "",
        });
      } else {
        const errorData = await response.json();
        setErrors(errorData);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors({ general: "Failed to submit form. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && showModal) {
        closeModal();
      }
    };

    if (showModal) {
      document.addEventListener("keydown", handleKeyDown);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [showModal]);

  return (
    <>
      <style jsx global>{`
        .react-tel-input .form-control {
          width: 100% !important;
          height: 48px !important;
          padding: 12px 16px 12px 58px !important;
          border: 2px solid #000 !important;
          border-radius: 12px !important;
          background-color: #fff7ed !important;
          color: #1f2937 !important;
          font-size: 16px !important;
          transition: all 0.2s ease !important;
        }

        .react-tel-input .form-control:focus {
          border-color: #000 !important;
          background-color: white !important;
          box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.08) !important;
        }

        .react-tel-input .flag-dropdown {
          border: 2px solid #000 !important;
          border-right: none !important;
          border-radius: 12px 0 0 12px !important;
          background-color: #fff7ed !important;
        }

        .react-tel-input .flag-dropdown:hover {
          background-color: white !important;
        }

        .react-tel-input .selected-flag {
          padding: 0 12px !important;
        }

        .react-tel-input .country-list {
          border-radius: 12px !important;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;
        }
      `}</style>

      <section
      
        className="w-full py-16 bg-gradient-to-br from-orange-10 via-amber-50 to-orange-100 min-h-screen relative overflow-hidden"
        id="contact"
      >
        <AnimatedGridPattern />
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-200 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-orange-300 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-amber-200rounded-full opacity-10 blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Title Section */}
          <div className="text-center mb-12">
            <div className="inline-block">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-orange-600 via-red-500 to-orange-700 bg-clip-text text-transparent mb-4 relative">
                Contact Me
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
              </h2>
            </div>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mt-8 leading-relaxed">
              Ready to bring your project to life? Let's discuss your
              requirements and create something
              <span className="text-orange-600 font-semibold"> amazing </span>
              together.
            </p>
          </div>

          {/* Contact Form */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 border border-orange-200/50 relative overflow-hidden">
              {/* Form background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-100 to-transparent rounded-full opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-amber-100 to-transparent rounded-full opacity-50"></div>

              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                {/* First Row: Name and Phone */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                  {/* Name Field */}
                  <div className="group">
                    <label
                      htmlFor="name"
                      className="block text-sm font-bold text-gray-800 mb-3 flex items-center"
                    >
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border-2 ${
                        errors.name ? "border-black" : "border-black"
                      }
        bg-orange-50/50 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-black focus:bg-white focus:ring-4 focus:ring-orange-100 transition-all duration-300 text-lg`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-2 flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone Number Field */}
                  <div className="group border-black">
                    <label
                      htmlFor="phone_number"
                      className="block text-sm font-bold text-gray-800 mb-3 flex items-center"
                    >
                      <span className="w-2 h-2  rounded-full mr-2"></span>
                      Phone Number *
                    </label>
                    <PhoneInput
                      country={"in"}
                      value={formData.phone_number}
                      onChange={handlePhoneChange}
                      inputProps={{
                        name: "phone_number",
                        required: true,
                        placeholder: "Enter your phone number",
                      }}
                      containerClass="phone-input-container"
                      inputClass="phone-input"
                      buttonClass="phone-button"
                      dropdownClass="phone-dropdown"
                    />
                    {errors.phone_number && (
                      <p className=" text-sm mt-2 flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {errors.phone_number}
                      </p>
                    )}
                  </div>
                </div>

                {/* Second Row: Email and Service Type */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                  {/* Email Field */}
                  <div className="group">
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold text-gray-800 mb-3 flex items-center"
                    >
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border-2 ${
                        errors.service_type ? "border-black" : "border-black"
                      }
        bg-orange-50/50 text-gray-800 focus:outline-none focus:border-black focus:bg-white focus:ring-4 focus:ring-orange-100 transition-all duration-300 text-lg cursor-pointer`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-2 flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Service Type Select */}
                  <div className="group">
                    <label
                      htmlFor="service_type"
                      className="block text-sm font-bold text-gray-800 mb-3 flex items-center"
                    >
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                      Service Required *
                    </label>
                    <select
                      id="service_type"
                      name="service_type"
                      value={formData.service_type}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border-2 ${
                        errors.service_type ? "border-black" : "border-black"
                      }
        bg-orange-50/50 text-gray-800 focus:outline-none focus:border-black focus:bg-white focus:ring-4 focus:ring-orange-100 transition-all duration-300 text-lg cursor-pointer`}
                    >
                      <option value="">Select a service</option>
                      <option value="ui_ux">🎨 UI/UX Design</option>
                      <option value="frontend">💻 Frontend Development</option>
                      <option value="graphic">🖼️ Graphic Design</option>
                    </select>
                    {errors.service_type && (
                      <p className="text-red-500 text-sm mt-2 flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {errors.service_type}
                      </p>
                    )}
                  </div>
                </div>

                {/* Third Row: Project Description (Full Width) */}
                <div className="group">
                  <label
                    htmlFor="project_description"
                    className="block text-sm font-bold text-gray-800 mb-3 flex items-center"
                  >
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Project Description *
                  </label>
                  <textarea
                    id="project_description"
                    name="project_description"
                    value={formData.project_description}
                    onChange={handleChange}
                    rows={6}
                   
                    className={`w-full px-4 py-3 rounded-xl border-2 ${
                      errors.project_description ? "border-black" : "border-black"
                    }
bg-orange-50/50 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-black focus:bg-white focus:ring-4 focus:ring-orange-100 transition-all duration-300 resize-vertical text-lg leading-relaxed`}
                    placeholder={`✨ Tell me about your project vision...

• What type of project are you looking to create?
• What's your timeline and budget range?
• Do you have any specific design preferences?
• What features or functionality do you need?
• Any inspiration or reference materials?

The more details you share, the better I can understand and bring your vision to life!`}
                  />
                  {errors.project_description && (
                    <p className="text-red-500 text-sm mt-2 flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {errors.project_description}
                    </p>
                  )}
                </div>

                {/* General Error */}
                {errors.general && (
                  <div className="text-red-600 text-sm text-center bg-red-50 p-4 rounded-xl border border-red-200 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {errors.general}
                  </div>
                )}

               
                <div className="flex justify-center mt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{ borderRadius: "9999px" }}
                    className="w-60 h-14 bg-black text-white font-bold flex items-center justify-center
               transition-all duration-300 ease-in-out
               hover:bg-gray-800 hover:scale-105 active:scale-95  flex justify-center"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Success Modal - Alternative Version */}
        {/* Success Modal - Simplified Working Version */}
        {/* Success Modal - Basic Test Version */}
        {/* Success Modal - Fallback Terminal Style */}
        {/* Enhanced Success Modal - Terminal Style with Animations */}
        {showModal && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn"
            onClick={closeModal}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="animate-slideUp max-w-2xl mx-4 w-full"
            >
              <div className="bg-gray-900 rounded-lg shadow-2xl border border-gray-700 overflow-hidden">
                {/* Terminal Header */}
                <div className="bg-gray-800 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-2">
                      <div
                        className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400 cursor-pointer transition-colors"
                        onClick={closeModal}
                      ></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-400 cursor-pointer transition-colors"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-400 cursor-pointer transition-colors"></div>
                    </div>
                    <div className="text-gray-400 text-sm ml-4">
                      Terminal - Contact Form Response
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-white transition-colors text-lg"
                  >
                    ×
                  </button>
                </div>

                {/* Terminal Content */}
                <div className="p-6 font-mono text-sm space-y-3 min-h-[300px]">
                  <div className="text-white animate-pulse">
                    <span className="text-green-400">user@portfolio:~$</span>{" "}
                    contact-form --submit
                  </div>

                  <div
                    className="space-y-2 animate-fadeIn"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <div className="text-green-400 flex items-center">
                      <span className="animate-spin mr-2">.</span>
                      Processing form data...
                    </div>
                  </div>

                  <div
                    className="space-y-2 animate-fadeIn"
                    style={{ animationDelay: "1s" }}
                  >
                    <div className="text-green-400">
                      ✓ User Name sent successfully
                    </div>
                    <div className="text-green-400">
                      ✓ User Contacts sent successfully
                    </div>
                    <div className="text-green-400">
                      ✓ Project Details sent successfully
                    </div>
                  </div>

                  <div
                    className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-900/20 rounded animate-fadeIn"
                    style={{ animationDelay: "1.5s" }}
                  >
                    <div className="text-blue-400">
                      📧 <strong>Thank you for reaching out!</strong>
                    </div>
                    <div className="text-blue-300 text-xs mt-1">
                      Your message has been delivered to my inbox
                    </div>
                  </div>

                  <div
                    className="border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-900/20 rounded animate-fadeIn"
                    style={{ animationDelay: "2s" }}
                  >
                    <div className="text-yellow-400">
                      ⏰ <strong>Response Time:</strong> Within 24 hours
                    </div>
                    <div className="text-yellow-300 text-xs mt-1">
                      I'll review your project details and get back to you soon
                    </div>
                  </div>

                  <div
                    className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-900/20 rounded animate-fadeIn"
                    style={{ animationDelay: "2.5s" }}
                  >
                    <div className="text-purple-400">
                      🎉 <strong>Project inquiry received</strong>
                    </div>
                    <div className="text-purple-300 text-xs mt-1">
                      Service: {formData.service_type || "Not specified"}
                    </div>
                  </div>

                  <div
                    className="pt-4 border-t border-gray-700 animate-fadeIn"
                    style={{ animationDelay: "3s" }}
                  >
                    <div className="text-gray-500 text-xs flex items-center justify-between">
                      <span>Press ESC or click outside to close...</span>
                      <span className="text-green-400">Status: ✓ Complete</span>
                    </div>
                  </div>

                  {/* Blinking cursor */}
                  <div
                    className="text-white animate-fadeIn"
                    style={{ animationDelay: "3.5s" }}
                  >
                    <span className="text-green-400">user@portfolio:~$</span>
                    <span className="animate-pulse">_</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Custom animations */}
        {/* Custom animations - Add this to your existing style jsx section */}
        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          @keyframes pulse {
            0%,
            100% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }

          .animate-fadeIn {
            animation: fadeIn 0.6s ease-out forwards;
            opacity: 0;
          }

          .animate-slideUp {
            animation: slideUp 0.4s ease-out;
          }

          .animate-pulse {
            animation: pulse 2s infinite;
          }
        `}</style>
      </section>
    </>
  );
};

export default ContactMe;
