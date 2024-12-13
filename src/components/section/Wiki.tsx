import { NotoSans } from "@/styles/fonts";
import styled from "styled-components";
import useMobileChecker from "../hooks/useMobileChecker";

export default function SectionWiki() {
  const { isMobile } = useMobileChecker();
  return (
    <StyledSectionWiki $isMobile={isMobile} id="wiki">
      <div className="left-inner">
        <div className="left-top">
          <span style={{ color: "#14f078" }}>서동근</span>님의 무사 전역을
          축하드리며,
          <br />
          밝은 앞날을 늘 진심으로 응원하겠습니다.
        </div>
        <div className="left-title">개요 및 인사말</div>
        <div className="left-subtitle">
          해당 페이지는 (주)위메이드의 제1호 병역특례 산업기능요원인 서동근님의
          무사 전역을 축하하기 위한 페이지로,
          <br />
          동근님의 마지막 출근 시각인 2024년 12월 13일 10:00 (UTC+9)
          공개되었습니다.
          <br />
          <br />
          현재 페이지 포함하여 3개의 페이지로 구성이 되어 있으며,
          <br />
          <br />
          1페이지에는 동근님에 대한 간단한 소개와 페이지 개요가 준비되어 있고,
          <br />
          <br />
          2페이지에는 동근님이 2023년 01월 09일 입사하신 이래로 2024년 12월
          13일까지,
          <br />
          705일간 이루어낸 성과 및 업적들이 담겨 있습니다.
          <br />
          <br />
          3페이지에는 위메이드에서 동근님과 함께 동고동락한 위메이드 동료 분들의
          마음이 담긴 편지가 준비되어 있습니다.
          <br />
          (편지는 동근님만 열람하실 수 있게, 비밀번호를 걸어놓았습니다.)
          <br />
          <br />
          <br />
          다시 한 번 동근님의 전역을 축하드리며,
          <br />
          게임사업부문의 남은 6명의 병역특례 직원들도 모두 <br />
          동근님이 그간 쌓아오신 명성에 누가 되지 않게 열심히 근무하도록
          하겠습니다.
          <br />
          <br />
          롤링 페이퍼 제작에 도움을 주신 약 40명의 위메이드 임직원 분들께 감사
          인사 올립니다.
          <br />
          <br />
          <span
            style={{ fontSize: isMobile ? "8px" : "15px", fontWeight: "500" }}
          >
            또한, 해당 페이지를 만드는 데에 간접적으로 도움을 주신 개발실 분들과
            웹서비스팀 디자이너 분들께도 다시 한 번 더 감사하다는 말씀 전합니다.
          </span>
          <br />
          <br />
          <br />
          서동근의 맞후임이자,
          <br />
          (주)위메이드 제2호 병역특례 산업기능요원,
          <br />
          게임사업부문 개발실 프론트개발팀 백승우 드림.
          <br />
          <br />
          2024.12.13
        </div>
      </div>
      <div className="inner">
        <div className="left"></div>
        <div className="right">
          <div className="title">서동근</div>
          <div className="subtitle">최고의 병특</div>
          <img
            src=".././images/profile-sdg.png"
            width={isMobile ? 324 : 500}
            style={{
              border: "2px solid #55886c",
              boxSizing: "border-box",
            }}
          />
          <table className="tg">
            <tbody>
              <tr>
                <td className="tg-0pky" style={{ width: "20%" }}>
                  이름
                </td>
                <td className="tg-0pky">서동근 (徐東槿)</td>
              </tr>
              <tr>
                <td className="tg-0pky">본관</td>
                <td className="tg-0pky">달성 서씨 (現 대구 서씨)</td>
              </tr>
              <tr>
                <td className="tg-0lax">출생</td>
                <td className="tg-0lax">1997년 4월 19일 (27세)</td>
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
                      현재는 소집해제된 상태로, {isMobile && <br />}12월 13일
                      부로 무소속이다.
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
                    <span className="more">2024년 12월 08일자로 복무만료.</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td className="tg-0lax">병특 중 서열</td>
                <td className="tg-0lax">
                  1위, 아래로 9명의 후임 有
                  <button>
                    <p>[3]</p>
                    <span className="more">
                      퇴사 후 1위는 현재 서열 2위인 백승우로 자연스레 승계된다.
                    </span>
                  </button>
                </td>
              </tr>
              <tr>
                <td className="tg-0pky">학력</td>
                <td className="tg-0pky">
                  신동초등학교 (졸업)
                  <br />
                  대원국제중학교 (졸업)
                  <br />
                  서울고등학교 (졸업)
                  <br />
                  서울대학교 자유전공학부 (16학번 / 군휴학)
                  <button>
                    <p>[4]</p>
                    <span className="more">
                      2025학년도 1학기 복학 예정.{isMobile && <br />} 마지막
                      학기이다.
                    </span>
                  </button>
                  <br />
                  (경영학, 정치외교학, 컴퓨터공학 3복수전공)
                </td>
              </tr>
              <tr>
                <td className="tg-0pky">가족</td>
                <td className="tg-0pky">
                  부모님, 남동생 1명
                  <button>
                    <p>[5]</p>
                    <span className="more">2000년생, 백승우와 동갑이다.</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td className="tg-0pky">종교</td>
                <td className="tg-0pky">
                  천주교 (세례명: 베드로)
                  <button>
                    <p>[6]</p>
                    <span className="more">현재는 무교인 것으로 파악됨.</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td className="tg-0pky">MBTI</td>
                <td className="tg-0pky">
                  ESTJ
                  <button>
                    <p>[7]</p>
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
                    <p>[8]</p>
                    <span className="more">
                      사실상 무엇이든 잘 먹는 편. {isMobile && <br />}
                      회사에서 가까운 곳을 선호하는듯 하다.
                    </span>
                  </button>
                </td>
              </tr>
              <tr>
                <td className="tg-0pky">응원 야구 팀</td>
                <td className="tg-0pky">
                  기아 타이거즈
                  <button>
                    <p>[9]</p>
                    <span className="more">
                      그의 전역과 함께 올해 기아 타이거즈는 우승을 했다.
                    </span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </StyledSectionWiki>
  );
}

