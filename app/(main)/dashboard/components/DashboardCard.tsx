import React from "react";

export default function DashboardCard() {
  return (
    <div className='flex flex-wrap items-center justify-center gap-4 sm:gap-6 w-full mt-24 mb-4 px-4'>
      {/* First Card */}
      <div className='w-full sm:w-[45%] lg:w-[30%] h-auto bg-white rounded-lg flex flex-col shadow-sm items-center justify-center p-4'>
        <span className='font-semibold text-xl sm:text-2xl text-gray-900'>
          100
        </span>
        <span className='text-gray-500 text-sm sm:text-base text-center'>
          Auszubildende für Sie
        </span>
      </div>

      {/* Second Card */}
      <div className='w-full sm:w-[45%] lg:w-[30%] h-auto bg-white rounded-lg shadow-sm p-4 flex flex-col items-start justify-center'>
        <span className='text-gray-500 text-sm sm:text-base'>
          Limits verbraucht
        </span>
        <span className='font-semibold text-xl sm:text-2xl text-gray-900 -mt-1'>
          28
        </span>
        <div className='w-full h-2 bg-gray-200 rounded-full mt-2 mb-1'>
          <div
            className='bg-[#1C64F2] h-2 rounded-full transition-all duration-300'
            style={{ width: `${80}%` }}
          />
        </div>
        <span className='text-gray-500 text-xs sm:text-sm'>
          28 Limits von 30 Limits verwendet
        </span>
      </div>

      {/* Third Card */}
      <div className='w-full sm:w-[45%] lg:w-[30%] h-auto bg-white rounded-lg flex flex-col shadow-sm items-center justify-center p-4'>
        <span className='font-semibold text-xl sm:text-2xl text-gray-900'>
          123
        </span>
        <span className='text-gray-500 text-sm sm:text-base text-center'>
          Bewerbungen
        </span>
      </div>
    </div>
  );
}
