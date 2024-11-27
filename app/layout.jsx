import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Parisienne, Montserrat } from 'next/font/google';

const parisienne = Parisienne({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-parisienne'
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '300', '400', '500', '600', '700'],
  variable: '--font-montserrat'
});

export const metadata = {
  title: "SGuzmanR Portfolio",
  description: "Explore the portfolio of SGuzmanR, a Full Stack Developer and Digital Solution Specialist. Creating innovative web applications, digital solutions, and scalable technologies for modern businesses.",

  // Open Graph (OG) tags for social media sharing
  openGraph: {
    title: "SGuzmanR Portfolio",
    description: "Discover the professional portfolio of SGuzmanR, specializing in full-stack development, digital transformation, and modern web technologies.",
    url: "https://sguzmanr.github.io/sguzmanr_portfolio_website/",
    site_name: "SGuzmanR Portfolio",
    // images: [
    //   {
    //     url: "https://www.sguzmanr.com/og-image.jpg", // Replace with your image URL
    //     width: 1200,
    //     height: 630,
    //     alt: "SGuzmanR Portfolio Thumbnail"
    //   }
    // ],
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
  
  author: "Sergio Guzman",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${parisienne.variable} bg-primary`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
