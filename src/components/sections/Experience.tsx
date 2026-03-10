"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "B.E Information Technology",
    company: "Thakur College of Engineering and Technology - Mumbai",
    period: "May 2026",
    description:
      "Pursuing Bachelor of Engineering in Information Technology.",
  },
  {
    role: "Higher Secondary Certificate (HSC)",
    company: "Thakur College of Science & Commerce - Mumbai",
    period: "Mar 2022",
    description:
      "Completed Higher Secondary Education.",
  },
];

const technicalSkills = [
  { name: "HTML / CSS", percentage: 95 },
  { name: "JavaScript / React", percentage: 90 },
  { name: "Java / Python", percentage: 85 },
  { name: "FastAPI / Next.js", percentage: 80 },
  { name: "MongoDB / MySQL", percentage: 85 },
  { name: "AWS / Tooling", percentage: 80 },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              My <span className="text-neon-purple">Education</span>
            </h2>

            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-white/10 before:to-transparent">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-background group-hover:bg-neon-purple/20 group-hover:border-neon-purple shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow transition-colors z-10">
                    <div className="w-2 h-2 bg-neon-purple rounded-full group-hover:scale-150 transition-transform" />
                  </div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white/5 border border-white/10 group-hover:border-neon-purple/50 transition-colors"
                  >
                    <div className="flex flex-col mb-2">
                      <span className="text-neon-purple text-sm font-semibold tracking-wide uppercase">
                        {exp.period}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-1">
                        {exp.role}
                      </h3>
                      <span className="text-white/60">{exp.company}</span>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed mt-4">
                      {exp.description}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Core Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 lg:mb-16">
              Technical <span className="text-neon-blue">Fluency</span>
            </h2>

            <div className="space-y-8">
              {technicalSkills.map((skill, index) => (
                <div key={skill.name} className="relative">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-white/90 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-neon-blue font-mono text-sm">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden border border-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{
                        duration: 1.5,
                        delay: 0.2 + index * 0.1,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                      className="h-full bg-linear-to-r from-neon-blue to-neon-purple relative"
                    >
                      <div className="absolute top-0 right-0 bottom-0 w-10 bg-linear-to-r from-transparent to-white/30" />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
