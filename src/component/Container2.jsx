import React from 'react';
import { motion } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const tiltVariants = {
  rest: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.03,
    rotate: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

function Container2() {
  return (
    <motion.section 
      id="features" 
      className="relative container mx-auto px-6 py-16 md:py-24 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[hsl(var(--background))] via-[hsl(var(--background))] to-[hsl(var(--primary))/0.03] opacity-70"></div>
      
      <motion.div className="mx-auto max-w-2xl text-center" variants={itemVariants}>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--foreground))] to-[hsl(var(--primary))]">
          Thoughtful details, polished experience
        </h2>
        <p className="mt-3 text-[hsl(var(--muted-foreground))] text-lg">
          Carefully tuned spacing, accessible color contrast, and a cohesive system driven by Tailwind tokens.
        </p>
      </motion.div>
      
      <motion.div 
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
      >
        {/* Feature Card 1 */}
        <motion.div
          className="group relative rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6 shadow-sm overflow-hidden"
          variants={itemVariants}
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          {/* Hover effect background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary))/0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <motion.div variants={tiltVariants} className="relative">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[hsl(var(--primary))/0.1] text-[hsl(var(--primary))] ring-1 ring-inset ring-[hsl(var(--primary))/0.2] group-hover:scale-110 transition-transform duration-300">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 3v18M3 12h18" />
                </svg>
              </div>
              <h3 className="text-base font-semibold tracking-tight">Brand‑first theming</h3>
            </div>
            <p className="mt-3 text-sm text-[hsl(var(--muted-foreground))]">
              All components inherit from CSS variables mapped to your two brand colors.
            </p>
          </motion.div>
        </motion.div>

        {/* Feature Card 2 */}
        <motion.div
          className="group relative rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6 shadow-sm overflow-hidden"
          variants={itemVariants}
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          {/* Hover effect background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary))/0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <motion.div variants={tiltVariants} className="relative">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[hsl(var(--primary))/0.1] text-[hsl(var(--primary))] ring-1 ring-inset ring-[hsl(var(--primary))/0.2] group-hover:scale-110 transition-transform duration-300">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="7" height="16" rx="2" />
                  <rect x="14" y="7" width="7" height="10" rx="2" />
                </svg>
              </div>
              <h3 className="text-base font-semibold tracking-tight">Responsive by default</h3>
            </div>
            <p className="mt-3 text-sm text-[hsl(var(--muted-foreground))]">
              Fluid typography, flexible layouts, and mobile‑first breakpoints.
            </p>
          </motion.div>
        </motion.div>

        {/* Feature Card 3 */}
        <motion.div
          className="group relative rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6 shadow-sm overflow-hidden"
          variants={itemVariants}
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          {/* Hover effect background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary))/0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <motion.div variants={tiltVariants} className="relative">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[hsl(var(--primary))/0.1] text-[hsl(var(--primary))] ring-1 ring-inset ring-[hsl(var(--primary))/0.2] group-hover:scale-110 transition-transform duration-300">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <h3 className="text-base font-semibold tracking-tight">Accessible and fast</h3>
            </div>
            <p className="mt-3 text-sm text-[hsl(var(--muted-foreground))]">
              High contrast, keyboard friendly, and optimized for performance.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Container2;