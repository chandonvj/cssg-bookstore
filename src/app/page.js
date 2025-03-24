import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <div className="container mx-auto p-6">
        {/* Title & Description */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-400">Chan's Cool Bookstore</h1>
          <p className="mt-4 text-lg text-slate-600">
            Your one-stop shop for all your reading needs, except not really because I only have three.
          </p>
        </header>

        {/* Da Book Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Book 1 */}
          <div className="max-w-sm rounded-lg overflow-hidden shadow-xl">
            <img className="w-full h-128 object-cover" src="/CLanguage.png" alt="Book 1"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-slate-500">The C Programming Language</h3>
              <p className="text-slate-600 mt-2">Here's a book I have been reading in COMP211 to learn the low level programming.</p>
              <Link href="/book1">
                <button className="mt-4 inline-block text-white bg-slate-700 py-2 px-4 rounded hover:bg-slate-600">
                  View Details
                </button>
              </Link>
            </div>
          </div>

          {/* Book 2 */}
          <div className="max-w-sm rounded-lg overflow-hidden shadow-xl">
            <img className="w-full h-128 object-cover" src="/InterpersonalComm.png" alt="Book 2"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-slate-500">Interpersonal Communications</h3>
              <p className="text-slate-600 mt-2">Here's a book I have been reading in COMM120, learning about interpersonal communication.</p>
              <Link href="/book2">
                <button className="mt-4 inline-block text-white bg-slate-700 py-2 px-4 rounded hover:bg-slate-600">
                  View Details
                </button>
              </Link>
            </div>
          </div>

          {/* Book 3 */}
          <div className="max-w-sm rounded-lg overflow-hidden shadow-xl">
            <img className="w-full h-128 object-cover" src="/LoremIpsum.jpg" alt="Book 3"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-slate-500">Lorem Ipsum</h3>
              <p className="text-slate-600 mt-2">Dolor sit amet, consectetur adipiscing elit. Morbi at gravida risus, sed vulputate lectus.</p>
              <Link href="/book3">
                <button className="mt-4 inline-block text-white bg-slate-700 py-2 px-4 rounded hover:bg-slate-600">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
