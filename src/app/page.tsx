import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col font-bookmania">

      {/* Sticky Navbar */}
      <nav className="sticky top-0 bg-white z-50 flex items-center justify-between px-12 py-6 text-gray-700 text-sm border-b border-orange-600">
        <div className="text-2xl font-bold text-orange-600">Purrvent</div>
        <div className="space-x-4 flex items-center">
          <Link href="#" className="hover:text-orange-500">Locations</Link>
          <Link href="#" className="hover:text-orange-500">Careers</Link>
          <Link href="#" className="hover:text-orange-500">Login</Link>
          <Link
            href="/booking"
            className="bg-orange-600 hover:bg-orange-700 text-white py-2 px-5 rounded-lg text-sm"
          >
            Interest Form
          </Link>
          <Link
            href="/dashboard"
            className="text-gray-400 hover:text-blue-700 text-xs underline underline-offset-4 ml-3"
          >
            Salon Dashboard
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
            With Purrvent, everyone's happy.
          </p>
          <Link
            href="/booking"
            className="bg-orange-600 hover:bg-orange-700 text-white text-lg font-semibold py-3 px-6 rounded-xl transition"
          >
            Check It Out
          </Link>
        </div>

        <div className="relative w-full md:w-1/2 h-96 md:h-[500px]">
          <Image
            src="/lp1.jpg"
            alt="Picture of my future wife."
            fill
            className="object-cover scale-100 rounded-xl"
            priority
          />
        </div>
      </section>

      {/* Our Goal Section */}
      <section className="px-12 py-24 bg-gray-50 text-center space-y-6">
        <h2 className="text-4xl font-bold text-gray-900">Our Goal</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          At Purrvent, our mission is simple — to make pet grooming easy, stress-free, and centered around care. 
          We believe pets deserve the best experience right at home and owners deserve peace of mind knowing their furry friends are treated like family.
        </p>
      </section>

    </main>
  );
}
