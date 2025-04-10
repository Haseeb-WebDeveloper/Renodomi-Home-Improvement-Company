"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    title: "Verduurzaming",
    paragraph: "Verbeter het energielabel en verlaag de energiekosten van uw woning",
    image: "/isolatie.jpg",
    features: [
      "Isolatie en glas",
      "Ventilatie",
      "Energiesystemen"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20" />
        <path d="m4 14 8-8 8 8" />
        <path d="M14 14v6" />
      </svg>
    ),
    link:"https://duradomi.nl/"
  },
  {
    title: "Verhuur/verkoop renovatie",
    paragraph: "Uw woning optimaal voorbereiden voor de verhuur- of verkoopmarkt",
    image: "/Verhuurklaar.jpg",
    features: [
      "Vloeren en stuc-/schilderwerk",
      "Badkamers en keukens",
      "Afwerking"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 9h18" />
        <path d="M3 15h18" />
      </svg>
    ),
      link:"#contact"
  },
  {
    title: "Totaal renovatie",
    paragraph: "Complete transformatie van uw woning, inclusief verduurzaming en optimalisatie voor verhuur of verkoop",
    image: "/Energysystemen.jpg", 
    features: [
      "Woningsplitsing",
      "Herindeling",
      "Complete verduurzaming",
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 15h18" />
      </svg>
    ),
      link:"#contact"
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-20 overflow-hidden bg-foreground/5">
    <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Onze Diensten
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-full"
            >
              {/* Service Card */}
              <div className="relative bg-background/50 backdrop-blur-sm rounded-2xl border overflow-hidden border-border h-full flex flex-col justify-between">
                <div>
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.paragraph}</p>
                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-2 text-muted-foreground"
                        >
                          <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Button */}
                <div className="p-6 pt-0">
                  <Link
                    href={service.link}
                    className="flex items-center justify-center px-4 py-2 rounded-md bg-foreground/90 text-background w-full group-hover:bg-foreground/80 group-hover:text-primary-foreground transition-colors"
                  >
                    Contact Ons
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}