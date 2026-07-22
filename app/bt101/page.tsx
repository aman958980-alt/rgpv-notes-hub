import Link from "next/link";
export default function BT101Page() {
  return (
    <main className="min-h-screen bg-slate-100 p-10">

      <h1 className="text-4xl font-bold mb-8">
        📘 BT-101 Engineering Mathematics-I
      </h1>

        <div className="space-y-4">

        <div className="bg-white p-5 rounded-xl shadow flex justify-between">
          <span>📄 Unit 1 Notes</span>
          <button className="bg-blue-700 text-white px-4 py-2 rounded"> 
   <a
  href="/pdf/Unit1_Handwritten_Notes.pdf"
  download
  className="bg-blue-700 text-white px-4 py-2 rounded"
>
  📥 Download
</a>
          </button>
        </div>

        <div className="bg-white p-5 rounded-xl shadow flex justify-between">
          <span>📄 Unit 2 Notes</span>
          <button className="bg-blue-700 text-white px-4 py-2 rounded">
             <a
  href="/pdf/Unit2_Handwritten_Notes.pdf"
  download
  className="bg-blue-700 text-white px-4 py-2 rounded"
>
  📥 Download
</a>
          </button>
        </div>

        <div className="bg-white p-5 rounded-xl shadow flex justify-between">
          <span>📄 Unit 3 Notes</span>
          <button className="bg-blue-700 text-white px-4 py-2 rounded">
            <a
            href="/pdf/Unit3_Handwritten_Notes.pdf"
            download
            className="bg-blue-700 text-white px-4 py-2 rounded"
            >
            📥 download
            </a>
          </button>
        </div>

        <div className="bg-white p-5 rounded-xl shadow flex justify-between">
          <span>📄 Unit 4 Notes</span>
          <button className="bg-blue-700 text-white px-4 py-2 rounded">
            📥 
            <a
            href="/pdf/Unit4_Handwritten_Notes.pdf"
            download
            className="bg-blue-700 text-white px-4 py-2 rounded"
            >
              download
            </a>
          </button>
        </div>

       <div className="bg-white p-5 rounded-xl shadow flex justify-between">
  <span>📄 Unit 5 Notes</span>

  <a
    href="/pdf/Unit5_Handwritten_Notes.pdf"
    download
    className="bg-blue-700 text-white px-4 py-2 rounded"
  >
    📥 Download
  </a>
</div>
<div className="bg-white p-5 rounded-xl shadow flex justify-between">
  <span>📄 Unit 6 Notes</span>

  <a
    href="/pdf/Unit6_Handwritten_Notes.pdf"
    download
    className="bg-blue-700 text-white px-4 py-2 rounded"
  >
    📥 Download
  </a>
</div>

</div>   {/* <-- यह नया closing div जोड़ना है */}

</main>
  );
}