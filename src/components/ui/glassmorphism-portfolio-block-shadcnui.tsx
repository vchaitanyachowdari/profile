"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useTransform, Variants } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Twitter,
  Zap,
  Globe,
  Bot,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { useEffect, useState } from "react";

type Highlight = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type SocialLink = {
  label: string;
  handle: string;
  href: string;
  icon: LucideIcon;
};

const highlights: Highlight[] = [
  {
    title: "Founder & CEO",
    description: "Leading VC AI Creator and Commonly Technologies to redefine enterprise automation.",
    icon: Sparkles,
  },
  {
    title: "AI Specialist",
    description: "Architecting production-grade multi-agent pipelines and intelligent workflows.",
    icon: Bot,
  },
  {
    title: "GEO Expert",
    description: "Optimizing content for the AI search era (ChatGPT, Perplexity, Google SGE).",
    icon: TrendingUp,
  },
  {
    title: "Scale & Impact",
    description: "50+ projects delivered for 30+ global clients with 10x operational efficiency.",
    icon: Zap,
  },
];

const socialLinks: SocialLink[] = [
  {
    label: "Twitter",
    handle: "@vchaitanyac",
    href: "https://x.com/vchaitanyac",
    icon: Twitter,
  },
  {
    label: "LinkedIn",
    handle: "V Chaitanya Chowdari",
    href: "https://linkedin.com/in/vchaitanyachowdari",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    handle: "vchaitanyachowdari",
    href: "https://github.com/vchaitanyachowdari",
    icon: Github,
  },
  {
    label: "Website",
    handle: "chowdari.in",
    href: "https://chowdari.in",
    icon: Globe,
  },
];

const listVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
    },
  },
};

export function GlassmorphismPortfolioBlock() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-24 lg:py-32">
      {/* Background Animated Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-[10%] -left-[10%] h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[20%] -right-[5%] h-[400px] w-[400px] rounded-full bg-primary/15 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-[10%] left-[20%] h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px]"
        />
      </div>

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[3rem] border border-border/50 bg-background/45 p-8 shadow-2xl backdrop-blur-3xl md:p-12 lg:p-16"
        >
          {/* Subtle Inner Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent pointer-events-none dark:from-white/[0.03]" />
          
          <div className="relative grid gap-16 lg:grid-cols-2 lg:items-center">
            {/* Left column - Main content */}
            <div className="space-y-10">
              <Badge
                variant="outline"
                className="inline-flex items-center gap-2 rounded-full border-border/50 bg-background/55 px-5 py-2 text-xs uppercase tracking-[0.35em] text-foreground/80 backdrop-blur transition-all hover:bg-background/80 hover:border-border/80"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                </span>
                India&apos;s Youngest AI Systems Builder
              </Badge>

              <div className="space-y-6">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                  className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl leading-[1.1]"
                >
                  V Chaitanya Chowdari, <br />
                  <span className="bg-gradient-to-r from-foreground to-foreground/50 bg-clip-text text-transparent">
                    Enterprise AI Specialist
                  </span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="max-w-xl text-lg leading-relaxed text-foreground/70 md:text-xl font-light"
                >
                  Architecting production-grade AI systems that eliminate manual bottlenecks 
                  and unlock 10x operational efficiency. Building intelligent machines that work while you sleep.
                </motion.p>
              </div>

              {/* Highlights grid */}
              <div className="grid gap-4 sm:grid-cols-2">
                {highlights.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      whileHover={{ scale: 1.02 }}
                      className="group relative overflow-hidden rounded-2xl border border-border/40 bg-background/60 p-5 backdrop-blur-xl transition-all hover:border-primary/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                    >
                      <div className="relative space-y-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/70">
                            {item.title}
                          </p>
                          <p className="text-[13px] leading-relaxed text-foreground/80 font-medium">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Button
                  size="lg"
                  onClick={() =>
                    window.open("https://chowdari.in", "_blank")
                  }
                  className="group relative h-14 w-full gap-3 overflow-hidden rounded-full px-10 text-sm uppercase tracking-[0.25em] transition-all hover:shadow-2xl sm:w-auto"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Ecosystem
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary opacity-100 transition-transform duration-500 group-hover:scale-105" />
                </Button>
              </motion.div>
            </div>

            {/* Right column - Profile card */}
            <div className="relative">
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-b from-primary/20 via-primary/5 to-transparent blur-[80px]" />
              <div className="relative flex min-h-[600px] flex-col justify-between overflow-hidden rounded-[40px] border border-border/50 bg-background/60 p-10 backdrop-blur-2xl shadow-inner">
                <div className="flex flex-col items-center text-center">
                  {/* Avatar with glow */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                    className="relative mb-10"
                  >
                    <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-3xl animate-pulse" />
                    <img
                      src="/avatar.png"
                      alt="V Chaitanya Chowdari"
                      className="relative h-40 w-40 rounded-full border-4 border-white/20 object-cover shadow-[0_32px_64px_rgba(0,0,0,0.3)] dark:border-white/10 dark:shadow-[0_32px_64px_rgba(0,0,0,0.5)]"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-3"
                  >
                    <h3 className="text-3xl font-bold tracking-tight text-foreground">
                      V Chaitanya Chowdari
                    </h3>
                    <div className="inline-flex rounded-full border border-border/50 bg-background/40 px-4 py-1.5 backdrop-blur">
                      <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-foreground/60">
                        Enterprise AI Specialist · Founder
                      </p>
                    </div>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-6 max-w-sm text-[14px] leading-relaxed text-foreground/70 font-light"
                  >
                    Helping businesses scale through intelligent multi-agent pipelines and 
                    Generative Engine Optimization (GEO).
                  </motion.p>
                </div>

                {/* Social links */}
                <motion.div
                  variants={listVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  className="mt-12 flex flex-col gap-4"
                >
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        variants={itemVariants}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between rounded-[1.5rem] border border-border/40 bg-background/70 px-6 py-4 transition-all hover:-translate-y-1 hover:border-primary/40 hover:bg-background/90 hover:shadow-xl"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center gap-4">
                          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border/40 bg-background/80 text-foreground/80 shadow-[0_10px_25px_rgba(0,0,0,0.1)] transition-all group-hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)] dark:bg-zinc-900 dark:group-hover:bg-zinc-800">
                            <Icon className="h-5 w-5" />
                          </span>
                          <div>
                            <p className="text-[15px] font-bold text-foreground">
                              {social.label}
                            </p>
                            <p className="text-xs text-foreground/50 tracking-wide">
                              {social.handle}
                            </p>
                          </div>
                        </div>
                        <ArrowUpRight className="h-5 w-5 text-foreground/30 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
                      </motion.a>
                    );
                  })}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
