import styled from "styled-components";
import useMobileChecker from "../hooks/useMobileChecker";

export default function SectionWiki() {
  const { isMobile } = useMobileChecker();
  return (
    <StyledSectionWiki $isMobile={isMobile} id="wiki">
      <div className="inner">
        <div className="title">서동근</div>
        <div className="subtitle">명예의 병특</div>
        <img src=".././images/profile-sdg.png" height={500} />
        <table className="tg">
          <tbody>
            <tr>
              <td className="tg-0pky" style={{ width: "25%" }}>
                이름
              </td>
              <td className="tg-0pky">서동근</td>
            </tr>
            <tr>
              <td className="tg-0lax" rowSpan={2}>
                출생
              </td>
              <td className="tg-0lax">1997년 4월 19일 (27세)</td>
            </tr>
            <tr>
              <td className="tg-0pky">서울특별시</td>
            </tr>
            <tr>
              <td className="tg-0lax">국적</td>
              <td className="tg-0lax">대한민국</td>
            </tr>
            <tr>
              <td className="tg-0lax">소속</td>
              <td className="tg-0lax">
                위메이드 게임사업부문 개발실 서비스개발팀
                <button>
                  <p>[1]</p>
                  <span className="more">
                    현재는 소집해제된 상태로, 페이지 오픈 시점인 12월 13일 부로
                    자유의 몸이다.
                  </span>
                </button>
              </td>
            </tr>
            <tr>
              <td className="tg-0lax">병역</td>
              <td className="tg-0lax">
                위메이드 산업기능요원 만기 소집해제
                <button>
                  <p>[2]</p>
                  <span className="more">2025년 12월 8일자로 전역.</span>
                </button>
              </td>
            </tr>
            <tr>
              <td className="tg-0pky">학력</td>
              <td className="tg-0pky">
                대원국제중학교 (졸업)
                <br />
                서울고등학교 (졸업)
                <br />
                서울대학교 (자유전공학부 16학번 / 군휴학)
                <button>
                  <p>[2]</p>
                  <span className="more">2025학년도 1학기 복학 예정</span>
                </button>
              </td>
            </tr>
            <tr>
              <td className="tg-0pky">가족</td>
              <td className="tg-0pky">
                부모님, 남동생 1명
                <button>
                  <p>[3]</p>
                  <span className="more">
                    2000년생으로, 페이지 제작자인 백승우와 동갑이다.
                  </span>
                </button>
              </td>
            </tr>
            <tr>
              <td className="tg-0pky">MBTI</td>
              <td className="tg-0pky">
                ESTJ
                <button>
                  <p>[4]</p>
                  <span className="more">본인이 구두로 밝힘.</span>
                </button>
              </td>
            </tr>
            <tr>
              <td className="tg-0pky">별명</td>
              <td className="tg-0pky">
                동그리동동, 동그니형, SDG, 병특의 왕, 개발실 정해인
              </td>
            </tr>
            <tr>
              <td className="tg-0pky">좋아하는 음식</td>
              <td className="tg-0pky">
                밥볶다, 삼미칼국수, 역전우동, 베이징스토리
                <button>
                  <p>[5]</p>
                  <span className="more">
                    사실상 무엇이든 잘 먹는 편. 판교에서는 회사에서 가까운 곳을
                    선호하는듯 하다.
                  </span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </StyledSectionWiki>
  );
}

const StyledSectionWiki = styled.section<{
  $isMobile: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${({ $isMobile }) => ($isMobile ? "100%" : "100vh")};
  position: relative;
  background: #fff;
  ${({ $isMobile }) => $isMobile && "padding: 20px 10px;"};

  .inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1080px;
  }
  .tg {
    width: 50%;
    border-collapse: collapse;
    border-spacing: 0;
    td {
      border-color: #14f078;
      border-style: solid;
      border-width: 1px;
      font-family: Arial, sans-serif;
      font-size: 14px;
      overflow: hidden;
      padding: 10px 5px;
      word-break: normal;
      position: relative;
      button {
        font-size: 10px;
        color: #14f078;
        position: relative;
        .more {
          position: absolute;
          background-color: #fff;
          border: 1px solid #14f078;
          width: 100px;
          height: 50px;
          display: none;
          z-index: 78;
        }
        &:hover {
          .more {
            display: block;
          }
        }
      }
    }
    th {
      font-family: Arial, sans-serif;
      font-size: 14px;
      font-weight: normal;
      overflow: hidden;
      padding: 10px 5px;
      word-break: normal;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .tg-0pky {
      text-align: center;
      vertical-align: top;
    }
    .tg-0lax {
      text-align: center;
      vertical-align: top;
    }
  }
`;
