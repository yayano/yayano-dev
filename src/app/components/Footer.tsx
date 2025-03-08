export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-10 text-center">
      <p>© {new Date().getFullYear()} My Blog. All rights reserved.</p>
      <p>
        Built with <span className="text-blue-400">Next.js</span> &{" "}
        <span className="text-yellow-400">MDX</span>
      </p>
    </footer>
  );
}
