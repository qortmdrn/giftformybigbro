import { NotoSerif } from "@/styles/fonts";
import styled from "styled-components";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import useMobileChecker from "../hooks/useMobileChecker";

export default function Achievements() {
  const { isMobile } = useMobileChecker();
  return (
    <StyledAchievements $isMobile={isMobile}>
      <div className="more">
        해당 섹션은, 서동근과 백승우의 개인 추억이 담긴 사진과 영상의 리소스가
        <br />
        많이 포함되었었지만, 공개적인 라이브 배포를 하는 데에 있어 지나친 초상권
        노출 및<br />
        재미 요소들로만 가득하여 컨텐츠가 추후 수정됨.
      </div>
      <div className="title">서동근, 그가 이루어낸 업적</div>
      <div className="swiper-wrapper">
        <Swiper
          className="swiper"
          slidesPerView={"auto"}
          spaceBetween={0}
          centeredSlides
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          <SwiperSlide>
            <img src=".././images/wemade-army-recruit.jpg" width={920} alt="" />
            <div className="desc">회사 최초의 병역특례 서동근</div>
          </SwiperSlide>
          <SwiperSlide>
            <img src=".././images/payco.jpg" width={520} alt="" />
            <div className="desc">어리바리 첫 출근</div>
          </SwiperSlide>
          <SwiperSlide>
            <img src=".././images/nats.png" width={360} alt="" />
            <div className="desc">
              SSS/KR 런칭 시 NATS를 이용한 후원 알람 시스템 개발
              <br />
              해당 프로젝트 개발 성공으로 인해, 부문장님의 축하 박수 및 애정을
              받게 됨.
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src=".././images/tool.png" width={360} alt="" />
            <img src=".././images/tool2.png" width={360} alt="" />
            <div className="desc">
              각종 게임 별 운영툴 배포 약{" "}
              <span style={{ fontSize: "60px" }}>1600회</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src=".././images/mail.png" width={300} alt="" />
            <img src=".././images/second-auth.png" width={300} alt="" />
            <img src=".././images/privacy-site.png" width={300} alt="" />
            <div className="desc">
              1. 대량 메일 발송
              <br />
              2. 2차 인증
              <br />
              3. 개인정보 수집 사이트 개발
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src=".././images/aks.png" width={360} alt="" />
            <img src=".././images/aks-legend.png" width={360} alt="" />
            <img src=".././images/donggeun.png" width={360} alt="" />
            <div className="desc">백엔드 리소스 AKS로의 전환</div>
          </SwiperSlide>
          <SwiperSlide>
            <img src=".././images/last-dinner.png" width={360} alt="" />
            <div className="desc">후임들과의 마지막 식사</div>
          </SwiperSlide>
          <SwiperSlide>
            <img src=".././images/soju.jpg" width={520} alt="" />
            <div className="desc">
              그간의 노고와 성실한 복무에 감사드립니다.
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src=".././images/gpt-image.webp" width={520} alt="" />
            <div className="desc">
              하고 싶은 일과 공부 모두 다 하시면서 지내시길 바랍니다.
            </div>
          </SwiperSlide>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </Swiper>
      </div>
    </StyledAchievements>
  );
}

const StyledAchievements = styled.section<{
  $isMobile: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${({ $isMobile }) => ($isMobile ? "100%" : "auto")};
  position: relative;
  background: #dfdfdf;
  padding: 30px 10px;
  min-height: 100vh;
  overflow: auto;
  .more {
    position: absolute;
    z-index: 40;
    padding: 20px;
    font-size: 18px;
    text-align: left;
    top: 10px;
    left: 20px;
    color: red;
  }
  .title {
    font-size: 40px;
    font-weight: 900;
    color: #666;
  }
  .swiper-wrapper {
    width: 1080px;
    .swiper {
      width: 100%;
      /* height: ${({ $isMobile }) => ($isMobile ? `100%` : `100vh`)}; */
      position: relative;
      z-index: 9;
      .swiper-slide {
        width: 100%;
        min-height: 700px;
        height: auto;
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: center;
        align-items: center;
        position: relative;
        .desc {
          bottom: 40px;
          font-size: 28px;
          font-weight: 400;
          font-family: ${NotoSerif.style.fontFamily};
          line-height: 1.3;
          color: #222;
        }
      }
      .swiper-button-prev,
      .swiper-button-next {
        --swiper-theme-color: #14f078;
        position: absolute;
        z-index: 10;
        width: ${({ $isMobile }) => ($isMobile ? `34px` : `67px`)};
        height: ${({ $isMobile }) => ($isMobile ? `37px` : `73px`)};
      }
      .swiper-button-prev {
        left: 0;
      }
      .swiper-button-next {
        right: 0;
      }
    }
  }
`;
