"use client";

import { motion } from "framer-motion";
import { HomePageData } from "@/lib/sanity/fetch";

interface HowWeWorkSectionProps {
  data?: HomePageData;
}

const getHowWeWorkIcon = (index: number, iconName?: string) => {
  const icons = [
    <svg key={0} xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>,
    <svg key={1} xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>,
    <svg key={2} xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>,
    <svg key={3} xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>,
  ];
  return icons[index % icons.length];
};

const defaultSteps = [
  {
    title: "Professionele aanpak",
    description: "Elk project start met een grondige opname, gevolgd door een gedetailleerd plan van aanpak en duidelijke offerte.",
    iconName: undefined,
  },
  {
    title: "Volledige ontzorging",
    description: "Wij werken met regelmatige updates en duidelijke communicatie gedurende het hele project.",
    iconName: undefined,
  },
  {
    title: "Gestandaardiseerde aanpak", 
    description: "Door onze efficiënte werkwijze kunnen we projecten effectief en kwalitatief goed uitvoeren.",
    iconName: undefined,
  },
  {
    title: "Kwaliteitsgarantie",
    description: "We werken met professionele teams en hoogwaardige materialen.",
    iconName: undefined,
  },
];

export function HowWeWorkSection({ data }: HowWeWorkSectionProps) {
  const howWeWorkTitle = data?.howWeWorkTitle || "Onze Werkwijze";
  const howWeWorkDescription = data?.howWeWorkDescription || "Bij Renodomi staat kwaliteit en efficiëntie voorop. Als specialist in woningverbetering bieden wij een all-in-one oplossing waarbij we het hele proces van A tot Z verzorgen";
  const howWeWorkSteps = data?.howWeWorkSteps || defaultSteps;
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
          <h2 className="text-4xl font-bold mb-6">{howWeWorkTitle}</h2>
          <p className="text-muted-foreground text-lg">
            {howWeWorkDescription}
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {howWeWorkSteps.map((step, index) => (
            <motion.div
              key={step.title || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`relative z-10 bg-foreground/5 backdrop-blur-lg rounded-2xl p-8 h-full border border-primary/10 hover:border-primary/20 transition-colors`}>
                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary ">
                    {getHowWeWorkIcon(index, step.iconName || undefined)}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 border border-primary/50 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 rounded-2xl" />
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