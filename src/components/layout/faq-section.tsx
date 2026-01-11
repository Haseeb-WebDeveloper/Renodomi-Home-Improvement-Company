"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { PortableText } from "@portabletext/react";
import { HomePageData } from "@/lib/sanity/fetch";

interface FAQSectionProps {
  data?: HomePageData;
}

const defaultFaqs = [
  {
    question: "Wat houdt een verhuur/verkoop renovatie in?",
    answer: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Een verhuur/verkoop renovatie is een gerichte renovatie om uw woning optimaal voor te bereiden op de verhuur- of verkoopmarkt. We focussen hierbij op werkzaamheden die de waarde en aantrekkelijkheid van uw woning maximaal verhogen, zoals het moderniseren van sanitair, upgraden van de keuken en het verbeteren van de algemene uitstraling. Deze renovaties worden efficiënt uitgevoerd volgens onze gestandaardiseerde aanpak, waardoor we efficient kunnen opleveren.",
          },
        ],
      },
    ],
  },
  {
    question: "Hoe lang duurt een renovatieproject gemiddeld?",
    answer: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "De doorlooptijd hangt af van de omvang van het project: Verduurzaming: 2-3 weken, Verhuur/verkoop renovatie: 1-3 weken, Totaal renovatie: 6-8 weken",
          },
        ],
      },
    ],
  },
  {
    question: "Kan ik subsidie krijgen voor renovatie?",
    answer: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Voor bepaalde renovatiewerkzaamheden zijn er subsidies beschikbaar. We helpen u graag bij het verkennen van de mogelijkheden en het aanvragen van beschikbare subsidies.",
          },
        ],
      },
    ],
  },
  {
    question: "Moet ik thuis zijn tijdens de werkzaamheden?",
    answer: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Het is niet noodzakelijk om de hele dag thuis te zijn. Wel vragen we u aanwezig te zijn bij de start en oplevering van het project.",
          },
        ],
      },
    ],
  },
  {
    question: "Welke garanties bieden jullie?",
    answer: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Wij geven garantie op al onze werkzaamheden. De exacte garantietermijn is afhankelijk van het type renovatie en de gebruikte materialen. Bij het bouwvoorstel ontvangt u een uitgebreid garantieoverzicht met alle details.",
          },
        ],
      },
    ],
  },
];

function FAQItem({ question, answer, isOpen, onToggle, index }: { question: string; answer: any[]; isOpen: boolean; onToggle: () => void; index: number; }) {
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
                <PortableText value={answer} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export function FAQSection({ data }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqTitle = data?.faqTitle || "Veelgestelde vragen";
  const faqSubtitle = data?.faqSubtitle || "Vind antwoorden op veelgestelde vragen over onze diensten";
  const faqs = data?.faqs || defaultFaqs;
  const faqContactLinkText = data?.faqContactLinkText || "Neem contact op";

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
              {faqTitle}
            </h2>
            <p className="text-muted-foreground">
              {faqSubtitle}
            </p>
          </motion.div>

          {/* FAQ List */}
          <div className="divide-y divide-primary/10">
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.question || index}
                question={faq.question}
                answer={faq.answer || []}
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
            <span className="text-muted-foreground">
              Kan je niet vinden wat je zoekt?{" "}
              <Link href="#contact" className="text-primary hover:text-primary/80 font-medium ml-2 transition-colors">
                {faqContactLinkText}
              </Link>
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 