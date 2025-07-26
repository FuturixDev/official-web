"use client";
import Link from "next/link";

export default function NotFound() {

  return (
    <div className="container flex flex-col items-center justify-center min-h-screen">
      <div className="card p-8 flex flex-col items-center gap-4">
        <h2 className="text-5xl font-bold">Page Not Found</h2>
        <p className="text-2xl text-center">Sorry, the page you are looking for does not exist.</p>
        <Link href="/" className="btn-primary text-2xl rounded-lg px-4 py-2">
          Back to home
        </Link>
      </div>
    </div>
  );
}
