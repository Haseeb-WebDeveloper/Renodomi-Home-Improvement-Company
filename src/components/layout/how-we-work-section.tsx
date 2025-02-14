"use client";

import { motion } from "framer-motion";

const steps = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    title: "Professionele aanpak",
    description: "Elk project start met een grondige opname, gevolgd door een gedetailleerd plan van aanpak en duidelijke offerte.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Volledige ontzorging",
    description: "Wij werken met regelmatige updates en duidelijke communicatie gedurende het hele project, zodat u altijd op de hoogte bent van de voortgang.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
        <path d="M12 8v4" /><path d="M12 16h.01" />
      </svg>
    ),
    title: "Gestandaardiseerde aanpak",
    description: "Door onze efficiënte werkwijze en bewezen optimalisatie-pakketten kunnen we projecten, zowel effectief als kwalitatief goed uitvoeren.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Kwaliteitsgarantie",
    description: "We werken met professionele teams en hoogwaardige materialen om het beste resultaat te leveren aan onze klanten.",
  },
];

export function HowWeWorkSection() {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background decorative elements */}
      {/* <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
      <div className="absolute inset-y-0 right-0 w-1/3 bg-primary/5 blur-3xl rounded-l-full" />
      <div className="absolute inset-y-0 left-0 w-1/3 bg-primary/5 blur-3xl rounded-r-full" /> */}

      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-4xl font-bold mb-6">Onze Werkwijze</h2>
          <p className="text-muted-foreground text-lg">
          Bij Duradomi staat kwaliteit en efficiëntie voorop. Als specialist in woningverbetering en verduurzaming bieden wij een all-in-one oplossing waarbij we het hele proces van A tot Z verzorgen</p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`relative z-10 bg-foreground/5 backdrop-blur-lg rounded-2xl p-8 h-full border border-primary/10 hover:border-primary/20 transition-colors`}>
                {/* Decorative gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl transition-opacity group-hover:opacity-100 opacity-0" />



                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 border border-primary/50 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative Line */}
        {/* <div className="mt-20 relative">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          />
        </div> */}
      </div>
    </section>
  );
} 