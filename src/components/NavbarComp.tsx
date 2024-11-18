"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button"; // Adjust the path based on your project structure

const NavbarComp = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hide, setHide] = useState(false);

  const router = useRouter();
  const currentPath = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (path: string) => {
    setMenuOpen(false);
    router.push(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setHide(true);
        setScrolled(true);
      } else if (window.scrollY > 50) {
        setScrolled(true);
        setHide(false);
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
        className={`sticky top-0 z-20 flex w-full items-center justify-between p-2 px-7 text-white transition-all duration-500 ${
          scrolled
            ? `${hide ? "-translate-y-full bg-gradient-to-r from-yellow-600 via-orange-700 to-red-700" : "bg-gradient-to-r from-yellow-600 via-orange-700 to-red-700"}`
            : "bg-gradient-to-r from-yellow-500 via-orange-600 to-red-600"
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

        <div className="flex items-center md:pr-14 lg:hidden">
          <Button
            variant="ghost"
            onClick={toggleMenu}
            className="flex h-12 w-12 items-center justify-center p-0 md:h-16 md:w-16"
          >
            <FaBars style={{ height: "30px", width: "30px" }} />
          </Button>
        </div>

        <div className="hidden items-center gap-7 pr-20 text-lg font-bold text-white lg:flex">
          <Link
            href="/"
            className={`hover:text-yellow-300 ${currentPath === "/" ? "text-yellow-400" : ""}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`hover:text-yellow-300 ${currentPath === "/about" ? "text-yellow-400" : ""}`}
          >
            About
          </Link>
          <Link
            href="/teams"
            className={`hover:text-yellow-300 ${currentPath === "/teams" ? "text-yellow-400" : ""}`}
          >
            Team
          </Link>
          <Link
            href="/products"
            className={`hover:text-yellow-300 ${currentPath === "/products" ? "text-yellow-400" : ""}`}
          >
            Product
          </Link>
          <Button
            variant="default"
            onClick={() => handleLinkClick("/about#contact-me")}
            className="ml-4 h-14 w-36 bg-yellow-300 text-lg font-bold text-neutral-800 hover:bg-yellow-500"
          >
            Contact Us
          </Button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-30 flex flex-col bg-opacity-80 bg-gradient-to-r from-yellow-600 via-orange-700 to-red-700 text-white backdrop-blur-md">
          <Button
            variant="ghost"
            onClick={toggleMenu}
            className="absolute right-4 top-4 text-3xl text-white"
          >
            <AiOutlineClose />
          </Button>

          <div className="flex flex-grow flex-col items-center justify-center gap-6">
            <Link
              href="/"
              onClick={() => handleLinkClick("/")}
              className="w-full px-6 py-4 text-center text-2xl hover:bg-yellow-600"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => handleLinkClick("/about")}
              className="w-full px-6 py-4 text-center text-2xl hover:bg-yellow-600"
            >
              About
            </Link>
            <Link
              href="/teams"
              onClick={() => handleLinkClick("/teams")}
              className="w-full px-6 py-4 text-center text-2xl hover:bg-yellow-600"
            >
              Team
            </Link>
            <Link
              href="/products"
              onClick={() => handleLinkClick("/products")}
              className="w-full px-6 py-4 text-center text-2xl hover:bg-yellow-600"
            >
              Product
            </Link>
            <Button
              variant="default"
              onClick={() => handleLinkClick("/about#contact-me")}
              className="w-full bg-yellow-300 px-6 py-4 text-center text-2xl text-neutral-800 hover:bg-yellow-400"
            >
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarComp;
