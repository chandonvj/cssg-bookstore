'use client';
import Link from "next/link";

export default function Book1() {
    return (
      <div className="bg-slate-900 min-h-screen text-white">
        <div className="container mx-auto p-6">
          {/* Book Title and Description */}
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-400">The C Programming Language</h1>
            <p className="mt-4 text-lg text-slate-600">
              A classic book for learning C programming. Dive into low-level programming with this comprehensive guide.
            </p>
          </header>
  
          {/* Book Image */}
          <div className="max-w-lg mx-auto mb-6">
            <img className="w-full h-170 object-cover rounded-lg shadow-xl" src="/CLanguage.png" alt="The C Programming Language" />
          </div>
  
          {/* Book Details */}
          <div className="text-center text-slate-500">
            <h3 className="text-2xl font-semibold mb-4">About the Book</h3>
            <p className="text-lg">
              "The C Programming Language" by Brian W. Kernighan and Dennis M. Ritchie is a must-have book for anyone wanting to learn C programming. It covers everything from basic syntax to more advanced concepts like memory management and pointers.
            </p>
          </div>

          <div className="flex justify-center mt-6 gap-6">
            {/* Go Back Button */}
                <Link href="../">
                    <button className="inline-block text-white bg-slate-700 py-2 px-4 rounded hover:bg-slate-600">
                    Go Back to Home
                    </button>
                </Link>

                {/* Add to Cart Button */}
                <button
                    className="inline-block text-white bg-slate-700 py-2 px-4 rounded hover:bg-slate-600"
                    onClick={() => alert('Book added to cart!')}
                >
                    Add to Cart
                </button>
            </div>
        </div>
      </div>
    );
}
  