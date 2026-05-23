/**
 * Single source of truth for wedding invitation content.
 * Edit values here — all sections read from this file.
 */

export const weddingData = {
  // 신랑/신부
  groom: {
    name: "김성훈",
    nameEn: "Sunghoon",
    phone: "",
    father: { name: "김화실", phone: "" },
    mother: { name: "한기옥", phone: "" },
    account: { bank: "", number: "", holder: "김성훈" },
    fatherAccount: { bank: "", number: "", holder: "김화실" },
    motherAccount: { bank: "", number: "", holder: "한기옥" },
  },
  bride: {
    name: "민지은",
    nameEn: "Jieun",
    phone: "",
    father: { name: "민태식", phone: "" },
    mother: { name: "백춘희", phone: "" },
    account: { bank: "", number: "", holder: "민지은" },
    fatherAccount: { bank: "", number: "", holder: "민태식" },
    motherAccount: { bank: "", number: "", holder: "백춘희" },
  },

  // 예식
  wedding: {
    year: 2026,
    month: 8,
    day: 29,
    hour: 11,
    minute: 0,
    dayLabel: "토요일",
    timeLabel: "오전 11시",
    dateText: "2026년 8월 29일",
    fullDateText: "2026.08.29 SAT 11:00 AM",
  },

  // 식장
  venue: {
    name: "청주 아모르아트컨벤션",
    hall: "4층 아모르홀",
    roadAddress: "충북 청주시 흥덕구 남석로 579",
    lotAddress: "충북 청주시 흥덕구 석곡동 305-2",
    phone: "043-233-1000",
    parking: "건물 내 주차장 이용 가능",
    transport: [
      "내비게이션에 청주 아모르아트컨벤션 검색",
      "석곡 사거리에서 세종시 방면 50m (왼쪽 방면)",
    ],
    mapLinks: {
      kakao: "https://map.kakao.com/link/search/청주 아모르아트컨벤션",
      naver: "https://map.naver.com/p/search/청주 아모르아트컨벤션",
      tmap: "https://tmap.life/62ffaa39",
      google: "https://www.google.com/maps/search/청주+아모르아트컨벤션",
    },
  },

  // 인사말
  greeting: [
    "팔월의 어느 늦여름,",
    "늘 곁에서 아껴주셨던 고마운 분들을 모십니다.",
    "있는 그대로 사랑하고",
    "서로의 존재를 감사하며",
    "인연이었던 저희 두 사람",
    "같이 있으면 기분 좋아지는 그대와 함께",
    "인생의 길을 걸어가겠습니다.",
  ],
  outro: "행복하게 잘 살겠습니다.",

  // 갤러리
  gallery: {
    path: "image/gallery",
    images: Array.from({ length: 32 }, (_, i) => `${i + 1}.jpg`),
    mainImage: "image/main-card.jpeg",
    venueImage: "image/weddingholl-image.jpeg",
  },

  // Save the Date (hero)
  saveTheDate: {
    headline: "Save the date",
    cassetteLabel: "Sunghoon ♡ Jieun",
    sideA: "우리의 시작",
    sideB: "우리의 미래",
    tagline: "두 사람의 이야기, 새로운 한 페이지를 시작합니다.",
    dateLine: "2026.08.29. Sat. 11:00",
    venueLine: "청주 아모르아트컨벤션",
  },

  // 공유
  share: {
    title: "김성훈 🤍 민지은 결혼합니다.",
    description: "2026년 8월 29일 (토) 오전 11시, 청주 아모르아트컨벤션 4층 아모르홀",
    siteUrl: "https://www.inviteyou.info",
  },
};

export const targetDate = new Date(
  weddingData.wedding.year,
  weddingData.wedding.month - 1,
  weddingData.wedding.day,
  weddingData.wedding.hour,
  weddingData.wedding.minute,
);
