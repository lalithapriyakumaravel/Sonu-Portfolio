import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="flex min-h-[80svh] flex-col items-center justify-center px-6 text-center">
      <span className="font-mono-jb text-[0.72rem] uppercase tracking-[0.2em] text-muted-foreground">
        Error 404
      </span>
      <h1 className="mt-6 font-display text-[clamp(4rem,18vw,14rem)] font-semibold leading-none tracking-tight">
        Lost
      </h1>
      <p className="mt-4 max-w-sm text-muted-foreground">
        This page wandered off the grid. Let&apos;s get you back to something real.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-full bg-primary px-7 py-4 font-mono-jb text-[0.75rem] uppercase tracking-[0.14em] text-primary-foreground"
      >
        Back home
      </Link>
    </div>
  );
}
