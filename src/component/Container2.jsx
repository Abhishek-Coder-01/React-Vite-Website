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

// New FeatureCard component for reusability
const FeatureCard = ({ icon, title, description, index }) => (
  <motion.div
    className="group relative rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6 shadow-sm overflow-hidden h-full"
    variants={itemVariants}
    initial="rest"
    whileHover="hover"
    animate="rest"
    custom={index}
  >
    {/* Hover effect background */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#0B545D]/5 via-[#EFF1E4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

    {/* Animated border effect on hover */}
    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <div className="absolute -inset-1 bg-gradient-to-r from-[#0B545D]/30 to-[#EFF1E4]/30 rounded-2xl blur-sm group-hover:blur-md transition-all duration-500"></div>
    </div>

    <motion.div variants={tiltVariants} className="relative h-full flex flex-col">
      <div className="flex items-center gap-4 mb-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0B545D]/10 to-[#EFF1E4]/10 text-[hsl(var(--primary))] ring-1 ring-inset ring-[hsl(var(--border))] group-hover:scale-110 transition-transform duration-300 shadow-sm">
          {icon}
        </div>
        <h3 className="text-lg font-semibold tracking-tight text-[hsl(var(--foreground))]">{title}</h3>
      </div>
      <p className="mt-2 text-sm text-[hsl(var(--muted-foreground))] flex-grow">
        {description}
      </p>

      {/* Learn more link */}
      <div className="mt-4 pt-4 border-t border-[hsl(var(--border))]">
        <a href="#" className="inline-flex items-center text-xs font-medium text-[hsl(var(--primary))] hover:text-[hsl(var(--primary))/0.8] transition-colors duration-300">
          Learn more
          <svg className="ml-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </motion.div>
  </motion.div>
);

function Container2() {
  const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="#facc15">
  <polygon points="12,2 15,9 22,9 17,14 18.5,21 12,17 5.5,21 7,14 2,9 9,9" />
</svg>

    ),
    title: "Brand‑first theming",
    description: "All components inherit from CSS variables mapped to your two brand colors with extended palette support."
  },
  {
    icon: (
     <svg viewBox="0 0 24 24" className="h-6 w-6">
  {/* Start color */}
  <rect x="3" y="4" width="7" height="16" rx="2" fill="#f43f5e" />  
  {/* End color */}
  <rect x="14" y="7" width="7" height="10" rx="2" fill="#3b82f6" /> 
</svg>

    ),
    title: "Responsive by default",
    description: "Fluid typography, flexible layouts, and mobile‑first breakpoints that adapt to any screen size."
  },
  {
    icon: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" strokeWidth="2">
  <path
    d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"
    fill="url(#gradPink)"
    stroke="none"
  />
  <defs>
    <linearGradient id="gradPink" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stopColor="#ff9ce0" />   {/* light pink */}
      <stop offset="50%" stopColor="#f43f5e" />  {/* bright pink */}
      <stop offset="100%" stopColor="#d946ef" /> {/* purple-pink */}
    </linearGradient>
  </defs>
</svg>


    ),
    title: "Accessible and fast",
    description: "High contrast, keyboard friendly, and optimized for performance with lazy loading capabilities."
  },
  {
    icon: (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" strokeWidth="2">
  <path
    d="M4 6h16M4 12h16M4 18h16"
    stroke="url(#gradMenu)"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <defs>
    <linearGradient id="gradMenu" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stopColor="#facc15" />   {/* yellow */}
      <stop offset="50%" stopColor="#f43f5e" />  {/* red */}
      <stop offset="100%" stopColor="#3b82f6" /> {/* blue */}
    </linearGradient>
  </defs>
</svg>


    ),
    title: "Developer friendly",
    description: "Clean, well-documented code with TypeScript support and easy customization options."
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="#3b82f6" strokeWidth="2">
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
  />
</svg>

    ),
    title: "Secure by design",
    description: "Built with security best practices and regular updates to protect your application."
  },
  {
    icon: (
     <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="#14b8a6" strokeWidth="2">
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
  />
</svg>

    ),
    title: "Collaboration ready",
    description: "Designed for team workflows with version control and collaborative editing support."
  }
];


  return (
    <motion.section
      id="features"
      className="relative container mx-auto px-4 sm:px-6 py-16 md:py-24 lg:py-32 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[hsl(var(--background))] via-[hsl(var(--background))] to-[#0B545D]/0.03 opacity-90"></div>

      {/* Animated decorative elements */}
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#0B545D]/5 blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-[#EFF1E4]/5 blur-3xl animate-pulse-slow delay-1000"></div>

      <motion.div className="mx-auto max-w-4xl text-center mb-16" variants={itemVariants}>
        <div
          className="inline-flex items-center rounded-full bg-[hsl(var(--accent))] px-4 py-2 text-sm font-semibold text-[hsl(var(--accent-foreground))] ring-1 ring-inset ring-[hsl(var(--border))] mb-6 shadow-sm"
        >
          <div className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[hsl(var(--primary))] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[hsl(var(--primary))]"></span>
          </div>
          Powerful Features
        </div>

        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-[#0B545D] dark:text-[hsl(var(--foreground))]">
          Thoughtful details, polished experience
        </h2>
        <p className="mt-6 text-lg md:text-xl text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
          Carefully tuned spacing, accessible color contrast, and a cohesive system driven by Tailwind tokens and modern design principles.
        </p>
      </motion.div>

      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
      >
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            index={index}
          />
        ))}
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="bg-gradient-to-r from-[#EFF1E4]/10 to-[#0B545D]/10 rounded-2xl p-8 md:p-12 border border-[hsl(var(--border))]">
          <h3 className="text-2xl font-bold text-[hsl(var(--foreground))] mb-4">Ready to get started?</h3>
          <p className="text-[hsl(var(--muted-foreground))] mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied users who have enhanced their projects with our design system.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-medium bg-[#0B545D] text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
              Get Started
              <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-medium border border-[hsl(var(--input))] bg-[hsl(var(--background))] text-[hsl(var(--foreground))] hover:bg-[hsl(var(--accent))] transition-all duration-300">
              View Documentation
            </button>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Container2;