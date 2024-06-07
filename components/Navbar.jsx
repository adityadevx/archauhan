"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky inset-x-0 top-4 z-50 flex w-full flex-wrap md:flex-nowrap md:justify-start">
      <nav
        className="relative mx-2 w-full max-w-[85rem] rounded-[28px] bg-white py-3 pe-2 ps-5 text-black md:flex md:items-center md:justify-between md:py-0 lg:mx-auto"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-block flex-none rounded-md text-xl font-semibold uppercase focus:opacity-80 focus:outline-none"
            aria-label="Preline"
          >
            archauhan
          </Link>

          <div className="md:hidden">
            <button
              type="button"
              className="flex size-8 items-center justify-center rounded-full bg-neutral-800 text-sm font-semibold text-white disabled:pointer-events-none disabled:opacity-50"
              onClick={() => setIsOpen(!isOpen)}
              aria-controls="navbar-collapse"
              aria-label="Toggle navigation"
            >
              <svg
                className={`${
                  isOpen ? "hidden" : "block"
                } size-4 flex-shrink-0`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className={`${
                  isOpen ? "block" : "hidden"
                } size-4 flex-shrink-0`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div
          id="navbar-collapse"
          className={`hs-collapse ${
            isOpen ? "block" : "hidden"
          } grow basis-full overflow-hidden transition-all duration-300 md:block`}
        >
          <div className="flex flex-col py-2 md:flex-row md:items-center md:justify-end md:py-0 md:ps-7">
            <Link
              className="text-md py-3 ps-px text-black hover:rounded-md hover:bg-black hover:px-2 hover:py-2 hover:text-white hover:transition-all hover:duration-300 hover:ease-in-out sm:px-3 md:py-4"
              href="/"
              aria-current="page"
            >
              Home
            </Link>
            <Link
              className="text-md py-3 ps-px text-black hover:rounded-md hover:bg-black hover:px-2 hover:py-2 hover:text-white hover:transition-all hover:duration-300 hover:ease-in-out sm:px-3 md:py-4"
              href="/#projects"
            >
              Projects
            </Link>
            {/* <Link
              className="text-md py-3 ps-px text-black hover:rounded-md hover:bg-black hover:px-2 hover:py-2 hover:text-white hover:transition-all hover:duration-300 hover:ease-in-out sm:px-3 md:py-4"
              href="#"
            >
              Reviews
            </Link>
            <Link
              className="text-md py-3 ps-px text-black hover:rounded-md hover:bg-black hover:px-2 hover:py-2 hover:text-white hover:transition-all hover:duration-300 hover:ease-in-out sm:px-3 md:py-4"
              href="#"
            >
              Approach
            </Link> */}
          </div>
        </div>
      </nav>
    </header>
  );
}
