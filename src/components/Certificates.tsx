import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Certificate {
    title: string;
    issuer: string;
    image: string;
    date: string;
    link: string;
}

const certificates: Certificate[] = [
    {
        title: "AltSchool Africa Graduation Certificate",
        issuer: "AltSchool Africa",
        image: "./AltSchoolCert.png",
        date: "2025",
        link: "https://altschoolafrica.com",
    },
    {
        title: "Frontend Engineering Track Completion",
        issuer: "AltSchool Africa",
        image: "./FrontendTrack.png",
        date: "2025",
        link: "https://altschoolafrica.com",
    },
    {
        title: "Ayoba Developer Scholarship Program Award",
        issuer: "Ayoba",
        image: "./Ayoba.png",
        date: "2024",
        link: "https://altschoolafrica.com/scholarship/ayoba-developer-program-scholarship-fund",
    },
    {
        title: "Responsive Web Design Certification",
        issuer: "FreeCodeCamp",
        image: "./ResponsiveWD1.png",
        date: "2025",
        link: "https://www.freecodecamp.org/certification/joshuaabu/responsive-web-design",
    },
    {
        title: "Legacy Algorithms and Data Structures",
        issuer: "FreeCodeCamp",
        image: "./legacyJs.png",
        date: "2025",
        link: "https://www.freecodecamp.org/certification/joshuaabu/javascript-algorithms-and-data-structures",
    },
];

const CertificatesCarousel: React.FC = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const selectedCert =
        selectedIndex !== null ? certificates[selectedIndex] : null;

    const handleNext = () => {
        if (selectedIndex === null) return;
        setSelectedIndex((prev) =>
            prev! + 1 >= certificates.length ? 0 : prev! + 1
        );
    };

    const handlePrev = () => {
        if (selectedIndex === null) return;
        setSelectedIndex((prev) =>
            prev! - 1 < 0 ? certificates.length - 1 : prev! - 1
        );
    };

    return (
        <section id="certificates" className="rounded-2xl p-4 shadow-md bg-gray-50/50 relative">
            <div className="max-w-6xl mx-auto md:px-6 text-center">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-4 pt-4 md:pt-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    🏆 Certificates & Awards
                </motion.h2>

                <div className="w-24 h-1 mx-auto bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-8"></div>

                <motion.p
                    className="text-gray-600 mb-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    A glimpse into some of my proudest achievements and milestones.
                </motion.p>

                {/* Main Carousel */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 4000 }}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="pb-10"
                    >
                        {certificates.map((cert, index) => (
                            <SwiperSlide key={index}>
                                <motion.div
                                    className="bg-white shadow-lg rounded-2xl overflow-hidden cursor-pointer transition-transform hover:scale-105 mb-[50px]"
                                    whileHover={{ scale: 1.05 }}
                                    onClick={() => setSelectedIndex(index)}
                                >
                                    <div className="md:p-4">
                                        <img
                                            src={cert.image}
                                            alt={cert.title}
                                            className="w-full h-50 rounded-md"
                                        />
                                    </div>
                                    <div className="p-5">
                                        <h3 className="text-lg font-semibold mb-1">
                                            {cert.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm mb-2">{cert.issuer}</p>
                                        <p className="text-gray-400 text-xs">{cert.date}</p>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedIndex(index);
                                            }}
                                            className="mt-3 px-4 py-2 bg-black text-cyan-400 text-sm rounded-lg hover:bg-indigo-700 transition cursor-pointer"
                                        >
                                            View Certificate
                                        </button>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>

            {/* MODAL */}
            {selectedCert && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center auto z-50 p-4">
                    <motion.div
                        className="bg-white rounded-2xl overflow-hidden shadow-2xl max-w-5xl md:w-[50%]  m-auto relative"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Modal Navigation */}
                        <button
                            onClick={handlePrev}
                            className="absolute hidden left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100"
                        >
                            <ChevronLeft className="w-6 h-6 text-gray-700" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="absolute hidden right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100"
                        >
                            <ChevronRight className="w-6 h-6 text-gray-700" />
                        </button>

                        {/* Image or PDF viewer */}
                        {selectedCert.image.endsWith(".pdf") ? (
                            <iframe
                                src={selectedCert.image}
                                className="w-full h-[75vh]"
                                title={selectedCert.title}
                            ></iframe>
                        ) : (
                            <div className="p-4">
                                <img
                                    src={selectedCert.image}
                                    alt={selectedCert.title}
                                    className="w-full md:h-100 rounded-md"
                                />
                            </div>
                        )}

                        <div className="p-6 text-center">
                            <h3 className="text-xl font-semibold mb-2">
                                {selectedCert.title}
                            </h3>
                            <p className="text-gray-500 mb-4">{selectedCert.issuer}</p>
                            <div className="flex justify-center gap-3">
                                <a
                                    href={selectedCert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-black text-cyan-400 rounded-lg hover:bg-indigo-700 transition"
                                >
                                    Verify
                                </a>
                                <button
                                    onClick={() => setSelectedIndex(null)}
                                    className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition cursor-pointer"
                                >
                                    Close
                                </button>
                            </div>
                        </div>

                        {/* Thumbnail Strip */}
                        <div className="flex items-center justify-center gap-2 p-4 bg-gray-100 overflow-x-auto relative">
                            {certificates.map((cert, index) => (
                                <div
                                    key={index}
                                    className={`min-w-[80px] h-[60px] border-2 rounded-md overflow-hidden cursor-pointer transition-transform ${index === selectedIndex
                                            ? "border-indigo-600 scale-105"
                                            : "border-transparent hover:scale-105"
                                        }`}
                                    onClick={() => setSelectedIndex(index)}
                                >
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            )}
        </section>
    );
};

export default CertificatesCarousel;
