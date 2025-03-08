import Link from "next/link";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-extrabold mb-4">
          Welcome to <span className="text-yellow-300">My Blog</span>
        </h1>
        <p className="text-lg opacity-90">
          Sharing insights on development, coding, and technology.
        </p>
        <div className="mt-6">
          <Link
            href="/blog"
            className="px-6 py-3 text-lg font-semibold bg-yellow-400 text-gray-900 rounded-lg shadow-md hover:bg-yellow-300 transition-all"
          >
            Read My Blog
          </Link>
        </div>
      </div>
    </main>
  );
}
