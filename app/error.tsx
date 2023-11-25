"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="ccc">
      <h2>🚧 Uh-oh!</h2>
      <p>This page is a work in progress</p>
        <button className="regular-button">
      <Link href="/" className="link">
          Go back
      </Link>
        </button>
    </div>
  );
}
