import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

const Navbar = () => {
  const NAV_LINKS = [
    { href: "/", key: "home", label: "Home" },
    { href: "/", key: "about", label: "About" },
    { href: "/", key: "products", label: "Products" },
  ];

  return (
    <nav className="w-full flexBetween padding-container relative z-30 py-3 bg-white ">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={130} height={29} />
      </Link>
      <ul className="hidden h-full gap-10 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="medium-14 text-black flexCenter cursor-pointer pb-1.5 transition-all  hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <Link href="/">
        <Button type="button" title="Explore More" variant="btn_blue" />
      </Link>
    </nav>
  );
};

export default Navbar;
