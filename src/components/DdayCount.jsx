import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TheTimes = ({ targetDate }) => {
  const calculateLastTimes = () => {
    const difference = +new Date() - +new Date(targetDate);
    let lastTimes = {};

    if (difference > 0) {
      lastTimes = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return lastTimes;
  };
  const [times, setTimes] = useState(calculateLastTimes());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimes(calculateLastTimes());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const { days, hours, minutes, seconds } = times;

  if (typeof window === "undefined") return <></>;

  return (
    <TextWrapper>
      <Text>Since WeddingDay</Text>
      <Text>
        {days}일 {hours}시간 {minutes}분 {seconds}초
      </Text>
    </TextWrapper>
  );
};

const MS_PER_DAY = 1000 * 60 * 60 * 24;

const startOfDay = (date) => {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
};

const DdayCount = ({ targetDate }) => {
  const calculateDday = () => {
    const today = startOfDay(new Date());
    const target = startOfDay(targetDate);
    return Math.round((+target - +today) / MS_PER_DAY);
  };

  const [daysLeft, setDaysLeft] = useState(calculateDday());

  useEffect(() => {
    const timer = setInterval(() => {
      setDaysLeft(calculateDday());
    }, 60 * 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (typeof window === "undefined") return <></>;

  if (daysLeft > 0) {
    return (
      <Text>
        결혼식이 <Highlight>D-{daysLeft}</Highlight> 남았습니다.
      </Text>
    );
  }
  if (daysLeft === 0) {
    return (
      <Text>
        오늘은 <Highlight>D-DAY</Highlight> 입니다.
      </Text>
    );
  }
  return (
    <Text>
      결혼한지 <Highlight>{Math.abs(daysLeft)}일</Highlight> 되었습니다.
    </Text>
  );
};

const Text = styled.p`
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

const Highlight = styled.span`
  color: #e8a0a0;
  font-weight: 600;
`;

const TextWrapper = styled.div`
  margin-top: 20px;
`;

export { DdayCount, TheTimes };
