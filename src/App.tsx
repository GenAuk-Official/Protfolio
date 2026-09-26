import { motion } from "framer-motion";
import project from "./data/project";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Workflow,
  Globe,
  Layers,
  Smartphone,
  PenTool,
  Sparkles,
  Cloud,
  Check,
  Search,
  Target,
  Palette,
  Code2,
  ShieldCheck,
  Rocket,
  LifeBuoy,
  Star,
  Mail,
  Phone,
  MapPin,
  Github,
  Twitter,
  Linkedin,
  ExternalLink,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Counter } from "@/components/site/Counter";
import vadapavImg from "@/assets/project-vadapav.jpg";
import ProjectComingSoon from "./components/site/ProjectComingSoon";

/* ---------- shared bits ---------- */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

function SectionHeader({
  eyebrow,
  title,
  desc,
  center = true,
}: {
  eyebrow: string;
  title: React.ReactNode;
  desc?: string;
  center?: boolean;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      className={`mb-10 ${center ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}`}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground">
        <span className="size-1.5 rounded-full bg-primary shadow-[0_0_10px] shadow-primary" />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight">{title}</h2>
      {desc && <p className="mt-4 text-base sm:text-lg text-muted-foreground">{desc}</p>}
    </motion.div>
  );
}

/* ---------- HERO ---------- */

