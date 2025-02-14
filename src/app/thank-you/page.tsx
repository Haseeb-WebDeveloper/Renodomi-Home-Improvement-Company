"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full mx-auto text-center space-y-8 bg-foreground/5 backdrop-blur-sm p-8 rounded-2xl border border-primary/10"
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-20 h-20 bg-primary/10 rounded-full mx-auto flex items-center justify-center"
        >
          <svg 
            className="w-10 h-10 text-primary" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 13l4 4L19 7"
            />
          </svg>
        </motion.div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Bedankt voor uw aanvraag!</h1>
          <p className="text-muted-foreground text-lg">
            We hebben uw aanvraag succesvol ontvangen. Een van onze experts neemt binnen 24 uur contact met u op om uw project te bespreken.
          </p>
        </div>

        {/* <div className="space-y-4">
          <div className="p-4 bg-primary/5 rounded-lg">
            <h2 className="font-medium mb-2">Wat kunt u verwachten?</h2>
            <ul className="text-muted-foreground space-y-2">
              <li>• Persoonlijk contact binnen 24-48 uur</li>
              <li>• Gedetailleerde bespreking van uw wensen</li>
              <li>• Vrijblijvende prijsindicatie</li>
              <li>• Professioneel advies op maat</li>
            </ul>
          </div>
        </div> */}

        <div className="pt-4">
          <Link href="/">
            <Button size="lg" className="min-w-[200px]">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-4 h-4 mr-2" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="m12 19-7-7 7-7"/>
                <path d="M19 12H5"/>
              </svg>
              Terug naar home
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
} 