import Image from "next/image";
import { UpArrow } from "@/assets";
import { Info } from "@/assets";
import ChartData from "@/components/ChartData";
import { DatePickerWithRange } from "@/components/DatePicker";
import { Chart } from "@/components/Chart";

function AnalyticsChart() {
  return (
    <div className='w-full rounded-md shadow-sm drop-shadow-sm  bg-white flex flex-col items-center justify-center   h-fit py-2'>
      <div className='flex w-full items-start justify-end gap-8 max-xl:gap-6 p-2 max-sm:px-4 max-md:px-4 max-sm:flex-col-reverse max-md:flex-col-reverse'>
        <div className='flex w-full flex-1 flex-wrap justify-end max-md:justify-start gap-10 max-lg:gap-8 max-sm:gap-6'>
          <ChartData
            UpArrow={UpArrow}
            Info={Info}
            title='Besucher'
            count={24}
          />
          <ChartData
            UpArrow={UpArrow}
            Info={Info}
            title='Profi freigeschaltet'
            count={10}
          />
          <ChartData
            UpArrow={UpArrow}
            Info={Info}
            title='Stellenanzeigen besucher'
            count={400}
          />
          <ChartData
            UpArrow={UpArrow}
            Info={Info}
            title='Neue Auszubildende'
            count={130}
          />
        </div>
        <DatePickerWithRange />
      </div>

      <div className='w-[77vw] h-[1px] bg-gray-100 mt-[0.3em] -ml-[0.9em] ' />
      <div className='w-full px-6 grid grid-cols-1 sm:grid-cols-2 overflow-x-hidden lg:grid-cols-3 gap-4 mb-8 mt-4 overflow-y-hidden'>
        <Chart
          title='Profilbesucher'
          number='26'
          customStyles='border-r border-gray-100 px-8'
          decrease='-2,4%'
        />
        <Chart
          title='Profil freigeschaltet'
          number='10'
          customStyles='border-r border-gray-100 px-8'
          increase='+1,24%'
        />
        <Chart
          title='Durchschnitts Gehalt'
          number='1200€'
          industry='deiner Branche'
          customStyles='border-r border-gray-100 px-8'
          increase='+2,34%'
        />
      </div>
    </div>
  );
}

export default AnalyticsChart;
