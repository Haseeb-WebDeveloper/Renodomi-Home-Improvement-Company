"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <>
      <div id="hero" className="mt-20 flex flex-col items-center justify-center overflow-hidden">
        {/* Animated background patterns */}
        <div className="absolute inset-0 z-0">
          {/* <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" /> */}


          {/* <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/80 to-background" /> */}
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
            className="absolute -right-20 top-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute -left-20 bottom-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          />
        </div>

        {/* Main content */}
        <div className="relative z-10 container px-4  pt-8 pb-12 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"

          >
            <span className="inline-block py-1.5 px-4 rounded-full border border-primary/20 text-primary font-medium text-sm">
               Duurzame woningverbetering
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-5xl mx-auto text-4xl md:text-6xl lg:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
          >
            Specialist in{" "}
            <span className="text-primary">
            duurzame woningverbetering
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-muted-foreground text-lg md:text-xl mb-12 max-w-2xl mx-auto"
          >
           Met onze expertise in duurzame oplossingen helpen we huiseigenaren in Midden-Nederland hun woning toekomstbestendig te maken en de waarde te verhogen
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
          <Link href="#contact">
            <Button size="lg" className="text-base min-w-[250px] h-12">
              Aan de slag
              <motion.svg
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
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </motion.svg>
            </Button>
            </Link>
          </motion.div>
          {/* Bottom Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="relative h-[300px] md:h-[400px] mx-auto rounded-2xl overflow-hidden shadow-xl border border-border"
          >
            <Image
              src="/Banner.jpg"
              alt="Modern construction project"
              fill
              className="object-cover object-center hover:scale-105 transition-transform duration-700"
              quality={100}
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* New Features Section */}
      <div className="container mx-auto px-4 py-8 bg-foreground/5 rounded-lg">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-3 items-center"
        >
          <div className="flex items-center gap-3 justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12c0 1.2-4 6-9 6s-9-4.8-9-6c0-1.2 4-6 9-6s9 4.8 9 6Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <span className="">Subsidie-begeleiding</span>
          </div>
          <div className="flex items-center gap-3 justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span className="">Complete verduurzamingsoplossing</span>
          </div>
          <div className="flex items-center gap-3 justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span className=""> Startdatum binnen 2 weken</span>
          </div>
          <div className="flex items-center gap-3 justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="">Actief in Midden-Nederland</span>
          </div>
        </motion.div>
      </div>
    </>
  );
} 