"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, FolderGit2 } from "lucide-react";

const projects = [
  {
    title: "Broker AI",
    description:
      "AI-powered CRM for real estate brokers. Centralizes WhatsApp and portal leads, automates follow-ups, and uses AI lead scoring to prioritize clients and improve deal conversions.",
    tech: ["Next.js", "React", "OpenAI", "Tailwind"],
    github: "https://github.com/shivxm17",
    live: "https://broker-ai-three.vercel.app/",
    color: "neon-blue",
  },
  {
    title: "Med.AI – Intelligent Healthcare Assistant",
    description:
      "AI-powered symptom checker with natural language input. Features role-based dashboards for patients and doctors, focusing on fast triage and early detection support.",
    tech: ["React", "FastAPI", "AI"],
    github: "https://github.com/shivxm17",
    live: "https://v0-v0medaihealthcareappmainmain-xk.vercel.app/",
    color: "neon-purple",
  },
  {
    title: "Password Strength Checker",
    description:
      "Engineered a password strength checker providing real-time feedback to users on password security through dynamic visual indicators and validation.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/shivxm17",
    live: "https://github.com/shivxm17",
    color: "neon-blue",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-background/50">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 flex flex-col items-center md:items-start text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-neon-purple to-neon-blue">
              Projects
            </span>
          </h2>
          <div className="h-1 w-20 bg-neon-blue rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500"
            >
              {/* Highlight gradient on hover */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-linear-to-br ${
                  project.color === "neon-blue"
                    ? "from-neon-blue to-transparent"
                    : "from-neon-purple to-transparent"
                }`}
              />

              <div className="p-8 h-full flex flex-col relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div
                    className={`p-4 rounded-2xl bg-${project.color}/10 text-${project.color}`}
                  >
                    <FolderGit2 size={32} />
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white/50 hover:text-white transition-colors"
                    >
                      <Github size={24} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white/50 hover:text-white transition-colors"
                    >
                      <ExternalLink size={24} />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-white/70 transition-all">
                  {project.title}
                </h3>

                <p className="text-white/60 mb-8 grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 text-white/70 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
