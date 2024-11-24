"use client";

import Image from "next/image";

export default function CustomImageButton({
  image,
  customStyles,
  alt,
  handleClick,
}: {
  image: any;
  customStyles: string;
  alt: string;
  handleClick: () => void;
}) {
  return (
    <button onClick={handleClick}>
      <Image
        src={image}
        alt={alt}
        loading='eager'
        className={`${customStyles}`}
      />
    </button>
  );
}
