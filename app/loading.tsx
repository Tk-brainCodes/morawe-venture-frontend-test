"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='w-[100vw] h-[100vh] flex flex-col items-center justify-center'>
      {loading && (
        <h1 className='text-[#5CE1E6] font-semibold text-2xl'>Loading...</h1>
      )}
    </div>
  );
};

export default LoadingScreen;
