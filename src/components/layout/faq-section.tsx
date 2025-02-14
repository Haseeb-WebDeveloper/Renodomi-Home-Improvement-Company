"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    question: "Bieden jullie een complete oplossing aan?",
    answer: (
      <>
        <p className="mb-4">
          Ja, bij Duradomi verzorgen we het complete traject van A tot Z. Dit betekent dat we:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>Het energielabel bepalen en advies geven</li>
          <li>De isolatie en systemen vakkundig aanbrengen</li>
          <li>Installaties en aansluitingen aanpassen</li>
          <li>De complete afwerking verzorgen</li>
          <li>De werkplek schoon en opgeruimd achterlaten</li>
        </ul>
        <p>U hoeft dus niet meerdere partijen in te schakelen; wij regelen alles voor u in één keer.</p>
      </>
    ),
  },
  {
    question: "Hoe lang duurt een verduurzamingsproject gemiddeld?",
    answer: (
      <>
        <p className="mb-4">
          Bij Duradomi starten we binnen 2 weken met uw project. De doorlooptijd hangt af van de gekozen maatregelen en de grootte van uw woning. Gemiddeld duurt:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>Isolatie (gevel, vloer, dak): 2-3 weken</li>
          <li>Ventilatie (WTW-systemen): 2-4 dagen</li>
          <li>Energiesystemen (warmtepompen): 2-3 dagen</li>
          <li>Glasisolatie (HR++, triple): 1-2 weken</li>
        </ul>
        <p>Door onze gestandaardiseerde werkwijze en ervaren teams kunnen we snel en efficiënt werken, zonder concessies te doen aan kwaliteit.</p>
      </>
    ),
  },
  {
    question: "Welke isolatiematerialen gebruiken jullie?",
    answer: "We werken uitsluitend met hoogwaardige, gecertificeerde isolatiematerialen die voldoen aan alle Nederlandse bouwnormen. De exacte materiaalkeuze hangt af van uw specifieke situatie en wensen.",
  },
  {
    question: "Kan ik subsidie krijgen voor verduurzaming?",
    answer: "Ja, voor veel verduurzamingsmaatregelen zijn er subsidies beschikbaar via de overheid. Als erkend verduurzamingsbedrijf helpen we u graag bij het aanvragen van deze subsidies. We begeleiden u door het hele proces en zorgen ervoor dat u optimaal gebruik maakt van de beschikbare regelingen.",
  },
  {
    question: "Wat is de terugverdientijd van verduurzaming?",
    answer: (
      <>
        <p className="mb-4">
          De terugverdientijd verschilt per type maatregel en situatie, maar ligt meestal tussen de 3 en 7 jaar. Factoren die hierop van invloed zijn:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Het type verduurzaming</li>
          <li>De huidige staat van uw woning</li>
          <li>Uw energieverbruik</li>
          <li>Energieprijzen</li>
        </ul>
      </>
    ),
  },
  {
    question: "Welke garanties bieden jullie?",
    answer: "Wij geven garantie op onze werkzaamheden. De exacte garantietermijn is afhankelijk van het type renovatie en de gebruikte materialen. Bij het bouwvoorstel ontvangt u een uitgebreid garantieoverzicht met alle details.",
  },
  {
    question: "Kan er tijdens de winter geïsoleerd worden?",
    answer: "Ja, we kunnen het hele jaar door isoleren. Onze materialen en technieken zijn geschikt voor alle weersomstandigheden.",
  },
  {
    question: "Moet ik thuis zijn tijdens de werkzaamheden?",
    answer: "Het is niet noodzakelijk om de hele dag thuis te zijn tijdens de werkzaamheden. Wel vragen we u aanwezig te zijn bij de start van de werkdag voor eventuele laatste afstemming en aan het einde voor een eindcontrole en oplevering.",
  },
];

function FAQItem({ question, answer, isOpen, onToggle, index }: { question: string; answer: React.ReactNode; isOpen: boolean; onToggle: () => void; index: number; }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div 
        className={`
          border-b border-primary/10 
          transition-colors duration-300
          ${isOpen ? 'bg-primary/[0.02]' : ''}
        `}
      >
        <button
          onClick={onToggle}
          className="w-full py-6 flex items-center justify-between gap-4 text-left"
        >
          <span className="text-lg font-medium">{question}</span>
          <div className={`
            flex-shrink-0 w-6 h-6 rounded-full 
            flex items-center justify-center
            transition-colors duration-300
            ${isOpen ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'}
          `}>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {isOpen ? (
                  <path d="m18 15-6-6-6 6"/>
                ) : (
                  <path d="m6 9 6 6 6-6"/>
                )}
              </svg>
            </motion.div>
          </div>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pb-6 text-muted-foreground">
                {answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 ">
      <div className="container relative mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold mb-4">
            Veelgestelde vragen
            </h2>
            <p className="text-muted-foreground">
            Vind antwoorden op veelgestelde vragen over onze isolatiediensten
            </p>
          </motion.div>


          {/* FAQ List */}
          <div className="divide-y divide-primary/10">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                index={index}
              />
            ))}
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 pt-8 text-center border-t border-primary/10"
          >
            <Link href="#contact" className="text-muted-foreground">
              Kan je niet vinden wat je zoekt? 
              <Link href="#contact" className="text-primary hover:text-primary/80 font-medium ml-2 transition-colors">
                Neem contact op
              </Link>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 