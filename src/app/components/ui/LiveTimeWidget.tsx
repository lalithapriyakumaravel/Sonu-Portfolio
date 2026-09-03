import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export function LiveTimeWidget() {
  const [timeStr, setTimeStr] = useState<string>("");
  const [isDay, setIsDay] = useState(true);

  useEffect(() => {
    function updateTime() {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setTimeStr(formatter.format(now));

      const hourFormatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        hour12: false,
      });
      const currentHour = parseInt(hourFormatter.format(now), 10);
      setIsDay(currentHour >= 6 && currentHour < 18);
    }

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!timeStr) return null;

  return (
    <div className="flex flex-col gap-0.5">
      <div className="flex items-center gap-2">
        <span className="font-display text-[0.95rem] font-semibold tabular-nums tracking-tight text-foreground">
          {timeStr}
        </span>
        <span
          className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-primary"
          style={{ backgroundColor: "color-mix(in srgb, var(--primary) 12%, transparent)" }}
        >
          {isDay ? <Sun size={11} /> : <Moon size={11} />}
        </span>
      </div>
      <p className="font-mono-jb text-[0.6rem] uppercase tracking-[0.12em] text-muted-foreground">
        Tiruvannamalai · GMT +5:30
      </p>
      <p className="mt-1 font-mono-jb text-[0.58rem] tracking-wide text-muted-foreground/60">
        Replies within 24 hrs
      </p>
    </div>
  );
}
