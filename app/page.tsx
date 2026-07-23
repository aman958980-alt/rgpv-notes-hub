import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100">

      {/* Navbar */}
      <nav className="bg-blue-700 text-white p-5 flex justify-between items-center">
        <h1 className="text-3xl font-bold">
  📚 RGPV Notes Hub
</h1>

        <div className="space-x-6">
  <button className="hover:text-yellow-300">Home</button>

  <button className="hover:text-yellow-300">Notes</button>

  <button className="hover:text-yellow-300">PYQs</button>

  
</div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20">

        <h2 className="text-5xl font-bold mb-6">
          One Place For All Engineering Notes
        </h2>

        <p className="text-xl text-gray-700 mb-8">
          Notes • PYQs • Syllabus • Assignments • Lab Files
        </p>

        <input
          type="text"
          placeholder="🔍 Search Notes..."
          className="w-[500px] max-w-[90%] p-4 rounded-xl border text-lg"
        />

        <br />

        <button className="mt-8 bg-blue-700 text-white px-8 py-4 rounded-xl text-lg">
          Search
        </button>
        </section>

      {/* Semester Section */}

<section className="py-16 px-10">

  <h2 className="text-4xl font-bold text-center mb-10">
    📚 Choose Your Semester
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

    <div className="bg-white p-8 rounded-xl shadow-lg hover:scale-105 transition">

  <h3 className="text-2xl font-bold text-center mb-4">
    📘 1st Semester
  </h3>

  <ul className="space-y-3">

    <li className="bg-blue-100 p-3 rounded-lg flex justify-between items-center hover:bg-blue-200">

  <span>
  <Link href="/bt101">
    <strong className="text-blue-700 hover:underline cursor-pointer">
      BT-101
    </strong>
  </Link>
  {" "} - Engineering Mathematics-I
</span>
  <button className="bg-blue-700 text-white px-3 py-1 rounded-lg hover:bg-blue-800">
    Download
  </button>

</li>

    <li className="bg-blue-100 p-3 rounded-lg flex justify-between items-center hover:bg-blue-200">

  <span>
    <strong>BT-102</strong> - Engineering Physics
  </span>

  <button className="bg-blue-700 text-white px-3 py-1 rounded-lg hover:bg-blue-800">
    📥 Download
  </button>

</li>

    <li className="bg-blue-100 p-3 rounded-lg flex justify-between items-center hover:bg-blue-200">

  <span>
    <strong>BT-103</strong> - Engineering Chemistry
  </span>

  <button className="bg-blue-700 text-white px-3 py-1 rounded-lg hover:bg-blue-800">
    📥 Download
  </button>

</li>

    <li className="bg-blue-100 p-3 rounded-lg flex justify-between items-center hover:bg-blue-200">

  <span>
    <strong>BT-104</strong> - Basic Computer Engineering
  </span>

  <button className="bg-blue-700 text-white px-3 py-1 rounded-lg hover:bg-blue-800">
    📥 Download
  </button>

</li>

    <li className="bg-blue-100 p-3 rounded-lg flex justify-between items-center hover:bg-blue-200">

  <span>
    <strong>BT-105</strong> - Engineering Graphics
  </span>

  <button className="bg-blue-700 text-white px-3 py-1 rounded-lg hover:bg-blue-800">
    📥 Download
  </button>

</li>

  </ul>

</div>

    <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:scale-105 transition">
      <h3 className="text-2xl font-bold">2nd Semester</h3>
    </div>

    <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:scale-105 transition">
      <h3 className="text-2xl font-bold">3rd Semester</h3>
    </div>

    <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:scale-105 transition">
      <h3 className="text-2xl font-bold">4th Semester</h3>
    </div>

    <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:scale-105 transition">
      <h3 className="text-2xl font-bold">5th Semester</h3>
    </div>

    <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:scale-105 transition">
      <h3 className="text-2xl font-bold">6th Semester</h3>
    </div>

    <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:scale-105 transition">
      <h3 className="text-2xl font-bold">7th Semester</h3>
    </div>

    <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:scale-105 transition">
      <h3 className="text-2xl font-bold">8th Semester</h3>
    </div>

</div>

</section>

</main>
  );
}