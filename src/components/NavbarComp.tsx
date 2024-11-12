"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NavbarComp: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const router = useRouter();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (path: string) => {
    setMenuOpen(false);
    router.push(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`sticky top-0 z-20 flex w-full items-center justify-between p-2 px-7 text-white transition-colors duration-700 ${
          scrolled
            ? "border-b border-yellow-500 bg-opacity-50 bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 backdrop-blur-md"
            : "border-b border-yellow-500 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600"
        }`}
      >
        <Link href="/" className="flex items-center md:gap-7 md:pl-14 lg:pl-20">
          <Image
            className="h-16 w-10 md:h-24 md:w-[60px]"
            src="/Logo.png"
            alt="Logo BELKU"
            width={60}
            height={60}
          />
        </Link>

        {/* Menubar for small screens */}
        <div className="flex items-center md:pr-14 lg:hidden">
          <Button
            onClick={toggleMenu}
            className="flex h-12 w-12 items-center justify-center p-0 md:h-16 md:w-16"
          >
            {menuOpen ? (
              <AiOutlineClose style={{ height: "30px", width: "30px" }} />
            ) : (
              <FaBars style={{ height: "30px", width: "30px" }} />
            )}
          </Button>
        </div>

        {/* Menu for large screens */}
        <div className="hidden items-center gap-7 pr-20 text-lg font-bold text-white lg:flex">
          <Link href="/" className="hover:text-red-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-red-300">
            About
          </Link>
          <Link href="/teams" className="hover:text-red-300">
            Team
          </Link>
          <Link href="/products" className="hover:text-red-300">
            Product
          </Link>
          <Button
            variant="secondary"
            className="ml-4 h-14 rounded-lg bg-lime-300 text-lg font-bold text-neutral-800 hover:bg-lime-400"
          >
            Contact Us
          </Button>
        </div>
      </nav>

      {/* Dropdown Menu for small screens */}
      {menuOpen && (
        <div className="top-19 fixed left-0 right-0 z-30 flex flex-col items-center bg-opacity-50 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-white backdrop-blur-md lg:hidden">
          <Button
            onClick={() => handleLinkClick("/")}
            variant="link"
            className="w-full py-2 text-center text-white hover:bg-red-600"
          >
            Home
          </Button>
          <Button
            onClick={() => handleLinkClick("/about")}
            variant="link"
            className="w-full py-2 text-center text-white hover:bg-red-600"
          >
            About
          </Button>
          <Button
            onClick={() => handleLinkClick("/teams")}
            variant="link"
            className="w-full py-2 text-center text-white hover:bg-red-600"
          >
            Team
          </Button>
          <Button
            onClick={() => handleLinkClick("/products")}
            variant="link"
            className="w-full py-2 text-center text-white hover:bg-red-600"
          >
            Product
          </Button>
          <Button
            variant="secondary"
            className="mb-2 mt-4 w-full bg-lime-300 text-neutral-800 hover:bg-lime-400"
          >
            Contact Us
          </Button>
        </div>
      )}
    </>
  );
};

export default NavbarComp;
