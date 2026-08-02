import { motion } from "framer-motion";
import { Clock3, Lock, Sparkles, Check, Rocket } from "lucide-react";

interface ComingSoonProjectCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  tech: string[];
}

export default function ComingSoonProjectCard({
  title,
  description,
  image,
  features = [],
  tech = [],
}: ComingSoonProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-3xl glass-strong lg:col-span-2"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10" />

      {/* EVERYTHING BLURRED */}
      <div className="pointer-events-none select-none blur-md opacity-40 grayscale">
        <div className="grid md:grid-cols-2">
          {/* Image */}
          <div className="relative min-h-[520px] overflow-hidden">
            <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover" />
          </div>

          {/* Content */}
          <div className="p-10">
            <h2 className="text-4xl font-bold">{title}</h2>

            <p className="mt-5 text-muted-foreground leading-7">{description}</p>

            <ul className="mt-8 space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check size={16} />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-2">
              {tech.map((item) => (
                <span key={item} className="rounded-full border border-white/10 px-3 py-1">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* DARK GLASS OVERLAY */}
      <div className="absolute inset-0 bg-black/55 backdrop-blur-[6px]" />

      {/* CENTER CONTENT */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{
            y: [0, -12, 0],
            scale: [1, 1.04, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
          }}
          className="text-center"
        >
          {/* Rocket */}
          <motion.div
            animate={{ rotate: [-8, 8, -8] }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="mb-8 flex justify-center"
          >
            <Rocket className="h-16 w-16 text-primary drop-shadow-[0_0_20px_rgba(168,85,247,0.8)]" />
          </motion.div>

          {/* Huge Text */}
          <motion.h1
            animate={{
    scale:[1,1.03,1],
}}
transition={{
    duration:4,
    repeat:Infinity,
    ease:"easeInOut"
}}
            className="
          text-6xl
          md:text-8xl
          lg:text-9xl
          font-black
          uppercase
          tracking-[0.25em]
          bg-gradient-to-r
          from-white
          via-primary
          to-purple-400
          bg-clip-text
          text-transparent
          drop-shadow-[0_0_30px_rgba(168,85,247,0.6)]
        "
          >
            COMING
            <br />
            SOON
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            className="mt-8 text-lg tracking-[0.4em] uppercase text-white/80"
          >
            UNDER DEVELOPMENT
          </motion.p>
        </motion.div>
      </div>

      {/* Animated Glow */}
      <motion.div
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.2, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="
      absolute
      left-1/2
      top-1/2
      h-[420px]
      w-[420px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-primary/20
      blur-[140px]
    "
      />
    </motion.article>
  );
}
