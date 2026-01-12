"use client";

import { motion } from "framer-motion";
import { HomePageData, HomePageWhyChooseFeature } from "@/lib/sanity/fetch";

interface WhyChooseSectionProps {
  data?: HomePageData;
}

const getWhyChooseIcon = (index: number, iconName?: string) => {
  const icons = [
    <svg key={0} xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>,
    <svg key={1} xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>,
    <svg key={2} xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>,
    <svg key={3} xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20"/>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H7"/>
      <path d="M22 19h-1"/>
      <path d="M2 19h1"/>
    </svg>,
  ];
  return icons[index % icons.length];
};

const defaultFeatures: HomePageWhyChooseFeature[] = [
  {
    title: "Eén aanspreekpunt",
    description: "Alles geregeld via één partij.",
  },
  {
    title: "Turnkey uitvoering",
    description: "Wij nemen de volledige ontzorging uit handen van planning tot oplevering",
  },
  {
    title: "Snel resultaat",
    description: "Wij zorgen dat de woning in korte tijd klaar is voor verhuur of verkoop",
  },
  {
    title: "Maximaal rendement",
    description: "Wij maken de woning klaar voor een snellere verhuur, hogere huur en minimale leegstand.",
  },
];

export default function WhyChooseSection({ data }: WhyChooseSectionProps) {
  const whyChooseTitle = data?.whyChooseTitle || "Waarom kiezen voor renodomi";
  const whyChooseSubtitle = data?.whyChooseSubtitle || "Bij Renodomi krijgt u een volledig turnkey oplossing";
  const whyChooseFeatures = data?.whyChooseFeatures || defaultFeatures;
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
            {whyChooseTitle}
          </h2>
          <p className="text-muted-foreground">
            {whyChooseSubtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {whyChooseFeatures.map((feature, index) => (
            <motion.div
              key={feature.title || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative z-10 h-full p-8 rounded-2xl bg-background border border-primary/10 hover:border-primary/20 transition-colors">
                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-6 inline-flex items-center justify-center p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primarys">
                    {getWhyChooseIcon(index, feature.iconName)}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 border border-primary/50 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}