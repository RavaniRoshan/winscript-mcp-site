"use client";

import { useEffect, useMemo, useState } from "react";

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isLive: boolean;
};

const LAUNCH_AT_UTC = "2026-04-13T07:01:00.000Z";

function formatUnit(value: number) {
  return String(value).padStart(2, "0");
}

function getCountdown(targetTimeMs: number): Countdown {
  const remainingMs = Math.max(0, targetTimeMs - Date.now());
  const totalSeconds = Math.floor(remainingMs / 1000);

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    days,
    hours,
    minutes,
    seconds,
    isLive: remainingMs === 0,
  };
}

export default function ProductHuntLaunchStrip() {
  const launchTimeMs = useMemo(() => new Date(LAUNCH_AT_UTC).getTime(), []);
  const [countdown, setCountdown] = useState<Countdown>(() =>
    getCountdown(launchTimeMs),
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown(getCountdown(launchTimeMs));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [launchTimeMs]);

  return (
    <div className="sticky top-0 z-[60] border-b border-white/10 bg-[rgba(9,14,21,0.96)] backdrop-blur-xl">
      <div className="mx-auto flex min-h-[68px] w-full max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-8">
        <p aria-live="polite" className="text-sm text-site-text">
          {countdown.isLive ? (
            <span className="font-medium text-site-accent-soft">
              We are live on Product Hunt 🎉
            </span>
          ) : (
            <>
              <span className="font-medium text-site-accent-soft">
                Product Hunt launch in
              </span>{" "}
              <span className="font-semibold text-site-text">
                {formatUnit(countdown.days)}d : {formatUnit(countdown.hours)}h :{" "}
                {formatUnit(countdown.minutes)}m : {formatUnit(countdown.seconds)}s
              </span>
            </>
          )}
        </p>

        <a
          href="https://www.producthunt.com/products/winscript?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-winscript"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex"
        >
          <img
            alt="WinScript - Windows native automation API via MCP for AI desktop control | Product Hunt"
            width={250}
            height={54}
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1119785&theme=dark&t=1775917805859"
          />
        </a>
      </div>
    </div>
  );
}
