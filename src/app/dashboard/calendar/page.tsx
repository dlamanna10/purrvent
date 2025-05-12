"use client";

import Calendar from "react-calendar";
import { useState } from "react";

type Appointment = {
  id: string;
  dog: string;
  owner: string;
  date: string; // ISO format: YYYY-MM-DD
  time: string;
};

const appointments: Appointment[] = [
  {
    id: "1",
    dog: "Bella",
    owner: "Samantha T.",
    date: "2025-05-15",
    time: "10:30 AM",
  },
  {
    id: "2",
    dog: "Max",
    owner: "Jason W.",
    date: "2025-05-15",
    time: "12:00 PM",
  },
  {
    id: "3",
    dog: "Luna",
    owner: "Riley M.",
    date: "2025-05-16",
    time: "9:00 AM",
  },
];

export default function DashboardCalendar() {
  const [date, setDate] = useState<Date | null>(new Date());

  const formattedDate = date?.toISOString().split("T")[0];
  const filteredAppointments = appointments.filter(
    (appt) => appt.date === formattedDate
  );

  return (
    <main className="min-h-screen bg-blue-50 px-6 py-10 max-w-screen-xl mx-auto flex flex-col md:flex-row gap-6">
      {/* Calendar */}
      <div className="bg-white p-6 rounded-xl shadow w-full md:w-2/3">
        <h1 className="text-2xl font-bold text-blue-900 mb-4">Calendar</h1>
        <Calendar
          value={date}
          onChange={(value) => {
            if (value instanceof Date) {
              setDate(value);
            }
          }}
          className="rounded-xl border border-gray-200 p-2"
        />
      </div>

      {/* Appointments Preview */}
      <div className="bg-white p-6 rounded-xl shadow w-full md:w-1/3">
        <h2 className="text-lg font-semibold text-blue-900 mb-3">
          Appointments for {formattedDate}
        </h2>
        {filteredAppointments.length === 0 ? (
          <p className="text-gray-500">No appointments scheduled.</p>
        ) : (
          <div className="overflow-x-auto">
            <div className="flex space-x-4">
              {filteredAppointments.map((appt) => (
                <div
                  key={appt.id}
                  className="min-w-[160px] p-4 rounded-lg bg-orange-100 text-orange-800 font-medium shadow text-sm"
                >
                  <p className="text-base font-bold">{appt.dog}</p>
                  <p className="text-xs text-gray-700">Owner: {appt.owner}</p>
                  <p className="mt-1">{appt.time}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
