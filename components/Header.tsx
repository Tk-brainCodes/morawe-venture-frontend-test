"use client";

import { Bell, SearchIcon, MenuICon, Logo, Userprofile, Grid } from "@/assets";
import CustomImageButton from "./CustomImageButton";
import { useState } from "react";

export default function Header({
  isOpen,
  toggleSidebar,
}: {
  isOpen: boolean;
  toggleSidebar: () => void;
}) {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  return (
    <div className='fixed top-0 left-0 w-full px-4 py-2 flex items-center justify-between bg-white border-b border-gray-100 z-50'>
      <div className='flex items-center gap-4 sm:gap-6'>
        {/* Logo */}
        <CustomImageButton
          image={Logo}
          customStyles='w-[43px] h-[40px]'
          alt='Logo'
          handleClick={() => {}}
        />

        <CustomImageButton
          image={MenuICon}
          alt='menu-icon'
          customStyles='w-[20px] h-[20px]'
          handleClick={toggleSidebar}
        />

        <div className='w-[402px] max-sm:hidden max-md:hidden h-[44px] px-3 rounded-[8px] flex gap-x-3 items-center border border-gray/50'>
          <CustomImageButton
            image={SearchIcon}
            alt='search-icon'
            customStyles='w-[20px] h-[20px]'
            handleClick={() => {}}
          />
          <input
            type='text'
            placeholder='Search'
            className='outline-none bg-none border-none focus:outline-none focus:ring-0'
          />
        </div>

        <CustomImageButton
          image={SearchIcon}
          alt='search-icon'
          customStyles='w-[20px] h-[20px] hidden max-sm:flex'
          handleClick={() => setIsSearchVisible(true)}
        />
      </div>

      <div className='flex gap-4 items-center'>
        {/* Notification Icon */}
        <CustomImageButton
          image={Bell}
          alt='bell-icon'
          customStyles='w-[20px] h-[20px]'
          handleClick={() => {}}
        />

        {/* Grid Icon */}
        <CustomImageButton
          image={Grid}
          alt='grid-icon'
          customStyles='w-[20px] h-[20px]'
          handleClick={() => {}}
        />

        {/* User Profile Icon */}
        <CustomImageButton
          image={Userprofile}
          alt='user-profile'
          customStyles='w-[32px] h-[32px]'
          handleClick={() => {}}
        />
      </div>
    </div>
  );
}
