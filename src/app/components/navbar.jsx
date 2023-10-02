"use client";
import Image from "next/image";
import { useState } from "react";
import logo from "../../../public/assets/logotransparent.png";
import Link from "next/link";
import burger from "../../../public/assets/burger.png";
export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between lg:px-2 bg-black text-white mb-3 max-w-screen">
        <div className="container lg:px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase "
              href="/"
            >
              <Image src={logo} alt="test" className="w-32" />
            </Link>
            <button
              className=" cursor-pointer text-xl leading-none px-3 rounded bg-transparent block lg:hidden"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <Image src={burger} alt="expand navigation" className="w-12" />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center text-white" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                  href="/"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg  opacity-75"></i>
                  <span className="ml-2">About Us</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                  href="/gallery"
                >
                  <i className="fab fa-twitter text-lg leading-lg  opacity-75"></i>
                  <span className="ml-2">Gallery</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                  href="/contact"
                >
                  <i className="fab fa-pinterest text-lg leading-lg  opacity-75"></i>
                  <span className="ml-2">Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
