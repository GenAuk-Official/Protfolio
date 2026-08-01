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
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-3xl glass-strong lg:col-span-2"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-700" />

      <div className="grid md:grid-cols-2 ">
        {/* Image */}
        <div className="relative h-full min-h-[520px] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              blur-sm
              scale-110
              brightness-75
              transition-all
              duration-700
              group-hover:scale-115
              group-hover:blur-md
            "
          />

          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

          {/* Coming Soon Badge */}

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-white/10
            backdrop-blur-xl
            border
            border-white/20
            px-6
            py-3
            flex
            items-center
            gap-3
            shadow-2xl
          "
          >
            <Rocket className="text-primary w-5 h-5" />

            <span className="font-semibold text-white tracking-wide">Coming Soon</span>
          </motion.div>

          {/* Floating Sparkles */}

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            className="absolute top-6 left-6"
          >
            <Sparkles className="text-yellow-400" />
          </motion.div>

          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="absolute bottom-6 right-6"
          >
            <Sparkles className="text-purple-400" />
          </motion.div>
        </div>

        {/* Content */}

        <div className="relative p-8 sm:p-10 flex flex-col">
          <div className="flex items-center gap-2 text-xs">
            <span className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-4 py-1.5 text-xs font-bold text-black shadow-lg shadow-yellow-500/30">
              <Rocket className="h-3.5 w-3.5" />
              Coming Soon
            </span>

            <span className="text-muted-foreground flex items-center gap-1">
              <Clock3 size={13} />
              Under Development
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-bold">{title}</h2>

          <p className="mt-4 text-muted-foreground leading-7">{description}</p>

          {/* Features */}

          <ul className="mt-6 grid grid-cols-2 gap-3">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="text-primary" size={15} />

                {feature}
              </li>
            ))}
          </ul>

          {/* Tech */}

          <div className="mt-7 flex flex-wrap gap-2">
            {tech.map((item) => (
              <span
                key={item}
                className="
                rounded-full
                border
                border-white/10
                bg-white/5
                px-3
                py-1
                text-xs
                text-muted-foreground
              "
              >
                {item}
              </span>
            ))}
          </div>

          {/* Buttons */}

          <div className="mt-8 flex gap-3">
            <button
              disabled
              className="
                flex
                items-center
                gap-2
                rounded-xl
                bg-primary/20
                px-5
                py-3
                text-sm
                cursor-not-allowed
                opacity-70
              "
            >
              <Lock size={16} />
              Launching Soon
            </button>

            <button
              disabled
              className="
                rounded-xl
                border
                border-white/10
                px-5
                py-3
                text-sm
                cursor-not-allowed
                opacity-60
              "
            >
              Case Study
            </button>
          </div>

          {/* Progress */}

          <div className="mt-10">
            <div className="flex justify-between text-xs mb-2 text-muted-foreground">
              <span>Project Progress</span>
              <span>80%</span>
            </div>

            <div className="h-2 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "80%" }}
                transition={{ duration: 1.5 }}
                className="h-full rounded-full bg-gradient-to-r from-primary to-purple-500"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
