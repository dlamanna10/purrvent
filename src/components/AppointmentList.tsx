type Appointment = {
    id: string;
    dogName: string;
    ownerName: string;
    date: string; // ISO string
    time: string;
    status: "confirmed" | "pending";
  };
  
  const dummyAppointments: Appointment[] = [
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
  
  export default function AppointmentList() {
    return (
      <section className="space-y-4">
        {dummyAppointments.map((appt) => (
          <div
            key={appt.id}
            className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm flex justify-between items-center"
          >
            <div>
              <h2 className="text-lg font-semibold text-blue-900">{appt.dogName}</h2>
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
    );
  }
  