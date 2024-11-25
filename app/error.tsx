"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='bg-primary w-[100vw] h-[100vh] items-center justify-center flex flex-col'>
      <h2 className='text-2xl text-gray-900'>Something went wrong!</h2>
      <button className='text-gray-900' onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
