"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface CountdownTimerProps {
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  hours = 10,
  minutes = 20,
  seconds = 5,
}) => {
  const timerStyle: string = "text-center md:text-3xl p-4";

  // code for the functionality  of the timer
  const [time, setTime] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    days: 3,
    hours: parseInt(String(hours)),
    minutes: parseInt(String(minutes)),
    seconds: parseInt(String(seconds)),
  });

  const {
    days: remainingDays,
    hours: remainingHours,
    minutes: remainingMinutes,
    seconds: remainingSeconds,
  } = time;

  useEffect(() => {
    let countdownInterval: NodeJS.Timeout | null = null;

    if (
      remainingDays === 0 &&
      remainingHours === 0 &&
      remainingMinutes === 0 &&
      remainingSeconds === 0
    ) {
      if (countdownInterval) clearInterval(countdownInterval);
    } else {
      countdownInterval = setInterval(() => {
        if (remainingSeconds > 0) {
          setTime((prevTime) => ({
            ...prevTime,
            seconds: prevTime.seconds - 1,
          }));
        } else {
          if (remainingMinutes > 0) {
            setTime((prevTime) => ({
              ...prevTime,
              minutes: prevTime.minutes - 1,
              seconds: 59,
            }));
          } else {
            if (remainingHours > 0) {
              setTime((prevTime) => ({
                ...prevTime,
                hours: prevTime.hours - 1,
                minutes: 59,
                seconds: 59,
              }));
            } else {
              if (remainingDays > 0) {
                setTime((prevTime) => ({
                  days: prevTime.days - 1,
                  hours: 23,
                  minutes: 59,
                  seconds: 59,
                }));
              }
            }
          }
        }
      }, 1000);
    }

    return () => {
      if (countdownInterval) clearInterval(countdownInterval);
    };
  }, [remainingDays, remainingHours, remainingMinutes, remainingSeconds]);

  const formatTime = (value: number): string => {
    return value.toString().padStart(2, "0");
  };

  return (
    <div className="flex justify-start">
      {remainingDays > 0 && (
        <div className={timerStyle}>
          <p className="text-xs text-left">Days </p>
          <span className="font-semibold"> {formatTime(remainingDays)} </span>
        </div>
      )}

      <Image src="/images/semicolon.svg" alt="" width={5} height={5} />

      <div className={timerStyle}>
        <p className="text-xs text-left">Hours </p>
        <span className="font-semibold"> {formatTime(remainingHours)} </span>
      </div>

      <Image src="/images/semicolon.svg" alt="" width={5} height={5} />

      <div className={timerStyle}>
        <p className="text-xs text-left">Minutes</p>
        <span className="font-semibold"> {formatTime(remainingMinutes)} </span>
      </div>

      <Image src="/images/semicolon.svg" alt="" width={5} height={5} />

      <div className={timerStyle}>
        <p className="text-xs text-left">Seconds</p>
        <span className="font-semibold"> {formatTime(remainingSeconds)} </span>
      </div>
    </div>
  );
};

export default CountdownTimer;
