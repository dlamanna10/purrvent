import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-blue-50 text-center space-y-6">
      <Image
        src="/logo.svg"
        alt="Purrvent Logo"
        width={120}
        height={120}
        priority
      />
      <h1 className="text-5xl font-bold text-blue-900">Grooming with Care</h1>
      <p className="text-lg text-blue-500 max-w-md">
        Book your next dog grooming appointment easily online.
      </p>
      <Link
        href="/booking"
        className="bg-orange-400 hover:bg-orange-500 text-white text-lg font-semibold py-3 px-6 rounded-xl transition"
      >
        Book Appointment
      </Link>
    </main>
  );
}
