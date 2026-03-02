import DashboardLayout from './dashboard/DashboardLayout';
import Overview from './dashboard/Overview';

export default function Dashboard() {
  return (
    <DashboardLayout>
      {/* The Overview component is passed as "children" into the layout */}
      <Overview />
    </DashboardLayout>
  );
}