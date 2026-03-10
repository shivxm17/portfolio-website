"use client";

import { useCallback } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import { ArrowDown, Terminal } from "lucide-react";

export default function Hero() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Particles Background */}
      <div className="absolute inset-0 max-w-full">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: { enable: true, mode: "push" },
                onHover: { enable: true, mode: "repulse" },
                resize: true,
              },
              modes: {
                push: { quantity: 4 },
                repulse: { distance: 100, duration: 0.4 },
              },
            },
            particles: {
              color: { value: ["#00f0ff", "#b026ff"] },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: { default: "bounce" },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: { enable: true, area: 800 },
                value: 60,
              },
              opacity: { value: 0.3 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
          className="absolute inset-0 -z-10"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <Terminal size={16} className="text-neon-blue" />
            <span className="text-sm font-medium text-white/80">
              Hello, World! I am
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter"
          >
            Shivam{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-neon-blue to-neon-purple text-glow">
              Singh
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-3xl font-medium text-white/80 h-12"
          >
            <span>Full Stack Developer | </span>
            <span className="text-neon-blue">
              <Typewriter
                words={["Web Developer", "AI Tools Builder", "SaaS Creator"]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 pt-8 max-w-2xl"
          >
            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-linear-to-r from-neon-blue to-neon-purple text-white font-bold hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all duration-300 w-full sm:w-auto text-center"
            >
              View Projects
            </a>
            <a
              href="/Resume.pdf"
              target="_blank"
              download
              className="px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-bold hover:bg-white/20 hover:border-white/40 transition-all duration-300 w-full sm:w-auto text-center"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 hover:border-neon-purple transition-all duration-300 w-full sm:w-auto text-center"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center justify-center text-white/50 hover:text-neon-blue transition-colors"
        >
          <span className="text-sm mb-2 font-medium tracking-widest uppercase">
            Scroll
          </span>
          <ArrowDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
}
