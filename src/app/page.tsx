"use client";

import { motion } from "framer-motion";

// --- MODULES IMPORTS ---
import { Hero } from "@/components/modules/hero";
import { Stats } from "@/components/modules/stats";
import { TechStack } from "@/components/modules/tech-stack";
import { Featured } from "@/components/modules/featured";
import ContactSection from "@/components/modules/contact";

export default function Home() {
  // Config Animasi Wrapper
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full pb-10 space-y-20"
    >
      {/* 1. HERO SECTION */}
      <motion.div variants={itemVariants}>
        <Hero />
      </motion.div>

      {/* 2. STATS OVERVIEW */}
      <motion.div variants={itemVariants}>
        <Stats />
      </motion.div>

      {/* 3. TECH STACK */}
      <motion.div variants={itemVariants}>
        <TechStack />
      </motion.div>

      {/* 4. FEATURED / NAVIGATION */}
      <motion.div variants={itemVariants}>
        <Featured />
      </motion.div>

      {/* 5. CONTACT */}
      <motion.div
        variants={itemVariants}
        id="contact"
        className="pt-8 border-t border-zinc-200 dark:border-zinc-800/50"
      >
        <ContactSection />
      </motion.div>
    </motion.div>
  );
}
