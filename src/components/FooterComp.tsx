import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { SiShopee } from "react-icons/si";

const FooterComp = () => {
  return (
    <footer className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 py-8 text-white">
      <div className="container mx-auto grid grid-cols-2 gap-8 px-6 md:grid-cols-4">
        <Link href="/" className="flex items-start gap-2 md:gap-7 md:pl-14">
          <Image
            className="h-16 w-10 md:h-24 md:w-[60px]"
            src="/Logo.png"
            alt="Logo BELKU"
            width={60}
            height={60}
          />
          <h2 className="mt-4 text-2xl font-bold">BELKU</h2>
        </Link>

        <div>
          <h3 className="mb-4 text-lg font-semibold">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-yellow-300">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/teams" className="hover:text-yellow-300">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-yellow-300">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-yellow-300">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">Product</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/products" className="hover:text-yellow-300">
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">Social</h3>
          <ul className="flex space-x-6 text-xl">
            <li>
              <Link
                href="https://twitter.com/huda7077"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter className="hover:text-yellow-300" />
              </Link>
            </li>
            <li>
              <Link
                href="https://instagram.com/nurul.nuun07"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram className="hover:text-yellow-300" />
              </Link>
            </li>
            <li>
              <Link
                href="https://id.shp.ee/e1zQczu"
                target="_blank"
                aria-label="Shopee"
              >
                <SiShopee className="hover:text-yellow-300" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-yellow-500 pt-4 text-center text-sm">
        <p>Copyright © 2024 BELKU - Tambah nafsu makan anda dengan BELKU</p>
        <div className="mt-2 space-x-4">
          <Link href="/privacy-policy" className="hover:text-yellow-300">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-yellow-300">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterComp;
