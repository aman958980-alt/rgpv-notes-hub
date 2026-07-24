"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const [search, setSearch] = useState("");

const router = useRouter();

const handleSearch = () => {
  const q = search.toLowerCase().trim();

  if (
  q.includes("bt101") ||
  q.includes("chemistry") ||
  q.includes("engineering chemistry")
)
  router.push("/bt101");

else if (
  q.includes("bt102") ||
  q.includes("math") ||
  q.includes("mathematics") ||
  q.includes("engineering mathematics")
)
  router.push("/bt102");

  else if (
    q.includes("bt103") ||
    q.includes("english")
  )
    router.push("/bt103");

  else if (
    q.includes("bt104") ||
    q.includes("electrical")
  )
    router.push("/bt104");

  else if (
    q.includes("bt105") ||
    q.includes("graphics")
  )
    router.push("/bt105");

  else if (
    q.includes("bt201") ||
    q.includes("physics")
  )
    router.push("/bt201");

  else if (
    q.includes("bt202") ||
    q.includes("mathematics ii")
  )
    router.push("/bt202");

  else if (
    q.includes("bt203") ||
    q.includes("mechanical")
  )
    router.push("/bt203");

  else if (
    q.includes("bt204") ||
    q.includes("civil")
  )
    router.push("/bt204");

  else if (
    q.includes("bt205") ||
    q.includes("computer")
  )
    router.push("/bt205");

  else alert("Subject not found!");
};
const subjects = [
  { name: "BT-101 Engineering Chemistry", path: "/bt101" },
  { name: "BT-102 Engineering Mathematics-I", path: "/bt102" },
  { name: "BT-103 English for Communication", path: "/bt103" },
  { name: "BT-104 Basic Electrical & Electronics Engineering", path: "/bt104" },
  { name: "BT-105 Engineering Graphics", path: "/bt105" },
  { name: "BT-201 Engineering Physics", path: "/bt201" },
  { name: "BT-202 Mathematics-II", path: "/bt202" },
  { name: "BT-203 Basic Mechanical Engineering", path: "/bt203" },
  { name: "BT-204 Basic Civil Engineering & Mechanics", path: "/bt204" },
  { name: "BT-205 Basic Computer Engineering", path: "/bt205" },
];

