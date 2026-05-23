import styled from "styled-components";
import { DdayCount } from "../components/DdayCount";
import { weddingData, targetDate } from "../data/weddingData";

const WEEK_DAYS = ["일", "월", "화", "수", "목", "금", "토"];

function buildCells(year, month) {
  const firstWeekday = new Date(year, month - 1, 1).getDay();
  const totalDays = new Date(year, month, 0).getDate();
  return [
    ...Array(firstWeekday).fill(null),
    ...Array.from({ length: totalDays }, (_, i) => i + 1),
  ];
}

export default function CalendarSection() {
  const { wedding, groom, bride } = weddingData;
  const cells = buildCells(wedding.year, wedding.month);

  return (
    <Container>
      <Label>when</Label>

      <DateText>
        {wedding.year}. {String(wedding.month).padStart(2, "0")}. {String(wedding.day).padStart(2, "0")}
      </DateText>
      <DateSubText>
        {wedding.dayLabel} {wedding.timeLabel}
      </DateSubText>

      <CalendarBox>
        <MonthTitle>{wedding.month}월</MonthTitle>
        <Grid>
          {WEEK_DAYS.map((day, idx) => (
            <WeekDay key={day} $weekend={idx === 0 || idx === 6}>
              {day}
            </WeekDay>
          ))}
          {cells.map((date, idx) => {
            if (date === null) return <DayCell key={`empty-${idx}`} />;
            const weekday = idx % 7;
            const isWeekend = weekday === 0 || weekday === 6;
            const isWeddingDay = date === wedding.day;
            return (
              <DayCell key={date}>
                {isWeddingDay && <Highlight />}
                <DayNumber $weekend={isWeekend} $highlight={isWeddingDay}>
                  {date}
                </DayNumber>
              </DayCell>
            );
          })}
        </Grid>
      </CalendarBox>

      <Caption>
        <CoupleText>
          {groom.name.slice(1)} <Heart>♥</Heart> {bride.name.slice(1)}의 결혼식이
        </CoupleText>
        <DdayCount targetDate={targetDate} />
      </Caption>
    </Container>
  );
}

const Container = styled.section`
  padding: 60px 28px;
  background-color: #f5efe5;
  text-align: center;
  color: #3d2e23;
`;

const Label = styled.p`
  font-family: "Cormorant Garamond", serif;
  font-style: italic;
  font-size: 2rem;
  color: #b48a7b;
  margin: 0 0 24px;
  letter-spacing: 2px;
`;

const DateText = styled.p`
  font-family: "Nanum Pen Script", cursive;
  font-size: 3rem;
  color: #3d2e23;
  margin: 0 0 6px;
  letter-spacing: 1px;
`;

const DateSubText = styled.p`
  font-family: "Nanum Pen Script", cursive;
  font-size: 2rem;
  color: #6a5a4a;
  margin: 0 0 28px;
`;

const CalendarBox = styled.div`
  max-width: 320px;
  margin: 0 auto 32px;
`;

const MonthTitle = styled.div`
  font-family: "Cormorant Garamond", serif;
  font-style: italic;
  font-size: 2.4rem;
  color: #3d2e23;
  margin-bottom: 14px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  row-gap: 12px;
`;

const WeekDay = styled.div`
  font-family: "Nanum Myeongjo", serif;
  font-size: 1.2rem;
  padding: 6px 0;
  color: ${({ $weekend }) => ($weekend ? "#c98a8a" : "#8a7a6a")};
`;

const DayCell = styled.div`
  position: relative;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DayNumber = styled.span`
  position: relative;
  z-index: 1;
  font-family: "Nanum Myeongjo", serif;
  font-size: 1.35rem;
  color: ${({ $weekend, $highlight }) =>
    $highlight ? "#ffffff" : $weekend ? "#c98a8a" : "#4a3a2a"};
  font-weight: ${({ $highlight }) => ($highlight ? 700 : 400)};
`;

const Highlight = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
  background: #c98a8a;
  border-radius: 50%;
  z-index: 0;
`;

const Caption = styled.div`
  padding-top: 8px;
`;

const CoupleText = styled.p`
  font-family: "Nanum Myeongjo", serif;
  font-size: 1.4rem;
  color: #4a3a2a;
  margin: 0 0 10px;
`;

const Heart = styled.span`
  color: #c98a8a;
`;
