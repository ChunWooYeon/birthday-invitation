import { Fragment } from "react/jsx-runtime"
import {
  GROOM_FULLNAME,
  GROOM_INFO,
  GROOM_FATHER,
  GROOM_MOTHER,
  GROOM_TITLE,
} from "../../const"
import { useModal } from "../modal"
import { Button } from "../button"
import { LazyDiv } from "../lazyDiv"
import PhoneIcon from "../../icons/phone-flip-icon.svg?react"
import EnvelopeIcon from "../../icons/envelope-icon.svg?react"

export const Invitation = () => {
  const { openModal, closeModal } = useModal()

  return (
    <LazyDiv className="card invitation">
      <h2 className="english">Invitation</h2>
      <div className="break" />

      <div className="name">
        {GROOM_FATHER} · {GROOM_MOTHER}
        <span className="relation">
          의 <span className="relation-name">{GROOM_TITLE}</span>
        </span>{" "}
        {GROOM_FULLNAME}
      </div>

      <div className="break" />

      <div className="content">싱그러운 여름 향기 가득한 날</div>
      <div className="content">소중한 가족들과 함께</div>
      <div className="content">엄마 아빠의 사랑스런 아들</div>
      <div className="break" />
      <div className="content">♥️지호♥️의</div>
      <div className="content">첫번째 생일잔치를 하려고 해요.</div>
      <div className="break" />
      <div className="content">기쁜날 함께 하시어</div>
      <div className="content">지호의 생일을 축하해 주세요💛</div>

      <div className="break" />

      <Button
        onClick={() => {
          openModal({
            className: "contact-modal",
            closeOnClickBackground: true,
            header: (
              <div className="title-group">
                <div className="title">축하 인사 하기</div>
                <div className="subtitle">
                  전화, 문자메시지로 축하 인사를 전해보세요.
                </div>
              </div>
            ),
            content: (
              <div className="contact-info">
                {GROOM_INFO.filter(({ phone }) => !!phone).map(
                  ({ relation, name, phone }) => (
                    <Fragment key={relation}>
                      <div className="relation">{relation}</div>
                      <div>{name}</div>
                      <div>
                        <PhoneIcon
                          className="flip icon"
                          onClick={() => {
                            window.open(`tel:${phone}`, "_self")
                          }}
                        />
                        <EnvelopeIcon
                          className="icon"
                          onClick={() => {
                            window.open(`sms:${phone}`, "_self")
                          }}
                        />
                      </div>
                    </Fragment>
                  ),
                )}
              </div>
            ),
            footer: (
              <Button
                buttonStyle="style2"
                className="bg-light-grey-color text-dark-color"
                onClick={closeModal}
              >
                닫기
              </Button>
            ),
          })
        }}
      >
        연락하기
      </Button>
    </LazyDiv>
  )
}
