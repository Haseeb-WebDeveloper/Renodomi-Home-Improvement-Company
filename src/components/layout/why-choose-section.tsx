"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Verbeterd wooncomfort",
    description: "Geniet van een aangenamer binnenklimaat het hele jaar door",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z"/>
        <path d="M8 12h8"/>
        <path d="M12 16V8"/>
      </svg>
    ),
  },
  {
    title: "Waardestijging van uw woning",
    description: "Verhoog de marktwaarde van uw woning met duurzame verbeteringen",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18"/>
        <path d="M19 21v-8a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v8"/>
        <path d="M13 13h4"/>
        <path d="M13 17h4"/>
        <path d="m5 21 8-8v-4"/>
        <path d="M2 10V3h3v7"/>
        <path d="M15 5V3h3v7"/>
      </svg>
    ),
  },
  {
    title: "Verlaging energiekosten",
    description: "Bespaar significant op uw maandelijkse energierekening",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H7"/>
        <path d="M16 19h1"/>
        <path d="M7 5h1"/>
      </svg>
    ),
  },
  {
    title: "Temperatuurregulatie",
    description: "Behoud een constante, aangename temperatuur in elk seizoen",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 9a4 4 0 0 0-2 7.5"/>
        <path d="M12 3v2"/>
        <path d="M6.6 18.4"/>
        <path d="M20 12h2"/>
        <path d="M4 12H2"/>
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 16v3"/>
      </svg>
    ),
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-20 bg-foreground/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-4xl font-bold mb-2">
            Waarom kiezen voor isoleren:
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative z-10 h-full p-8 rounded-2xl bg-background border border-primary/10 hover:border-primary/20 transition-colors">
                {/* Decorative gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 border border-primary/50 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}