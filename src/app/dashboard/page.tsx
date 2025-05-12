import Link from "next/link";

const dummyAppointments = [
  {
    id: "1",
    dogName: "Bella",
    ownerName: "Samantha T.",
    date: "2025-05-15",
    time: "10:30 AM",
    status: "confirmed",
  },
  {
    id: "2",
    dogName: "Max",
    ownerName: "Jason W.",
    date: "2025-05-15",
    time: "12:00 PM",
    status: "pending",
  },
  {
    id: "3",
    dogName: "Luna",
    ownerName: "Riley M.",
    date: "2025-05-16",
    time: "9:00 AM",
    status: "confirmed",
  },
];

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-blue-50 px-6 py-10 max-w-screen-xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-blue-900">Salon Dashboard</h1>
        <Link
          href="/dashboard/calendar"
          className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-4 py-2 rounded transition"
        >
          View Calendar
        </Link>
      </div>

      <h2 className="text-lg font-semibold text-blue-900 mb-4">Upcoming Appointments</h2>
      <section className="space-y-4">
        {dummyAppointments.map((appt) => (
          <div
            key={appt.id}
            className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm flex justify-between items-center"
          >
            <div>
              <h3 className="text-lg font-semibold text-blue-900">{appt.dogName}</h3>
              <p className="text-sm text-gray-500">
                Owner: {appt.ownerName}
              </p>
              <p className="text-sm text-gray-500">
                {appt.date} @ {appt.time}
              </p>
            </div>
            <span
              className={`text-sm font-semibold px-3 py-1 rounded-full ${
                appt.status === "confirmed"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {appt.status}
            </span>
          </div>
        ))}
      </section>
    </main>
  );
}
