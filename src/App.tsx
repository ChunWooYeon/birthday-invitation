import { Cover } from "./component/cover"
import { Location } from "./component/location"
import "./App.scss"
import { BGEffect } from "./component/bgEffect"
import { Invitation } from "./component/invitation"
import { Calendar } from "./component/calendar"
import { Gallery } from "./component/gallery"
// import { Information } from "./component/information"
// import { GuestBook } from "./component/guestbook"
import { LazyDiv } from "./component/lazyDiv"
import { ShareButton } from "./component/shareButton"

function App() {
  return (
    <div className="background">
      <BGEffect />
      <div className="card-view">
        <LazyDiv className="card-group">
          {/* 표지 */}
          <Cover />

          {/* 초대 글 */}
          <Invitation />
        </LazyDiv>

        <LazyDiv className="card-group">
          {/* 날짜 (달력) */}
          <Calendar />

          {/* 갤러리 */}
          <Gallery />
        </LazyDiv>

        <LazyDiv className="card-group">
          {/* 위치 */}
          <Location />
        </LazyDiv>

        <LazyDiv className="card-group">
          {/* 마음 전하기 */}
          {/* <Information /> */}
          {/* 방명록 */}
        </LazyDiv>

        <ShareButton />
      </div>
    </div>
  )
}

export default App
