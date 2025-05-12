import AppointmentList from "@/components/AppointmentList";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-blue-50 px-6 py-10">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Salon Dashboard</h1>
      <AppointmentList />
    </main>
  );
}
