"use client"

import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import { SocialLinks } from "@/constants";

const Hero = () => {
  const lineRef = useRef();

  const handleMouseEnter = () => {
    gsap.to(lineRef.current, { opacity: 0, duration: 0.5 });
  };

  const handleMouseLeave = () => {
    gsap.to(lineRef.current, { opacity: 1, duration: 0.5 });
  };

  useGSAP(() => {
    gsap.fromTo(lineRef.current, { 
        strokeDashoffset: lineRef.current.getTotalLength() 
      },
      {
        strokeDashoffset: 0,
        delay: 2.8,
        ease: 'power1.out',
        opacity: 1,
        y: 0
      }
    );

    gsap.to('.hero-main-text', {
      opacity: 1,
      delay: 1.4,
      y: 0
    });

    gsap.to('.hero-secondary-text', {
      opacity: 1,
      delay: 1.6,
      y: 0
    });

    gsap.to('.hero-button', {
      opacity: 1,
      delay: 1.8,
      y: 0
    });

    gsap.to('.hero-socials', {
      opacity: 1,
      delay: 2,
      y: 0,
      stagger: {
        each: 0.1,
        from: 'start',
        grid: 'auto'
      }
    });
  });

  return (
    <section className="screen-max-width max-sm:px-8 max-lg:px-8 max-xl:px-8 py-6 text-secondary select-none">
      <div className="flex flex-col gap-4 py-40 max-[500px]:py-16 max-lg:py-30">
        <div className="hero-main-text text-sm font-light opacity-0 translate-y-20">
          <span className="absolute left-[65px] top-[-15px] z-[-10]">
            <svg width="120" height="50" viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
              <path
                ref={lineRef}
                className="opacity-0 translate-y-20"
                d="M10 150 L590 150"  // This is the straight line (M = move, L = line)
                fill="transparent"
                stroke="#0E7490"  // Color of the line
                strokeWidth="15"  // Line thickness
              />
            </svg>
          </span>

          Hallo, I&apos;m <strong onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="hover:text-special_light transition-all duration-300">Sergio Guzman</strong>, Full Stack Developer & Digital Solution Specialist.
        </div>

        <div className="hero-secondary-text opacity-0 translate-y-20 font-bold text-6xl max-[500px]:text-4xl">
          Developing innovative digital solutions.
        </div>

        <div className="hero-button opacity-0 translate-y-20 mt-10 w-full flex flex-row justify-start items-center max-[500px]:justify-center">
          <Link href="#" className="text-base py-3 px-6 bg-special_principal hover:bg-special_light rounded-2xl transition-all duration-500">Work with me</Link>
        </div>
      </div>

      <div className="w-full flex justify-center items-center pt-16">
        <div className="flex flex-row gap-4">
          {SocialLinks.map((item) => (
            <Link key={item.name} href={item.href} className="transition-all duration-300 hero-socials opacity-0 translate-y-[-20px] hover:scale-110" target="_blank">
              <Image src={item.src} width={40} height={40} alt={item.name} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
};

export default Hero