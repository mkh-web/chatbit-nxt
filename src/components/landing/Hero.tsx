export default function Hero() {
    return (
        <section className="w-full">
            <div className="container-landing mx-auto px-4 py-20 text-center min-h-screen flex flex-col justify-center items-center">

                {/* Logo */}
                <div className="w-full max-w-xs sm:max-w-sm h-[200px] sm:h-[300px] rounded-md bg-gradient-to-b from-[#1C1326] via-[#201251] to-[#4828B7] flex items-center justify-center mb-6">
                    <svg
                        className="w-20 h-20 sm:w-24 sm:h-24 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                    >
                        <path
                            d="M3 12a9 9 0 1018 0 9 9 0 00-18 0z"
                            stroke="currentColor"
                            strokeWidth="1.2"
                        />
                        <path
                            d="M8 12h8"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6">
                    منصة شات سينتر
                </h1>

                {/* Description */}
                <div className="mb-6 sm:mb-8 px-4 sm:px-0">
                    <p className="text-base sm:text-lg md:text-xl max-w-xl mx-auto mb-2">
                        مع شات سينتر اضمن انو عمليك يرجع لك و الاهم يشتري منك
                    </p>
                    <p className="text-sm sm:text-base text-gray-200">
                        برنامج الcrm المثالي من اجل ادارة العملاء
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-sm mx-auto">
                    <a 
                        href="#contact" 
                        className="w-full sm:w-auto inline-block px-6 py-3 bg-white text-[#4828B7] font-semibold rounded-lg shadow-md hover:bg-gray-100 transition text-center"
                    >
                        تواصل معانا
                    </a>
                    <a 
                        href="#contact" 
                        className="w-full sm:w-auto inline-block px-6 py-3 bg-[#4828B7] text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition text-center"
                    >
                        ابدأ الآن
                    </a>
                </div>
            </div>
        </section>
    );
}
