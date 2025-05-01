import BookingForm from "@/components/BookingForm";

export default function BookingPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12 bg-[var(--background)]">
      <div className="max-w-xl w-full bg-white rounded-xl shadow p-6 space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">Book a Grooming Session</h2>
        <BookingForm />
      </div>
    </main>
  );
}
