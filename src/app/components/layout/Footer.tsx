import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { Magnetic } from "../ui/motion-primitives";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/lalithapriyakumaravel/" },
  { label: "Behance", href: "https://www.behance.net/lalithapriyakumaravel" },
  { label: "Medium", href: "https://medium.com/@lalithapriyakumaravel" },
  { label: "Email", href: "mailto:lalithapriyakumaravel@gmail.com" },
  { label: "+91 89254 90563", href: "tel:+918925490563" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border px-6 pb-10 pt-20 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono-jb text-[0.72rem] uppercase tracking-[0.2em] text-muted-foreground">
              Open to opportunities · Willing to relocate
            </p>
            <Link to="/contact" className="group mt-4 block">
              <h2 className="font-display text-[clamp(2.5rem,8vw,7rem)] font-semibold leading-[0.95] tracking-tight">
                Let&apos;s build
                <br />
                <span className="text-muted-foreground transition-colors group-hover:text-primary">
                  something good.
                </span>
              </h2>
            </Link>
          </div>
          <Magnetic>
            <Link
              to="/contact"
              className="inline-flex h-32 w-32 flex-col items-center justify-center rounded-full bg-primary text-primary-foreground"
            >
              <ArrowUpRight size={28} />
              <span className="mt-1 font-mono-jb text-[0.65rem] uppercase tracking-[0.14em]">
                Say hi
              </span>
            </Link>
          </Magnetic>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col">
            <span className="font-display font-medium text-foreground">Lalithapriya K</span>
            <span className="font-mono-jb text-[0.72rem] uppercase tracking-[0.14em]">UI/UX Designer | Product Designer</span>
            <span className="mt-2 font-mono-jb text-[0.72rem] uppercase tracking-[0.14em]">© 2026 All Rights Reserved.</span>
          </div>
          <div className="flex flex-wrap gap-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="group inline-flex items-center gap-1 text-foreground transition-colors hover:text-primary"
              >
                {s.label}
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
