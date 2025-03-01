"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function AboutSection() {
  return (
    <section id="about" className="relative pt-16 pb-24">
      <div className="container relative mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative h-[450px] rounded-xl overflow-hidden">
              <Image
                src="/square-picture.jpg"
                alt="Professional insulation work"
                fill
                className="object-cover"
                quality={100}
              />
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            </div>

            {/* Stats */}
            {/* <div className="absolute bottom-6 right-6 bg-background/80 backdrop-blur-lg rounded-xl p-6 shadow-lg">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary">€85/m²</div>
                  <div className="text-sm text-muted-foreground">Prijs per m²</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Jaren ervaring</div>
                </div>
              </div>
            </div> */}

          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className=""
          >
            <h2 className="text-4xl font-bold mb-8">Over ons</h2>
            

            <div className="space-y-6 text-muted-foreground">
              <p>
              Renodomi is een gespecialiseerd renovatiebedrijf dat zich richt op het verbeteren van woningen en bedrijfspanden in heel midden-Nederland. Als expert in woningverbetering hebben we ruime ervaring in de renovatiebranche.
              </p>
              
              <p>
              Onze missie is om huiseigenaren te helpen hun woning te moderniseren en de waarde te verhogen. Dit doen we door het leveren van hoogwaardige renovatie-oplossingen, uitgevoerd door ons vakkundige team.
              </p>
              
              <p>
              Bij Renodomi begrijpen we dat elke woning uniek is. Daarom bieden we persoonlijk advies en maatwerk oplossingen die perfect aansluiten bij uw situatie en wensen. Van de eerste inspectie tot de laatste afwerking, u kunt rekenen op onze professionele aanpak en kwaliteitsgarantie.
              </p>

            </div>

            {/* CTA Section */}
              <Link href="#contact">
              <Button size="lg" className="w-full sm:w-auto mt-8 bg-foreground/90 text-background hover:bg-foreground/80">
                 Ontvang uw gratis offerte
                <svg

                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Button>
              </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
