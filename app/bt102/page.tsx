export default function BT102Page() {
  return (
    <main className="min-h-screen bg-slate-100 dark:bg-slate-900 text-black dark:text-white p-10">

      <h1 className="text-4xl font-bold mb-8">
        📘 BT-102 Mathematics-I
      </h1>

      <div className="space-y-4">

        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow flex justify-between">
          <span>📄 Unit 1 Notes</span>
          <a
            href="/pdf/bt102-unit1.pdf"
            download
            className="bg-blue-700 text-white px-4 py-2 rounded"
          >
            📥 Download
          </a>
        </div>

        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow flex justify-between">
          <span>📄 Unit 2 Notes</span>
          <a
            href="/pdf/bt102-unit2.pdf"
            download
            className="bg-blue-700 text-white px-4 py-2 rounded"
          >
            📥 Download
          </a>
        </div>

        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow flex justify-between">
          <span>📄 Unit 3 Notes</span>
          <a
            href="/pdf/bt102-unit3.pdf"
            download
            className="bg-blue-700 text-white px-4 py-2 rounded"
          >
            📥 Download
          </a>
        </div>

        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow flex justify-between">
          <span>📄 Unit 4 Notes</span>
          <a
            href="/pdf/bt102-unit4.pdf"
            download
            className="bg-blue-700 text-white px-4 py-2 rounded"
          >
            📥 Download
          </a>
        </div>

        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow flex justify-between">
          <span>📄 Unit 5 Notes</span>
          <a
            href="/pdf/bt102-unit5.pdf"
            download
            className="bg-blue-700 text-white px-4 py-2 rounded"
          >
            📥 Download
          </a>
        </div>

      </div>

    </main>
  );
}