
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
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
            <Image src="/footerlogo.svg" alt="logo" width={130} height={29} />
          </Link>
          <ul className="hidden h-full gap-12 lg:flex">
            {FOOT_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="medium-14 text-white flexCenter cursor-pointer pb-1.5 transition-all  hover:font-bold"
              >
                {link.label}
              </Link>
            ))}
          </ul>
          <div className="flex flex-row gap-2">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/facebook.svg"
                alt="Facebook"
                width={25}
                height={25}
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
                width={25}
                height={25}
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
                width={25}
                height={25}
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
                width={25}
                height={25}
                className="transition-opacity duration-300 hover:opacity-80"
              />
            </a>
          </div>
        </div>
        <hr className="border-gray-500" />

        <div className="w-full flex justify-center items-center padding-container relative z-30 py-10">
          <ul className="flex space-x-6 text-sm">
            <li>2023 HomeBridge. All rights reserved.</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookies Settings</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
//hey