import React, { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;

    if (!section || !text) return;

    const ctx = gsap.context(() => {
      /*
       * Split the text into words first.
       * Then detect which words are on the same
       * visual line and group them together.
       */
      const originalText = text.textContent;

      const words = originalText.trim().split(/\s+/);

      text.innerHTML = "";

      words.forEach((word, index) => {
        const span = document.createElement("span");

        span.textContent = word;
        span.style.display = "inline-block";
        span.style.color = "#ffffff";
        span.style.transition = "none";

        if (index !== words.length - 1) {
          span.style.marginRight = "0.25em";
        }

        text.appendChild(span);
      });

      const wordElements = [...text.children];

      const createLines = () => {
        // Reset previous line styles
        wordElements.forEach((word) => {
          word.style.color = "#ffffff";
          word.dataset.line = "";
        });

        /*
         * Words having the same offsetTop belong
         * to the same visual line.
         */
        const lines = [];

        wordElements.forEach((word) => {
          const top = Math.round(word.offsetTop);

          let line = lines.find(
            (item) => Math.abs(item.top - top) <= 2
          );

          if (!line) {
            line = {
              top,
              words: [],
            };

            lines.push(line);
          }

          line.words.push(word);
        });

        lines.sort((a, b) => a.top - b.top);

        /*
         * Each line gets a progress range.
         *
         * When the user scrolls:
         *
         * line 1 → black
         * line 2 → black
         * line 3 → black
         * ...
         */
        const lineData = lines.map((line, index) => ({
          words: line.words,
          index,
          progressStart: index / lines.length,
          progressEnd: (index + 1) / lines.length,
        }));

        gsap.set(wordElements, {
          color: "#ffffff",
        });

        ScrollTrigger.getById("about-text-reveal")?.kill();

        gsap.to(
          {
            progress: 0,
          },
          {
            progress: 1,
            ease: "none",

            scrollTrigger: {
              id: "about-text-reveal",
              trigger: section,
              start: "top 75%",
              end: "bottom 30%",
              scrub: true,
              invalidateOnRefresh: true,
            },

            onUpdate: function () {
              const progress = this.targets()[0].progress;

              lineData.forEach((line) => {
                let lineProgress =
                  (progress - line.progressStart) /
                  (line.progressEnd - line.progressStart);

                lineProgress = gsap.utils.clamp(
                  0,
                  1,
                  lineProgress
                );

                /*
                 * Smoothly transition each line
                 * from white to black.
                 */
                const color = gsap.utils.interpolate(
                  "#ffffff",
                  "#000000",
                  lineProgress
                );

                line.words.forEach((word) => {
                  word.style.color = color;
                });
              });
            },
          }
        );

        ScrollTrigger.refresh();
      };

      createLines();

      const resizeObserver = new ResizeObserver(() => {
        ScrollTrigger.getById("about-text-reveal")?.kill();

        requestAnimationFrame(createLines);
      });

      resizeObserver.observe(text);

      window.addEventListener("resize", createLines);

      return () => {
        resizeObserver.disconnect();
        window.removeEventListener("resize", createLines);
        ScrollTrigger.getById("about-text-reveal")?.kill();
      };
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative bg-white py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12">

        {/* Small existing heading */}
        <div className="mb-12 text-center">
          <SectionHeader
            eyebrow="About GenAuk"
            title={
              <>
                A small team, obsessed with{" "}
                <span className="text-gradient">craft</span>.
              </>
            }
          />
        </div>

        {/* Main typography */}
        <div className="mx-auto max-w-[1450px]">

          <p
            ref={textRef}
            className="
              text-center
              font-black
              uppercase
              tracking-[-0.055em]
              leading-[0.88]
              text-[clamp(3rem,7vw,7.5rem)]
            "
            style={{
              fontFamily: "Arial Narrow, Impact, sans-serif",
            }}
          >
            GenAuk is an AI-focused software studio that builds practical AI
            solutions, modern web applications, and business automation tools.
            We believe technology should solve real business problems—not add
            complexity. Every project is built with clean engineering,
            thoughtful design, and a focus on long-term value.
          </p>

        </div>

        {/* Existing quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            mx-auto
            mt-16
            max-w-3xl
            text-center
            text-xl
            sm:text-2xl
            font-semibold
            italic
            text-black
          "
        >
          "A team that treats your product like its own."
        </motion.blockquote>

        {/* Existing tags */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 text-xs text-black">
          {[
            "Innovation",
            "AI",
            "Technology",
            "Quality",
            "Business Growth",
            "Problem Solving",
          ].map((t) => (
            <span
              key={t}
              className="
                rounded-full
                border
                border-black/10
                bg-black/[0.03]
                px-3
                py-1
              "
            >
              {t}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}

export default About;