import { LoaderCircle, Sparkles, Clock3 } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectComingSoon({
  projectName = "Neural Chat Assistant",
}) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group relative flex h-full min-h-[520px] overflow-hidden rounded-3xl border border-black/5 bg-gradient-to-br from-[#FFF8F1] via-[#FFF3E4] to-[#FCE8D5] p-8 shadow-lg transition-all duration-500 hover:shadow-2xl"
    >
      {/* Background Glow */}
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-300/20 blur-3xl transition-all duration-700 group-hover:scale-125" />

      <div className="relative flex w-full flex-col items-center justify-center">

        {/* Loader */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
            ease: "linear",
          }}
          className="flex h-24 w-24 items-center justify-center rounded-full border border-orange-300/40 bg-white/70 shadow-md backdrop-blur"
        >
          <LoaderCircle
            size={42}
            className="text-orange-500"
          />
        </motion.div>

        {/* Badge */}

        <div className="mt-8 flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-xs font-medium text-orange-600">

          <Sparkles size={14} />

          Coming Soon

        </div>

        {/* Title */}

        <h2 className="mt-8 text-center text-3xl font-bold text-zinc-900">
          {projectName}
        </h2>

        <p className="mt-4 max-w-sm text-center text-[15px] leading-7 text-zinc-600">
          We're designing and building this project with the same attention to
          detail as every product we ship.
        </p>

        {/* Progress */}

        <div className="mt-10 w-full max-w-sm">

          <div className="mb-2 flex items-center justify-between text-sm text-zinc-500">

            <span className="flex items-center gap-2">
              <Clock3 size={15} />
              Development
            </span>

            <span>65%</span>

          </div>

          <div className="h-2 overflow-hidden rounded-full bg-orange-100">

            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "65%" }}
              transition={{ duration: 1.4 }}
              className="h-full rounded-full bg-gradient-to-r from-orange-400 to-orange-500"
            />

          </div>

        </div>

        {/* Floating Dots */}

        <div className="mt-10 flex gap-3">

          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -8, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                repeat: Infinity,
                delay: i * 0.2,
                duration: 1.5,
              }}
              className="h-3 w-3 rounded-full bg-orange-400"
            />
          ))}

        </div>

      </div>
    </motion.article>
  );
}