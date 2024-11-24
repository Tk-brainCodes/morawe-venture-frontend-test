import DashboardCard from "./components/DashboardCard";
import AnalyticsChart from "./components/AnalyticsChart";
import CandidateList from "./components/CandidateList";

export default function DashboardPage() {
  return (
    <div className='mt-[4em]'>
      <DashboardCard />
      <AnalyticsChart />
      <CandidateList />
    </div>
  );
}
