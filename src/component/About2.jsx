import React, { useState } from 'react';
import { motion } from 'framer-motion';

function About2() {
    const [hoveredButton, setHoveredButton] = useState(null);

    return (
        <section id="get-started" className="relative isolate overflow-hidden">
            <div className="container mx-auto px-6 py-16 md:py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary))/0.9]  shadow-2xl relative"
                >
                    {/* Background pattern */}
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNykiIHN0cm9rZS13aWR0aD0iMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>

                    {/* Animated gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-gradient-x"></div>

                    <div className="px-6 py-10 md:px-12 md:py-16 grid gap-8 md:grid-cols-2 items-center relative z-10 ">
                        <div>
                            <motion.h3
                                className="text-2xl font-bold sm:text-4xl"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                Ready to build something amazing?
                            </motion.h3>
                            <motion.p
                                className="mt-4 text-lg opacity-90"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                This foundation is production‑ready and easily extensible. Get started in minutes.
                            </motion.p>
                        </div>

                        <motion.div
                            className="flex flex-wrap items-center gap-4 md:justify-end"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onHoverStart={() => setHoveredButton('primary')}
                                onHoverEnd={() => setHoveredButton(null)}
                                className="relative rounded-lg h-12 px-8 font-medium bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] shadow-lg flex items-center gap-2 overflow-hidden group border border-[hsl(var(--secondary-foreground))]"
                            >
                                <a href="#helo" className="relative z-10">Start now</a>
                                <svg
                                    className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                                {hoveredButton === 'primary' && (
                                    <motion.div
                                        className="absolute inset-0 bg-white/10"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    />
                                )}
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onHoverStart={() => setHoveredButton('secondary')}
                                onHoverEnd={() => setHoveredButton(null)}
                                className="relative rounded-lg h-12 px-6 font-medium border  bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors flex items-center gap-2 overflow-hidden group border-[hsl(var(--secondary-foreground))]"
                            >
                                <span className="relative z-10">Learn more</span>
                                <svg
                                    className="w-5 h-5 relative z-10"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                                {hoveredButton === 'secondary' && (
                                    <motion.div
                                        className="absolute inset-0 bg-white/10"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    />
                                )}
                            </motion.button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            
        </section>
    );
}

export default About2;