"use client";

import { motion } from "framer-motion";
import CursorTrail from "./components/CursorTrail";

const navItems = [
  "About",
  "Skills",
  "Projects",
  "Education",
  "Research",
  "Contact",
];
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <CursorTrail />

      {/* Navbar */}
<nav className="fixed left-0 right-0 top-0 z-50 border-b border-[#8b7cf6]/10 bg-white/70 backdrop-blur-xl">
  <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">

    {/* Logo */}
    <a
      href="#home"
      className="group text-xl font-bold tracking-tight text-[#171525]"
    >
      Angel
      <span className="text-[#8b7cf6] transition-colors duration-300 group-hover:text-[#6557d8]">
        .
      </span>
    </a>

    {/* Desktop Navigation */}
    <div className="hidden items-center gap-7 md:flex">
      {navItems.map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="group relative text-sm font-medium text-[#6f6b7d] transition-colors duration-300 hover:text-[#6557d8]"
        >
          {item}

          <span className="absolute -bottom-2 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#8b7cf6] transition-all duration-300 group-hover:w-full" />
        </a>
      ))}
    </div>

    {/* Desktop Resume */}
    <a
  href="/resume/Angel_Sharma_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="hidden rounded-full border border-[#8b7cf6]/20 bg-[#8b7cf6]/10 px-5 py-2.5 text-sm font-semibold text-[#6557d8] transition duration-300 hover:border-[#8b7cf6]/40 hover:bg-[#8b7cf6]/15 md:block"
>
  Resume
</a>
      

    {/* Mobile Menu */}
<details className="group relative md:hidden">
  <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-xl border border-[#8b7cf6]/15 bg-white/70 text-[#6557d8]">
    <span className="text-xl transition-transform duration-300 group-open:rotate-90">
      ☰
    </span>
  </summary>

  <div className="absolute right-0 top-14 w-60 rounded-2xl border border-[#8b7cf6]/15 bg-white/95 p-3 shadow-xl shadow-purple-100/50 backdrop-blur-xl">

    {navItems.map((item) => (
      <a
        key={item}
        href={`#${item.toLowerCase()}`}
        className="block rounded-xl px-4 py-3 text-sm font-medium text-[#6f6b7d] transition hover:bg-[#8b7cf6]/10 hover:text-[#6557d8]"
      >
        {item}
      </a>
    ))}

    <a
      href="/resume/Angel_Sharma_Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-2 block rounded-xl bg-[#8b7cf6] px-4 py-3 text-center text-sm font-semibold text-white hover:bg-[#6557d8]"
    >
      Resume
    </a>

  </div>
</details>
  </div>
</nav>
      {/* Hero */}
<section
  id="home"
  className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
>
  {/* Soft background glow */}
  <div className="absolute left-[5%] top-[20%] h-72 w-72 rounded-full bg-[#8b7cf6]/12 blur-3xl" />
  <div className="absolute right-[5%] bottom-[10%] h-80 w-80 rounded-full bg-[#6c8cff]/10 blur-3xl" />

  <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">

    {/* Hero Text */}
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
    >
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#8b7cf6]">
        Hello, I&apos;m
      </p>

      <h1 className="text-5xl font-bold tracking-tight text-[#171525] sm:text-6xl lg:text-7xl">
        Angel
        <span className="block text-[#6557d8]">
          Sharma.
        </span>
      </h1>

      <h2 className="mt-6 text-xl font-semibold text-[#343044] sm:text-2xl">
        Computer Science Student &amp; Aspiring Software Developer
      </h2>

      <p className="mt-3 text-base font-medium text-[#8b7cf6]">
        3rd Semester · Bhiwani, Haryana
      </p>

      <p className="mt-6 max-w-2xl text-base leading-8 text-[#6f6b7d] sm:text-lg">
        Exploring Computer Science through programming, problem-solving,
        and practical projects while building skills for a career in
        software development.
      </p>

      <div className="mt-9 flex flex-wrap gap-4">
        <a
          href="#projects"
          className="rounded-full bg-[#8b7cf6] px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-purple-200 hover:bg-[#6557d8]"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="rounded-full border border-[#8b7cf6]/25 bg-white/70 px-7 py-3.5 text-sm font-semibold text-[#6557d8] backdrop-blur-sm hover:border-[#8b7cf6]/50 hover:bg-white"
        >
          Contact Me
        </a>
      </div>
    </motion.div>


    {/* Technical Visual */}
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
      className="relative mx-auto hidden h-[460px] w-full max-w-[480px] lg:block"
    >

      {/* Main glass panel */}
      <div className="absolute inset-5 rounded-[3rem] border border-[#8b7cf6]/15 bg-white/35 shadow-2xl shadow-purple-100/40 backdrop-blur-md" />

      {/* Rotating outer rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8b7cf6]/20"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#6c8cff]/25"
      />

      {/* Central tech orb */}
      <motion.div
        animate={{
          y: [0, -12, 0],
          rotate: [0, 3, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-gradient-to-br from-[#8b7cf6]/25 via-white/70 to-[#6c8cff]/20 shadow-2xl shadow-purple-200/50 backdrop-blur-xl"
      >
        {/* Inner core */}
        <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#8b7cf6]/20 bg-white/70 shadow-inner">
          <span className="font-mono text-2xl font-bold text-[#6557d8]">
            &lt;/&gt;
          </span>
        </div>
      </motion.div>


      {/* Floating code card */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-2 top-20 rounded-2xl border border-[#8b7cf6]/15 bg-white/80 px-5 py-4 font-mono text-sm text-[#6557d8] shadow-xl backdrop-blur-md"
      >
        <span className="text-[#6f6b7d]">const</span> developer
      </motion.div>


      {/* Python card */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-2 top-32 rounded-2xl border border-[#6c8cff]/15 bg-white/80 px-5 py-4 font-mono text-sm text-[#6c8cff] shadow-xl backdrop-blur-md"
      >
        Python
      </motion.div>


      {/* DSA card */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 4.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-24 left-10 rounded-2xl border border-[#8b7cf6]/15 bg-white/80 px-5 py-4 font-mono text-sm text-[#6557d8] shadow-xl backdrop-blur-md"
      >
        C + DSA
      </motion.div>


      {/* Problem-solving card */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-16 right-6 rounded-2xl border border-[#6c8cff]/15 bg-white/80 px-5 py-4 font-mono text-sm text-[#6c8cff] shadow-xl backdrop-blur-md"
      >
        &lt;solve /&gt;
      </motion.div>


      {/* Small orbit dots */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2"
      >
        <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-[#8b7cf6] shadow-lg shadow-purple-300" />
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2"
      >
        <span className="absolute bottom-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#6c8cff] shadow-lg shadow-blue-200" />
      </motion.div>

    </motion.div>
  </div>
</section>
      
      {/* About */}
<section id="about" className="px-6 py-24">
  <div className="mx-auto max-w-6xl">

    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]"
    >

      {/* Left Visual */}
      <div className="relative mx-auto w-full max-w-sm">
        <div className="absolute -inset-4 rounded-[2.5rem] bg-[#8b7cf6]/8 blur-2xl" />

        <div className="relative rounded-[2.5rem] border border-[#8b7cf6]/15 bg-white/60 p-8 shadow-xl shadow-purple-100/40 backdrop-blur-md">

          <div className="flex h-56 items-center justify-center rounded-[2rem] border border-[#8b7cf6]/10 bg-gradient-to-br from-[#8b7cf6]/10 via-white/60 to-[#6c8cff]/10">

            <div className="text-center">
              <div className="font-mono text-5xl font-bold text-[#6557d8]">
                &lt;/&gt;
              </div>

              <p className="mt-4 text-sm font-medium text-[#6f6b7d]">
                Building. Learning. Growing.
              </p>
            </div>

          </div>

          <div className="mt-6 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#8b7cf6]">
                Currently
              </p>

              <p className="mt-1 font-semibold text-[#171525]">
                B.Tech Computer Science
              </p>
            </div>

            <div className="h-3 w-3 rounded-full bg-[#8b7cf6] shadow-lg shadow-purple-300" />
          </div>

        </div>
      </div>


      {/* About Content */}
      <div>

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8b7cf6]">
          About Me
        </p>

        <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#171525] sm:text-5xl">
          Curious about technology,
          <span className="block text-[#6557d8]">
            focused on growth.
          </span>
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6f6b7d]">
          I&apos;m a B.Tech Computer Science student who enjoys learning
          through programming, problem-solving, and practical projects.
          I&apos;m currently building a strong foundation in computer
          science while exploring software development.
        </p>

        <p className="mt-5 max-w-2xl leading-7 text-[#6f6b7d]">
          I believe in learning by building, improving through practice,
          and gradually turning ideas into useful solutions.
        </p>


        {/* Quick Details */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">

          <div className="rounded-2xl border border-[#8b7cf6]/15 bg-white/60 p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#8b7cf6]/30">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#8b7cf6]">
              Location
            </p>

            <p className="mt-2 font-semibold text-[#171525]">
              Bhiwani, Haryana
            </p>
          </div>

          <div className="rounded-2xl border border-[#8b7cf6]/15 bg-white/60 p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#8b7cf6]/30">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#8b7cf6]">
              Focus
            </p>

            <p className="mt-2 font-semibold text-[#171525]">
              Software Development
            </p>
          </div>

        </div>

      </div>

    </motion.div>

  </div>
</section>
{/* Skills */}
<section id="skills" className="px-6 py-24">
  <div className="mx-auto max-w-6xl">

    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8b7cf6]">
        Skills
      </p>

      <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#171525] sm:text-5xl">
        My technical toolkit.
      </h2>

      <p className="mt-4 max-w-2xl text-lg text-[#6f6b7d]">
        The technologies and core concepts I&apos;m currently learning and
        practicing through coursework and projects.
      </p>
    </motion.div>


    <div className="mt-10 grid gap-6 md:grid-cols-3">

      {/* Programming */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        whileHover={{ y: -7 }}
        transition={{ duration: 0.3 }}
        className="group rounded-3xl border border-[#8b7cf6]/15 bg-white/65 p-7 shadow-lg shadow-purple-100/40 backdrop-blur-sm"
      >
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#8b7cf6]/10 font-mono text-lg font-bold text-[#6557d8]">
            01
          </div>

          <span className="font-mono text-xs text-[#8b7cf6]">
            CODE
          </span>
        </div>

        <h3 className="mt-7 text-2xl font-bold text-[#171525]">
          Programming
        </h3>

        <p className="mt-3 text-sm leading-6 text-[#6f6b7d]">
          Languages I use to practice programming and build projects.
        </p>

        <div className="mt-6 space-y-3">

          <div className="flex items-center justify-between rounded-xl border border-[#8b7cf6]/10 bg-[#8b7cf6]/5 px-4 py-3">
            <span className="font-medium text-[#171525]">
              Python
            </span>

            <span className="font-mono text-xs text-[#6557d8]">
              .py
            </span>
          </div>

          <div className="flex items-center justify-between rounded-xl border border-[#8b7cf6]/10 bg-[#8b7cf6]/5 px-4 py-3">
            <span className="font-medium text-[#171525]">
              C
            </span>

            <span className="font-mono text-xs text-[#6557d8]">
              .c
            </span>
          </div>

        </div>
      </motion.div>


      {/* Core CS */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        whileHover={{ y: -7 }}
        transition={{ duration: 0.3, delay: 0.08 }}
        className="group rounded-3xl border border-[#8b7cf6]/15 bg-white/65 p-7 shadow-lg shadow-purple-100/40 backdrop-blur-sm"
      >
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#6c8cff]/10 font-mono text-lg font-bold text-[#6c8cff]">
            02
          </div>

          <span className="font-mono text-xs text-[#6c8cff]">
            CORE
          </span>
        </div>

        <h3 className="mt-7 text-2xl font-bold text-[#171525]">
          Computer Science
        </h3>

        <p className="mt-3 text-sm leading-6 text-[#6f6b7d]">
          Core concepts that help me understand how software works.
        </p>

        <div className="mt-6 space-y-3">

          <div className="flex items-center justify-between rounded-xl border border-[#6c8cff]/10 bg-[#6c8cff]/5 px-4 py-3">
            <span className="font-medium text-[#171525]">
              Data Structures
            </span>

            <span className="font-mono text-xs text-[#6c8cff]">
              DSA
            </span>
          </div>

          <div className="flex items-center justify-between rounded-xl border border-[#6c8cff]/10 bg-[#6c8cff]/5 px-4 py-3">
            <span className="font-medium text-[#171525]">
              Algorithms
            </span>

            <span className="font-mono text-xs text-[#6c8cff]">
              LOGIC
            </span>
          </div>

        </div>
      </motion.div>


      {/* Tools */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        whileHover={{ y: -7 }}
        transition={{ duration: 0.3, delay: 0.16 }}
        className="group rounded-3xl border border-[#8b7cf6]/15 bg-white/65 p-7 shadow-lg shadow-purple-100/40 backdrop-blur-sm"
      >
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#8b7cf6]/10 font-mono text-lg font-bold text-[#6557d8]">
            03
          </div>

          <span className="font-mono text-xs text-[#8b7cf6]">
            TOOLS
          </span>
        </div>

        <h3 className="mt-7 text-2xl font-bold text-[#171525]">
          Development Tools
        </h3>

        <p className="mt-3 text-sm leading-6 text-[#6f6b7d]">
          Tools I currently use while learning and developing projects.
        </p>

        <div className="mt-6 space-y-3">

          <div className="flex items-center justify-between rounded-xl border border-[#8b7cf6]/10 bg-[#8b7cf6]/5 px-4 py-3">
            <span className="font-medium text-[#171525]">
              VS Code
            </span>

            <span className="font-mono text-xs text-[#6557d8]">
              IDE
            </span>
          </div>

        </div>
      </motion.div>

    </div>
  </div>
</section>

      {/* Projects */}
<section id="projects" className="px-6 py-24">
  <div className="mx-auto max-w-6xl">

    <motion.h2
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="text-4xl font-bold tracking-tight text-[#171525] sm:text-5xl"
    >
      Projects
    </motion.h2>

    <motion.p
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="mt-4 max-w-2xl text-lg text-[#6f6b7d]"
    >
      Practical projects built while strengthening my programming and
      problem-solving skills.
    </motion.p>

    <div className="mt-10 grid gap-6 md:grid-cols-3">

      {/* Restaurant Management System */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="group rounded-3xl border border-[#8b7cf6]/15 bg-white/65 p-7 shadow-lg shadow-purple-100/40 backdrop-blur-sm"
      >
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#8b7cf6]/10 font-mono text-lg font-bold text-[#6557d8]">
            01
          </div>

          <span className="rounded-full border border-[#8b7cf6]/15 bg-[#8b7cf6]/5 px-3 py-1 font-mono text-xs text-[#6557d8]">
            Python
          </span>
        </div>

        <h3 className="mt-7 text-2xl font-bold text-[#171525] transition-colors duration-300 group-hover:text-[#6557d8]">
          Restaurant Management System
        </h3>

        <p className="mt-4 leading-7 text-[#6f6b7d]">
          A Python-based project designed to manage restaurant-related
          operations through a simple and structured system.
        </p>

        <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-[#6557d8]">
          <span>Python Project</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>
      </motion.div>


      {/* Tic-Tac-Toe */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, delay: 0.08 }}
        className="group rounded-3xl border border-[#8b7cf6]/15 bg-white/65 p-7 shadow-lg shadow-purple-100/40 backdrop-blur-sm"
      >
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#8b7cf6]/10 font-mono text-lg font-bold text-[#6557d8]">
            02
          </div>

          <span className="rounded-full border border-[#6c8cff]/15 bg-[#6c8cff]/5 px-3 py-1 font-mono text-xs text-[#6c8cff]">
            C
          </span>
        </div>

        <h3 className="mt-7 text-2xl font-bold text-[#171525] transition-colors duration-300 group-hover:text-[#6557d8]">
          Tic-Tac-Toe
        </h3>

        <p className="mt-4 leading-7 text-[#6f6b7d]">
          A console-based Tic-Tac-Toe game developed in C to practice
          programming logic, conditions, and game-flow implementation.
        </p>

        <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-[#6557d8]">
          <span>C Project</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>
      </motion.div>


      {/* Calculator */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, delay: 0.16 }}
        className="group rounded-3xl border border-[#8b7cf6]/15 bg-white/65 p-7 shadow-lg shadow-purple-100/40 backdrop-blur-sm"
      >
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#8b7cf6]/10 font-mono text-lg font-bold text-[#6557d8]">
            03
          </div>

          <span className="rounded-full border border-[#8b7cf6]/15 bg-[#8b7cf6]/5 px-3 py-1 font-mono text-xs text-[#6557d8]">
            Python
          </span>
        </div>

        <h3 className="mt-7 text-2xl font-bold text-[#171525] transition-colors duration-300 group-hover:text-[#6557d8]">
          Calculator
        </h3>

        <p className="mt-4 leading-7 text-[#6f6b7d]">
          A Python calculator project created to practice user input,
          arithmetic operations, and basic program structure.
        </p>

        <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-[#6557d8]">
          <span>Python Project</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>
      </motion.div>

    </div>
  </div>
</section>

      {/* Education */}
<section id="education" className="px-6 py-24">
  <div className="mx-auto max-w-6xl">

    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8b7cf6]">
        Education
      </p>

      <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#171525] sm:text-5xl">
        My academic journey.
      </h2>

      <p className="mt-4 max-w-2xl text-lg text-[#6f6b7d]">
        Building my foundation in computer science through academic learning,
        programming, and practical projects.
      </p>
    </motion.div>


    <div className="relative mt-12">

      {/* Timeline Line */}
      <div className="absolute left-5 top-6 hidden h-[calc(100%-3rem)] w-px bg-gradient-to-b from-[#8b7cf6]/40 via-[#8b7cf6]/20 to-transparent sm:block" />


      <div className="space-y-8">

        {/* B.Tech */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ y: -4 }}
          className="relative pl-0 sm:pl-14"
        >
          {/* Timeline Dot */}
          <div className="absolute left-2.5 top-7 hidden h-5 w-5 rounded-full border-4 border-[#f8f7fc] bg-[#8b7cf6] shadow-lg shadow-purple-200 sm:block" />

          <div className="rounded-3xl border border-[#8b7cf6]/15 bg-white/65 p-7 shadow-lg shadow-purple-100/40 backdrop-blur-sm transition duration-300 hover:border-[#8b7cf6]/30 hover:shadow-xl">

            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8b7cf6]">
                  B.Tech
                </p>

                <h3 className="mt-2 text-2xl font-bold text-[#171525]">
                  Computer Science
                </h3>

                <p className="mt-2 text-[#6f6b7d]">
                  TIT&amp;S, Bhiwani
                </p>
              </div>

              <span className="w-fit rounded-full border border-[#8b7cf6]/15 bg-[#8b7cf6]/5 px-4 py-2 font-mono text-xs font-medium text-[#6557d8]">
                3rd Semester
              </span>

            </div>

            <div className="mt-6 flex flex-wrap gap-3">

              <span className="rounded-full bg-[#8b7cf6]/5 px-4 py-2 text-sm text-[#6557d8]">
                Computer Science
              </span>

              <span className="rounded-full bg-[#8b7cf6]/5 px-4 py-2 text-sm text-[#6557d8]">
                Programming
              </span>

              <span className="rounded-full bg-[#8b7cf6]/5 px-4 py-2 text-sm text-[#6557d8]">
                Problem Solving
              </span>

            </div>

          </div>
        </motion.div>


        {/* School */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="relative pl-0 sm:pl-14"
        >
          {/* Timeline Dot */}
          <div className="absolute left-2.5 top-7 hidden h-5 w-5 rounded-full border-4 border-[#f8f7fc] bg-[#6c8cff] shadow-lg shadow-blue-200 sm:block" />

          <div className="rounded-3xl border border-[#8b7cf6]/15 bg-white/65 p-7 shadow-lg shadow-purple-100/40 backdrop-blur-sm transition duration-300 hover:border-[#8b7cf6]/30 hover:shadow-xl">

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8b7cf6]">
              School Education
            </p>

            <h3 className="mt-2 text-2xl font-bold text-[#171525]">
              Vaish Model Sr. Sec. School
            </h3>

            <p className="mt-2 text-[#6f6b7d]">
              Bhiwani, Haryana
            </p>

            <div className="mt-6 flex flex-wrap gap-3">

              <span className="rounded-full bg-[#6c8cff]/5 px-4 py-2 text-sm text-[#6c8cff]">
                School Education
              </span>

              <span className="rounded-full bg-[#6c8cff]/5 px-4 py-2 text-sm text-[#6c8cff]">
                Bhiwani
              </span>

            </div>

          </div>
        </motion.div>

      </div>
    </div>

  </div>
</section>
      {/* Research */}
<section id="research" className="px-6 py-24">
  <div className="mx-auto max-w-6xl">

    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8b7cf6]">
        Research & Academic Exposure
      </p>

      <h2 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-[#171525] sm:text-5xl">
        Exploring technology beyond the classroom.
      </h2>

      <p className="mt-4 max-w-2xl text-lg text-[#6f6b7d]">
        An academic research presentation combining artificial intelligence
        with simulation-based learning.
      </p>
    </motion.div>


    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -6 }}
      className="group relative mt-10 overflow-hidden rounded-[2rem] border border-[#8b7cf6]/15 bg-white/65 p-8 shadow-xl shadow-purple-100/40 backdrop-blur-md"
    >

      {/* Decorative glow */}
      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#8b7cf6]/10 blur-3xl transition duration-500 group-hover:bg-[#8b7cf6]/15" />

      <div className="relative">

        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#8b7cf6]/10 font-mono text-xl font-bold text-[#6557d8]">
            AI
          </div>

          <span className="w-fit rounded-full border border-[#8b7cf6]/15 bg-[#8b7cf6]/5 px-4 py-2 font-mono text-xs font-medium text-[#6557d8]">
            Presenter
          </span>

        </div>


        <h3 className="mt-7 max-w-4xl text-2xl font-bold leading-tight text-[#171525] sm:text-3xl">
          AI-Driven Assessment with MATLAB/Simulink for Enhanced Learning of
          Electrical Circuits &amp; Magnetic Machines
        </h3>


        <p className="mt-5 max-w-3xl leading-7 text-[#6f6b7d]">
          Academic research work exploring the use of AI-driven assessment
          and MATLAB/Simulink-based learning approaches for electrical
          circuits and magnetic machines.
        </p>


        {/* Technology Tags */}
        <div className="mt-7 flex flex-wrap gap-3">

          <span className="rounded-full border border-[#8b7cf6]/15 bg-[#8b7cf6]/5 px-4 py-2 font-mono text-sm text-[#6557d8]">
            AI
          </span>

          <span className="rounded-full border border-[#8b7cf6]/15 bg-[#8b7cf6]/5 px-4 py-2 font-mono text-sm text-[#6557d8]">
            MATLAB
          </span>

          <span className="rounded-full border border-[#8b7cf6]/15 bg-[#8b7cf6]/5 px-4 py-2 font-mono text-sm text-[#6557d8]">
            Simulink
          </span>

          <span className="rounded-full border border-[#8b7cf6]/15 bg-[#8b7cf6]/5 px-4 py-2 font-mono text-sm text-[#6557d8]">
            Electrical Engineering
          </span>

        </div>


        {/* Bottom line */}
        <div className="mt-8 flex items-center gap-3 border-t border-[#8b7cf6]/10 pt-6">

          <div className="h-2 w-2 rounded-full bg-[#8b7cf6]" />

          <p className="text-sm font-medium text-[#6f6b7d]">
            Role: Presenter
          </p>

        </div>

      </div>
    </motion.div>

  </div>
</section>
{/* Contact */}
<section id="contact" className="px-6 py-24">
  <div className="mx-auto max-w-6xl">

    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]"
    >

      {/* Contact Information */}
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8b7cf6]">
          Contact
        </p>

        <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#171525] sm:text-5xl">
          Let&apos;s connect.
        </h2>

        <p className="mt-5 max-w-xl text-lg leading-8 text-[#6f6b7d]">
          I&apos;m open to internship opportunities, collaborations, and
          meaningful conversations around technology and software development.
        </p>

        {/* Email */}
        <a
          href="mailto:angelsharma12710@gmail.com"
          className="group mt-8 block rounded-3xl border border-[#8b7cf6]/15 bg-white/65 p-6 shadow-lg shadow-purple-100/30 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#8b7cf6]/30 hover:shadow-xl"
        >
          <div className="flex items-center justify-between">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8b7cf6]">
                Email
              </p>

              <p className="mt-2 break-all font-medium text-[#171525]">
                angelsharma12710@gmail.com
              </p>
            </div>

            <span className="text-xl text-[#8b7cf6] transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>

          </div>
        </a>


        <a
  href="https://www.linkedin.com/in/angel-sharma-487079406"
  target="_blank"
  rel="noopener noreferrer"
  className="group mt-4 block rounded-3xl border border-[#8b7cf6]/15 bg-white/65 p-6 shadow-lg shadow-purple-100/30 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#8b7cf6]/30 hover:shadow-xl"
>
  <div className="flex items-center justify-between">
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8b7cf6]">
        LinkedIn
      </p>

      <p className="mt-2 font-medium text-[#171525]">
        Angel Sharma
      </p>

      <p className="mt-1 text-sm text-[#6f6b7d]">
        Connect with me on LinkedIn
      </p>
    </div>

    <span className="text-xl text-[#8b7cf6] transition-transform duration-300 group-hover:translate-x-1">
      ↗
    </span>
  </div>
</a>


        {/* Availability */}
        <div className="mt-6 flex items-center gap-3 text-sm text-[#6f6b7d]">
          <span className="h-2.5 w-2.5 rounded-full bg-[#8b7cf6] shadow-md shadow-purple-200" />
          Open to internship opportunities
        </div>

      </div>


      {/* Contact Form */}
      <div className="rounded-[2rem] border border-[#8b7cf6]/15 bg-white/65 p-7 shadow-xl shadow-purple-100/40 backdrop-blur-md sm:p-8">

        <div className="mb-7">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#8b7cf6]">
            Message
          </p>

          <h3 className="mt-2 text-2xl font-bold text-[#171525]">
            Send a message
          </h3>
        </div>


        <form
  action="mailto:angelsharma12710@gmail.com"
  method="post"
  encType="text/plain"
  className="space-y-5"
>
  {/* Name */}
  <div>
    <label
      htmlFor="name"
      className="mb-2 block text-sm font-medium text-[#171525]"
    >
      Your Name
    </label>

    <input
      id="name"
      name="Name"
      type="text"
      placeholder="Enter your name"
      required
      className="w-full rounded-2xl border border-[#8b7cf6]/15 bg-white/70 px-5 py-3.5 text-[#171525] outline-none transition placeholder:text-[#9b97a8] focus:border-[#8b7cf6]/50 focus:ring-4 focus:ring-[#8b7cf6]/10"
    />
  </div>

  {/* Email */}
  <div>
    <label
      htmlFor="email"
      className="mb-2 block text-sm font-medium text-[#171525]"
    >
      Your Email
    </label>

    <input
      id="email"
      name="Email"
      type="email"
      placeholder="Enter your email"
      required
      className="w-full rounded-2xl border border-[#8b7cf6]/15 bg-white/70 px-5 py-3.5 text-[#171525] outline-none transition placeholder:text-[#9b97a8] focus:border-[#8b7cf6]/50 focus:ring-4 focus:ring-[#8b7cf6]/10"
    />
  </div>

  {/* Message */}
  <div>
    <label
      htmlFor="message"
      className="mb-2 block text-sm font-medium text-[#171525]"
    >
      Your Message
    </label>

    <textarea
      id="message"
      name="Message"
      rows={5}
      placeholder="Write your message..."
      required
      className="w-full resize-none rounded-2xl border border-[#8b7cf6]/15 bg-white/70 px-5 py-3.5 text-[#171525] outline-none transition placeholder:text-[#9b97a8] focus:border-[#8b7cf6]/50 focus:ring-4 focus:ring-[#8b7cf6]/10"
    />
  </div>

  <button
    type="submit"
    className="group w-full rounded-2xl bg-[#8b7cf6] px-6 py-4 font-semibold text-white shadow-lg shadow-purple-200 transition duration-300 hover:bg-[#6557d8] hover:shadow-xl"
  >
    <span className="inline-flex items-center gap-2">
      Send Message
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </span>
  </button>
</form>
  
      </div>

    </motion.div>

  </div>
</section>

{/* Technologies */}
<section className="px-6 pb-24 pt-8">
  <div className="mx-auto max-w-6xl">

    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="rounded-[2rem] border border-[#8b7cf6]/15 bg-white/50 p-8 shadow-lg shadow-purple-100/30 backdrop-blur-md"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#8b7cf6]">
            Built With
          </p>

          <h3 className="mt-2 text-2xl font-bold text-[#171525]">
            Technologies behind this portfolio
          </h3>
        </div>

        <div className="flex flex-wrap gap-3">

          <span className="rounded-full border border-[#8b7cf6]/15 bg-[#8b7cf6]/5 px-4 py-2 text-sm font-medium text-[#6557d8]">
            Next.js
          </span>

          <span className="rounded-full border border-[#8b7cf6]/15 bg-[#8b7cf6]/5 px-4 py-2 text-sm font-medium text-[#6557d8]">
            React
          </span>

          <span className="rounded-full border border-[#8b7cf6]/15 bg-[#8b7cf6]/5 px-4 py-2 text-sm font-medium text-[#6557d8]">
            TypeScript
          </span>

          <span className="rounded-full border border-[#6c8cff]/15 bg-[#6c8cff]/5 px-4 py-2 text-sm font-medium text-[#6c8cff]">
            Tailwind CSS
          </span>

          <span className="rounded-full border border-[#6c8cff]/15 bg-[#6c8cff]/5 px-4 py-2 text-sm font-medium text-[#6c8cff]">
            Framer Motion
          </span>

          <span className="rounded-full border border-[#8b7cf6]/15 bg-[#8b7cf6]/5 px-4 py-2 text-sm font-medium text-[#6557d8]">
            Three.js
          </span>

        </div>

      </div>
    </motion.div>

  </div>
</section>
{/* Footer */}
<footer className="border-t border-[#8b7cf6]/10 bg-white/40 px-6 py-8">
  <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">

    <div>
      <p className="font-bold text-[#171525]">
        Angel<span className="text-[#8b7cf6]">.</span>
      </p>

      <p className="mt-1 text-sm text-[#6f6b7d]">
        B.Tech Computer Science Student
      </p>
    </div>

    <p className="text-sm text-[#6f6b7d]">
      © {new Date().getFullYear()} Angel Sharma. Built with curiosity &amp; code.
    </p>

  </div>
</footer>
</main>
  );
}