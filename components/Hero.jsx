import Link from "next/link";
import Image from "next/image";

import { SocialLinks } from "@/constants";

const Hero = () => {
  return (
    <section className="screen-max-width max-sm:px-8 max-lg:px-8 max-xl:px-8 py-6 text-secondary">
      <div className="flex flex-col gap-4 py-40 max-[500px]:py-20 max-lg:py-28">
        <div className="text-sm font-light">
          Hallo, I&apos;m <strong>Sergio Guzman</strong>, Full Stack Developer & Digital Solution Specialist
        </div>

        <div className="font-bold text-6xl max-[500px]:text-5xl">
          Developing innovative digital solutions.
        </div>

        <div className="mt-10 w-full flex flex-row justify-start items-center max-[500px]:justify-center">
          <Link href="#" className="text-base py-3 px-6 bg-special_principal hover:bg-special_secondary rounded-2xl transition-all duration-500">Work with me</Link>
        </div>
      </div>

      <div className="w-full flex justify-center items-center">
        <div className="flex flex-row gap-4">
          {SocialLinks.map((item) => (
            <Link key={item.name} href={item.href} className="hover:scale-105 transition-all duration-700" target="_blank">
              <Image src={item.src} width={40} height={40} alt={item.name} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
};

export default Hero