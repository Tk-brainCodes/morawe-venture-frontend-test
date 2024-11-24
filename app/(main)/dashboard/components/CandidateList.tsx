import { cardDataProps } from "@/constants";
import CandidateCard from "@/components/CandidateCard";

export interface CardDataProp {
  name: string;
  address: string;
  job: string;
  contact: string;
  avatar: any;
  description: string;
}

export default function CandidateList() {
  return (
    <div className='w-full mt-[3em]'>
      <div className='px-2 mb-[1.5em]'>
        <div className='flex flex-col'>
          <span className='text-[24px] text-[#05264E] font-semibold leading-8'>
            KI Matched Auszubildende
          </span>
          <span className='text-[#66789C] text-[16px] font-medium mt-3'>
            Immer auf den neusten Stand auf dein Profil abgestimmt
          </span>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] gap-[20px] mt-[1em]'>
          {cardDataProps.map((data: CardDataProp) => (
            <CandidateCard key={data.name} data={data} />
          ))}
        </div>
      </div>

      <div className='px-2 mb-[1.5em]'>
        <div className='flex flex-col'>
          <span className='text-[24px] text-[#05264E] font-semibold leading-8'>
            Auszubildende in deiner Umgebung{" "}
          </span>
          <span className='text-[#66789C] text-[16px] font-medium mt-3'>
            Immer auf den neusten Stand auf dein Profil abgestimmt{" "}
          </span>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] gap-[20px] mt-[1em]'>
          {cardDataProps.map((data: CardDataProp) => (
            <CandidateCard key={data.name} data={data} />
          ))}
        </div>
      </div>

      <div className='px-2 mb-[1.5em]'>
        <div className='flex flex-col'>
          <span className='text-[24px] text-[#05264E] font-semibold leading-8'>
            Auszubildende in deiner Branche{" "}
          </span>
          <span className='text-[#66789C] text-[16px] font-medium mt-3'>
            Immer auf den neusten Stand auf dein Profil abgestimmt{" "}
          </span>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] gap-[20px] mt-[1em]'>
          {cardDataProps.map((data: CardDataProp) => (
            <CandidateCard key={data.name} data={data} />
          ))}
        </div>
      </div>

      <div className='px-2 mb-[1.5em]'>
        <div className='flex flex-col'>
          <span className='text-[24px] text-[#05264E] font-semibold leading-8'>
            Auszubildende, welche sich beworben haben
          </span>
          <span className='text-[#66789C] text-[16px] font-medium mt-3'>
            Immer auf den neusten Stand auf dein Profil abgestimmt
          </span>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] gap-[20px] mt-[1em]'>
          {cardDataProps.map((data: CardDataProp) => (
            <CandidateCard key={data.name} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}