const filteredSubjects = subjects.filter((subject) =>
  subject.name.toLowerCase().includes(search.toLowerCase())
);
  return (
   <main className="min-h-screen bg-slate-100 dark:bg-slate-900 text-black dark:text-white">

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

        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
          Notes • PYQs • Syllabus • Assignments • Lab Files
        </p>

        <div className="relative w-[500px] max-w-[90%] mx-auto">

  <input
    type="text"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    placeholder="🔍 Search Subject..."
    className="w-full p-4 rounded-xl border text-lg text-black"
  />

  {search && (
    <div className="absolute w-full bg-white rounded-xl shadow-xl mt-2 z-50 max-h-72 overflow-y-auto">

      {filteredSubjects.length > 0 ? (
        filteredSubjects.map((subject) => (
          <button
            key={subject.path}
            onClick={() => router.push(subject.path)}
            className="block w-full text-left px-5 py-3 hover:bg-blue-100 border-b"
          >
            {subject.name}
          </button>
        ))
      ) : (
        <div className="p-4 text-gray-500">
          No Subject Found
        </div>
      )}

    </div>
  )}

</div>
        <br />

        <button
  onClick={handleSearch}
  className="mt-8 bg-blue-700 text-white px-8 py-4 rounded-xl text-lg hover:bg-blue-800"
>
  Search
</button>
        </section>

      {/* Semester Section */}

<section className="py-16 px-10">

  <h2 className="text-4xl font-bold text-center mb-10">
    📚 Choose Your Semester
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:scale-105 transition">

  <h3 className="text-2xl font-bold text-center mb-4">
    📘 1st Semester
  </h3>

  <ul className="space-y-3">

    <li className="bg-blue-100 dark:bg-gray-700 p-3 rounded-lg flex justify-between items-center hover:bg-blue-200">

  <span>
  <Link href="/bt101">
  <strong className="text-blue-700 hover:underline cursor-pointer">
    BT-101
  </strong>
</Link>{" "}
- Engineering Chemistry
</span>
  <button className="bg-blue-700 text-white px-3 py-1 rounded-lg hover:bg-blue-800">
    Download
  </button>

</li>

    <li className="bg-blue-100 dark:bg-gray-700 p-3 rounded-lg flex justify-between items-center hover:bg-blue-200">

  <Link href="/bt102">
  <strong className="text-blue-700 hover:underline cursor-pointer">
    BT-102
  </strong>
</Link>{" "}
- Engineering Mathematics-I

  <button className="bg-blue-700 text-white px-3 py-1 rounded-lg hover:bg-blue-800">
    📥 Download
  </button>

</li>

    <li className="bg-blue-100 dark:bg-gray-700 p-3 rounded-lg flex justify-between items-center hover:bg-blue-200">

  <span>
  <Link href="/bt103">
    <strong className="text-blue-700 hover:underline cursor-pointer">
      BT-103
    </strong>
  </Link>{" "}
  - English for Communication
</span>

  <button className="bg-blue-700 text-white px-3 py-1 rounded-lg hover:bg-blue-800">
    📥 Download
  </button>

</li>

    <li className="bg-blue-100 dark:bg-gray-700 p-3 rounded-lg flex justify-between items-center hover:bg-blue-200">

  <span>
  <Link href="/bt104">
    <strong className="text-blue-700 hover:underline cursor-pointer">
      BT-104
    </strong>
  </Link>{" "}
  - Basic Electrical & Electronics Engineering
</span>

  <button className="bg-blue-700 text-white px-3 py-1 rounded-lg hover:bg-blue-800">
    📥 Download
  </button>

</li>

    <li className="bg-blue-100 dark:bg-gray-700 p-3 rounded-lg flex justify-between items-center hover:bg-blue-200">

  <span>
  <Link href="/bt105">
    <strong className="text-blue-700 hover:underline cursor-pointer">
      BT-105
    </strong>
  </Link>{" "}
  - Engineering Graphics
</span>

  <button className="bg-blue-700 text-white px-3 py-1 rounded-lg hover:bg-blue-800">
    📥 Download
  </button>

</li>

  </ul>

</div>

    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:scale-105 transition">

  <h3 className="text-2xl font-bold text-center mb-4">
    📘 2nd Semester
  </h3>

  <ul className="space-y-3">

    <li className="bg-orange-100 dark:bg-gray-700 p-3 rounded-lg flex justify-between items-center hover:bg-orange-200">
      <span>
        <Link href="/bt201">
          <strong className="text-orange-700 hover:underline cursor-pointer">
            BT-201
          </strong>
        </Link>{" "}
        - Engineering Physics
      </span>
      <button className="bg-orange-600 text-white px-3 py-1 rounded-lg">
        📥 Download
      </button>
    </li>

    <li className="bg-purple-100 dark:bg-gray-700 p-3 rounded-lg flex justify-between items-center hover:bg-purple-200">
      <span>
        <span>
  <Link href="/bt202">
    <strong className="text-purple-700 hover:underline cursor-pointer">
      BT-202
    </strong>
  </Link>{" "}
  - Mathematics-II
</span>
      </span>
      <button className="bg-purple-700 text-white px-3 py-1 rounded-lg">
        📥 Download
      </button>
    </li>

    <li className="bg-sky-100 dark:bg-gray-700 p-3 rounded-lg flex justify-between items-center hover:bg-sky-200">
      <span>
        <span>
  <Link href="/bt203">
    <strong className="text-sky-700 hover:underline cursor-pointer">
      BT-203
    </strong>
  </Link>{" "}
  - Basic Mechanical Engineering
</span>
      </span>
      <button className="bg-sky-600 text-white px-3 py-1 rounded-lg">
        📥 Download
      </button>
    </li>

    <li className="bg-green-100 dark:bg-gray-700 p-3 rounded-lg flex justify-between items-center hover:bg-green-200">
      <span>
        <span>
  <Link href="/bt204">
    <strong className="text-green-700 hover:underline cursor-pointer">
      BT-204
    </strong>
  </Link>{" "}
  - Basic Civil Engineering & Mechanics
</span>
      </span>
      <button className="bg-green-600 text-white px-3 py-1 rounded-lg">
        📥 Download
      </button>
    </li>

    <li className="bg-red-100 dark:bg-gray-700 p-3 rounded-lg flex justify-between items-center hover:bg-red-200">
      <span>
        <span>
  <Link href="/bt205">
    <strong className="text-red-700 hover:underline cursor-pointer">
      BT-205
    </strong>
  </Link>{" "}
  - Basic Computer Engineering
</span>
      </span>
      <button className="bg-red-600 text-white px-3 py-1 rounded-lg">
        📥 Download
      </button>
    </li>

  </ul>

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