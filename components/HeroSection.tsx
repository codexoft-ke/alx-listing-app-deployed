import heroBg from "@/public/hero-bg.jpg";
const HeroSection = () => {
    return (
        <section
            className="relative h-[400px] flex flex-col justify-center items-center text-center text-white"
            style={{
                backgroundImage: `url(${heroBg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <h1 className="text-4xl font-bold mb-4">Find your favorite place here!</h1>
            <p className="text-lg max-w-xl mx-auto">
                The best prices for over 2 million properties worldwide.
            </p>
            {/* Optional overlay for better text contrast */}
            <div className="absolute inset-0 bg-black opacity-30"></div>
        </section>
    );
};

export default HeroSection