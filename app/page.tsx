"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Menu } from "lucide-react";
import Link from "next/link";
import { MirraText } from "@/components/ui/MirraText";

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.32, 1], // cubic-bezier(0.16, 1, 0.32, 1)
      },
    },
  };

  return (
    <main className="flex-1 flex flex-col bg-background min-h-screen relative overflow-hidden">
      {/* Navigation Bar */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.32, 1], delay: 0.2 }}
        className="w-full flex justify-between items-center px-12 md:px-24 py-8 z-20 absolute top-0"
      >
        <div className="font-serif text-2xl tracking-widest text-foreground">MIRRA</div>
        <button className="text-foreground hover:text-accent-gold transition-colors duration-500">
          <Menu className="w-6 h-6" />
        </button>
      </motion.nav>

      {/* Main Content Centered */}
      <div className="flex-1 flex flex-col justify-center items-center px-12 md:px-24 w-full h-full text-center z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mt-20"
        >
          <motion.div variants={itemVariants}>
            <MirraText variant="editorial" className="mb-4">
              She was denied.
            </MirraText>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <MirraText variant="editorial" className="text-foreground/70">
              The data says she shouldn't have been.
            </MirraText>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-24 flex justify-center">
            <Link href="/domain-selection" className="group flex items-center justify-center gap-4 text-sm font-sans uppercase tracking-widest text-foreground border border-divider px-12 py-4 hover:border-accent-gold hover:text-accent-gold transition-colors duration-500 w-fit">
              <span>Run an audit</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.32,1)]" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle architectural dividers */}
      <div className="absolute top-0 bottom-0 left-8 md:left-16 mirra-divider-vertical opacity-50 z-0" />
      <div className="absolute top-0 bottom-0 right-8 md:right-16 mirra-divider-vertical opacity-50 z-0" />
      <div className="absolute bottom-16 left-0 right-0 mirra-divider opacity-50 z-0" />
    </main>
  );
}