function Hero() {
  return (
    <section id="home" className="relative pt-28 sm:pt-36 pb-14 sm:pb-20 overflow-hidden">
      {/* animated background lights */}
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 size-[900px] rounded-full opacity-40 blur-3xl"
        style={{
          background: "radial-gradient(circle, oklch(0.66 0.22 285 / 0.5), transparent 60%)",
        }}
      />
      <div
        className="pointer-events-none absolute top-40 -right-20 size-[500px] rounded-full opacity-30 blur-3xl animate-drift"
        style={{
          background: "radial-gradient(circle, oklch(0.7 0.19 250 / 0.5), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 glass px-3 py-1 text-xs text-muted-foreground"
          >
            <Sparkles className="size-3.5 text-primary" />
            AI-first product studio · Now booking Q3
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-4xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight"
          >
            Building <span className="text-gradient">AI, Software</span> &
            <br className="hidden sm:block" />
            Digital Experiences That Grow Businesses.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            We help startups and businesses build intelligent AI solutions, modern websites,
            scalable applications, and business automation that deliver measurable results.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <a href="#contact" className="btn-primary">
              Start Your Project
              <ArrowRight className="size-4" />
            </a>
            <a href="#portfolio" className="btn-ghost">
              View Portfolio
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- TRUSTED ---------- */

const stats = [
  { n: 1, l: "Projects Completed" },
  { n: 1, l: "Happy Clients" },
  { n: 1, l: "AI Solutions Delivered" },
  { n: 1, s: "+", l: "Years of Experience" },
];

const logos = ["Aai Vada Pav", "Your Business", "More Projects Coming Soon"];

function Trusted() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Building for startups & growing businesses
        </p>

        <div className="mt-6 relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex gap-14 animate-marquee w-max">
            {[...logos, ...logos].map((l, i) => (
              <div
                key={i}
                className="text-xl sm:text-2xl font-semibold text-muted-foreground/60 whitespace-nowrap"
              >
                {l}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((st) => (
            <motion.div
              key={st.l}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-gradient">
                <Counter to={st.n} suffix={st.s} />
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{st.l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SERVICES ---------- */

const services = [
  {
    icon: Bot,
    title: "AI Chatbots & Agents",
    desc: "Autonomous agents that handle research, support, and workflows 24/7.",
  },
  {
    icon: Workflow,
    title: "AI Automation",
    desc: "Automate repetitive processes with intelligent, self-healing pipelines.",
  },
  {
    icon: Globe,
    title: "Custom Websites",
    desc: "Marketing sites and product pages engineered to convert.",
  },
  {
    icon: Layers,
    title: "SaaS Development",
    desc: "Multi-tenant platforms built for scale from day one.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Native-feeling iOS and Android apps with delightful UX.",
  },
  {
    icon: PenTool,
    title: "UI / UX Design",
    desc: "Interfaces that look effortless and feel unmistakably premium.",
  },
  {
    icon: Sparkles,
    title: "Branding",
    desc: "Identity systems that make you instantly recognizable.",
  },
  {
    icon: Cloud,
    title: "Cloud Deployment",
    desc: "Robust infra on AWS, Vercel, and Cloudflare with zero downtime.",
  },
];

function Services() {
  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Services"
          title={
            <>
              Everything you need to <span className="text-gradient">ship & scale</span>.
            </>
          }
          desc="From first idea to global rollout — one team, one standard of craft."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              whileHover={{ y: -6 }}
              className="group relative glass rounded-2xl p-6 overflow-hidden shine hover-lift"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(circle at 30% 0%, oklch(0.66 0.22 285 / 0.18), transparent 60%)",
                }}
              />
              <div className="relative">
                <div className="inline-grid place-items-center size-10 rounded-xl border border-white/10 bg-white/5 mb-4">
                  <s.icon className="size-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-xs text-primary/90 opacity-70 group-hover:opacity-100 transition">
                  Learn more <ArrowUpRight className="size-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* WhyChoose section removed */

/* ---------- PROCESS ---------- */

const steps = [
  { icon: Search, title: "Discovery", desc: "Understand goals, users, and constraints." },
  { icon: Target, title: "Strategy", desc: "Roadmap, KPIs, and technical architecture." },
  { icon: Palette, title: "Design", desc: "Systemised UI with taste and precision." },
  { icon: Code2, title: "Development", desc: "Modern stack, clean code, fast iteration." },
  { icon: ShieldCheck, title: "Testing", desc: "QA, performance, security & accessibility." },
  { icon: Rocket, title: "Launch", desc: "Ship confidently with zero-downtime deploys." },
  { icon: LifeBuoy, title: "Support", desc: "Ongoing improvements & partnership." },
];

function Process() {
  return (
    <section id="process" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Process"
          title={
            <>
              A calm, deliberate <span className="text-gradient">workflow</span>.
            </>
          }
          desc="Seven steps, one obsession — shipping work you're proud to show."
        />

        <div className="relative">
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="relative glass rounded-2xl p-4 text-center"
              >
                <div className="mx-auto inline-grid place-items-center size-10 rounded-xl bg-gradient-to-br from-primary/30 to-transparent border border-primary/20 relative z-10">
                  <s.icon className="size-5 text-primary" />
                </div>
                <div className="mt-3 text-xs text-muted-foreground">Step {i + 1}</div>
                <div className="text-sm font-semibold">{s.title}</div>
                <p className="mt-1 text-xs text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- PORTFOLIO ---------- */

function Portfolio() {
  return (
    <section id="portfolio" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Selected Work"
          title={
            <>
              Projects we've <span className="text-gradient">built.</span>.
            </>
          }
          desc="A snapshot of the work we've shipped. More case studies coming soon."
        />

        <div className="grid  gap-6">
          {/* Featured Vadapav project */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative glass-strong rounded-3xl overflow-hidden lg:col-span-2"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                <img
                  src={vadapavImg}
                  alt="Aai Vadapav — modern restaurant website"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  width={1280}
                  height={960}
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-background/40 via-transparent to-transparent" />
              </div>
              <div className="p-8 sm:p-10 flex flex-col">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5">
                    Featured
                  </span>
                  <span>Shop Website</span>
                </div>
                <h3 className="mt-4 text-3xl font-bold tracking-tight">Aai Vadapav</h3>
                <p className="mt-3 text-muted-foreground">
                  A modern website built for a local Vadapav shop featuring online ordering, digital
                  menu, responsive design, delivery support and chatbot integration.
                </p>

                <ul className="mt-5 grid grid-cols-2 gap-2 text-sm">
                  {[
                    "Online Ordering",
                    "Delivery Support",
                    "Responsive Design",
                    "24/7 Chatbot Support",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-muted-foreground">
                      <Check className="size-3.5 text-primary" /> {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {["React", "Node", "Langchain", "Mongodb", "Vercel"].map((t) => (
                    <span
                      key={t}
                      className="text-xs rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="https://aai-vada-pav.vercel.app/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn-primary text-xs"
                  >
                    Visit Website <ExternalLink className="size-3.5" />
                  </a>
                  
                </div>
              </div>
            </div>
          </motion.article>

          <ProjectComingSoon {...project} />
        </div>
      </div>
    </section>
  );
}

/* ---------- TECH STACK ---------- */

// const stack: { name: string; slug: string; color: string; invertDark?: boolean }[] = [
//   { name: "React", slug: "react", color: "61DAFB" },
//   { name: "Next.js", slug: "nextdotjs", color: "000000", invertDark: true },
//   { name: "Node.js", slug: "nodedotjs", color: "5FA04E" },
//   { name: "Express", slug: "express", color: "000000", invertDark: true },
//   { name: "Python", slug: "python", color: "3776AB" },
//   { name: "FastAPI", slug: "fastapi", color: "009688" },
//   { name: "Flutter", slug: "flutter", color: "02569B" },
//   { name: "Firebase", slug: "firebase", color: "FFCA28" },
//   { name: "Supabase", slug: "supabase", color: "3FCF8E" },
//   { name: "MongoDB", slug: "mongodb", color: "47A248" },
//   { name: "PostgreSQL", slug: "postgresql", color: "4169E1" },
//   { name: "Docker", slug: "docker", color: "2496ED" },
//   { name: "AWS", slug: "amazonwebservices", color: "FF9900" },
//   { name: "OpenAI", slug: "openai", color: "412991" },
//   { name: "Anthropic", slug: "anthropic", color: "191919", invertDark: true },
//   { name: "LangChain", slug: "langchain", color: "1C3C3C", invertDark: true },
//   { name: "n8n", slug: "n8n", color: "EA4B71" },
//   { name: "Vercel", slug: "vercel", color: "000000", invertDark: true },
//   { name: "Render", slug: "render", color: "46E3B7" },
//   { name: "GitHub", slug: "github", color: "181717", invertDark: true },
//   { name: "Tailwind CSS", slug: "tailwindcss", color: "06B6D4" },
//   { name: "Framer Motion", slug: "framer", color: "0055FF" },
// ];

// function TechStack() {
//   return (
//     <section className="py-14 sm:py-20">
//       <div className="mx-auto max-w-7xl px-4">
//         <SectionHeader
//           eyebrow="Technologies"
//           title={
//             <>
//               Best-in-class <span className="text-gradient">tools</span>, chosen with intent.
//             </>
//           }
//           desc="A curated stack we know deeply — no framework-of-the-week gambles."
//         />

//         <div className="flex flex-wrap gap-3 sm:gap-4 justify-center max-w-4xl mx-auto mt-4">
//           {stack.map((t, i) => (
//             <motion.div
//               key={t.name}
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.025 }}
//               whileHover={{ y: -4, scale: 1.1 }}
//               title={t.name}
//               aria-label={t.name}
//               className="group relative grid place-items-center size-16 sm:size-20 glass rounded-2xl hover:border-primary/50 transition-colors cursor-default"
//             >
//               <img
//                 src={`https://cdn.simpleicons.org/${t.slug}/${t.color}`}
//                 alt={t.name}
//                 loading="lazy"
//                 className={`size-8 sm:size-10 transition-opacity opacity-90 group-hover:opacity-100${t.invertDark ? " dark:invert" : ""}`}
//               />
//               <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
//                 {t.name}
//               </span>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

/* ---------- TESTIMONIALS ---------- */

const testimonials = [
  {
    name: "Suresh Mhaske",
    role: "Owner, Aai Vada Pav",
    quote:
      "GenAuk delivered our AI platform in weeks, not months. But gave things more than I expected",
  },
];

function Testimonials() {
  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Testimonials"
          title={
            <>
              Kind words from <span className="text-gradient">real partners</span>.
            </>
          }
        />

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed">"{t.quote}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="size-9 rounded-full bg-gradient-to-br from-primary to-brand-2" />
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */

function About() {
  return (
    <section id="about" className="py-14 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <SectionHeader
          eyebrow="About GenAuk"
          title={
            <>
              A small team, obsessed with <span className="text-gradient">craft</span>.
            </>
          }
        />
        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="-mt-8 mb-10 text-xl sm:text-2xl font-semibold italic text-gradient"
        >
          "A team that treats your product like its own."
        </motion.blockquote>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg text-muted-foreground leading-relaxed"
        >
          GenAuk is an AI-focused software studio that builds practical AI solutions, modern web
          applications, and business automation tools. We believe technology should solve real
          business problems—not add complexity. Every project is built with clean engineering,
          thoughtful design, and a focus on long-term value.
        </motion.p>

        <div className="mt-8 flex flex-wrap justify-center gap-2 text-xs text-muted-foreground">
          {["Innovation", "AI", "Technology", "Quality", "Business Growth", "Problem Solving"].map(
            (t) => (
              <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                {t}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */

function CTA() {
  return (
    <section id="contact" className="py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl glass-strong p-8 sm:p-12 text-center"
        >
          <div
            className="absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(ellipse at center, oklch(0.66 0.22 285 / 0.35), transparent 60%)",
            }}
          />
          <div className="relative">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
              Let's build something <span className="text-gradient">incredible</span> together.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Tell us what you're building. We'll reply within one business day with next steps.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a href="mailto:hellogenauk@gmail.com" className="btn-primary">
                Book a Consultation <ArrowRight className="size-4" />
              </a>
              <a href="mailto:hellogenauk@gmail.com?subject=Quote%20request" className="btn-ghost">
                Get a Quote
              </a>
            </div>

            <div className="mt-8 grid sm:grid-cols-3 gap-3 text-sm text-muted-foreground">
              <a
                href="mailto:hellogenauk@gmail.com"
                className="glass rounded-xl px-4 py-3 flex items-center gap-2 justify-center hover:border-primary/40 transition-colors"
              >
                <Mail className="size-4 text-primary" /> hellogenauk@gmail.com
              </a>
              <a
                href="tel:+918208854485"
                className="glass rounded-xl px-4 py-3 flex items-center gap-2 justify-center hover:border-primary/40 transition-colors"
              >
                <Phone className="size-4 text-primary" /> +91 82088 54485
              </a>
              <div className="glass rounded-xl px-4 py-3 flex items-center gap-2 justify-center">
                <MapPin className="size-4 text-primary" /> Mumbai · India
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */

const LOGO_URL = "/genauk-logo.png";

function Footer() {
  return (
    <footer className="border-t border-white/5 pt-12 pb-8">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <a href="#home" className="flex items-center gap-2">
            <img
              src={LOGO_URL}
              alt="GenAuk"
              className="h-9 w-9 rounded-lg"
              width={36}
              height={36}
            />
            <span className="font-semibold">GenAuk</span>
          </a>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Building practical AI solutions, modern software, and business websites.
          </p>
          <div className="mt-5 flex gap-2">
            {[Twitter, Linkedin, Github].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="inline-grid place-items-center size-9 rounded-full glass hover:border-primary/40 transition-colors"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterCol
          title="Quick Links"
          items={[
            { l: "Home", href: "#home" },
            { l: "About", href: "#about" },
            { l: "Process", href: "#process" },
            { l: "Contact", href: "#contact" },
          ]}
        />
        <FooterCol
          title="Services"
          items={[
            { l: "AI Agents", href: "#services" },
            { l: "AI Automation", href: "#services" },
            { l: "Web Development", href: "#services" },
            { l: "SaaS Development", href: "#services" },
            { l: "Mobile Apps", href: "#services" },
          ]}
        />
        <FooterCol
          title="Portfolio"
          items={[
            { l: "Aai Vadapav", href: "https://aai-vada-pav.vercel.app/" },
            { l: "All Projects", href: "#portfolio" },
          ]}
        />
      </div>

      <div className="mt-10 border-t border-white/5 pt-5 mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} GenAuk. All rights reserved.</div>
        <div>Crafted with intent. Deployed with care.</div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { l: string; href: string }[] }) {
  return (
    <div>
      <div className="text-sm font-semibold">{title}</div>
      <ul className="mt-4 space-y-2">
        {items.map((it) => (
          <li key={it.l}>
            <a
              href={it.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {it.l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- PAGE ---------- */

export default function App() {
  return (
    <div className="min-h-screen relative">
      {/* animated aurora background */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div
          className="absolute -top-40 -left-40 size-[700px] rounded-full blur-3xl animate-aurora"
          style={{ background: "radial-gradient(circle, var(--aurora-1), transparent 60%)" }}
        />
        <div
          className="absolute top-1/3 -right-40 size-[600px] rounded-full blur-3xl animate-aurora"
          style={{
            background: "radial-gradient(circle, var(--aurora-2), transparent 60%)",
            animationDelay: "-6s",
          }}
        />
        <div
          className="absolute bottom-0 left-1/3 size-[500px] rounded-full blur-3xl animate-aurora"
          style={{
            background: "radial-gradient(circle, var(--aurora-3), transparent 60%)",
            animationDelay: "-12s",
          }}
        />
      </div>

      <Navbar />
      <main>
        <Hero />
        {/* <Trusted /> */}
        <About />
        <Services />

        <Process />
        <Portfolio />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
