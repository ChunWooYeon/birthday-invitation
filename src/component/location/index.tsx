import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

export const Location = () => {
  return (
    <>
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
      </LazyDiv>
      <LazyDiv className="card location">
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">대중교통</div>
          <div />
          <div className="content">
            * 지하철 이용시
            <br />
            <br />
            지하철 4호선 <b>동대문역사문화공원역 12번 출구</b>
            <br />→ 나온 방향으로 7분간 직진 (도보 480m)
            <br />
            <br /><b>동대문역사문화공원역 10번 출구</b>
            <br />→ 바로 앞 11번 출구로 가는 신호등 건너서
            <br />→ 7분간 직진 (도보 480m)
          </div>
          <div />
          <div className="content">
            * 버스 이용 시
            <br />
            - 152 : <b>방산종합시장</b> 하차
            <br />
            - 140, 104 : <b>중구청앞, 덕수중학교</b> 하차
            <br />
          </div>
        </div>
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">
            네이버 지도, 카카오 네비, 티맵 등 이용
            <br />
            <b>노보텔 앰배서더 서울 동대문</b> 검색
            <br />
            - 주차 요금은 무료입니다.
            <br />
            (주차장 이용 시 19F로 오세요♡)
          </div>
          <div />
        </div>
      </LazyDiv>
    </>
  )
}
