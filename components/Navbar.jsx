"use client"

import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { useState } from "react";

import { NavLinks } from "@/constants";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

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
    <nav className="screen-max-width max-sm:px-8 max-lg:px-8 max-xl:px-8 py-6">
      <div id="nav" className="flex flex-row justify-between items-center text-secondary">
        <div className="nav-box flex flex-row items-center justify-center gap-8 opacity-0 translate-y-[-100px]">
          <Link href="#" className="font-parisienne text-3xl select-none">
            SG
          </Link>
        </div>

        <div className="nav-box opacity-0 translate-y-[-100px]">
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

      {/* Mobile Menu */}
      {open && 
        <div className="absolute top-16 right-8 bg-primary text-white shadow-sm shadow-special_principal z-10">
          <ul className="p-8  flex flex-col gap-3">
            {NavLinks.map((link) => (
                <li key={link.name} className="font-light hover:underline transition-all">
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
          </ul>
        </div>
      }
    </nav>
  )
};

export default Navbar;