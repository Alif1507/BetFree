import React, { useEffect, useState } from "react";

type CountdownProps = {
  targetDate: string;
  onExpire?: () => void; // 👈 optional callback
};

const Countdown: React.FC<CountdownProps> = ({ targetDate, onExpire }) => {
  const calculateDaysLeft = () => {
    const today = new Date();
    const endDate = new Date(targetDate);

    today.setHours(0, 0, 0, 0);
    endDate.setHours(0, 0, 0, 0);

    const difference = +endDate - +today;
    return Math.ceil(difference / (1000 * 60 * 60 * 24));
  };

  const [daysLeft, setDaysLeft] = useState<number>(calculateDaysLeft());

  useEffect(() => {
    if (daysLeft <= 0 && onExpire) {
      onExpire(); // ✅ notify parent
    }
  }, [daysLeft, onExpire]);

  useEffect(() => {
    const timer = setInterval(() => {
      setDaysLeft(calculateDaysLeft());
    }, 1000 * 60 * 60);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (daysLeft <= 0) {
    return <span className="text-white font-medium">⏰ Waktu habis</span>;
  }

  return (
    <span className="text-sm text-white font-medium mt-2 bg-[#FF0000] inline">
      Hari-{daysLeft}
    </span>
  );
};

export default Countdown;