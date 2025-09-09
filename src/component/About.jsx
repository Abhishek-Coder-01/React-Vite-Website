import React from 'react'

function About() {
  return (
           <section id="about" className="border-t border-[hsl(var(--border))] bg-[hsl(var(--card))]/50">
            <div className="container mx-auto px-6 py-16 md:py-24 grid gap-10 md:grid-cols-2 items-center">
                <div>
                    <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Designed around your palette</h3>
                    <p className="mt-4 text-[hsl(var(--foreground))/0.7]">The theme system maps primary actions to teal and
                        surfaces to ecru. Toggle dark mode to see the inverted palette in action.</p>
                    <div className="mt-6 flex items-center gap-3">
                        <span
                            className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]">T</span>
                        <span
                            className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))]">E</span>
                        <span className="text-sm text-[hsl(var(--foreground))/0.6]">Teal & Ecru</span>
                    </div>
                </div>
                <div className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6 shadow-sm">
                    <div className="flex items-center justify-between"><span className="text-sm font-semibold">Color
                            Tokens</span><span className="text-xs text-[hsl(var(--foreground))/0.6]">HSL</span></div>
                    <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                        <div className="space-y-2">
                            <div className="h-14 rounded-md bg-[hsl(var(--primary))]"></div>
                            <div className="flex items-center justify-between text-xs"><span
                                    className="font-medium">primary</span><span
                                    className="text-[hsl(var(--foreground))/0.7]">#0B545D</span></div>
                        </div>
                        <div className="space-y-2">
                            <div className="h-14 rounded-md bg-[hsl(var(--accent))]"></div>
                            <div className="flex items-center justify-between text-xs"><span
                                    className="font-medium">accent</span><span
                                    className="text-[hsl(var(--foreground))/0.7]">#EFF1E4</span></div>
                        </div>
                        <div className="space-y-2">
                            <div
                                className="h-14 rounded-md bg-[hsl(var(--background))] ring-1 ring-inset ring-[hsl(var(--border))]">
                            </div>
                            <div className="flex items-center justify-between text-xs"><span
                                    className="font-medium">background</span><span
                                    className="text-[hsl(var(--foreground))/0.7]">#EFF1E4</span></div>
                        </div>
                        <div className="space-y-2">
                            <div
                                className="h-14 rounded-md bg-[hsl(var(--foreground))/0.1] ring-1 ring-inset ring-[hsl(var(--border))]">
                            </div>
                            <div className="flex items-center justify-between text-xs"><span
                                    className="font-medium">foreground</span><span
                                    className="text-[hsl(var(--foreground))/0.7]">#0B545D</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default About
