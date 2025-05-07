import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-12 py-6 text-gray-700 text-sm">
        <div className="text-2xl font-bold text-orange-600">Purrvent</div>
        <div className="space-x-6">
          <Link href="#" className="hover:text-orange-500">Locations</Link>
          <Link href="#" className="hover:text-orange-500">Careers</Link>
          <Link href="#" className="hover:text-orange-500">Login</Link>
          <Link
            href="/booking"
            className="bg-orange-600 hover:bg-orange-700 text-white py-2 px-5 rounded-lg text-sm"
          >
            Our Form
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-center px-12 py-24 space-y-10 md:space-y-0 md:space-x-12">
        <div className="text-center md:text-left space-y-6 max-w-lg">
          <h1 className="text-6xl font-bold text-gray-900 leading-tight">
            Dog Grooming, but better.
          </h1>
          <p className="text-gray-500 text-lg">
            With Purrvent, you come first.
          </p>
          <Link
            href="/booking"
            className="bg-orange-600 hover:bg-orange-700 text-white text-lg font-semibold py-3 px-6 rounded-xl transition"
          >
            Our Booking Form
          </Link>
        </div>

        <div className="w-full max-w-md">
          <Image
            src="/dog-grooming.png"
            alt="Dog Grooming Portal"
            width={500}
            height={500}
            className="rounded-xl object-cover"
          />
        </div>
      </section>
    </main>
  );
}
