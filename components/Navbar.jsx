"use client"

import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";

import { NavLinks, SocialLinks } from "@/constants";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      gsap.to('#mobile-nav', {
        opacity: 1,
        x: 0,
        duration: 0.5
      });
    };
  }, [open])

  useGSAP(() => {
    gsap.to('.nav-box', {
      opacity: 1,
      y: 0,
      delay: .1,
      stagger: {
        each: .1,
        from: 'edges',
      }
    });

    gsap.to('.nav-links', {
      opacity: 1,
      y: 0,
      delay: .15,
      stagger: {
        each: .2,
        from: 'end',
      }
    });
  });

  return (
    <nav className="screen-max-width max-sm:px-8 max-lg:px-8 max-xl:px-8 py-6 select-none">
      <div id="nav" className="flex flex-row justify-between items-center text-secondary">
        <div className="nav-box flex flex-row items-center justify-center gap-8 opacity-0 translate-y-[-100px]">
          <Link href="#" className="font-parisienne text-3xl">
            SG
          </Link>
        </div>

        {/* Mobile Menu */}
        {open && 
          <div id="mobile-nav" className="fixed overflow-hidden flex flex-col justify-between py-20 h-screen top-0 left-0 w-screen bg-primary text-white z-10 translate-x-[100vw] opacity-0">
            <ul className="flex flex-col gap-6 justify-center items-center text-center">
              {NavLinks.map((link) => (
                  <li key={link.name} className="font-light hover:underline transition-all">
                    <Link href={link.href} onClick={handleOpen}>{link.name}</Link>
                  </li>
                ))}
            </ul>

            <div className="flex flex-row gap-5 w-full justify-center items-center">
              {SocialLinks.map((item) => (
                <Link key={item.name} href={item.href} className="transition-all hover:scale-110" target="_blank">
                  <Image src={item.src} width={36} height={36} alt={item.name} />
                </Link>
              ))}
            </div>
          </div>
        }

        <div className="nav-box opacity-0 translate-y-[-100px] z-10">
          <div className="hidden max-[500px]:flex">
            <span className="cursor-pointer" onClick={handleOpen}>
              <Image src={open ? '/hm_close.png' : '/hm_open.png'} width={25} height={25} alt={open ? 'Close Hamburger Menu' : 'Open Hamburger Menu'} />
            </span>
          </div>

          <ul className="flex flex-row gap-4 max-[500px]:hidden">
            {NavLinks.map((link) => (
              <li key={link.name} className="nav-links opacity-0 translate-y-[-100px] text-sm font-light hover:underline transition-all">
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;