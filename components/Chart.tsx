"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { Info } from "@/assets";
import { cn } from "@/lib/utils";
import Image from "next/image";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

  const chartConfig = {
  mobile: {
    label: "",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;



const chartData = [
  { month: "January", mobile: 0 },
  { month: "February", mobile: 15 },
  { month: "March", mobile: 20 },
  { month: "April", mobile: 12 },
  { month: "May", mobile: 60 },
  { month: "June", mobile: 60 },
  { month: "July", mobile: 55 },
  { month: "August", mobile: 40 },
  { month: "September", mobile: 80 },
  { month: "October", mobile: 75 },
  { month: "November", mobile: 65 },
  { month: "December", mobile: 40 },
];

export function Chart({
  title,
  number,
  industry,
  customStyles,
  increase,
  decrease
}: {
  title: string;
  number: string;
  industry?: string;
  customStyles?: string;
  increase?: string
  decrease?: string
}) {



  return (
    <div
      className={cn(
        "h-[133px] overflow-hidden w-[100%] sm:w-[350px] relative",
        customStyles
      )}
    >
      <div className="flex h-[77px] flex-col px-4">
       <div className="flex items-start justify-between">
           <div className="flex flex-col">
          <span className="text-[14px] text-gray-500 font-normal mb-1">{title}</span>
          <span className="font-semibold text-[18px] text-gray-900 -mt-1">{number}</span>
          {title === "Durchschnitts Gehalt" && (
            <span className="text-[14px] -mt-1 flex gap-x-1 items-center text-gray-400">
              <Image src={Info} alt="info" className="w-3 h-3" />
              {industry}
            </span>
          )}
        </div>
           <span className={cn('flex items-center justify-center  rounded-md w-[58px] h-[21px] font-medium gap-1 text-[11px] ', increase ? ' text-green-800 bg-green-100': decrease ? 'text-red-800 bg-red-100' : '')}>
            {title === "Profilbesucher" ? decrease : increase}
        </span>
       </div>
      </div>
      <div className="mt-[1.5em] absolute inset-1 top-[60px]">
        <ChartContainer className="h-[110px] w-full sm:w-[320px] -mt-[2.5em]" config={chartConfig}>
          <AreaChart
            accessibilityLayer
            width={300} 
            height={80} 
            data={chartData}
            margin={{ top: 10, right: 20, left: 20, bottom: 10 }}
          >
            <defs>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1C64F2" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#5585F2" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tick={false}
              axisLine={false} 
            />
            <Area
              type="natural"
              dataKey="mobile"
              stroke="#4B9CD3"
              fill="url(#fillMobile)"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </div>
    </div>
  );
}
