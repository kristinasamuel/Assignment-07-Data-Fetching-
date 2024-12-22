// Home // Navbar
// Client side Rendering
"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Button } from "./ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="w-full bg-slate-700 h-[48px] flex  items-center justify-between p-4">
      {/* Logo  */}
      <h2 className="text-[32px] font-semibold text-gray-300 uppercase hover:text-gray-100">
        kristina
      </h2>
       {/* Menu Icon ,show on mobile screen */}
      <div className="sm:hidden">
        <Button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 focus:outline-none bg-slate-700"
        >
          <FiMenu className="h-[50px] w-[50px] text-[#fff]" />
        </Button>
      </div>
      {/* Creating links easy to navigate between pages hidden on mobile screen */}
      <div className="hidden sm:flex md:flex">
        <ul className="flex  gap-5 text-[19px] font-medium text-gray-300 uppercase ">
          <Link href={"/"}>
           <li className="hover:text-gray-100 hover:underline">home</li></Link>
          <Link href={"/server-side"}><li className="hover:text-gray-100 hover:underline">Server-side</li>
          </Link>
          <Link href={"/client-side"}><li className="hover:text-gray-100 hover:underline">client-side</li>
          </Link>
          <Link href={"/contact"}><li className="hover:text-gray-100 hover:underline">contact</li>
          </Link>
        </ul>
      </div>
      {/* Dispaly links on mobile screen when we click on menu icon*/}
      {isMenuOpen && (
        <div className="sm:hidden absolute top-[48px] left-0 w-full bg-gray-600">
          <ul className="flex flex-col items-center space-y-4 py-4 font-Poppins font-medium text-[18px] uppercase text-gray-300">
            <Link href={"/"}>
              <li className=" hover:underline underline-offset-4">Home</li>{" "}
            </Link>
            <Link href={"/server-side"}>
              <li className=" hover:underline underline-offset-4">
                Server-side
              </li>
            </Link>
            <Link href={"/client-side"}>
              <li className=" hover:underline underline-offset-4">
                Client-side
              </li>
            </Link>
           
            <Link href={"/contact"}>
              <li className="hover:underline underline-offset-4">Contact</li>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
}
