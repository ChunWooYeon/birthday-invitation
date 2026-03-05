import { LOCATION, BIRTHDAY_DATE, BIRTHDAY_DATE_FORMAT } from "../../const"
import { COVER_IMAGE } from "../../images"
import { LazyDiv } from "../lazyDiv"

const DAY_OF_WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

export const Cover = () => {
  return (
    <LazyDiv className="card cover">
      <div className="wedding-date">
        {BIRTHDAY_DATE.format("YYYY")}
        <div className="divider" />
        {BIRTHDAY_DATE.format("MM")}
        <div className="divider" />
        {BIRTHDAY_DATE.format("DD")}
      </div>
      <div className="wedding-day-of-week">{DAY_OF_WEEK[BIRTHDAY_DATE.day()]}</div>
      <div className="image-wrapper">
        <img src={COVER_IMAGE} alt="sample" />
      </div>
      <div className="subtitle">jiho's 1st birthday</div>
      <div className="info">{BIRTHDAY_DATE.format(BIRTHDAY_DATE_FORMAT)}</div>
      <div className="info">{LOCATION}</div>
    </LazyDiv>
  )
}
