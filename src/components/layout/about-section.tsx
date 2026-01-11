"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HomePageData } from "@/lib/sanity/fetch";
import { urlFor } from "@/lib/sanity/client";

interface AboutSectionProps {
  data?: HomePageData;
}

export function AboutSection({ data }: AboutSectionProps) {
  const aboutTitle = data?.aboutTitle || "Over ons";
  const aboutContent = data?.aboutContent || [
    { paragraph: "Renodomi helpt eigenaren om hun woning klaar te maken voor de toekomst. Als specialist in het verduurzamen en verhuur- of verkoopklaar maken van woningen combineren wij verduurzaming en renovatie in één duidelijk traject. Eén aanspreekpunt, vaste pakketten en volledig ontzorgd." },
    { paragraph: "Of het nu gaat om isolatie, installaties, schilderwerk of afwerking — wij regelen het van begin tot eind. Van de eerste opname tot de laatste afwerking: wij voeren dit snel, efficient en professioneel uit." },
    { paragraph: "Bij Renodomi krijgt u een ervaren team dat uw project van begin tot eind begeleidt. We houden u doorlopend op de hoogte van planning en voortgang, en onze projectleiders zijn altijd bereikbaar voor vragen. Ze zorgen voor een soepele uitvoering van alle werkzaamheden." },
    { paragraph: "Resultaat staat bij ons voorop. We werken met efficiënte renovatiepakketten die we nauwkeurig afstemmen op uw situatie, waardoor we zowel kwaliteit als een snelle doorlooptijd garanderen." },
  ];
  const aboutImage = data?.aboutImage;
  const aboutCtaText = data?.aboutCtaText || "Ontvang uw gratis offerte";

  const aboutImageUrl = aboutImage?.asset ? urlFor(aboutImage).url() : "/square-picture.jpg";
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
            <div className="relative h-[550px] rounded-xl overflow-hidden">
              <Image
                src={aboutImageUrl}
                alt={aboutImage?.alt || "Professional insulation work"}
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
            <h2 className="text-4xl font-bold mb-8">{aboutTitle}</h2>

            <div className="space-y-6 text-muted-foreground">
              {aboutContent.map((content, index) => (
                <p key={index}>{content.paragraph}</p>
              ))}
            </div>

            {/* CTA Section */}
            <Link href="#contact">
              <Button size="lg" className="w-full sm:w-auto mt-8 bg-foreground/90 text-background hover:bg-foreground/80">
                {aboutCtaText}
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
