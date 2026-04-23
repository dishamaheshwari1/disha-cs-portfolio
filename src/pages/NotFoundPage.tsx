import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-sealskin px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-creamy">404</h1>
        <h2 className="mt-4 text-xl uppercase tracking-[0.25em] text-minimalist">Signal lost</h2>
        <p className="mt-2 text-sm text-minimalist/80">
          The page you're looking for has drifted out of orbit.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md border border-creamy/40 px-5 py-2 text-xs uppercase tracking-[0.25em] text-creamy hover:bg-carnelian hover:border-carnelian transition-colors"
          >
            Return to base
          </Link>
        </div>
      </div>
    </div>
  );
}
