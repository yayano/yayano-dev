import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold">
          My Blog
        </Link>
        <div className="space-x-4">
          <Link href="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link href="/blog" className="text-gray-300 hover:text-white">
            Blog
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
