"use client";
import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {

  useEffect(() => {
    console.error("頁面錯誤:", error);
  }, [error]);

  return (
    <div className="container flex flex-col items-center justify-center min-h-screen">
      <div className="p-8 flex flex-col items-center gap-4">
        <h2 className="text-5xl font-bold">Something went wrong</h2>
        <span className="text-2xl text-center">Sorry, an error occurred while loading the page.</span>
        <span className="text-lg text-center">{error.message}</span>
        <div className="flex gap-4">
          <button
            onClick={() => reset()}
            className="btn text-2xl rounded-lg px-4 py-2"
          >
            Try again
          </button>
          <Link href="/" className="btn text-2xl rounded-lg px-4 py-2">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
