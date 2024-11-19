"use client"

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Marquee } from "@/constants";

const Hero = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;

    gsap.to(marqueeElement, {
      x: "-100%",
      duration: 20,
      repeat: -1,
      ease: "linear",
      delay: 0,
    });

    // Pause the animation on hover
    marqueeElement.addEventListener("mouseenter", () => {
      gsap.to(marqueeElement, { timeScale: 0 });
    });

    marqueeElement.addEventListener("mouseleave", () => {
      gsap.to(marqueeElement, { timeScale: 1 });
    });
  }, []);

  return (
    <section>
      <div>
        Discover the next stage of a founder&apos;s story
      </div>
      
      <div>
        Digital consulting for tech and SaaS, laying the framework to accelerate your growth to new heights.
      </div>

      <div style={{ width: "100%", overflow: "hidden", whiteSpace: "nowrap" }}>
        <div
          ref={marqueeRef}
          className="inline-block pl-[100%]"
        >
          {Marquee.map((marquee) => (
            <span key={marquee.name} className="flex flex-row gap-10">{marquee.name}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero