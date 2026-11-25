import { ArrowRight, Download } from "lucide-react"
import { Button } from "../components/Button"
import bgImage from "../assets/bg.jpg";

export const Hero = () => {
    return <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Bg */}
        <div className="absolute inset-0">
            <img
                src={bgImage}
                alt="bg Image"
                className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
        </div>

        {/*Green Dots*/}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, i) => (
                <div
                    className="absolute w-1 h-1 rounded-full opacity-40 animate-pulse"
                    style={{
                        backgroundColor: "#20B2A6",
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 5}s`,


                    }}
                />
            ))}
        </div>
        {/* Content */}
        <div className="container mx-auto px-6 pt-32 pd-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Text Context */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />Software Engineer • React Specialist
                        </span>
                    </div>
                    {/* Headline */}
                    <div className="space-y-4">
                        <h1 className="text-5xll md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                            Crafting <span className="text-primary glow-text">digital</span>
                            <br />
                            experience with
                            <br />
                            <span className="font-serif italic font-normal text-white">
                                precision
                            </span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                            Hi, I'm Junmar Tanodra - a software engineer specialist in
                            React, Next,js, and TypeScript. I build scalable, performance web
                            applications that users love.
                        </p>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-300">
                        <Button size="lg">
                            Contact Me<ArrowRight className="w-5 h-5" />
                        </Button>
                        <Button size="lg" className="bg-transparent"><Download /><a
                            href="/RESUME.pdf"
                            download
                            className="animated-cv-btn"
                        ><span>Download CV</span></a></Button>
                    </div>
                    {/* Social Links */}
                    <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                        <span className="text-sm text-muted-foreground">follow:</span>
                        <a href="#" className="text-primary hover:text-primary/80">
                            Facebook
                        </a>
                        <a href="#" className="text-primary hover:text-primary/80">
                            Linkedin
                        </a>
                        <a href="#" className="text-primary hover:text-primary/80">
                            Twitter
                        </a>






                    </div>

                </div>
                {/* Right Column- Profile Image */}
                <div >

                    <h1>JUNMAR TANODRA</h1>

                </div>

            </div>
        </div>
    </section >
};