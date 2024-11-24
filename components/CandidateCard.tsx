import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CardDataProp } from "@/app/(main)/dashboard/components/CandidateList";
import { Location, Contact, JobTitle } from "@/assets";
import Image from "next/image";

export default function CandidateCard({ data }: any) {
  return (
    <div className=' px-4 py-8 h-fit rounded-[16px] bg-white border border-[#E0E6F6]'>
      <div className='flex gap-x-3 items-start justify-start mb-[1em]'>
        <Image
          src={data.avatar}
          alt={data.name}
          className='w-[64px] h-[64px] bg-slate-400 rounded-full'
        />
        <div className='flex-col gap-1 mt-[0.2em]'>
          <span className='text-[#05264E] text-[18px] leading-6 font-medium '>
            {data.name}
          </span>
          <span className='flex gap-x-1 text-[12px] text-[#A0ABB8] font-normal'>
            <Image src={Location} alt='lcoation-icon' />
            {data.address}
          </span>
          <span className='flex gap-x-1 text-[12px] text-[#A0ABB8] font-normal'>
            <Image src={JobTitle} alt='lcoation-icon' />
            {data.job}
          </span>
          <span className='flex gap-x-1 text-[12px] text-[#A0ABB8] font-normal'>
            <Image src={Contact} alt='lcoation-icon' />
            {data.contact}
          </span>
        </div>
      </div>
      <div className='text-[14px] text-[#4F5E64] px-4 font-medium mb-[3em]'>
        {data.description}
      </div>
      <div className='flex px-4 items-center justify-between'>
        <button className='p-2 text-center rounded-[4px] bg-primary text-[#3B3B3B] text-[12px]'>
          Freischalten
        </button>
        <button className='p-2 text-center rounded-[4px] text-[#3B3B3B] bg-[#F40909] text-[12px]'>
          Unpassend
        </button>
      </div>
    </div>
  );
}
