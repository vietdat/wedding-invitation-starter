"use client";

import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(targetISO: string): TimeLeft {
  const diff = new Date(targetISO).getTime() - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(value: number): string {
  return String(value).padStart(2, "0");
}

export default function Countdown({ targetISO }: { targetISO: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    getTimeLeft(targetISO)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetISO));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetISO]);

  const units: { value: number; label: string }[] = [
    { value: timeLeft.days, label: "Ngày" },
    { value: timeLeft.hours, label: "Giờ" },
    { value: timeLeft.minutes, label: "Phút" },
    { value: timeLeft.seconds, label: "Giây" },
  ];

  return (
    <div className="flex justify-center gap-3 sm:gap-6" aria-label="Đếm ngược tới ngày cưới">
      {units.map((unit) => (
        <div
          key={unit.label}
          className="flex w-20 flex-col items-center rounded-2xl bg-white/80 px-2 py-4 shadow-sm ring-1 ring-blush-100 sm:w-24"
        >
          <span className="font-serif text-3xl font-bold text-neutral-800 sm:text-4xl">
            {pad(unit.value)}
          </span>
          <span className="mt-1 text-xs uppercase tracking-widest text-neutral-500">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
