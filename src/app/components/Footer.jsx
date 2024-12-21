import React from "react";
import Link from "next/link";
import Image from "next/image";
const FOOT_LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "/", key: "about", label: "About" },
  { href: "/", key: "products", label: "Products" },
];

const Footer = () => {
  return (
    <div>
      <footer className="w-full">
        <div className="w-full flexBetween padding-container relative z-30 py-10 ">
          <Link href="/">
            <img src="/footerlogo.svg" className="md:w-[160px] md:h-[50px] w-[130px] h-[29px]" alt="logo" />
          </Link>
          <ul className="hidden h-full gap-12 md:flex text-lg">
            {FOOT_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="text-base text-white flexCenter cursor-pointer pb-1.5 transition-all  hover:font-bold"
              >
                {link.label}
              </Link>
            ))}
          </ul>
          <div className="flex flex-row gap-3">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/facebook.svg"
                alt="Facebook"
                width={30}
                height={30}
                className="transition-opacity duration-300 hover:opacity-80"
              />
            </a>

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/instagram.svg"
                alt="Instagram"
                width={30}
                height={30}
                className="transition-opacity duration-300 hover:opacity-80"
              />
            </a>

            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/twitter.svg"
                alt="Twitter"
                width={30}
                height={30}
                className="transition-opacity duration-300 hover:opacity-80"
              />
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                width={30}
                height={30}
                className="transition-opacity duration-300 hover:opacity-80"
              />
            </a>
          </div>
        </div>
        <hr className="border-gray-500" />

        <div className="w-full flex  justify-center items-center padding-container relative z-30 py-10 pb-5">
          <ul className="flex flex-col md:flex-row flexCenter gap-2 space-x-6 text-sm">
            <li>2023 HomeBridge. All rights reserved.</li>
            <div className="flex gap-4">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            </div>
            <li>Cookies Settings</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
