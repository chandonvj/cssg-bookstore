'use client';
import Link from "next/link";

export default function Book2() {
    return (
      <div className="bg-slate-900 min-h-screen text-white">
        <div className="container mx-auto p-6">
          {/* Book Title and Description */}
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-400">Interpersonal Communications</h1>
            <p className="mt-4 text-lg text-slate-600">
              A fundamental guide to understanding and improving interpersonal communication skills.
            </p>
          </header>
  
          {/* Book Image */}
          <div className="max-w-lg mx-auto mb-6">
            <img className="w-full h-170 object-cover rounded-lg shadow-xl" src="/InterpersonalComm.png" alt="Interpersonal Communications" />
          </div>
  
          {/* Book Details */}
          <div className="text-center text-slate-500">
            <h3 className="text-2xl font-semibold mb-4">About the Book</h3>
            <p className="text-lg">
              "Interpersonal Communications" is a book that dives deep into the art of communication. Written by experts in the field, it focuses on the importance of listening, empathy, and non-verbal communication in forming meaningful relationships.
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
  