"use client";
import React from "react";
import { SideBarItems } from "@/constants";
import { usePathname } from "next/navigation";
import { ArrowUp, Help } from "@/assets";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Sidebar({
  isOpen,
  handleCloseNav,
}: {
  isOpen: boolean;
  handleCloseNav: () => void;
}) {
  const pathname = usePathname();


  return (
    <>
      <motion.div
        className={`fixed top-0 left-0 h-full z-40 transition-width duration-300 bg-white ${
          isOpen ? "translate-x-0 lg:w-[230px]" : "lg:w-20 -translate-x-full"
        } md:translate-x-0 md:relative md:h-[100vh] px-2 mt-[0.6em]`}
      >
        <div className='mt-[4em]'>
          {SideBarItems.map((item) => (
            <ul className='flex flex-col' key={item.title}>
              <li
                className={cn(
                  "flex w-full h-[36px] hover:bg-primary ease-in-out transition rounded-[8px] px-2 cursor-pointer items-center justify-between mt-[5px] mb-[5px] text-gray-900 font-semibold",
                  pathname === item.path && "bg-primary",
                  !isOpen && "items-center justify-center"
                )}
              >
                <span className='flex gap-x-3'>
                  <Image src={item.icon} alt={item.title} loading='eager' />
                  <span
                    className={cn(
                      "text-[14px]",
                      isOpen ? "lg:visible" : "lg:hidden"
                    )}
                  >
                    {item.title}
                  </span>
                </span>
                {item.dropdownItems && isOpen ? (
                  <Image src={ArrowUp} alt={item.title} loading='eager' />
                ) : null}

                {item.title === "Stellenanzeigen" && (
                  <div
                    className={cn(
                      "w-[20px] h-[20px] rounded-full bg-red-100 font-semibold text-red-800 flex items-center justify-center text-[12px]",

                      !isOpen && "absolute right-[20px] mb-[1.3em]"
                    )}
                  >
                    1
                  </div>
                )}
              </li>
              {item.dropdownItems &&
                item.dropdownItems?.map((option) => (
                  <span
                    className={cn(
                      "px-11 text-[14px] hover:text-primary ease-in-out transition cursor-pointer font-semibold mt-[8px] mb-[8px] text-gray-900",
                      isOpen ? "lg:visible" : "lg:hidden"
                    )}
                    key={option.id}
                  >
                    {option.title}
                  </span>
                ))}
            </ul>
          ))}
        </div>

        {/* Divider */}
        <div className='w-full h-[1px] bg-gray-200 mt-[1em] -ml-[0.2em]' />

        {/* Help Button */}
        <button
          className={cn(
            "flex items-center gap-x-4 px-2 mt-[3em] w-full h-[36px] hover:bg-primary ease-in-out transition rounded-[8px]",
            !isOpen && "items-center justify-center"
          )}
        >
          <Image src={Help} alt='Help' loading='eager' />
          {isOpen && <span className='text-[14px] font-semibold'>Help</span>}
        </button>
      </motion.div>

      {/* Overlay for small screens */}
      {!isOpen ? null : (
        <div
          className='fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden'
          onClick={handleCloseNav}
        />
      )}
    </>
  );
}