const StyledSectionWiki = styled.section<{
  $isMobile: boolean;
}>`
  display: flex;
  flex-direction: ${({ $isMobile }) => ($isMobile ? "column" : "row")};
  align-items: ${({ $isMobile }) => ($isMobile ? "center" : "flex-start")};
  justify-content: ${({ $isMobile }) => ($isMobile ? "flex-start" : "center")};
  width: 100%;
  height: ${({ $isMobile }) => ($isMobile ? "100%" : "100vh")};
  position: relative;
  background: #c2c2c2;
  padding: ${({ $isMobile }) => ($isMobile ? "20px 5px" : "25px")};

  font-family: ${NotoSans.style.fontFamily};
  .left-inner {
    width: ${({ $isMobile }) => ($isMobile ? "360px" : "1200px")};
    ${({ $isMobile }) => $isMobile && "margin-bottom: 30px"};
    .left-top {
      font-size: ${({ $isMobile }) => ($isMobile ? "20px" : "40px")};
      margin-bottom: ${({ $isMobile }) => ($isMobile ? "30px" : "120px")};
    }
    .left-title {
      font-size: ${({ $isMobile }) => ($isMobile ? "26px" : "54px")};
      margin-bottom: ${({ $isMobile }) => ($isMobile ? "20px" : "40px")};
    }
    .left-subtitle {
      font-size: ${({ $isMobile }) => ($isMobile ? "10px" : "20px")};
      font-weight: 500;
    }
  }
  .inner {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: ${({ $isMobile }) => ($isMobile ? "360px" : "1200px")};
    overflow: auto;
    .left,
    .right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .right {
      .title,
      .subtitle {
        width: ${({ $isMobile }) => ($isMobile ? "324px" : "500px")};
        border: 1px solid #55886c;
        text-align: center;
      }
      .title {
        font-size: ${({ $isMobile }) => ($isMobile ? "20px" : "24px")};
      }
    }
  }
  .tg {
    position: relative;
    z-index: 2;
    width: ${({ $isMobile }) => ($isMobile ? "324px" : "500px")};
    overflow: auto;
    border-collapse: collapse;
    border-spacing: 0;
    td {
      border-color: #55886c;
      border-style: solid;
      border-width: 1px;
      font-weight: 700;
      font-size: 14px;
      overflow: hidden;
      padding: 4px;
      word-break: normal;
      position: relative;
      z-index: 2;
      button {
        font-size: ${({ $isMobile }) => ($isMobile ? "10px" : "12px")};
        color: #55886c;
        position: relative;
        .more {
          position: absolute;
          right: -130%;
          top: -50%;
          background-color: #55886c;
          width: max-content;
          height: auto;
          padding: 5px;
          display: none;
          z-index: 78;
          color: #000;
          overflow: visible;
          ${({ $isMobile }) => $isMobile && "font-size: 8px"};
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
