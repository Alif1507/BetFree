import React, { useEffect, useState } from "react";

type CountdownProps = {
  targetDate: string;
};

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateDaysLeft = () => {
    const today = new Date();
    const endDate = new Date(targetDate);

    // Remove time part
    today.setHours(0, 0, 0, 0);
    endDate.setHours(0, 0, 0, 0);

    const difference = +endDate - +today;
    const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));

    return daysLeft;
  };

  const [daysLeft, setDaysLeft] = useState<number>(calculateDaysLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setDaysLeft(calculateDaysLeft());
    }, 1000 * 60 * 60); // Update every hour

    return () => clearInterval(timer);
  }, [targetDate]);

  if (daysLeft <= 0) {
    return <span className="text-red-300 font-medium">⏰ Waktu habis</span>;
  }

  return (
    <div className="text-sm text-white font-medium mt-2 bg-[#FF0000] inline">
     Hari-{daysLeft}
    </div>
  );
};

export default Countdown;
