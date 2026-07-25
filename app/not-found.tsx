import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-7xl font-black gradientText">404</h1>

      <h2 className="text-3xl font-bold mt-6">
        Lost in the Wilderness?
      </h2>

      <p className="text-gray-400 mt-4">
        The page you're looking for doesn't exist.
      </p>

      <Link
        href="/"
        className="button mt-8"
      >
        Return Home
      </Link>
    </main>
  );
}
