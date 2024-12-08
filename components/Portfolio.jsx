"use client"

import gsap from "gsap";
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import Link from "next/link";

import { PortfolioProyects } from "@/constants";

const Portfolio = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('#portfolio', {
      scrollTrigger: '#portfolio',
      opacity: 1,
      y: 0,
      delay: .3,
    })
  });

  return (
    <section id="portfolio" className="screen-max-width max-sm:px-8 max-lg:px-8 max-xl:px-8 py-6 text-secondary select-none">
      <div className="text-white py-28">
        <div className="flex w-full justify-start items-center">
          <span id="portfolio" className="opacity-0 translate-y-20 font-bold text-6xl max-[500px]:text-4xl">PORTAFOLIO</span>
        </div>
      </div>

      <div>
        <div>
          <div>
            {PortfolioProyects.map((item) => (
              <div key={item.name} className="">
                <Link href={item.href} target="_blank">
                  <div>
                    <Image src={item.src} className="" alt={item.name} />
                  </div>
                  <h2></h2>
                  <p>{item.description}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio