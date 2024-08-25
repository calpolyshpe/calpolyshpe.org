import { useState, useEffect } from "react";

export default function ComingSoon() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-09-23T00:00:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#001F5B]">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg">
        <img
          src="/under_construction.gif"
          alt="under construction gif"
          className="mx-auto mb-4 h-24"
        />
        <h1 className="text-2xl font-bold mb-2">
          This website is currently under construction!
        </h1>
        <p className="text-gray-600 mb-4">
          calpolyshpe.org will be published Sept 23, 2024! Stay tuned.
        </p>
        <div className="text-lg font-semibold">
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
          {timeLeft.seconds}s
        </div>
      </div>
    </div>
  );
}
