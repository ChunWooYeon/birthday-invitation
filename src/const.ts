import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import "dayjs/locale/ko"

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.locale("ko")

export { dayjs }

export const BIRTHDAY_DATE = dayjs.tz("2026-05-23 17:00", "Asia/Seoul")
export const BIRTHDAY_DATE_FORMAT = `YYYY년 MMMM D일 dddd A h시${BIRTHDAY_DATE.minute() === 0 ? "" : " m분"}`

// 예식 당월 휴무일. 캘린더에 표시하기 위함.
export const HOLIDAYS = [5,25]

export const LOCATION = "노보텔 앰배서더 서울 동대문"
export const LOCATION_ADDRESS = "서울 중구 을지로 238 노보텔 앰배서더 서울 동대문 19F 미팅룸"

// 카카오톡 공유 시 위치 정보로 사용할 주소.
export const SHARE_ADDRESS = LOCATION
export const SHARE_ADDRESS_TITLE = LOCATION

// 네이버 지도 및 카카오 네비게이션에 사용할 좌표. [경도, 위도] 형식.
export const WEDDING_HALL_POSITION = [126.9594982, 37.4657134]

// 네이버 지도의 장소 ID
export const NMAP_PLACE_ID = 13321741

// 카카오 지도의 장소 ID
export const KMAP_PLACE_ID = 8634826

export const GROOM_FULLNAME = "김지호"
export const GROOM_FIRSTNAME = "지호"
export const GROOM_TITLE = "아들"
export const GROOM_FATHER = "김선욱"
export const GROOM_MOTHER = "전우연"
export const GROOM_INFO = [
  {
    relation: "주인공",
    name: GROOM_FULLNAME,
    phone: "010-0000-0000",
    account: "하나은행 00000000000000",
  },
  {
    relation: "아버지",
    name: GROOM_FATHER,
    phone: "010-0000-0000",
    account: "신한은행 000000000000",
  },
  {
    relation: "어머니",
    name: GROOM_MOTHER,
    phone: "010-0000-0000",
    account: "국민은행 000000000000",
  },
]
