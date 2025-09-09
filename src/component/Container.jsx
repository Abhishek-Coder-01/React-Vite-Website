import { useEffect, useState } from "react";
import { SignInButton } from "@clerk/clerk-react";
import { motion } from "framer-motion";

function Container() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const blobVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.7, 0.9, 0.7],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
      {/* Enhanced background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#EFF1E4]/20 via-[#0B545D]/10 to-[#0B545D]/20 z-0"></div>

      {/* Animated gradient effects */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70 z-0"
        style={{
          background:
            "radial-gradient(1200px 400px at -10% -20%, hsl(var(--primary)/0.15), transparent 60%), radial-gradient(800px 300px at 110% -10%, hsl(var(--primary)/0.15), transparent 60%)",
        }}
      ></div>

      {/* Animated blobs */}
      <motion.div
        className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[hsl(var(--primary))/0.15] blur-3xl"
        variants={blobVariants}
        animate="animate"
      ></motion.div>
      <motion.div
        className="absolute -right-24 -top-10 h-72 w-72 rounded-full bg-[hsl(var(--primary))/0.10] blur-3xl"
        variants={blobVariants}
        animate="animate"
        transition={{ delay: 1 }}
      ></motion.div>
      <motion.div
        className="absolute left-1/4 bottom-10 h-80 w-80 rounded-full bg-[#EFF1E4]/0.1 blur-3xl"
        variants={blobVariants}
        animate="animate"
        transition={{ delay: 2 }}
      ></motion.div>

      <div className="container mx-auto px-6 relative flex flex-col items-center py-16 sm:py-24 md:py-32 text-center z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Tagline */}
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center rounded-full bg-[hsl(var(--accent))] px-4 py-2 text-sm font-semibold text-[hsl(var(--accent-foreground))] ring-1 ring-inset ring-[hsl(var(--border))] mb-6 shadow-sm"
          >
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[hsl(var(--primary))] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[hsl(var(--primary))]"></span>
            </span>
            Built with care using #EFF1E4 and #0B545D
          </motion.span>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="heading-display mt-6 max-w-4xl text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--foreground))] to-[hsl(var(--primary))] leading-tight"
          >
            A fresh, modern design in a calming{" "}
            <span className="">teal</span> and{" "}
            <span className=" ">ecru</span> palette
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl text-lg sm:text-xl md:text-xl leading-8 text-[hsl(var(--foreground))/0.8]"
          >
            Crafted for performance and elegance — a production-ready, responsive website blending the depth of teal (#0B545D) with the softness of ecru (#EFF1E4).
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap justify-center items-center gap-4"
          >
            <SignInButton mode="modal">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-medium bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
              <span id="helo">Get Started</span>
                <svg
                  className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.button>
            </SignInButton>

            <motion.a
              href="#features"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center rounded-xl h-12 px-6 py-2 text-base font-medium border border-[hsl(var(--input))] bg-[hsl(var(--background))] hover:bg-[hsl(var(--accent))] transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Explore Features
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Stats section */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3 w-full max-w-3xl"
          >
            <div className="flex flex-col items-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-2xl font-bold text-[hsl(var(--primary))]">100%</div>
              <div className="text-sm text-[hsl(var(--foreground))/0.8]">Responsive</div>
            </div>
            <div className="flex flex-col items-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-2xl font-bold text-[hsl(var(--primary))]">SEO</div>
              <div className="text-sm text-[hsl(var(--foreground))/0.8]">Optimized</div>
            </div>
            <div className="flex flex-col items-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-2xl font-bold text-[hsl(var(--primary))]">Fast</div>
              <div className="text-sm text-[hsl(var(--foreground))/0.8]">Performance</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-[hsl(var(--foreground))/0.7] mb-2">Scroll down</span>
          <div className="w-6 h-10 border-2 border-[hsl(var(--foreground))/0.5] rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-[hsl(var(--primary))] rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Container;