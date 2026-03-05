import { LazyDiv } from "../lazyDiv"
import { dayjs } from "../../const"
import offlineGuestBook from "./offlineGuestBook.json"

export const GuestBook = () => {
  return (
    <LazyDiv className="card guestbook">
      <h2 className="english">Guest Book</h2>
      <div className="break" />
      {offlineGuestBook.slice(0, 3).map((post) => (
        <div key={post.id} className="post">
          <div className="body">
            <div className="title">
              <div className="name">{post.name}</div>
              <div className="date">{dayjs.unix(post.timestamp).format("YYYY-MM-DD")}</div>
            </div>
            <div className="content">{post.content}</div>
          </div>
        </div>
      ))}
    </LazyDiv>
  )
}
