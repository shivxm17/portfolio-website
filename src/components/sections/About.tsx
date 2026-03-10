"use client";

import { motion } from "framer-motion";
import { Code2, Server, Bot, Layout, Database, GitBranch } from "lucide-react";

const skills = [
  {
    name: "HTML/CSS & JavaScript",
    icon: <Code2 className="text-neon-blue" size={32} />,
  },
  {
    name: "React & FastAPI",
    icon: <Layout className="text-neon-purple" size={32} />,
  },
  {
    name: "Java & Python",
    icon: <Server className="text-neon-blue" size={32} />,
  },
  {
    name: "AI Tools & Integration",
    icon: <Bot className="text-neon-purple" size={32} />,
  },
  {
    name: "MySQL & MongoDB",
    icon: <Database className="text-neon-blue" size={32} />,
  },
  {
    name: "Power BI & AWS",
    icon: <GitBranch className="text-neon-purple" size={32} />,
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center md:text-left mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-neon-blue">Me</span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl leading-relaxed">
            Aspiring IT professional and developer with hands-on experience in
            web development and AI-driven healthcare applications. Skilled in HTML,
            CSS, JavaScript, React, and FastAPI with a demonstrated ability to
            build responsive and scalable web solutions resulting in enhanced user
            experience and efficient healthcare triage support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-neon-purple/50 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-br from-neon-blue/10 to-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                <div className="p-4 rounded-xl bg-background/50 border border-white/10 group-hover:border-neon-blue/30 transition-colors">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-white/90 group-hover:text-white transition-colors">
                  {skill.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
