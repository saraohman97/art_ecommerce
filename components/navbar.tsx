"use client";

import Image from "next/image";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import Link from "next/link";
import { FaFacebookF, FaInstagramSquare } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <div className="h-screen w-full relative">
      <Image src="/art.svg" alt="" fill className="object-cover" />
      <div className="absolute inset-0 bg-white/80 flex items-center justify-center flex-col p-2 text-neutral-500 gap-1">
        <div className="text-3xl">Mike Wazowski</div>
        Min konst
      </div>
      <BiMenu
        onClick={toggleOpen}
        className="absolute z-40 top-10 left-10 text-neutral-500 cursor-pointer"
        size={30}
      />

      {/* HIDDEN MENU */}
      <div>
        {open && (
          <div
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/50 z-40"
          />
        )}
        <div
          className={`bg-white h-full w-96 p-10 flex flex-col gap-4 absolute z-50 -left-96 
          ${
            open
              ? "translate-x-96 transition duration-500"
              : "-translate-x-96 transition duration-500"
          }
          `}
        >
          <div
            onClick={() => setOpen(false)}
            className="text-md text-neutral-500 cursor-pointer self-end p-2 hover:bg-slate-50 rounded-xl w-8 flex items-center justify-center"
          >
            X
          </div>

          {/* MENU CONTENT */}
          <div className="flex flex-col gap-4 text-neutral-500 mt-20">
            <Link href="/">Alla produkter</Link>
            <Link href="/produkter">Kollektioner</Link>

            <div className="flex items-center gap-2 mt-2">
              <Link href="/produkter"><FaFacebookF size={20} /></Link>
              <Link href="/produkter"><FaInstagramSquare size={20} /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
