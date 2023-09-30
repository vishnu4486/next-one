import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <ul className="flex gap-3">
        <li>
          <Link href="/" className="text-orange-800 hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-orange-800 hover:underline">
            About
          </Link>
        </li>
        <li>
          <Link href="/reviews" className="text-orange-800 hover:underline">
            Reviews
          </Link>
        </li>
      </ul>
    </nav>
  );
}
