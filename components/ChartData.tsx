import React from "react";
import Image from "next/image";

export default function ChartData({
  UpArrow,
  Info,
  title,
  count,
}: {
  UpArrow: any;
  Info: any;
  title: string;
  count: number;
}) {
  return (
    <div className='h-auto w-fit p-2 max-sm:px-4 max-md:px-4 sm:p-0'>
      <span className='font-normal text-gray-400 text-sm sm:text-[13px]'>
        {title}
      </span>
      <div className='flex gap-2 items-center mt-1'>
        <span className='text-gray-900 font-bold text-lg sm:text-[20px]'>
          {count}
        </span>
        <span className='flex items-center justify-center bg-green-100 rounded-md w-[50px] sm:w-[58px] h-[18px] sm:h-[21px] font-medium gap-1 text-xs sm:text-[11px] text-green-800'>
          <Image src={UpArrow} alt='up-arrow' loading='eager' />
          1.4%
        </span>
      </div>
      <div className='flex gap-2 text-gray-500 text-xs sm:text-[12px] font-normal px-[0.5px] mt-1'>
        <Image src={Info} alt='info-icon' loading='eager' />
        vs letzten Monat
      </div>
    </div>
  );
}
