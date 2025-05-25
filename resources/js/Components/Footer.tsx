import React, { useState } from "react";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
    const footerLinks = {
        column1: ["Home", "News", "Gallery"],
        column2: ["FAQ", "HTM", "Telephone"],
        column3: ["Contact Us", "Platform", "Whatsapp"],
    };

    const socialLinks = [
        { Icon: FaFacebookF, color: "text-blue-500", size: 50 },
        { Icon: FaYoutube, color: "text-red-600", size: 50 },
        { Icon: FaInstagram, color: "text-pink-500", size: 50 },
    ];

    const [message, setMessage] = useState("");

    

    return (
        <footer id="footer" className="bg-[#a646f2] text-white px-8 py-12 font-sans mt-32">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
                    <div>
                        <h2 className="text-3xl font-bold leading-snug">
                            Berikan Pendapatmu <br /> Tentang Kami
                        </h2>
                    </div>
                    <div className="flex items-center gap-4">
                      <input 
                      type="text" 
                      placeholder="Tulis pesan anda disini..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="flex-1 px-6 py-3 rounded-full border border-white bg-transparent placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                      />
                      <button 
                      onClick={() => setMessage('')}
                      className="flex items-center justify-center gap-2 border border-white px-6 py-3 rounded-full hover:bg-white hover:text-[#a646f2] transition"
                      >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                        />
                      </svg>
                      </button>
                    </div>
                </div>

                <hr className="border-white/50 mb-8" />

                {/* Main Content Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                    {/* Brand Section */}
                    <div className="flex flex-col justify-center items-center mb-8 md:mb-0">
                        <div className="mb-3">
                            <img
                                src="/gambar/B-removebg-preview 1.png"
                                alt="Logo"
                                className="w-40 h-auto"
                            />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-start">
                                InfoForYou
                            </h3>
                            <p className="text-lg mt-1 mb-3 text-start">
                                Membantu anda menjadi <br /> lebih baik
                            </p>
                        </div>
                        <div className="flex items-start justify-start gap-3">
                            {socialLinks.map(({ Icon, color, size }, index) => (
                                <a href="#footer" key={index}>
                                    <Icon size={size} className={color} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Grid Section */}
                    <div className="grid grid-cols-3 gap-12 text-sm">
                        {Object.values(footerLinks).map(
                            (column, columnIndex) => (
                                <a href="#footer"
                                    key={columnIndex}
                                    className="space-y-14 text-xl"
                                >
                                    {column.map((link, linkIndex) => (
                                        <p key={linkIndex}>{link}</p>
                                    ))}
                                </a>
                            )
                        )}
                    </div>
                </div>

                <hr className="border-white/50 my-8" />

                {/* Footer Bottom Section */}
                <div className="text-lg text-white/80 flex flex-wrap justify-end gap-6">
                    <a href="#footer">Term Of Service</a>
                    <a href="#footer">Privacy Policy</a>
                    <a href="#footer">Cookies</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
